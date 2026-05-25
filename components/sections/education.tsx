import { Section } from "@/components/layout/section";
import { profile } from "@/content/profile";

export function Education() {
  return (
    <Section id="education" title="Education" eyebrow="Academics">
      <div className="hidden md:block overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-muted/50 border-b border-border">
              <th className="p-4 sm:p-5 font-semibold">Degree</th>
              <th className="p-4 sm:p-5 font-semibold">Institute</th>
              <th className="p-4 sm:p-5 font-semibold text-right">Score</th>
              <th className="p-4 sm:p-5 font-semibold text-right">Year</th>
            </tr>
          </thead>
          <tbody>
            {profile.education.map((row) => (
              <tr
                key={row.degree + row.year}
                className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
              >
                <td className="p-4 sm:p-5 font-medium">{row.degree}</td>
                <td className="p-4 sm:p-5 text-muted-foreground">{row.institute}</td>
                <td className="p-4 sm:p-5 font-mono text-right tabular-nums">
                  {row.score}
                </td>
                <td className="p-4 sm:p-5 text-muted-foreground text-right">
                  {row.year}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-3">
        {profile.education.map((row) => (
          <div
            key={row.degree + row.year}
            className="rounded-2xl border border-border bg-card p-5 space-y-3"
          >
            <div className="flex justify-between items-start gap-2">
              <p className="font-semibold text-base">{row.degree}</p>
              <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded-md shrink-0">
                {row.year}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{row.institute}</p>
            <p className="text-sm font-mono font-semibold text-accent">{row.score}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-muted/30 p-6 sm:p-8">
        <h3 className="font-semibold text-lg mb-4">Key Courses</h3>
        <ul className="grid gap-3 sm:grid-cols-2">
          {profile.keyCourses.map((course) => (
            <li
              key={course}
              className="flex gap-3 text-sm sm:text-base text-muted-foreground leading-snug"
            >
              <span className="text-accent font-bold shrink-0">→</span>
              {course}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
