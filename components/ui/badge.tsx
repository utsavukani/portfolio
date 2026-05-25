import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-border bg-muted/60 text-muted-foreground",
        accent:
          "border-accent/30 bg-accent/10 text-accent",
        outline: "border-border bg-transparent text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export function Badge({
  className,
  children,
  title,
  variant,
}: {
  className?: string;
  children: React.ReactNode;
  title?: string;
  variant?: VariantProps<typeof badgeVariants>["variant"];
}) {
  return (
    <span title={title} className={cn(badgeVariants({ variant }), className)}>
      {children}
    </span>
  );
}
