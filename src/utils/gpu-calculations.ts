export interface CalcInputs {
    params: number;
    activeParams: number;
    bytesPerP: number;
    kvBytes: number;
    ctxMax: number;
    layers: number;
    hidden: number;
    numKvHeads: number;
    headDim: number;
    modality: number;
    users: number;
    avgCtx: number;
    safety: number;
    efficiency: number;
    batch: number;
}

export function calculateVramDetails(p: CalcInputs) {
    // 1. Model Weights
    const weightsGb = (p.params * 1e9 * p.bytesPerP) / 1e9;
    const activeWeightsGb = (p.activeParams * 1e9 * p.bytesPerP) / 1e9;

    // 2. KV Cache
    const kvPerTokenGb = (2 * p.layers * p.numKvHeads * p.headDim * p.kvBytes) / 1e9;
    const kvOneReq = kvPerTokenGb * p.ctxMax;
    const kvAvgReq = kvPerTokenGb * p.avgCtx;

    // 3. Inference Activations & Overhead
    const activationsGb = (p.ctxMax * p.hidden * 12) / 1e9;
    const cudaOverhead = 1.0;

    // 4. Shared vs Per-User Costs
    const staticCost = weightsGb + activationsGb + cudaOverhead;
    const perUserCost = kvAvgReq;

    // 5. Totals
    const baseTotal1 = staticCost + kvOneReq;
    const total1 = baseTotal1 * p.modality; // Single User

    const serverRaw = staticCost + (perUserCost * p.users);
    const serverTotal = serverRaw * p.modality * p.safety; // Multi User

    return {
        weightsGb, activeWeightsGb, kvPerTokenGb, kvOneReq, kvAvgReq,
        activationsGb, cudaOverhead, staticCost, perUserCost,
        baseTotal1, total1, serverRaw, serverTotal,
        activeBatch: Math.min(p.users, p.batch),
        queued: Math.max(0, p.users - p.batch)
    };
}

export function calcGenSpeed(bwGbs: number, activeWeightsGb: number, kvPerTokenGb: number, avgSeq: number, efficiency: number): number {
    const effectiveBw = bwGbs * efficiency;
    const kvReadPerStep = kvPerTokenGb * (avgSeq / 2);
    const bytesPerStep = activeWeightsGb + kvReadPerStep;
    return bytesPerStep <= 0 ? 0 : effectiveBw / bytesPerStep;
}

export function calcPrefillTimeMs(activeParams: number, avgCtx: number, fp16Tflops: number): number {
    const PREFILL_UTILIZATION = 0.65;
    const effectiveFlops = fp16Tflops * 1e12 * PREFILL_UTILIZATION;
    const prefillFlops = 2 * activeParams * 1e9 * avgCtx;
    return effectiveFlops <= 0 ? 0 : (prefillFlops / effectiveFlops) * 1000;
}