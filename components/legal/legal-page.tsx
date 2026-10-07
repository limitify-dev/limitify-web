import type { ReactNode } from "react";
import Link from "next/link";

export type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

type LegalPageProps = {
  label: string;
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
};

export function LegalPage({
  label,
  title,
  description,
  updated,
  sections,
}: LegalPageProps) {
  return (
    <main className="px-5 pb-24 pt-32 sm:px-8 md:pb-32 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="text-xs text-muted transition-colors hover:text-foreground"
        >
          ← Back to home
        </Link>

        <header className="mt-12 max-w-3xl border-b border-border pb-12 md:pb-16">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent-text">
            {label}
          </p>
          <h1 className="mt-5 text-4xl font-light tracking-[-0.045em] text-foreground sm:text-5xl md:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-muted md:text-base">
            {description}
          </p>
          <p className="mt-5 text-xs text-foreground/45">Last updated: {updated}</p>
        </header>

        <div className="mt-12 grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-20">
          <aside>
            <nav aria-label="On this page" className="lg:sticky lg:top-28">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-foreground/45">
                On this page
              </p>
              <ol className="mt-5 space-y-3">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="group flex gap-3 text-xs leading-5 text-muted transition-colors hover:text-foreground"
                    >
                      <span className="text-foreground/30 group-hover:text-accent-text">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="max-w-3xl divide-y divide-border">
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 py-10 first:pt-0"
              >
                <div className="flex gap-5">
                  <span className="pt-1 text-[10px] text-accent-text/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-xl font-normal tracking-tight text-foreground md:text-2xl">
                      {section.title}
                    </h2>
                    <div className="mt-5 space-y-4 text-sm leading-7 text-muted [&_a]:text-accent-text [&_a]:underline-offset-4 [&_a:hover]:underline [&_li]:pl-1 [&_strong]:font-medium [&_strong]:text-foreground [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-2">
                      {section.content}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </article>
        </div>
      </div>
    </main>
  );
}
