import type { ProjectCaseStudy, ProjectMeta } from "../types";

/** Sourced from Tech_Role_CV_with_Hlinks_with_logos.pdf */
export const projects: ProjectCaseStudy[] = [
  {
    slug: "wallex",
    title: "Wallex",
    subtitle: "AI-Powered Student Finance Platform",
    period: "Dec. 2025",
    tags: ["MERN", "Gemini API", "TypeScript", "Zod", "Vercel", "MongoDB"],
    featured: true,
    links: {
      demo: "https://bit.ly/vercel-prototype",
      repo: "https://bit.ly/utsav-wallex",
    },
    cardSummary:
      "Scaled Produscope ’25 4th-place prototype (5,000+ teams) into a live MERN app with Gemini transaction parsing under 400ms.",
    highlights: [
      "Scaled a 4th-place national prototype (among 5,000+ teams) into a live MERN stack application with a responsive UI.",
      "Developed a Node.js backend using Gemini API to parse and auto-categorize transactions under 400ms.",
      "Secured app with Zero-Trust auth via HttpOnly cookies & enforced API type safety via Zod/TypeScript.",
      "Built custom React hooks for network lifecycles & deployed across Vercel, Render, & MongoDB Atlas.",
    ],
    problem:
      "Students need a practical way to track and categorize spending without manual bookkeeping after a high-traffic hackathon prototype.",
    role: "Independent full-stack developer — prototype to production.",
    stack: [
      "React",
      "Node.js",
      "MongoDB",
      "Gemini API",
      "Zod",
      "TypeScript",
      "Vercel",
      "Render",
    ],
    architecture: `Browser (React) → Node API (Zod-validated) → Gemini parsing → MongoDB Atlas
Auth: HttpOnly cookies · Deploy: Vercel + Render`,
    lessons: [
      "Type-safe APIs with Zod catch integration bugs before production.",
      "HttpOnly cookie auth reduces XSS exposure vs. localStorage tokens.",
    ],
  },
  {
    slug: "multimodal-doc-intelligence",
    title: "Multimodal Document Intelligence",
    subtitle: "Vision-Language Model Pipeline",
    period: "Jan. 2026",
    tags: ["Qwen2-VL", "CUDA", "Python", "VLM", "IDFC Convolve"],
    featured: true,
    links: {
      other: "https://bit.ly/IDFC-convolve",
    },
    cardSummary:
      "VLM pipeline (Qwen2-VL-2B) extracting structured invoice data with signatures, stamps, and JSON overlays — IDFC Convolve GenAI.",
    highlights: [
      "Implemented a Vision-Language pipeline via Qwen2-VL-2B to extract structured data (dealer, costs) from invoice documents.",
      "Developed multimodal extraction to identify textual fields alongside visual elements like signatures & stamps.",
      "Optimized model inference using CUDA acceleration (float16) for high-speed document processing on NVIDIA GPUs.",
      "Generated structured JSON outputs with visual overlays to easily verify extracted entities and bounding regions.",
    ],
    problem:
      "Financial documents mix printed text, stamps, and signatures — OCR-only pipelines miss visual cues critical for verification.",
    role: "ML engineer on IDFC First Bank — Convolve GenAI track project.",
    stack: [
      "Python",
      "Qwen2-VL-2B",
      "CUDA",
      "HuggingFace",
      "JSON structured output",
    ],
    architecture: `Invoice PDF/Image → Qwen2-VL-2B (float16, CUDA) → Structured JSON + bounding overlays`,
    lessons: [
      "VLMs capture layout and visual stamps that classical OCR pipelines miss.",
      "Visual overlays make human verification of model output practical at scale.",
    ],
  },
  {
    slug: "ai-dungeon-master",
    title: "AI Dungeon Master",
    subtitle: "Multi-Agent LLM RPG Platform",
    period: "Nov. 2025",
    tags: ["FastAPI", "Next.js", "Groq", "WebSocket", "Docker", "ChromaDB"],
    featured: true,
    links: {
      demo: "https://bit.ly/vercel-prototype1",
      repo: "https://bit.ly/utsav-ai-dm",
    },
    cardSummary:
      "Two-agent Groq LLaMA pipeline with WebSocket streaming, three-tier memory (RAM, ChromaDB, PostgreSQL), Docker + CI.",
    highlights: [
      "Designed a two-agent pipeline (Narrator + Extractor) on Groq LLaMA-3.3-70B with real-time WebSocket token streaming.",
      "Built a three-tier memory stack: in-RAM working memory, ChromaDB RAG, and PostgreSQL (SQLAlchemy ORM).",
      "Created a FastAPI + Next.js full-stack app; containerized via Docker and deployed on Render + Vercel + Neon PostgreSQL.",
      "Maintained pytest suite with GitHub Actions CI; implemented bcrypt auth and structured REST + WebSocket API.",
    ],
    problem:
      "Tabletop RPG sessions need coherent long-horizon narrative with low-latency LLM responses and persistent world state.",
    role: "Solo full-stack + AI engineer.",
    stack: [
      "FastAPI",
      "Next.js",
      "Groq LLaMA-3.3-70B",
      "ChromaDB",
      "PostgreSQL",
      "Docker",
      "WebSocket",
      "pytest",
      "GitHub Actions",
    ],
    architecture: `Next.js UI ↔ WebSocket ↔ FastAPI
Narrator Agent + Extractor Agent (Groq)
Memory: RAM → ChromaDB RAG → PostgreSQL (Neon)`,
    lessons: [
      "Separating narrator and extractor agents keeps game state structured while prose stays creative.",
      "Tiered memory balances latency (RAM) with persistence (Postgres) and recall (RAG).",
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): ProjectMeta[] {
  return projects.filter((p) => p.featured);
}

export const projectSlugs = projects.map((p) => p.slug);
