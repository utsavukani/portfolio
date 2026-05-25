"use client";

import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { Section } from "@/components/layout/section";
import { profile, resumePdfPath } from "@/content/profile";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(
      `From: ${name} <${email}>\n\n${message}`
    );
    window.location.href = `mailto:${profile.emails[0]}?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <Section
      id="contact"
      title="Contact"
      eyebrow="Get in touch"
      description="Open to software engineering and ML internships. Fastest path: email or download resume."
    >
      <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 space-y-4">
            <a
              href={`mailto:${profile.emails[0]}`}
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted transition-colors min-h-11 group"
            >
              <Mail className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div className="min-w-0">
                <p className="text-xs font-medium text-muted-foreground">Primary email</p>
                <p className="text-sm font-semibold break-all group-hover:text-accent transition-colors">
                  {profile.emails[0]}
                </p>
              </div>
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted transition-colors min-h-11 group"
            >
              <Phone className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-medium text-muted-foreground">Phone</p>
                <p className="text-sm font-semibold group-hover:text-accent transition-colors">
                  {profile.phone}
                </p>
              </div>
            </a>
          </div>
          <Button asChild variant="outline" className="w-full">
            <a href={resumePdfPath} download>
              Download resume PDF
            </a>
          </Button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="lg:col-span-3 rounded-2xl border border-border bg-card p-5 sm:p-8 space-y-5 shadow-sm"
        >
          <p className="text-sm text-muted-foreground -mt-1">
            Form opens your email app with a pre-filled message — no account needed.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="text-sm font-semibold">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                placeholder="Your name"
                className="mt-2 w-full min-h-11 rounded-xl border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="email" className="text-sm font-semibold">
                Your email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className="mt-2 w-full min-h-11 rounded-xl border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="I'd like to discuss an internship opportunity..."
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-y min-h-[120px]"
            />
          </div>
          <Button type="submit" size="lg" className="w-full sm:w-auto">
            Send via Email
          </Button>
          {status === "sent" && (
            <p className="text-sm text-muted-foreground">
              Your email app should open. If not, mail{" "}
              <a href={`mailto:${profile.emails[0]}`} className="text-accent font-medium">
                {profile.emails[0]}
              </a>{" "}
              directly.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
