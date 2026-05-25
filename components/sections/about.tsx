import { Section } from "@/components/layout/section";
import { profile } from "@/content/profile";

export function About() {
  return (
    <Section
      id="about"
      title="About"
      eyebrow="Introduction"
      description="Bioengineering at IIT Guwahati with a focus on shipping production software and applied ML."
    >
      <div className="glass-panel rounded-2xl p-6 sm:p-8 max-w-3xl">
        <div className="space-y-4 text-muted-foreground leading-relaxed text-base sm:text-[1.05rem]">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
