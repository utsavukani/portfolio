import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
  featured,
}: {
  className?: string;
  children: React.ReactNode;
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition-all duration-300",
        "hover:shadow-md hover:border-accent/30",
        featured && "ring-1 ring-accent/20 shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-2 p-5 sm:p-6 pb-0", className)}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h3
      className={cn(
        "text-lg sm:text-xl font-semibold leading-tight tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={cn("text-sm text-muted-foreground leading-relaxed", className)}>
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("p-5 sm:p-6 pt-4", className)}>{children}</div>;
}
