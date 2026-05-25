"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const sectionIndex: Record<string, string> = {
  about: "01",
  work: "02",
  projects: "02",
  skills: "03",
  experience: "04",
  achievements: "05",
  education: "06",
  contact: "07",
};

export function Section({
  id,
  title,
  eyebrow,
  description,
  children,
  className,
  noDivider,
}: {
  id: string;
  title: string;
  eyebrow?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  noDivider?: boolean;
}) {
  const reduce = useReducedMotion();
  const index = sectionIndex[id] ?? "";

  return (
    <motion.section
      id={id}
      className={cn(
        "scroll-mt-20 sm:scroll-mt-24",
        !noDivider && "section-divider pt-14 sm:pt-20 first:pt-0 first:border-t-0",
        className
      )}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <header className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div className="space-y-2 min-w-0">
          <div className="flex items-center gap-3">
            {index && (
              <span className="font-mono text-xs font-bold text-accent/80 tabular-nums">
                {index}
              </span>
            )}
            {eyebrow && (
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {eyebrow}
              </span>
            )}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance">
            {title}
          </h2>
          {description && (
            <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </header>
      {children}
    </motion.section>
  );
}

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("w-full", className)}>{children}</div>;
}
