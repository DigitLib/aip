# ⚡ AI Infra Planner

An interactive, highly accurate capacity planning toolkit for AI Engineers, DevOps, System Administrators and Researches.

This tool mathematically calculates VRAM for Large Language Models (LLMs), accurately sizes RAM/Disk overhead for Vector Databases, and automatically compiles a complete suggestion of hardware for your workflow.

[**View Live Demo**](https://digitlib.github.io/aip/)

---

## 🛠️ Core Features

### 1. GPU / VRAM Calculator
Calculate VRAM requirements for selected LLM workload based on real-world inference mechanics.
* **Production-Grade Math:** Accurately splits memory into Shared (weights + framework overhead) and Per-User Cost.
* **Architecture Aware:** Supports standard Dense models, Mixture of Experts (MoE), and calculates native KV cache reductions for MQA/GQA architectures.
* **Granular Controls:** Tweak weight quantization (FP16, INT8, Q4), KV cache precision, context length, batch size, and concurrency.
* **Hardware Matching:** Automatically filters a built-in database of enterprise and consumer GPUs (Nvidia H100, RTX 5090, NVIDIA Spark, etc.) to find configurations that fit your VRAM footprint.

### 2. Vector Database Planner
Size and compare open-source vector databases (Milvus, Weaviate, Qdrant, Chroma, Zvec, pgvector).
* **Graph Overhead Precision:** Accurately calculates HNSW/graph memory bloat.
* **Workload Tuning:** Adjust total vectors, embedding dimensions, Target QPS, High Availability (HA) replicas, and vector precision.
* **Instant Comparison:** Visualizes RAM utilization and identifies resource use.
* **Table Comparison:** Information on databases features and Index type.

### 3. Base Machine Configurator
Build a complete workstation/server spec around your AI workflow requirements.
* **Smart Auto-Sizer:** Automatically populates minimum CPU core counts and System RAM based on your saved LLM and Vector DB requirements.
* **Unified Memory Support:** Seamlessly handles dedicated GPU servers vs. Unified Memory architectures (Apple Mac Studio, NVIDIA DGX Spark).
* **Power & Cooling:** Calculates Estimated System TDP (Thermal Design Power) and recommends 240V circuit amperage.
* **Config Export:** Generates a clean `.txt`, complete with component specs, sub-totals, and hardware requirements.

---

## 🏗️ Architecture & Tech Stack

This project is built for speed, privacy, and simplicity. It runs **100% locally in the browser** using static assets.

* **Framework:** [Astro](https://astro.build/) (Static Site Generation)
* **Logic:** Vanilla TypeScript / JavaScript
* **Styling:** Pure CSS (CSS Grid, Flexbox, CSS Variables)
* **State Management:** Browser `localStorage` (Creates a seamless "shopping cart" flow between the 3 calculators without a backend).

---

## 🚀 New Models or Hardware

For adding new Models and/or Components, please open an Issue or a PR.