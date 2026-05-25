import type { Profile } from "./types";

/** Sourced from Tech_Role_CV_with_Hlinks_with_logos.pdf */
export const profile: Profile = {
  name: "Ukani Utsav Bharatbhai",
  rollNo: "240106076",
  degree: "B.Tech — Biosciences & Bioengineering",
  institute: "Indian Institute of Technology Guwahati",
  headline: "Full-Stack & ML Engineer · IIT Guwahati",
  subline:
    "I ship production MERN apps and multimodal AI pipelines — from Gemini-backed fintech to VLM document extraction.",
  phone: "+91-9624554396",
  emails: ["b.ukani@iitg.ac.in", "utsavukani27@gmail.com"],
  links: {
    github: "https://github.com/utsavukani",
    linkedin: "https://linkedin.com/in/utsav-ukani-iitg",
    codeforces: {
      url: "https://codeforces.com/profile/CodeUtsv",
      handle: "CodeUtsv",
    },
    leetcode: {
      url: "https://leetcode.com/u/UtsavUkani/",
      handle: "UtsavUkani",
    },
  },
  about: [
    "B.Tech student at IIT Guwahati building at the intersection of full-stack engineering and applied ML — from national fintech prototypes to Vision-Language document systems.",
    "Scaled Produscope ’25 Wallex from 4th place among 5,000+ teams into a live MERN application; semi-finalist in IDFC First Bank Convolve 4.0 (Generative AI track).",
    "Selected among Top 50 teams in Smart India Hackathon; felicitated by E-Cell IIT Guwahati for national-level tech product execution.",
    "Department Internship Representative (DIR), Centre for Career Development — liaison between administration, students, and recruiting companies.",
  ],
  education: [
    {
      degree: "B.Tech.",
      institute: "Indian Institute of Technology Guwahati",
      score: "7.42 (Current)",
      year: "2024–Present",
    },
    {
      degree: "Higher Secondary",
      institute: "GSHSEB Board",
      score: "88.60%",
      year: "2024",
    },
    {
      degree: "Secondary",
      institute: "GSHSEB Board",
      score: "96.83%",
      year: "2022",
    },
  ],
  experience: [
    {
      title: "Department Internship Representative (DIR)",
      organization: "Centre for Career Development (CCD), IIT Guwahati",
      period: "Mar. 2026 – Present",
      highlights: [
        "Official department liaison for internship recruitment between administration, students, and companies.",
      ],
    },
    {
      title: "Senior Executive, Product Module",
      organization: "E-Cell, IIT Guwahati",
      period: "Mar. 2025 – Oct. 2025",
      highlights: [
        "Co-authored the official Product Casebook as a core member of the E-Cell Product Module.",
      ],
    },
    {
      title: "Student Mentor",
      organization: "IIT Guwahati",
      period: "Jul. 2025 – Present",
      highlights: [
        "Mentored 6 freshmen (B.Tech ’29 Batch — BSBE) on academics and campus life.",
      ],
    },
  ],
  keyCourses: [
    "Introduction to Computing, Computing Lab",
    "Econometrics, Single and Multivariable Calculus, Linear Algebra, ODE, PDE",
    "Summer Analytics (Top 25 percentile)",
    "Fundamental Analysis Bootcamp",
  ],
  extracurriculars: [],
};

export const resumePdfPath =
  "/resume/Tech_Role_CV_with_Hlinks_with_logos.pdf";
