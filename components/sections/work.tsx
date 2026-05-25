import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Section } from "@/components/layout/section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects, projects } from "@/content/projects";

export function Work() {
  const featured = getFeaturedProjects();

  return (
    <>
      <Section
        id="work"
        title="Featured Projects"
        eyebrow="Portfolio"
        description="Production apps and ML systems — each links to a full case study with demos."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block h-full"
            >
              <Card featured={i === 0} className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-mono text-accent mb-1">
                        {project.period}
                      </p>
                      <CardTitle className="group-hover:text-accent transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted group-hover:bg-accent/15 transition-colors">
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent" />
                    </span>
                  </div>
                  <CardDescription className="line-clamp-2">
                    {project.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col gap-4 mt-auto">
                  <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                    {project.cardSummary}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-accent inline-flex items-center gap-1">
                    Case study
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {(featured[0]?.links.demo || featured[0]?.links.repo) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {featured.map(
              (p) =>
                p.links.demo && (
                  <Button key={p.slug} asChild variant="outline" size="sm">
                    <a
                      href={p.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {p.title} demo
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                )
            )}
          </div>
        )}
      </Section>

      <Section
        id="projects"
        title="All Projects"
        eyebrow="Index"
        className="!pt-10 !border-t-0"
      >
        <ul className="grid gap-3 sm:grid-cols-1">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border border-border bg-card p-4 sm:p-5 hover:border-accent/40 hover:shadow-md transition-all min-h-[72px]"
              >
                <div className="min-w-0">
                  <p className="font-semibold text-base group-hover:text-accent transition-colors">
                    {project.title}
                  </p>
                  <p className="text-sm text-muted-foreground mt-0.5 truncate">
                    {project.subtitle}
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-mono text-muted-foreground hidden sm:inline">
                    {project.period}
                  </span>
                  <span className="text-sm font-semibold text-accent inline-flex items-center gap-1">
                    Open
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
