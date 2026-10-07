// components/sections/customer-story.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionLabel } from "@/components/ui/section-heading";

export function CustomerStory() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:py-20">
      <Card className="grid items-center gap-8 p-6 md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:p-14">
        <div>
          <SectionLabel>Customer story</SectionLabel>
          <blockquote className="mt-6 text-2xl font-light leading-snug tracking-tight md:text-3xl">
            “Our growth no longer necessitates hiring and onboarding additional
            engineers.”
          </blockquote>
          <Link
            href="#"
            className="mt-8 inline-flex items-center gap-2 text-xs text-muted transition-colors hover:text-foreground"
          >
            Read the story <ArrowRight className="size-3.5" />
          </Link>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-xl border-2 border-accent/80 ring-2 ring-glow/50">
          <Image
            src="/images/customer-story.webp"
            alt="A team collaborating around a laptop"
            fill
            loading="eager"
            sizes="(min-width: 768px) 60vw, 100vw"
            className="object-cover"
          />
          <button
            type="button"
            aria-label="Play video"
            className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/20 text-white backdrop-blur-md transition-transform hover:scale-105"
          >
            <Play className="size-5 fill-current" />
          </button>
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-4 text-xs text-white">
            <p>Johnny Craig</p>
            <p className="text-white/60">Managing Director</p>
          </div>
        </div>
      </Card>
    </section>
  );
}
