// components/sections/intro.tsx
import { SectionLabel } from "@/components/ui/section-heading";

function CursorCopy({ text, className }: { text: string; className: string }) {
  return text.split(" ").map((word, index) => (
    <span key={`${word}-${index}`} className={`mr-[0.25em] inline-block ${className}`}>
      {word}
    </span>
  ));
}

export function Intro() {
  return (
    <section id="intro" className="mx-auto max-w-7xl scroll-mt-20 px-2 py-12 md:py-16">
      <div className="flex flex-col items-center px-6 py-16 text-center md:py-24">
        <SectionLabel>Introducing Limitify</SectionLabel>
        <p
          data-cursor-container
          className="mt-6 max-w-4xl text-xl font-light leading-snug tracking-tight md:text-4xl"
        >
          <CursorCopy text="We know what's going on." className="text-muted" />
          <CursorCopy
            text="You need top-notch engineering to stand out, but hiring in-house developers is costly and time-consuming."
            className="text-foreground"
          />
          <CursorCopy text="That's when Limitify comes in." className="text-muted" />
        </p>
      </div>
    </section>
  );
}
