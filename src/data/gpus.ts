export interface Gpu {
    name: string;
    vram: number;
    bw: number;
    tflops: number;       // FP32 shader / general (kept for display)
    fp16Tflops: number;   // tensor-core dense TFLOPS (for prefill TTFT)
    price: number;
    tier: string;
}

export const gpus: Gpu[] = [
    //                                                        FP32         FP16-tensor
    { name: "NVIDIA H100 SXM",          vram: 80,  bw: 3350, tflops: 989,  fp16Tflops: 1979,  price: 32000, tier: "datacenter" },
    { name: "NVIDIA A100 80 GB",        vram: 80,  bw: 2039, tflops: 312,  fp16Tflops: 624,  price: 15000, tier: "datacenter" },
    { name: "NVIDIA L40S",              vram: 48,  bw: 864,  tflops: 366,  fp16Tflops: 733,  price: 9970,  tier: "datacenter" },
    { name: "NVIDIA L4",                vram: 24,  bw: 300,  tflops: 120,  fp16Tflops: 242,  price: 2500,  tier: "datacenter" },
    { name: "NVIDIA B200",              vram: 192, bw: 8000, tflops: 75.45, fp16Tflops: 2225, price: 45000, tier: "datacenter" },
    { name: "NVIDIA DGX Spark",         vram: 128, bw: 273,  tflops: 53,   fp16Tflops: 213,  price: 3999,  tier: "dgx-spark" },
    { name: "2x NVIDIA DGX Spark (linked)", vram: 256, bw: 273, tflops: 106, fp16Tflops: 416, price: 7998,  tier: "dgx-spark" },
    { name: "NVIDIA RTX 6000 Ada",      vram: 48,  bw: 960,  tflops: 91,   fp16Tflops: 728,  price: 7200,  tier: "workstation" },
    { name: "NVIDIA RTX PRO 6000",      vram: 96,  bw: 1792,  tflops: 125,   fp16Tflops: 1000,  price: 9000,  tier: "workstation" },
    { name: "NVIDIA RTX 5090",          vram: 32,  bw: 1790, tflops: 105,  fp16Tflops: 419,  price: 1999,  tier: "consumer" },
    { name: "NVIDIA RTX 4090",          vram: 24,  bw: 1008, tflops: 83,   fp16Tflops: 330,  price: 1599,  tier: "consumer" },
    { name: "NVIDIA RTX 4080",          vram: 16,  bw: 717,  tflops: 49,   fp16Tflops: 195,  price: 1199,  tier: "consumer" },
    { name: "NVIDIA RTX 4070 Ti",       vram: 12,  bw: 504,  tflops: 40,   fp16Tflops: 160,  price: 799,   tier: "consumer" },
    { name: "AMD MI300X",               vram: 192, bw: 5300, tflops: 1300, fp16Tflops: 1300, price: 15000, tier: "datacenter" },
    { name: "Apple M4 Max",             vram: 128, bw: 546,  tflops: 18,   fp16Tflops: 36,   price: 7550,  tier: "apple" },
    { name: "Apple M3 Ultra",             vram: 96,  bw: 273,  tflops: 8,    fp16Tflops: 16,   price: 8500,  tier: "apple" },
];