import { SideNav } from "./side-nav";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex gap-10 xl:gap-14 items-start">
        <SideNav />
        <div className="min-w-0 flex-1 pb-12 sm:pb-16">{children}</div>
      </div>
    </div>
  );
}
