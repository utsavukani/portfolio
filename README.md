# Portfolio Website — Ukani Utsav

A modern, responsive personal portfolio website built to showcase projects, skills, achievements, and professional experience. Built with **Next.js** and deployed on **Vercel**.

**Live site:** [Add your Vercel URL here]

---

## 🌟 Features & Sections

| Section | Description |
|---------|-------------|
| **Home** | Brief introduction, competitive programming highlights, and quick links. |
| **About** | Background and education details. |
| **Projects** | Showcases key projects with dedicated case study pages. |
| **Skills** | Categorized technical skills (Programming, Web, ML, Databases). |
| **Experience** | Professional roles and responsibilities. |
| **Achievements**| Hackathons, ratings, and awards. |
| **Contact** | Direct email and phone contact options. |

**Design Highlights:** Dark/light mode support, fully responsive mobile layout, sticky header, mobile navigation drawer, and an interactive sidebar for larger screens.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content Management:** File-based routing & content stored in `content/` (No external CMS required)
- **Deployment:** [Vercel](https://vercel.com)

---

## 🚀 Running Locally

To run this project on your local machine, ensure you have **Node.js (v20+)** installed.

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. Open **[http://localhost:3000](http://localhost:3000)** in your browser.

**Helpful Commands:**
- `npm run build` — Builds the project for production.
- `npm run start` — Runs the production build locally.
- `npm run lint` — Checks for code style issues.

---

## 📝 How to Edit Content

All text and data visible on the site are managed via the `content/` folder. You do not need to modify the React components to update your information.

| File | What it controls |
|------|------------------|
| `content/profile.ts` | Name, headline, about section, education, experience, and social links. |
| `content/skills.ts` | Skill categories and proficiency indicators. |
| `content/achievements.ts`| Hackathons, competitive programming stats, and awards. |
| `content/projects/index.ts`| Project listings, descriptions, links, and case studies. |

### Adding a New Project
1. Open `content/projects/index.ts`.
2. Add a new project object following the existing structure. Ensure you provide a unique `slug`.
3. The site will automatically generate a dedicated `/projects/your-slug` page!

### Managing Your Resume
*(Optional)* If you wish to provide a downloadable resume on your site:
1. Create a `public` folder in the root directory, and inside it, create a `resume` folder (`public/resume/`).
2. Add your PDF file there (e.g., `resume.pdf`).
3. Update the `resumePdfPath` in `content/profile.ts` to match your filename.

---

## 🌐 Deployment (Vercel)

1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com/new) and import your repository.
3. Vercel will automatically detect Next.js. Leave the root directory as `./`.
4. **Environment Variables:** Add `NEXT_PUBLIC_SITE_URL` and set it to your Vercel project URL (e.g., `https://your-portfolio.vercel.app`).
5. Click **Deploy**.

*(Note: Vercel will automatically redeploy whenever you push changes to your `main` branch.)*

---

## 📂 Project Structure

```text
├── app/                  # Next.js App Router (Pages & Layout)
├── components/           # Reusable UI components (Layout, Sections, UI)
├── content/              # ⬅️ EDIT YOUR INFORMATION HERE
├── lib/                  # Utilities, SEO helpers, and configurations
└── package.json          # Dependencies and scripts
```
