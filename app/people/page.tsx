import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "People · Limitify",
  description:
    "Meet the people building products and software at Limitify.",
};

export default function PeoplePage() {
  return (
    <main className="overflow-hidden">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="mx-auto max-w-6xl px-4 pb-5 pt-24 sm:px-6 md:pb-5 md:pt-32">
        <div className="grid items-end gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1
              className="
                max-w-2xl
                text-5xl
                font-medium
                leading-[0.95]
                tracking-[-0.055em]
                text-foreground
                sm:text-6xl
                lg:text-7xl
              "
            >
              Small team.
              <br />
              <span className="text-muted-foreground">
                Big attention to detail.
              </span>
            </h1>
          </div>

          <div className="max-w-sm pb-1 md:ml-auto">
            <p className="text-sm leading-7 text-muted-foreground">
              We&apos;re a small group of engineers and product thinkers
              who like getting close to the problem, understanding
              how things work, and building software that people
              actually enjoy using.
            </p>

            <div className="mt-7 flex items-center gap-2 text-xs text-muted-foreground">
              Based in Rwanda · Working globally
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TEAM GALLERY
      ========================================================= */}

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person) => (
            <Link
              key={person.name}
              href="/contact"
              className="group block"
            >
              <div className="relative aspect-4/5 overflow-hidden rounded-[1.5rem]">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="scale-[0.7] object-contain object-bottom origin-bottom transition-transform duration-700 ease-out group-hover:scale-[0.75]"
                />

              </div>
              <div className="mt-1 text-center">
                <h2 className="text-2xl font-medium tracking-[-0.03em]">
                  {person.name}
                </h2>
                <span className="mt-1 block text-xs text-muted-foreground opacity-40">
                  {person.role}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================
          TEAM STATEMENT
      ========================================================= */}

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <span
            className="
              inline-flex
              items-center
              gap-2
              text-[10px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-blue-600
              dark:text-blue-400
            "
          >
            How we think
          </span>

          <p
            className="
              mt-7
              text-2xl
              font-medium
              leading-tight
              tracking-[-0.035em]
              text-foreground
              sm:text-3xl
              md:text-4xl
            "
          >
            Good software is rarely the result of one brilliant
            idea. It&apos;s the result of{" "}
            <span className="text-muted-foreground">
              people paying attention to the right things.
            </span>
          </p>
        </div>
      </section>


      {/* =========================================================
          JOIN / CONTACT CTA
      ========================================================= */}

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 md:pb-32">
        <div
          className="
            relative
            overflow-hidden
            rounded-[1.5rem]
            bg-black/[0.025]
            px-6
            py-12
            text-center

            dark:bg-white/[0.025]

            sm:px-10
            md:py-16
          "
        >
          {/* Blue ambient light */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              size-64
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-blue-500/[0.07]
              blur-[90px]
              dark:bg-blue-400/[0.06]
            "
          />

          <div className="relative">
            <p className="text-xs text-muted-foreground">
              Have a problem worth solving?
            </p>

            <h2
              className="
                mx-auto
                mt-3
                max-w-lg
                text-2xl
                font-medium
                tracking-[-0.035em]
                sm:text-3xl
              "
            >
              Let&apos;s build something useful.
            </h2>

            <Link
              href="/contact"
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-foreground
                px-5
                py-2.5
                text-xs
                font-medium
                text-bg
                transition-transform
                hover:-translate-y-0.5
              "
            >
              Start a conversation
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}