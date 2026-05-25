import { Section } from "@/components/layout/section";
import { elementarySkills, skillGroups } from "@/content/skills";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  return (
    <Section
      id="skills"
      title="Technical Skills"
      eyebrow="Stack"
      description="Grouped by domain. Asterisk (*) marks elementary proficiency per resume."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.name}
            className="rounded-2xl border border-border bg-card p-5 sm:p-6 hover:shadow-sm transition-shadow"
          >
            <h3 className="font-semibold text-base mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent shrink-0" />
              {group.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant={elementarySkills.has(skill) ? "outline" : "default"}
                  title={
                    elementarySkills.has(skill)
                      ? "Elementary proficiency (per resume)"
                      : undefined
                  }
                >
                  {skill}
                  {elementarySkills.has(skill) ? " *" : ""}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
