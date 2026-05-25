import Link from "next/link";
import { profile, resumePdfPath } from "@/content/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-8 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <p className="font-bold text-lg">{profile.name}</p>
            <p className="text-sm text-muted-foreground mt-1 max-w-sm">
              {profile.headline}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="#work"
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-accent/50 hover:text-accent transition-colors min-h-10 inline-flex items-center"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-accent/50 hover:text-accent transition-colors min-h-10 inline-flex items-center"
            >
              Contact
            </Link>
            <a
              href={resumePdfPath}
              download
              className="rounded-full bg-accent text-accent-foreground px-4 py-2 text-sm font-semibold hover:brightness-110 transition-all min-h-10 inline-flex items-center"
            >
              Resume PDF
            </a>
          </div>
        </div>
        <div className="section-divider mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {year} {profile.name}</p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link href={profile.links.github} className="hover:text-accent" target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
            <Link href={profile.links.linkedin} className="hover:text-accent" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Link>
            <Link href={profile.links.codeforces.url} className="hover:text-accent" target="_blank" rel="noopener noreferrer">
              Codeforces
            </Link>
            <Link href={profile.links.leetcode.url} className="hover:text-accent" target="_blank" rel="noopener noreferrer">
              LeetCode
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
