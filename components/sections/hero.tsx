import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Download,
  Mail,
  Trophy,
  UserRound,
} from "lucide-react";
import { profile, resumePdfPath } from "@/content/profile";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { QUICK_LINKS } from "@/lib/navigation";

export function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-20 sm:scroll-mt-24 pt-8 sm:pt-12 pb-14 sm:pb-20"
    >
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 items-start">
        <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="accent">{profile.degree}</Badge>
            <Badge>IIT Guwahati</Badge>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-medium text-accent">
              Open to software & ML internships
            </p>
            <h1 className="text-[clamp(1.875rem,5.5vw,3.25rem)] font-bold leading-[1.12] tracking-tight text-balance">
              {profile.headline}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl text-pretty leading-relaxed">
              {profile.subline}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Button asChild size="lg" className="w-full sm:w-auto font-semibold shadow-md">
              <a href={resumePdfPath} download>
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="#contact">
                Contact Me
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors min-h-10"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-2 text-sm text-muted-foreground">
            <Link
              href={profile.links.github}
              className="inline-flex items-center gap-2 hover:text-accent transition-colors min-h-10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code2 className="h-4 w-4 shrink-0" />
              GitHub
            </Link>
            <Link
              href={profile.links.linkedin}
              className="inline-flex items-center gap-2 hover:text-accent transition-colors min-h-10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <UserRound className="h-4 w-4 shrink-0" />
              LinkedIn
            </Link>
            <a
              href={`mailto:${profile.emails[0]}`}
              className="inline-flex items-center gap-2 hover:text-accent transition-colors min-h-10"
            >
              <Mail className="h-4 w-4 shrink-0" />
              <span className="truncate max-w-[200px] sm:max-w-none">
                {profile.emails[0]}
              </span>
            </a>
          </div>
        </div>

        <aside className="order-1 lg:order-2 glass-panel rounded-2xl p-5 sm:p-6 space-y-5 shadow-md">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
              At a glance
            </p>
            <p className="font-semibold text-lg leading-snug">{profile.name}</p>
            <p className="text-sm text-muted-foreground mt-1 font-mono">
              Roll {profile.rollNo}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <a
              href={profile.links.codeforces.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-muted/60 border border-border p-4 hover:border-accent/40 transition-colors"
            >
              <p className="text-xs text-muted-foreground">Codeforces</p>
              <p className="text-2xl font-bold font-mono mt-1 tabular-nums">1318</p>
              <p className="text-xs text-accent mt-1">Pupil</p>
            </a>
            <a
              href={profile.links.leetcode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-muted/60 border border-border p-4 hover:border-accent/40 transition-colors"
            >
              <p className="text-xs text-muted-foreground">LeetCode</p>
              <p className="text-2xl font-bold font-mono mt-1 tabular-nums">1592</p>
              <p className="text-xs text-accent mt-1">Max rating</p>
            </a>
          </div>

          <ul className="space-y-3 text-sm">
            <li className="flex gap-3 items-start">
              <Trophy className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <span className="text-muted-foreground leading-snug">
                Produscope 2025 — <strong className="text-foreground font-medium">4th</strong> among 5,000+ teams
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <Trophy className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <span className="text-muted-foreground leading-snug">
                Convolve 4.0 — Semi-finalist, Generative AI (IDFC First Bank)
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <Trophy className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <span className="text-muted-foreground leading-snug">
                DIR, CCD — Internship liaison for BSBE
              </span>
            </li>
          </ul>

          <Link
            href="#work"
            className="flex items-center justify-center gap-2 w-full rounded-xl bg-accent/10 border border-accent/30 text-accent font-semibold text-sm py-3 hover:bg-accent/15 transition-colors min-h-11"
          >
            See all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </aside>
      </div>
    </section>
  );
}
