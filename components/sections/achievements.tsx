import Link from "next/link";
import { Section } from "@/components/layout/section";
import { achievements } from "@/content/achievements";
import { profile } from "@/content/profile";

export function Achievements() {
  return (
    <Section
      id="achievements"
      title="Achievements"
      eyebrow="Recognition"
      description="Competitive programming, hackathons, and academic milestones."
    >
      <div className="grid gap-4 sm:grid-cols-2 mb-8">
        <a
          href={profile.links.codeforces.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border-2 border-border bg-card p-6 hover:border-accent/50 hover:shadow-md transition-all group"
        >
          <p className="text-sm font-medium text-muted-foreground">Codeforces</p>
          <p className="text-4xl font-bold font-mono mt-2 tabular-nums group-hover:text-accent transition-colors">
            1318
          </p>
          <p className="text-sm text-accent mt-2 font-medium">
            @{profile.links.codeforces.handle} · Pupil
          </p>
        </a>
        <a
          href={profile.links.leetcode.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border-2 border-border bg-card p-6 hover:border-accent/50 hover:shadow-md transition-all group"
        >
          <p className="text-sm font-medium text-muted-foreground">LeetCode</p>
          <p className="text-4xl font-bold font-mono mt-2 tabular-nums group-hover:text-accent transition-colors">
            1592
          </p>
          <p className="text-sm text-accent mt-2 font-medium">
            @{profile.links.leetcode.handle}
          </p>
        </a>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2">
        {achievements.slice(2).map((item) => (
          <li
            key={item.title + item.year}
            className="rounded-2xl border border-border bg-card/80 p-4 sm:p-5 hover:border-accent/30 transition-colors"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                {item.link ? (
                  <Link
                    href={item.link}
                    className="font-semibold hover:text-accent transition-colors line-clamp-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <p className="font-semibold">{item.title}</p>
                )}
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                  {item.detail}
                </p>
              </div>
              <span className="text-xs font-mono font-medium text-muted-foreground bg-muted px-2 py-1 rounded-md shrink-0">
                {item.year}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
