export interface Model {
    name: string;
    params: number;       // billions
    layers: number;
    hidden: number;       // hidden_size (= num_heads × head_dim)
    intermediate: number; // feed-forward intermediate_size
    numHeads: number;     // query heads
    numKvHeads: number;   // KV heads (< numHeads means GQA, =1 means MQA, =numHeads means MHA)
    headDim: number;
    experts: number;      // 0 for dense models
    activeExperts: number;
}

export const models: Model[] = [
    // ── Small / Edge ──────────────────────────────────────────────
    { name: "Qwen 3 4B",
        params: 4, layers: 36, hidden: 2560, intermediate: 9728,
        numHeads: 32, numKvHeads: 8, headDim: 128, experts: 0, activeExperts: 0 },
    { name: "Gemma 3 4B",
        params: 4, layers: 30, hidden: 4096, intermediate: 14336,
        numHeads: 32, numKvHeads: 8, headDim: 128, experts: 0, activeExperts: 0 },
    { name: "Qwen 3 8B",
        params: 8, layers: 36, hidden: 4096, intermediate: 12288,
        numHeads: 32, numKvHeads: 8, headDim: 128, experts: 0, activeExperts: 0 },
    { name: "Mistral 7B",
        params: 7, layers: 32, hidden: 4096, intermediate: 14336,
        numHeads: 32, numKvHeads: 8, headDim: 128, experts: 0, activeExperts: 0 },
    { name: "Llama 3.1 8B",
        params: 8, layers: 32, hidden: 4096, intermediate: 14336,
        numHeads: 32, numKvHeads: 8, headDim: 128, experts: 0, activeExperts: 0 },

    // ── Mid-size ──────────────────────────────────────────────────
    { name: "Gemma 3 27B",
        params: 27, layers: 46, hidden: 5120, intermediate: 16384,
        numHeads: 32, numKvHeads: 16, headDim: 128, experts: 0, activeExperts: 0 },
    { name: "Qwen3-30B-A3B (MoE)",
        params: 30.5, layers: 48, hidden: 5120, intermediate: 17920,
        numHeads: 32, numKvHeads: 4, headDim: 128, experts: 128, activeExperts: 8 },
    { name: "Phi-4 14B",
        params: 14, layers: 40, hidden: 5120, intermediate: 17920,
        numHeads: 40, numKvHeads: 10, headDim: 128, experts: 0, activeExperts: 0 },

    // ── 70B class ─────────────────────────────────────────────────
    { name: "Llama 3.1 70B",
        params: 70, layers: 80, hidden: 8192, intermediate: 28672,
        numHeads: 64, numKvHeads: 8, headDim: 128, experts: 0, activeExperts: 0 },
    { name: "Qwen 2.5 72B",
        params: 72, layers: 80, hidden: 8192, intermediate: 29568,
        numHeads: 64, numKvHeads: 8, headDim: 128, experts: 0, activeExperts: 0 },
    { name: "Mistral Large 2 (123B)",
        params: 123, layers: 88, hidden: 12288, intermediate: 28672,
        numHeads: 96, numKvHeads: 8, headDim: 128, experts: 0, activeExperts: 0 },

    // ── Flagship / Datacenter ─────────────────────────────────────
    { name: "Llama 4 Maverick (400B MoE)",
        params: 400, layers: 128, hidden: 8192, intermediate: 28672,
        numHeads: 64, numKvHeads: 8, headDim: 128, experts: 128, activeExperts: 2 },
    { name: "Llama 3.1 405B",
        params: 405, layers: 126, hidden: 16384, intermediate: 53248,
        numHeads: 128, numKvHeads: 8, headDim: 128, experts: 0, activeExperts: 0 },
    { name: "DeepSeek-R1 671B (MoE)",
        params: 671, layers: 128, hidden: 7168, intermediate: 18432,
        numHeads: 56, numKvHeads: 8, headDim: 128, experts: 256, activeExperts: 8 },
    { name: "Qwen 3 235B (MoE)",
        params: 235, layers: 94, hidden: 4096, intermediate: 12288,
        numHeads: 64, numKvHeads: 4, headDim: 128, experts: 128, activeExperts: 8 },

    // ── Custom ────────────────────────────────────────────────────
    { name: "Custom Model",
        params: 0, layers: 0, hidden: 0, intermediate: 0,
        numHeads: 0, numKvHeads: 0, headDim: 128, experts: 0, activeExperts: 0 },
];