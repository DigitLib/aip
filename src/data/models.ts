export interface Model {
    name: string;
    params: number;       // total billions
    activeParams: number; // billions used in a single forward pass
    layers: number;
    hidden: number;       // hidden_size (= num_heads × head_dim)
    intermediate: number; // feed-forward intermediate_size
    numHeads: number;     // query heads
    numKvHeads: number;   // KV heads (< numHeads means GQA, =1 means MQA, =numHeads means MHA)
    headDim: number;
    modality?: number;
}

export const models: Model[] = [
    // ── Small / Edge ──────────────────────────────────────────────
    { name: "Qwen 3 4B",
        params: 4, activeParams: 4, layers: 36, hidden: 2560, intermediate: 9728,
        numHeads: 32, numKvHeads: 8, headDim: 128 },
    { name: "Gemma 3 4B",
        params: 4, activeParams: 4, layers: 30, hidden: 4096, intermediate: 14336,
        numHeads: 32, numKvHeads: 8, headDim: 128 },
    { name: "Qwen 3 8B",
        params: 8, activeParams: 8, layers: 36, hidden: 4096, intermediate: 12288,
        numHeads: 32, numKvHeads: 8, headDim: 128 },
    { name: "Mistral 7B",
        params: 7, activeParams: 7, layers: 32, hidden: 4096, intermediate: 14336,
        numHeads: 32, numKvHeads: 8, headDim: 128 },
    { name: "Llama 3.1 8B",
        params: 8, activeParams: 8, layers: 32, hidden: 4096, intermediate: 14336,
        numHeads: 32, numKvHeads: 8, headDim: 128 },

    // ── Mid-size ──────────────────────────────────────────────────
    { name: "Gemma 3 27B",
        params: 27, activeParams: 27, layers: 46, hidden: 5120, intermediate: 16384,
        numHeads: 32, numKvHeads: 16, headDim: 128 },
    { name: "Qwen3.5 27B",
        params: 27, activeParams: 27, layers: 64, hidden: 5120, intermediate: 17408,
        numHeads: 24, numKvHeads: 4, headDim: 256, modality: 1.25 },
    { name: "Qwen3-30B-A3B (MoE)",
        params: 30.5, activeParams: 3.3, layers: 48, hidden: 5120, intermediate: 17920,
        numHeads: 32, numKvHeads: 4, headDim: 128 },
    { name: "Qwen3.5 35B-A3B (MoE)",
        params: 35, activeParams: 3, layers: 40, hidden: 2048, intermediate: 512,
        numHeads: 16, numKvHeads: 2, headDim: 256, modality: 1.25 },
    { name: "Phi-4 14B",
        params: 14, activeParams: 14, layers: 40, hidden: 5120, intermediate: 17920,
        numHeads: 40, numKvHeads: 10, headDim: 128 },

    // ── 70B class ─────────────────────────────────────────────────
    { name: "Llama 3.1 70B",
        params: 70, activeParams: 70, layers: 80, hidden: 8192, intermediate: 28672,
        numHeads: 64, numKvHeads: 8, headDim: 128 },
    { name: "Qwen 2.5 72B",
        params: 72, activeParams: 72, layers: 80, hidden: 8192, intermediate: 29568,
        numHeads: 64, numKvHeads: 8, headDim: 128 },
    { name: "Qwen3.5 122B-A10B (MoE)",
        params: 122, activeParams: 10, layers: 48, hidden: 3072, intermediate: 1024,
        numHeads: 32, numKvHeads: 2, headDim: 256, modality: 1.25 },
    { name: "Mistral Large 2 (123B)",
        params: 123, activeParams: 123, layers: 88, hidden: 12288, intermediate: 28672,
        numHeads: 96, numKvHeads: 8, headDim: 128 },

    // ── Flagship / Datacenter ─────────────────────────────────────
    { name: "Llama 4 Maverick (400B MoE)",
        params: 400, activeParams: 17, layers: 128, hidden: 8192, intermediate: 28672,
        numHeads: 64, numKvHeads: 8, headDim: 128, modality: 1.25 },
    { name: "Llama 3.1 405B",
        params: 405, activeParams: 405, layers: 126, hidden: 16384, intermediate: 53248,
        numHeads: 128, numKvHeads: 8, headDim: 128 },
    { name: "DeepSeek-R1 671B (MoE)",
        params: 671, activeParams: 37, layers: 128, hidden: 7168, intermediate: 18432,
        numHeads: 56, numKvHeads: 8, headDim: 128 },
    { name: "Qwen 3 235B (MoE)",
        params: 235, activeParams: 36, layers: 94, hidden: 4096, intermediate: 12288,
        numHeads: 64, numKvHeads: 4, headDim: 128 },

    // ── Custom ────────────────────────────────────────────────────
    { name: "Custom Model",
        params: 0, activeParams: 0, layers: 0, hidden: 0, intermediate: 0,
        numHeads: 0, numKvHeads: 0, headDim: 128 },
];