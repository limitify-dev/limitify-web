// components/sections/how-it-works.tsx

import {
  ArrowRight,
  Box,
  Fingerprint,
  Sparkles,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    number: "01",
    icon: Box,
    title: "Tell us your vision",
    desc: "Share your idea, goals, and what you're trying to achieve. We'll help turn your requirements into a clear direction.",
    visual: (
      <div className="relative flex h-full items-center justify-center">
        {/* Ambient glow */}
        <div
          className="
            absolute
            size-32
            rounded-full
            bg-blue-500/[0.06]
            blur-3xl
            dark:bg-blue-400/[0.08]
          "
        />

        {/* Main object */}
        <div
          className="
            relative
            grid
            size-16
            place-items-center
            rounded-2xl
            border
            border-black/[0.07]
            bg-black/[0.025]
            shadow-xl
            transition-all
            duration-500
            group-hover:-translate-y-1
            group-hover:border-blue-500/20
            group-hover:bg-blue-500/[0.03]

            dark:border-white/[0.07]
            dark:bg-white/[0.025]
            dark:group-hover:border-blue-400/20
            dark:group-hover:bg-blue-400/[0.04]
          "
        >
          <Box
            className="
              size-7
              text-blue-600
              transition-transform
              duration-500
              group-hover:scale-110
              dark:text-blue-400
            "
            strokeWidth={1.5}
          />

        </div>
      </div>
    ),
  },

  {
    number: "02",
    icon: Sparkles,
    title: "Receive the magic",
    desc: "Our engineers get to work, transforming your idea into polished, reliable software built around your needs.",
    visual: (
      <div className="relative flex h-full items-center justify-center">
        {/* Ambient glow */}
        <div
          className="
            absolute
            size-36
            rounded-full
            bg-blue-500/[0.05]
            blur-3xl
            dark:bg-blue-400/[0.07]
          "
        />

        {/* Central spark */}
        <div className="relative">
          {/* Orbit */}
          <div
            className="
              absolute
              -inset-7
              rounded-full
              border
              border-dashed
              border-blue-500/10
              transition-all
              duration-700
              group-hover:rotate-45
              group-hover:border-blue-500/20

              dark:border-blue-400/10
              dark:group-hover:border-blue-400/20
            "
          />

          <div
            className="
              relative
              grid
              size-16
              place-items-center
              rounded-full
              border
              border-blue-500/10
              bg-blue-500/[0.035]
              transition-all
              duration-500
              group-hover:scale-105
              group-hover:border-blue-500/20
              group-hover:bg-blue-500/[0.06]

              dark:border-blue-400/10
              dark:bg-blue-400/[0.035]
              dark:group-hover:border-blue-400/20
              dark:group-hover:bg-blue-400/[0.06]
            "
          >
            <Sparkles
              className="
                size-6
                text-blue-600
                transition-transform
                duration-500
                group-hover:rotate-12
                dark:text-blue-400
              "
              strokeWidth={1.5}
            />
          </div>


        </div>
      </div>
    ),
  },

  {
    number: "03",
    icon: Fingerprint,
    title: "Get ongoing support",
    desc: "Keep improving with continuous access to our engineering team, support, maintenance, and future development.",
    visual: (
      <div className="relative flex h-full items-center justify-center">
        {/* Ambient glow */}
        <div
          className="
            absolute
            size-32
            rounded-full
            bg-blue-500/[0.06]
            blur-3xl
            dark:bg-blue-400/[0.08]
          "
        />

        {/* Fingerprint container */}
        <div
          className="
            relative
            grid
            size-16
            place-items-center
            rounded-2xl
            border
            border-black/[0.07]
            bg-black/[0.025]
            shadow-xl
            transition-all
            duration-500
            group-hover:-translate-y-1
            group-hover:border-blue-500/20
            group-hover:bg-blue-500/[0.03]

            dark:border-white/[0.07]
            dark:bg-white/[0.025]
            dark:group-hover:border-blue-400/20
            dark:group-hover:bg-blue-400/[0.04]
          "
        >
          <Fingerprint
            className="
              size-7
              text-blue-600
              transition-transform
              duration-500
              group-hover:scale-110
              dark:text-blue-400
            "
            strokeWidth={1.5}
          />

        </div>
      </div>
    ),
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="
        relative
        mx-auto
        max-w-6xl
        scroll-mt-24
        px-4
        py-24
        sm:px-6
        md:py-32
      "
    >
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-24
          -z-10
          h-80
          w-[550px]
          max-w-[90vw]
          -translate-x-1/2
          rounded-full
          bg-blue-500/[0.02]
          blur-[120px]
          dark:bg-blue-400/[0.03]
        "
      />

      {/* =========================================================
          SECTION HEADING
      ========================================================= */}

      <SectionHeading label="HOW IT WORKS">
        Top-notch software,
        <br className="hidden sm:block" />
        delivered at your doorstep.
      </SectionHeading>

      {/* =========================================================
          STEPS
      ========================================================= */}

      <div className="mt-12 grid gap-3 md:grid-cols-3">
        {steps.map(
          ({ number, icon: Icon, title, desc, visual }) => (
            <Card
              key={title}
              className="
                group
                relative
                min-h-[330px]
                overflow-hidden
                p-0

                border-black/[0.07]
                bg-black/[0.015]

                transition-all
                duration-500

                hover:-translate-y-1
                hover:border-black/[0.12]
                hover:bg-black/[0.025]
                hover:shadow-[0_20px_70px_rgba(0,0,0,0.08)]

                dark:border-white/[0.055]
                dark:bg-white/[0.025]
                dark:hover:border-white/[0.10]
                dark:hover:bg-white/[0.035]
                dark:hover:shadow-[0_20px_70px_rgba(0,0,0,0.25)]
              "
            >
              {/* =================================================
                  SUBTLE TOP GLOW
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  size-36
                  rounded-full
                  bg-blue-500/[0.025]
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:bg-blue-500/[0.06]

                  dark:bg-blue-400/[0.025]
                  dark:group-hover:bg-blue-400/[0.06]
                "
              />

              {/* =================================================
                  CARD CONTENT
              ================================================= */}

              <div className="relative flex h-full flex-col p-5">
                {/* Top row */}
                <div className="flex items-center justify-between">

                  {/* Step number */}
                  <span
                    className="
                      text-[9px]
                      font-medium
                      tracking-[0.14em]
                      text-muted-foreground/40
                    "
                  >
                    {number}
                  </span>
                </div>

                {/* =================================================
                    VISUAL
                ================================================= */}

                <div className="relative min-h-[145px] flex-1">
                  {visual}
                </div>

                {/* =================================================
                    TEXT
                ================================================= */}

                <div className="mt-auto">

                  <h3
                    className="
                      text-sm
                      font-medium
                      tracking-tight
                      text-foreground
                    "
                  >
                    {title}
                  </h3>

                  <p
                    className="
                      mt-1.5
                      max-w-[270px]
                      text-[11px]
                      leading-relaxed
                      text-muted-foreground
                    "
                  >
                    {desc}
                  </p>
                </div>
              </div>
            </Card>
          ),
        )}
      </div>


      {/* =========================================================
          BOTTOM CONTINUATION
      ========================================================= */}

      <div className="mx-auto mt-14 flex items-center justify-center gap-3">
        <span
          className="
            h-px
            w-12
            bg-gradient-to-r
            from-transparent
            to-black/[0.08]
            dark:to-white/[0.06]
          "
        />

        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.18em]
            text-muted-foreground/50
          "
        >
          Simple process. Serious results.
        </span>

        <span
          className="
            h-px
            w-12
            bg-gradient-to-l
            from-transparent
            to-black/[0.08]
            dark:to-white/[0.06]
          "
        />
      </div>
    </section>
  );
}