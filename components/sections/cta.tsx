// components/sections/cta.tsx
import { Card } from "@/components/ui/card";
import { EmailForm } from "@/components/ui/email-form";

export function Cta() {
  return (
    <section className="mx-auto max-w-6xl lg:w-7xl px-4 py-20 md:py-28">
      <Card className="relative overflow-hidden px-6 py-20 text-center md:px-10 md:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-glow/20 to-transparent"
        />
        <div className="relative mx-auto flex max-w-md flex-col items-center">
          <h2 className="text-3xl font-light leading-tight tracking-tight md:text-5xl">
            Elevate the way you source software
          </h2>
          <p className="mt-4 text-xs text-muted md:text-sm">
            Get ready to start shipping efficiently, without the hassle of
            hiring. Soon available.
          </p>
          <EmailForm className="mt-8" />
        </div>
      </Card>
    </section>
  );
}