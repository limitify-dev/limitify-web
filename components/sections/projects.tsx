// components/sections/features.tsx

import Image from "next/image";
import {
  ArrowUpRight,
  Bolt,
  Cloud,
  Database,
  GitBranch,
  Webhook,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

const bars = [30, 48, 36, 68, 45, 82, 54, 96, 62, 76, 44, 67];

const topCards = [
  {
    eyebrow: "Growth",
    title: "Cost effective solution",
    desc: "Get senior-level engineering at a fraction of the cost.",
    visual: (
      <div className="relative flex h-32 items-end overflow-hidden px-2 pb-2">
        {/* Soft background glow */}
        <div
          className="
            absolute bottom-2 left-1/2 h-24 w-40
            -translate-x-1/2 rounded-full
            bg-blue-500/10 blur-3xl
            dark:bg-blue-400/10
          "
        />

        {/* Chart */}
        <div className="relative flex h-24 w-full items-end justify-center gap-1.5">
          {bars.map((height, index) => (
            <span
              key={index}
              className="
                w-1.5 rounded-full
                bg-blue-600/70
                transition-all duration-500
                group-hover:bg-blue-500
                dark:bg-blue-400/70
                dark:group-hover:bg-blue-400
              "
              style={{
                height: `${height}%`,
                opacity: 0.35 + height / 150,
              }}
            />
          ))}
        </div>
      </div>
    ),
  },

  {
    eyebrow: "Latest build",
    title: "Tailor-made software",
    desc: "We've got the expertise to make your vision a reality.",
    visual: (
      <div className="relative flex h-32 items-center justify-center">
        {/* Glow */}
        <div
          className="
            absolute h-28 w-28 rounded-full
            bg-blue-500/10 blur-3xl
            dark:bg-blue-400/10
          "
        />

        {/* Build card */}
        <div
          className="
            relative w-full max-w-55
            rounded-xl
            border border-black/[0.07]
            bg-black/2.5
            p-3
            shadow-xl
            dark:border-white/[0.07]
            dark:bg-white/[0.035]
          "
        >
          <div className="flex items-center gap-3">
            <span
              className="
                grid size-9 shrink-0 place-items-center rounded-lg
                bg-blue-500/10
                text-blue-600
                dark:bg-blue-400/10
                dark:text-blue-400
              "
            >
              <Bolt className="size-4" />
            </span>

            <div className="min-w-0">
              <p className="text-[11px] font-medium text-foreground/90">
                Latest build
              </p>

              <p className="mt-0.5 text-[9px] text-muted-foreground">
                Deployed today, 11:00
              </p>
            </div>

            {/* Live indicator */}
            <span
              className="
                ml-auto size-1.5 rounded-full
                bg-blue-500
                shadow-[0_0_10px_rgba(37,99,235,0.7)]
                dark:bg-blue-400
              "
            />
          </div>

          <div className="mt-3 h-px bg-black/6 dark:bg-white/5" />

          <div className="mt-3 flex items-center justify-between text-[9px]">
            <span className="text-muted-foreground">Production</span>

            <span className="text-blue-600 dark:text-blue-400">
              Live
            </span>
          </div>
        </div>
      </div>
    ),
  },

  {
    eyebrow: "Scale",
    title: "Scalable as you grow",
    desc: "We're ready to meet your evolving needs.",
    visual: (
      <div className="relative flex h-32 items-center justify-center overflow-hidden">
        {/* Glow */}
        <div
          className="
            absolute h-28 w-40 rounded-full
            bg-blue-500/10 blur-3xl
            dark:bg-blue-400/10
          "
        />

        {/* Growth graph */}
        <svg
          viewBox="0 0 240 110"
          className="
            relative h-full w-full
            text-blue-600
            dark:text-blue-400
          "
          fill="none"
        >
          <defs>
            <linearGradient
              id="growthLine"
              x1="0"
              y1="110"
              x2="240"
              y2="0"
            >
              <stop
                offset="0"
                stopColor="currentColor"
                stopOpacity="0.08"
              />

              <stop
                offset="0.55"
                stopColor="currentColor"
                stopOpacity="0.65"
              />

              <stop
                offset="1"
                stopColor="currentColor"
              />
            </linearGradient>
          </defs>

          <path
            d="
              M10 96
              C50 92 58 62 90 65
              C122 68 126 44 155 47
              C182 50 193 18 230 8
            "
            stroke="url(#growthLine)"
            strokeWidth="1.5"
          />

          <circle
            cx="155"
            cy="47"
            r="3"
            fill="currentColor"
          />

          <circle
            cx="155"
            cy="47"
            r="12"
            fill="currentColor"
            opacity="0.08"
          />

          <circle
            cx="155"
            cy="47"
            r="7"
            fill="currentColor"
            opacity="0.12"
          />
        </svg>
      </div>
    ),
  },
];


const collaborators = [
  {
    name: "john",
    border: "border-sky-500/70",
  },
  {
    name: "jason",
    border: "border-emerald-500/70",
  },
  {
    name: "mark",
    border: "border-amber-500/70",
  },
];

const integrations = [
  {
    icon: GitBranch,
    label: "Git",
  },
  {
    icon: Database,
    label: "Database",
  },
  {
    icon: Cloud,
    label: "Cloud",
  },
  {
    icon: Webhook,
    label: "Webhook",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="
        relative mx-auto max-w-6xl
        scroll-mt-24
        px-4 py-24
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
          absolute left-1/2 top-24
          -z-10
          h-96 w-150
          max-w-[90vw]
          -translate-x-1/2
          rounded-full
          bg-blue-500/2.5
          blur-[120px]
          dark:bg-blue-400/[0.035]
        "
      />

      {/* =========================================================
          SECTION HEADING
      ========================================================= */}

      <SectionHeading label="WHAT YOU'LL GET">
        We resolve problems associated with
        <br className="hidden sm:block" />
        slow, bloated delivery.
      </SectionHeading>

      {/* =========================================================
          PRIMARY CARDS
      ========================================================= */}

      <div className="mt-12 grid gap-3 md:grid-cols-3">
        {topCards.map((card) => (
          <Card
            key={card.title}
            className="
              group relative
              min-h-87.5
              overflow-hidden
              p-0

              border-black/[0.07]
              bg-black/1.5

              transition-all
              duration-500

              hover:-translate-y-1
              hover:border-black/12
              hover:bg-black/2.5
              hover:shadow-[0_20px_70px_rgba(0,0,0,0.08)]

              dark:border-white/5.5
              dark:bg-white/2.5
              dark:hover:border-white/10
              dark:hover:bg-white/[0.035]
              dark:hover:shadow-[0_20px_70px_rgba(0,0,0,0.25)]
            "
          >
            {/* =====================================================
                CARD GLOW
            ===================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                size-40
                rounded-full
                bg-blue-500/2.5
                blur-3xl

                transition-opacity
                duration-500

                group-hover:bg-blue-500/6

                dark:bg-blue-400/2.5
                dark:group-hover:bg-blue-400/6
              "
            />

            <div className="flex h-full flex-col">
              {/* =================================================
                  VISUAL AREA
              ================================================= */}

              <div
                className="
                  relative
                  flex
                  min-h-51.25
                  items-center
                  overflow-hidden

                  border-b
                  border-black/6

                  px-5
                  sm:px-6

                  dark:border-white/4.5
                "
              >
                {/* Subtle grid */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0

                    opacity-[0.035]

                    bg-[linear-gradient(rgba(0,0,0,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.5)_1px,transparent_1px)]
                    bg-size-[28px_28px]

                    dark:opacity-[0.025]

                    dark:bg-[linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
                  "
                />

                <div className="relative w-full">
                  {card.visual}
                </div>
              </div>

              {/* =================================================
                  CARD CONTENT
              ================================================= */}

              <div className="flex flex-1 flex-col justify-end p-5">
                {/* Eyebrow */}
                <div className="mb-2 flex items-center gap-2">



                  <span
                    className="
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.16em]
                      text-blue-700/80
                      dark:text-blue-400/80
                    "
                  >
                    {card.eyebrow}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-medium tracking-tight text-foreground">
                  {card.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-1.5
                    max-w-65
                    text-[11px]
                    leading-relaxed
                    text-muted-foreground
                  "
                >
                  {card.desc}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* =========================================================
          SECONDARY CARDS
      ========================================================= */}

      <div className="mt-3 grid gap-3 md:grid-cols-2">
        {/* =======================================================
            WORKFLOW INTEGRATION
        ======================================================= */}

        <Card
          className="
            group
            relative
            min-h-47.5
            overflow-hidden
            p-5

            border-black/[0.07]
            bg-black/1.5

            transition-all
            duration-500

            hover:border-black/12
            hover:bg-black/2.5
            hover:shadow-[0_15px_50px_rgba(0,0,0,0.06)]

            dark:border-white/5.5
            dark:bg-white/2.5
            dark:hover:border-white/10
            dark:hover:bg-white/[0.035]
            dark:hover:shadow-[0_15px_50px_rgba(0,0,0,0.2)]
          "
        >
          <div className="flex h-full items-center justify-between gap-8">
            {/* Content */}
            <div className="max-w-47.5">
              <div className="mb-2 flex items-center gap-2">

                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.16em]
                    text-blue-700/80
                    dark:text-blue-400/80
                  "
                >
                  Integrations
                </span>
              </div>

              <h3 className="text-sm font-medium text-foreground">
                Workflow integration
              </h3>

              <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
                Seamlessly connect your existing tools and operations.
              </p>
            </div>

            {/* Integration icons */}
            <div className="grid shrink-0 grid-cols-2 gap-2">
              {integrations.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="
                    grid
                    size-11
                    place-items-center
                    rounded-xl

                    border
                    border-black/[0.07]

                    bg-black/2.5

                    text-muted-foreground

                    transition-all
                    duration-300

                    group-hover:border-blue-500/20
                    group-hover:text-foreground

                    dark:border-white/6
                    dark:bg-white/[0.035]
                    dark:group-hover:border-blue-400/20
                  "
                >
                  <Icon className="size-4" />
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* =======================================================
            REAL-TIME COLLABORATION
        ======================================================= */}

        <Card
          className="
            group
            relative
            min-h-47.5
            overflow-hidden
            p-5

            border-black/[0.07]
            bg-black/1.5

            transition-all
            duration-500

            hover:border-black/12
            hover:bg-black/2.5
            hover:shadow-[0_15px_50px_rgba(0,0,0,0.06)]

            dark:border-white/5.5
            dark:bg-white/2.5
            dark:hover:border-white/10
            dark:hover:bg-white/[0.035]
            dark:hover:shadow-[0_15px_50px_rgba(0,0,0,0.2)]
          "
        >
          <div className="flex h-full items-center justify-between gap-8">
            {/* Content */}
            <div className="max-w-47.5">
              <div className="mb-2 flex items-center gap-2">

                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.16em]
                    text-blue-700/80
                    dark:text-blue-400/80
                  "
                >
                  Collaboration
                </span>
              </div>

              <h3 className="text-sm font-medium text-foreground">
                Collaborate real-time
              </h3>

              <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
                Work directly with your dedicated engineering team.
              </p>
            </div>

            {/* Avatars */}
            <div className="relative shrink-0">
              <div className="flex -space-x-3">
                {collaborators.map(({ name, border }) => (
                  <Image
                    key={name}
                    src={`/images/portrait-${name}.webp`}
                    alt=""
                    width={48}
                    height={48}
                    className={`
                      size-12
                      rounded-full
                      border-2
                      object-cover
                      ring-2
                      ring-background
                      ${border}
                    `}
                  />
                ))}
              </div>

              {/* Live badge */}
              <div
                className="
                  absolute
                  -bottom-2
                  -right-2
                  rounded-full

                  border
                  border-black/8

                  bg-bg

                  px-2
                  py-1

                  text-[8px]
                  text-blue-700

                  shadow-lg

                  dark:border-white/8
                  dark:text-blue-400
                "
              >
                <span
                  className="
                    mr-1
                    inline-block
                    size-1
                    rounded-full
                    bg-blue-500
                    dark:bg-blue-400
                  "
                />

                Live
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* =========================================================
          BOTTOM CONTINUATION
      ========================================================= */}

      <div className="mx-auto mt-16 flex items-center justify-center gap-3">
        <span
          className="
            h-px
            w-16
            bg-linear-to-r
            from-transparent
            to-black/8
            dark:to-white/6
          "
        />

        <div
          className="
            flex
            items-center
            gap-2
            text-[9px]
            uppercase
            tracking-[0.18em]
            text-muted-foreground/60
          "
        >
          <span>Built around your workflow</span>

          <ArrowUpRight className="size-3" />
        </div>

        <span
          className="
            h-px
            w-16
            bg-linear-to-l
            from-transparent
            to-black/8
            dark:to-white/6
          "
        />
      </div>

    </section>
  );
}