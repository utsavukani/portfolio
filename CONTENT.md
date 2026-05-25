# Content audit trail

Every fact on the live site should match [Tech_Role_CV_with_Hlinks_with_logos.pdf](public/resume/Tech_Role_CV_with_Hlinks_with_logos.pdf).

| Site section | Source file | PDF section |
|--------------|-------------|-------------|
| Hero / contact | `content/profile.ts` | Header |
| About | `content/profile.ts` | Projects + Achievements + DIR |
| Projects | `content/projects/index.ts` | Projects |
| Skills | `content/skills.ts` | Technical Skills |
| Experience | `content/profile.ts` | Positions of Responsibility |
| Achievements | `content/achievements.ts` | Achievements |
| Education | `content/profile.ts` | Education + Key courses |
| CP stats | `components/sections/achievements.tsx` | Codeforces / LeetCode lines |

Before each deploy, verify external links in `content/profile.ts` and `content/projects/index.ts`.
