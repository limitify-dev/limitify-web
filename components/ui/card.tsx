// components/ui/card.tsx
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-cursor-card
      className={cn(
        "rounded-2xl border border-border bg-foreground/3 p-6",
        className
      )}
      {...props}
    />
  );
}
