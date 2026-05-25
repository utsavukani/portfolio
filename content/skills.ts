import type { SkillGroup } from "./types";

/** Sourced from Tech_Role_CV_with_Hlinks_with_logos.pdf */
export const skillGroups: SkillGroup[] = [
  {
    name: "Programming",
    skills: ["C", "C++", "Python", "JavaScript"],
  },
  {
    name: "Web & Backend",
    skills: ["React.js", "Node.js"],
  },
  {
    name: "Databases",
    skills: ["SQLite", "MongoDB", "PostgreSQL", "ChromaDB"],
  },
  {
    name: "Data Science",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
  },
  {
    name: "ML / AI",
    skills: ["HuggingFace", "PyTorch", "PaddleOCR", "Qwen2-VL"],
  },
  {
    name: "Miscellaneous",
    skills: ["Git", "Github", "Vercel", "Render", "Docker"],
  },
];

/** Elementary proficiency per resume footnote */
export const elementarySkills = new Set([
  "PostgreSQL",
  "ChromaDB",
  "Matplotlib",
  "PyTorch",
  "Qwen2-VL",
  "Vercel",
  "Render",
  "Docker",
]);
