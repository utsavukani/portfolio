export interface SocialLinks {
  github: string;
  linkedin: string;
  codeforces: { url: string; handle: string };
  leetcode: { url: string; handle: string };
}

export interface EducationEntry {
  degree: string;
  institute: string;
  score: string;
  year: string;
}

export interface ExperienceEntry {
  title: string;
  organization: string;
  period: string;
  highlights: string[];
}

export interface ProjectLink {
  demo?: string;
  repo?: string;
  other?: string;
}

export interface ProjectMeta {
  slug: string;
  title: string;
  subtitle: string;
  period: string;
  tags: string[];
  featured: boolean;
  links: ProjectLink;
  cardSummary: string;
  highlights: string[];
}

export interface ProjectCaseStudy extends ProjectMeta {
  problem: string;
  role: string;
  stack: string[];
  architecture: string;
  lessons: string[];
}

export interface SkillGroup {
  name: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  detail: string;
  year: string;
  link?: string;
}

export interface Profile {
  name: string;
  rollNo: string;
  degree: string;
  institute: string;
  headline: string;
  subline: string;
  phone: string;
  emails: string[];
  links: SocialLinks;
  about: string[];
  education: EducationEntry[];
  experience: ExperienceEntry[];
  keyCourses: string[];
  extracurriculars: ExperienceEntry[];
}
