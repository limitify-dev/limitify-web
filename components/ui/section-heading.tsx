// components/ui/section-heading.tsx
import { cn } from "@/lib/utils";

export function Dot({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("grid size-3.5 place-items-center rounded-full bg-glow", className)}
    >
      <span className="size-1 rounded-full bg-black" />
    </span>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-wider text-muted">
      {children}
    </span>
  );
}

export function SectionHeading({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <SectionLabel>{label}</SectionLabel>
      <h2 className="mt-4 max-w-xl text-2xl font-light leading-tight tracking-tight md:text-4xl">
        {children}
      </h2>
    </div>
  );
}