import Link from "next/link";
import { Download } from "lucide-react";
import { resumePdfPath } from "@/content/profile";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Resume | Utsav Ukani",
  description: "Download technical resume PDF.",
});

export default function ResumePage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Resume</h1>
          <p className="text-muted-foreground mt-2 max-w-md">
            Technical resume — projects, skills, and achievements aligned with this portfolio.
          </p>
        </div>
        <Button asChild size="lg" className="w-full sm:w-auto shrink-0">
          <a href={resumePdfPath} download>
            <Download className="h-4 w-4" />
            Download PDF
          </a>
        </Button>
      </div>
      <div className="rounded-2xl border border-border overflow-hidden bg-card shadow-md aspect-[3/4] max-h-[75dvh] w-full">
        <iframe
          src={resumePdfPath}
          title="Resume PDF"
          className="w-full h-full min-h-[55dvh]"
        />
      </div>
      <p className="mt-8 text-sm text-muted-foreground">
        <Link href="/" className="font-semibold text-accent hover:underline">
          ← Back to portfolio
        </Link>
      </p>
    </div>
  );
}
