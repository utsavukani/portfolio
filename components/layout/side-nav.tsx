"use client";

import Link from "next/link";
import { Download, Mail } from "lucide-react";
import { NAV_SECTIONS } from "@/lib/navigation";
import { resumePdfPath } from "@/content/profile";
import { cn } from "@/lib/utils";
import { useActiveSection } from "./use-active-section";

export function SideNav() {
  const active = useActiveSection();

  return (
    <aside className="hidden xl:block w-56 shrink-0">
      <nav
        className="glass-panel rounded-2xl p-4 space-y-1"
        aria-label="Page sections"
      >
        <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          On this page
        </p>
        {NAV_SECTIONS.map((item) => {
          const id = item.href.replace("#", "");
          const isActive = active === id;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-all min-h-10",
                isActive
                  ? "bg-accent/15 text-accent border-l-2 border-accent -ml-px pl-[11px]"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          );
        })}
        <div className="section-divider my-3" />
        <Link
          href={resumePdfPath}
          download
          className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold bg-accent text-accent-foreground hover:opacity-90 transition-opacity min-h-10"
        >
          <Download className="h-4 w-4 shrink-0" />
          Resume PDF
        </Link>
        <Link
          href="#contact"
          className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium border border-border hover:border-accent/50 hover:text-accent transition-colors min-h-10"
        >
          <Mail className="h-4 w-4 shrink-0" />
          Hire me
        </Link>
      </nav>
    </aside>
  );
}
