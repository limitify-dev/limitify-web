import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { work } from "@/data/work";

export const metadata: Metadata = {
  title: "Studio · Limitify",
  description:
    "Explore software, products, and digital experiences built by Limitify.",
};

const projects = [
  ...work.map((project) => ({
    title: project.title,
    category: `${project.category} · ${project.client}`,
    description: project.description,
    year: project.year,
    image: project.image,
    links: [
      { label: "Web", href: project.links.website },
      { label: "Android", href: project.links.android },
      { label: "iOS", href: project.links.ios },
    ].filter((link): link is { label: string; href: string } => Boolean(link.href)),
    featured: project.featured,
  })),
];

export default function StudioPage() {
  return (
    <main>
      {/* =========================================================
          INTRO
      ========================================================= */}

      <section className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 md:pb-24 md:pt-32">
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-2">
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-blue-700/80 dark:text-blue-400/80">
              Selected work
            </span>
          </div>

          <h1
            className="
              text-4xl
              font-medium
              tracking-[-0.04em]
              text-foreground
              sm:text-5xl
              md:text-6xl
            "
          >
            Software built for
            <br className="hidden sm:block" />
            <span className="text-muted-foreground">
              real problems.
            </span>
          </h1>

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
            A selection of products and software experiences we&apos;ve
            designed and built for businesses, teams, and ambitious
            ideas.
          </p>
        </div>
      </section>

      {/* =========================================================
          PROJECTS
      ========================================================= */}

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 md:pb-32">
        {/* Featured project */}
        {projects
          .filter((project) => project.featured)
          .map((project) => (
            <article
              key={project.title}
              className="
                group
                block
                border-y
                border-black/[0.07]
                py-6
                dark:border-white/[0.07]
              "
            >
              <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-center md:gap-12">
                {/* Project information */}
                <div className="order-2 md:order-1">
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.16em]">
                    <span className="text-blue-700/80 dark:text-blue-400/80">
                      {project.category}
                    </span>

                    {project.year && (
                      <>
                        <span className="size-1 rounded-full bg-muted-foreground/30" />
                        <span className="text-muted-foreground/60">
                          {project.year}
                        </span>
                      </>
                    )}
                  </div>

                  <h2
                    className="
                      mt-5
                      text-3xl
                      font-medium
                      tracking-[-0.03em]
                      text-foreground
                      sm:text-4xl
                    "
                  >
                    {project.title}
                  </h2>

                  <p
                    className="
                      mt-4
                      max-w-md
                      text-sm
                      leading-6
                      text-muted-foreground
                    "
                  >
                    {project.description}
                  </p>

                  {project.links.length > 0 ? (
                    <div className="mt-7 flex flex-wrap gap-3">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-blue-500/40 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          {link.label}
                          <ArrowUpRight className="size-3.5" />
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-7 text-xs text-muted-foreground/50">
                      Project links coming soon
                    </p>
                  )}
                </div>

                {/* Project image */}
                <div
                  className="
                    order-1
                    relative
                    aspect-[16/10]
                    overflow-hidden
                    rounded-2xl
                    md:order-2
                  "
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 58vw, 100vw"
                    className="
                      object-contain
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.025]
                    "
                  />
                </div>
              </div>
            </article>
          ))}

        {/* =======================================================
            OTHER PROJECTS
        ======================================================= */}

        <div className="mt-20">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-blue-700/80 dark:text-blue-400/80">
                More work
              </p>

              <h2 className="mt-2 text-xl font-medium tracking-tight">
                Other projects
              </h2>
            </div>

            <span className="hidden text-xs text-muted-foreground sm:block">
              {String(projects.length - 1).padStart(2, "0")} projects
            </span>
          </div>

          <div className="divide-y divide-black/[0.07] border-y border-black/[0.07] dark:divide-white/[0.07] dark:border-white/[0.07]">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <article
                  key={project.title}
                  className="
                    group
                    grid
                    gap-5
                    py-5
                    transition-colors
                    sm:grid-cols-[40px_1fr_auto]
                    sm:items-center
                  "
                >
                  {/* Number */}
                  <span className="text-[10px] tabular-nums text-muted-foreground/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Main content */}
                  <div className="flex min-w-0 items-center gap-5">
                    {/* Thumbnail */}
                    <div
                      className="
                        relative
                        size-16
                        shrink-0
                        overflow-hidden
                        rounded-lg
                        bg-muted
                        sm:size-20
                      "
                    >
                      <Image
                        src={project.image}
                        alt=""
                        fill
                        sizes="80px"
                        className="
                          object-cover
                          transition-transform
                          duration-500
                          group-hover:scale-105
                        "
                      />
                    </div>

                    <div className="min-w-0">
                      <h3
                        className="
                          truncate
                          text-sm
                          font-medium
                          text-foreground
                          transition-colors
                          group-hover:text-blue-600
                          dark:group-hover:text-blue-400
                        "
                      >
                        {project.title}
                      </h3>

                      <p className="mt-1 truncate text-xs text-muted-foreground">
                        {project.category}
                      </p>
                    </div>
                  </div>

                  {/* Description + year */}
                  <div className="flex items-center justify-between gap-6 sm:justify-end">
                    <p className="hidden max-w-xs text-xs leading-5 text-muted-foreground md:block">
                      {project.description}
                    </p>

                    {project.year && (
                      <span className="text-xs text-muted-foreground/50">
                        {project.year}
                      </span>
                    )}

                    {project.links.length > 0 && (
                      <div className="flex items-center gap-3">
                        {project.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${project.title} on ${link.label}`}
                            className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wide text-muted-foreground/60 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                          >
                            {link.label}
                            <ArrowUpRight className="size-3.5" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
          </div>
        </div>

        {/* =======================================================
            CTA
        ======================================================= */}

        <div className="mt-24 flex flex-col justify-between gap-6 border-t border-black/[0.07] pt-8 dark:border-white/[0.07] sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium">
              Have something worth building?
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              Tell us what you&apos;re working on.
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
    </main>
  );
}
