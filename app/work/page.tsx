import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Lightbulb,
  Layers3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Work · Limitify",
  description:
    "Explore the services Limitify provides across software development, consultation, and digital products.",
};

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Software Development",
    shortTitle: "Build",
    description:
      "We design and build reliable software around the way your business actually works — from internal tools and platforms to complete web and mobile applications.",
    capabilities: [
      "Web applications",
      "Mobile applications",
      "Business systems",
      "APIs & integrations",
      "Custom software",
    ],
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Consultation",
    shortTitle: "Think",
    description:
      "Not sure what to build or how to approach it? We help you turn ideas, operational problems, and technical challenges into practical decisions and clear next steps.",
    capabilities: [
      "Product discovery",
      "Technical direction",
      "System architecture",
      "Digital strategy",
      "Technology audits",
    ],
  },
  {
    number: "03",
    icon: Layers3,
    title: "Digital Products",
    shortTitle: "Create",
    description:
      "We create focused digital products that solve specific problems — from early concepts and MVPs to polished products ready for real users.",
    capabilities: [
      "Product design",
      "MVP development",
      "SaaS products",
      "Product engineering",
      "Ongoing improvement",
    ],
  },
];

export default function WorkPage() {
  return (
    <main>
      {/* =========================================================
          INTRO
      ========================================================= */}

      <section className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 md:pb-24 md:pt-32">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-2">
            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-blue-700/80
                dark:text-blue-400/80
              "
            >
              What we do
            </span>
          </div>

          {/* Heading */}
          <h1
            className="
              text-4xl
              font-medium
              tracking-[-0.045em]
              text-foreground
              sm:text-5xl
              md:text-6xl
            "
          >
            We build software
            <br className="hidden sm:block" />
            <span className="text-muted-foreground">
              that moves work forward.
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-xl
              text-sm
              leading-7
              text-muted-foreground
              sm:text-base
            "
          >
            From an idea that needs direction to a system your team
            depends on every day, we help turn real problems into
            useful digital products.
          </p>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 md:pb-32">
        <div className="border-y border-black/[0.07] dark:border-white/[0.07]">
          {services.map(
            ({
              number,
              icon: Icon,
              title,
              shortTitle,
              description,
              capabilities,
            }) => (
              <article
                key={number}
                className="
                  group
                  relative
                  border-b
                  border-black/[0.07]
                  py-10
                  last:border-b-0

                  dark:border-white/[0.07]

                  md:py-14
                "
              >
                {/* =================================================
                    SUBTLE HOVER GLOW
                ================================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    top-1/2
                    -z-10
                    size-64
                    -translate-y-1/2
                    rounded-full
                    bg-blue-500/[0.025]
                    opacity-0
                    blur-[90px]
                    transition-opacity
                    duration-500
                    group-hover:opacity-100

                    dark:bg-blue-400/[0.035]
                  "
                />

                <div
                  className="
                    grid
                    gap-10
                    md:grid-cols-[80px_1fr_280px]
                    md:gap-12
                  "
                >
                  {/* =================================================
                      NUMBER
                  ================================================= */}

                  <div className="flex items-start">
                    <span
                      className="
                        font-mono
                        text-[10px]
                        tracking-[0.12em]
                        text-muted-foreground/40
                      "
                    >
                      {number}
                    </span>
                  </div>

                  {/* =================================================
                      MAIN CONTENT
                  ================================================= */}

                  <div>
                    {/* Icon + category */}
                    <div className="flex items-center gap-3">
                      <div
                        className="
                          grid
                          size-10
                          place-items-center
                          rounded-xl

                          border
                          border-black/[0.07]

                          bg-black/[0.02]

                          text-blue-600

                          transition-all
                          duration-500

                          group-hover:border-blue-500/20
                          group-hover:bg-blue-500/[0.05]

                          dark:border-white/[0.07]
                          dark:bg-white/[0.025]
                          dark:text-blue-400

                          dark:group-hover:border-blue-400/20
                          dark:group-hover:bg-blue-400/[0.05]
                        "
                      >
                        <Icon
                          className="size-5"
                          strokeWidth={1.5}
                        />
                      </div>

                      <span
                        className="
                          text-[9px]
                          font-medium
                          uppercase
                          tracking-[0.18em]
                          text-blue-700/70

                          dark:text-blue-400/70
                        "
                      >
                        {shortTitle}
                      </span>
                    </div>

                    {/* Title */}
                    <h2
                      className="
                        mt-6
                        text-2xl
                        font-medium
                        tracking-[-0.03em]
                        text-foreground

                        sm:text-3xl
                      "
                    >
                      {title}
                    </h2>

                    {/* Description */}
                    <p
                      className="
                        mt-4
                        max-w-2xl
                        text-sm
                        leading-7
                        text-muted-foreground
                      "
                    >
                      {description}
                    </p>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className="
                        mt-7
                        inline-flex
                        items-center
                        gap-2
                        text-xs
                        font-medium
                        text-foreground
                        transition-colors
                        hover:text-blue-600

                        dark:hover:text-blue-400
                      "
                    >
                      Talk to us about this

                      <ArrowUpRight
                        className="
                          size-3.5
                          transition-transform
                          duration-300

                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                      />
                    </Link>
                  </div>

                  {/* =================================================
                      CAPABILITIES
                  ================================================= */}

                  <div className="md:pt-1">
                    <p
                      className="
                        mb-4
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-[0.18em]
                        text-muted-foreground/50
                      "
                    >
                      Capabilities
                    </p>

                    <ul className="space-y-3">
                      {capabilities.map((capability) => (
                        <li
                          key={capability}
                          className="
                            flex
                            items-center
                            gap-2
                            text-xs
                            text-muted-foreground
                          "
                        >
                          <span
                            className="
                              size-1
                              shrink-0
                              rounded-full
                              bg-blue-600/60
                              dark:bg-blue-400/60
                            "
                          />

                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ),
          )}
        </div>

        {/* =========================================================
            PROCESS INTRO
        ========================================================= */}

        <div className="mt-24 grid gap-10 md:grid-cols-[1fr_1.5fr] md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-blue-700/75
                  dark:text-blue-400/75
                "
              >
                How we engage
              </span>
            </div>

            <h2
              className="
                text-2xl
                font-medium
                tracking-[-0.03em]
                sm:text-3xl
              "
            >
              The right level of
              <br />
              involvement.
            </h2>
          </div>

          <p
            className="
              max-w-xl
              text-sm
              leading-7
              text-muted-foreground
            "
          >
            Some projects need a complete engineering team. Others
            need a technical partner for a few important decisions.
            We adapt our involvement to the problem instead of
            forcing every project into the same process.
          </p>
        </div>

        {/* =========================================================
            ENGAGEMENT TYPES
        ========================================================= */}

        <div className="mt-10 grid gap-8 border-t border-black/[0.07] py-8 dark:border-white/[0.07] sm:grid-cols-3">
          <div>
            <span className="text-[10px] font-mono text-muted-foreground/40">
              01
            </span>

            <h3 className="mt-3 text-sm font-medium">
              Full delivery
            </h3>

            <p className="mt-2 text-xs leading-5 text-muted-foreground">
              We take an idea from discovery through development
              and into a working product.
            </p>
          </div>

          <div>
            <span className="text-[10px] font-mono text-muted-foreground/40">
              02
            </span>

            <h3 className="mt-3 text-sm font-medium">
              Engineering partner
            </h3>

            <p className="mt-2 text-xs leading-5 text-muted-foreground">
              Extend your existing team with experienced engineering
              capacity when you need it.
            </p>
          </div>

          <div>
            <span className="text-[10px] font-mono text-muted-foreground/40">
              03
            </span>

            <h3 className="mt-3 text-sm font-medium">
              Advisory
            </h3>

            <p className="mt-2 text-xs leading-5 text-muted-foreground">
              Get practical technical and product guidance before
              committing to a larger build.
            </p>
          </div>
        </div>

        {/* =========================================================
            CTA
        ========================================================= */}

        <div
          className="
            mt-24
            flex
            flex-col
            gap-6
            border-t
            border-black/[0.07]
            pt-8

            dark:border-white/[0.07]

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div>
            <p className="text-sm font-medium">
              Not sure what you need yet?
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              That&apos;s exactly what the first conversation is for.
            </p>
          </div>

          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              gap-2
              self-start
              text-sm
              font-medium
              text-foreground
              transition-colors
              hover:text-blue-600

              dark:hover:text-blue-400
            "
          >
            Start a conversation

            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* =========================================================
          SMALL SCROLL INDICATOR
      ========================================================= */}

      <div className="flex justify-center pb-10">
        <ArrowDown className="size-4 text-muted-foreground/30" />
      </div>
    </main>
  );
}
