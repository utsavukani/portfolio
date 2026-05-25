import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProjectBySlug, projectSlugs } from "@/content/projects";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return createMetadata({
    title: `${project.title} | Utsav Ukani`,
    description: project.cardSummary,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 pb-24 xl:pb-14">
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent mb-8 min-h-11 rounded-lg"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to projects
      </Link>

      <header className="space-y-5 mb-12 pb-8 border-b border-border">
        <p className="text-sm font-mono font-medium text-accent">{project.period}</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
          {project.title}
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground">{project.subtitle}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          {project.links.demo && (
            <Button asChild>
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                Live demo
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
          {project.links.repo && (
            <Button asChild variant="outline">
              <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                Repository
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
          {project.links.other && (
            <Button asChild variant="outline">
              <a href={project.links.other} target="_blank" rel="noopener noreferrer">
                Project link
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </header>

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-10">
          {[
            { title: "Problem", body: project.problem },
            { title: "My role", body: project.role },
          ].map((block) => (
            <section key={block.title}>
              <h2 className="text-xl font-bold mb-3">{block.title}</h2>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                {block.body}
              </p>
            </section>
          ))}
          <section>
            <h2 className="text-xl font-bold mb-4">Key outcomes</h2>
            <ul className="space-y-3">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-3 text-muted-foreground leading-relaxed text-sm sm:text-base rounded-xl border border-border bg-card p-4"
                >
                  <span className="text-accent font-bold shrink-0">✓</span>
                  {h}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">Lessons learned</h2>
            <ul className="space-y-2 text-muted-foreground list-disc pl-5">
              {project.lessons.map((l) => (
                <li key={l} className="leading-relaxed">
                  {l}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <div className="glass-panel rounded-2xl p-5 sm:p-6">
            <h3 className="font-semibold mb-4">Tech stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </div>
          <div className="glass-panel rounded-2xl p-5 sm:p-6">
            <h3 className="font-semibold mb-3">Architecture</h3>
            <pre className="text-xs font-mono text-muted-foreground whitespace-pre-wrap leading-relaxed">
              {project.architecture}
            </pre>
          </div>
        </aside>
      </div>
    </div>
  );
}
