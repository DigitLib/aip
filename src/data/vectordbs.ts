export interface VectorDb {
    name: string;
    license: string;
    language: string;
    indexTypes: string[];
    distributed: boolean;
    hybrid: boolean;
    gpu: boolean;
    minRamGb: number;
    recRamGb: number;
    minCores: number;
    recCores: number;
    diskPerMillionVecs768Gb: number;
    ramPerMillionVecs768Gb: number;
    notes: string;
}

export const vectordbs: VectorDb[] = [
    {
        name: "Milvus",
        license: "Apache 2.0",
        language: "Go / C++",
        indexTypes: ["IVF_FLAT","IVF_PQ","HNSW","DiskANN","SCANN","GPU_CAGRA"],
        distributed: true,
        hybrid: true,
        gpu: true,
        minRamGb: 8,
        recRamGb: 32,
        minCores: 4,
        recCores: 16,
        diskPerMillionVecs768Gb: 8.0,
        ramPerMillionVecs768Gb: 8.0,  // HNSW requires 2-3x raw vector size in RAM
        notes: "Best for large-scale, billion-vector workloads. Separates compute and storage. K8s native."
    },
    {
        name: "Weaviate",
        license: "BSD-3",
        language: "Go",
        indexTypes: ["HNSW","FLAT","Dynamic (experimental)"],
        distributed: true,
        hybrid: true,
        gpu: false,
        minRamGb: 4,
        recRamGb: 16,
        minCores: 2,
        recCores: 8,
        diskPerMillionVecs768Gb: 6.0,
        ramPerMillionVecs768Gb: 4.5, // Follows Weaviate's official 1.5x memory rule of thumb
        notes: "Built-in vectorizer modules. GraphQL API. Great for semantic search with structured filtering."
    },
    {
        name: "Qdrant",
        license: "Apache 2.0",
        language: "Rust",
        indexTypes: ["HNSW","Sparse"],
        distributed: true,
        hybrid: true,
        gpu: false,
        minRamGb: 4,
        recRamGb: 16,
        minCores: 2,
        recCores: 8,
        diskPerMillionVecs768Gb: 5.5,
        ramPerMillionVecs768Gb: 4.0, // Highly optimized mmap usage, leaner RAM footprint
        notes: "Rust-based, very fast single-node. Strong payload filtering. Good for mid-scale."
    },
    {
        name: "Zvec",
        license: "Apache 2.0",
        language: "C++ / Python",
        indexTypes: ["HNSW", "IVF_FLAT", "IVF_PQ", "Inverted"],
        distributed: false,
        hybrid: true,
        gpu: false,
        minRamGb: 1,
        recRamGb: 4,
        minCores: 1,
        recCores: 4,
        diskPerMillionVecs768Gb: 4.5,
        ramPerMillionVecs768Gb: 3.5,
        notes: "The 'SQLite of vector databases' by Alibaba Tongyi Lab. Embedded, in-process engine optimized for edge and on-device RAG."
    },
    {
        name: "Chroma",
        license: "Apache 2.0",
        language: "Python / Rust",
        indexTypes: ["HNSW", "Sparse"],
        distributed: false,
        hybrid: true,
        gpu: false,
        minRamGb: 2,
        recRamGb: 8,
        minCores: 2,
        recCores: 4,
        diskPerMillionVecs768Gb: 5.5,
        ramPerMillionVecs768Gb: 4.5,
        notes: "Easiest to get started. Perfect for prototyping and small-scale RAG. Embeds in Python."
    },
    {
        name: "pgvector (PostgreSQL)",
        license: "PostgreSQL",
        language: "C",
        indexTypes: ["IVF_FLAT","HNSW"],
        distributed: false,
        hybrid: true,
        gpu: false,
        minRamGb: 8,
        recRamGb: 32,
        minCores: 2,
        recCores: 8,
        diskPerMillionVecs768Gb: 10.5,  // Heavy Postgres table + index bloat
        ramPerMillionVecs768Gb: 9.5,    // pgvector requires HNSW graph entirely in shared_buffers
        notes: "Use your existing Postgres. Good for under 10M vectors. Full SQL plus vector search."
    }
];