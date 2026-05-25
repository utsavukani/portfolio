"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { resumePdfPath } from "@/content/profile";
import { NAV_SECTIONS } from "@/lib/navigation";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="site-header sticky top-0 z-50 pt-[env(safe-area-inset-top)]">
        <div className="mx-auto flex h-14 sm:h-16 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
          {/* Menu — left side (tablet/mobile) */}
          <Button
            variant="outline"
            size="icon"
            className="xl:hidden shrink-0 order-first"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu className="h-5 w-5" />
          </Button>

          <Link
            href="#home"
            className="flex flex-col leading-tight group min-w-0 flex-1 xl:flex-none"
          >
            <span className="font-bold text-base sm:text-lg tracking-tight group-hover:text-accent transition-colors truncate">
              Utsav Ukani
            </span>
            <span className="text-[10px] sm:text-xs text-muted-foreground font-medium hidden sm:block truncate">
              Full-Stack & ML · IIT Guwahati
            </span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-auto xl:ml-0">
            <nav className="hidden md:flex items-center gap-1">
              {NAV_SECTIONS.filter((n) =>
                ["#work", "#skills", "#contact"].includes(n.href)
              ).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/80 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
            <Button asChild size="sm" className="hidden sm:inline-flex shadow-sm font-semibold">
              <a href={resumePdfPath} download>
                Resume
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Left slide-in drawer (not a top dropdown) */}
      <div
        className={cn(
          "xl:hidden fixed inset-0 z-[60] transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!open}
      >
        <button
          type="button"
          className="absolute inset-0 bg-background/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        />
        <aside
          className={cn(
            "absolute left-0 top-0 bottom-0 w-[min(300px,88vw)] border-r border-border bg-background shadow-xl flex flex-col transition-transform duration-300 ease-out pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]",
            open ? "translate-x-0" : "-translate-x-full"
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex items-center justify-between gap-3 px-4 h-14 border-b border-border shrink-0">
            <span className="font-semibold text-sm">Navigate</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            {NAV_SECTIONS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center min-h-12 px-4 rounded-xl text-sm font-medium text-foreground hover:bg-muted hover:text-accent transition-colors border-l-2 border-transparent hover:border-accent/50"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t border-border space-y-3 shrink-0">
            <Button asChild className="w-full font-semibold" size="lg">
              <a href={resumePdfPath} download onClick={() => setOpen(false)}>
                Download Resume PDF
              </a>
            </Button>
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center min-h-11 text-sm font-medium text-accent hover:underline"
            >
              Contact me
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
