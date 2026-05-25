import type { Achievement } from "./types";
import { profile } from "./profile";

/** Sourced from Tech_Role_CV_with_Hlinks_with_logos.pdf */
export const achievements: Achievement[] = [
  {
    title: "Codeforces",
    detail: "Maximum Rating — 1318 | Rated: Pupil",
    year: "2026",
    link: profile.links.codeforces.url,
  },
  {
    title: "LeetCode",
    detail: "Maximum Rating — 1592",
    year: "2026",
    link: profile.links.leetcode.url,
  },
  {
    title: "Convolve 4.0",
    detail:
      "Semi-Finalist in the Generative AI Track at the pan-IIT Hackathon by IDFC First Bank.",
    year: "2026",
  },
  {
    title: "Technical Board Felicitation",
    detail:
      "Honored by E-Cell IIT Guwahati for national-level tech product execution.",
    year: "2026",
  },
  {
    title: "Produscope 2025",
    detail:
      "Secured 4th Position among 5000+ participants for building a scalable fintech platform.",
    year: "2025",
  },
  {
    title: "Smart India Hackathon",
    detail:
      "Selected among the Top 50 Teams for a national-level software development initiative.",
    year: "2025",
  },
  {
    title: "GUJCET 2024",
    detail:
      "Secured a rank in the Top 1.5% of ~1.5 Lakh candidates in Gujarat state.",
    year: "2024",
  },
  {
    title: "Zero to One",
    detail:
      "Recognized as First Runner-up for delivering a founder-level startup pitch in an E-cell event.",
    year: "2025",
  },
];
