import { Section } from "@/components/layout/section";
import { profile } from "@/content/profile";

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      eyebrow="Leadership"
      description="Roles on campus — product, mentorship, and internship coordination."
    >
      <div className="space-y-4 max-w-3xl">
        {profile.experience.map((entry, index) => (
          <article
            key={entry.title + entry.period}
            className="relative rounded-2xl border border-border bg-card p-5 sm:p-6 pl-6 sm:pl-8"
          >
            <span className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-accent/60" />
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div>
                <h3 className="font-semibold text-lg leading-snug">{entry.title}</h3>
                <p className="text-sm font-medium text-accent mt-1">
                  {entry.organization}
                </p>
              </div>
              <time className="text-xs font-mono text-muted-foreground bg-muted px-2.5 py-1 rounded-full shrink-0 self-start">
                {entry.period}
              </time>
            </div>
            <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
              {entry.highlights.map((h) => (
                <li key={h} className="leading-relaxed pl-0 sm:pl-1">
                  {h}
                </li>
              ))}
            </ul>
            {index === 0 && (
              <span className="absolute -top-2 right-4 text-[10px] font-bold uppercase tracking-wider bg-accent text-accent-foreground px-2 py-0.5 rounded-full">
                Current
              </span>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
