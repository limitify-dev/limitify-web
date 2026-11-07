"use client";

import Link from "next/link";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, GitBranch, GitCommit, Check, Copy } from "lucide-react";
import type { Portfolio } from "@/data/portfolio";
import { TechIcon, techIcons } from "@/components/portfolio/tech-icons";
import Image from "next/image";
import akImage from "@/assets/team/ak.png";

/* ------------------------------------------------------------------ */
/* Sections the status bar tracks                                      */
/* ------------------------------------------------------------------ */

const FILES = [
  { id: "boot", file: "boot.sh" },
  { id: "about", file: "about.ts" },
  { id: "skills", file: "stack.json" },
  { id: "experience", file: "git log" },
  { id: "projects", file: "projects/" },
  { id: "contact", file: "contact.sh" },
] as const;

/* ------------------------------------------------------------------ */
/* Small helpers                                                       */
/* ------------------------------------------------------------------ */

function useTypewriter(text: string, start: boolean, speed = 28) {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (reduce) {
      const t = setTimeout(() => setCount(text.length), 0);
      return () => clearTimeout(t);
    }
    if (count >= text.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(t);
  }, [start, count, text, speed, reduce]);

  return { shown: text.slice(0, count), done: count >= text.length };
}

function Cursor() {
  return (
    <span
      aria-hidden
      className="ml-0.5 inline-block h-[1.1em] w-[0.55em] translate-y-[0.2em] animate-pulse bg-accent-text"
    />
  );
}

const PORTRAIT_MASK: React.CSSProperties = {
  maskImage:
    "linear-gradient(to bottom, black 60%, transparent 98%), linear-gradient(to right, transparent, black 40%)",
  WebkitMaskImage:
    "linear-gradient(to bottom, black 60%, transparent 98%), linear-gradient(to right, transparent, black 40%)",
  maskComposite: "intersect",
  WebkitMaskComposite: "source-in",
};

const kw = "text-violet-400";
const str = "text-emerald-400";
const cm = "text-muted";

/** Editor-style window with a line-number gutter. */
function Editor({
  file,
  lines,
  className = "",
}: {
  file: string;
  lines: ReactNode[];
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{ transformPerspective: 1200 }}
      className={`overflow-hidden rounded-2xl border border-border bg-surface/80 shadow-2xl shadow-black/40 backdrop-blur ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="size-3 rounded-full bg-red-500/70" />
        <span className="size-3 rounded-full bg-amber-400/70" />
        <span className="size-3 rounded-full bg-emerald-500/70" />
        <span className="ml-3 font-mono text-xs text-muted">{file}</span>
      </div>
      <div className="overflow-x-auto py-4 font-mono text-[13px] leading-7 sm:text-sm">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: Math.min(i * 0.05, 0.8), duration: 0.35 }}
            className="flex whitespace-pre pr-6 hover:bg-foreground/4"
          >
            <span className="w-12 shrink-0 select-none pr-4 text-right text-muted/50">
              {i + 1}
            </span>
            <span>{line}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function SectionTag({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-text">
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Hero: entering the brain                                            */
/* ------------------------------------------------------------------ */

function Boot({ p }: { p: Portfolio }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const drift = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const cmd = useTypewriter("whoami", true, 90);
  const name = useTypewriter(p.name, cmd.done, 45);
  const cmd2 = useTypewriter("cat tagline.txt", name.done, 50);
  const tagline = useTypewriter(p.tagline, cmd2.done, 22);

  return (
    <section
      ref={ref}
      id="boot"
      className="relative flex min-h-svh items-center overflow-hidden px-4 pb-24 pt-32"
    >
      {/* drifting thoughts */}
      <motion.div
        aria-hidden
        style={{ y: drift, opacity: fade }}
        className="pointer-events-none absolute inset-0 hidden font-mono text-xs text-muted/60 md:block"
      >
        {p.thoughts.map((t, i) => (
          <motion.span
            key={t}
            className="absolute"
            style={{
              left: `${8 + ((i * 37) % 80)}%`,
              top: `${14 + ((i * 23) % 70)}%`,
            }}
            animate={{ y: [0, -10, 0], opacity: [0.25, 0.8, 0.25] }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          >
            {`// ${t}`}
          </motion.span>
        ))}
      </motion.div>

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow/10 blur-[120px]"
      />

      {/* portrait, blended into the background */}
      <motion.div
        aria-hidden
        style={{ opacity: fade, y: drift }}
        initial={{ opacity: 0, x: 40 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-[55%]"
      >
        <div className="absolute bottom-0 right-0 h-[60%] w-full bg-glow/20 blur-[110px] md:h-[55%] md:w-[65%]" />
        <Image
          src={akImage}
          alt=""
          priority
          sizes="(min-width: 768px) 55vw, 100vw"
          style={PORTRAIT_MASK}
          className="absolute bottom-0 right-0 h-[60%] w-auto max-w-none object-contain object-bottom opacity-25 md:h-[68%] md:opacity-100"
        />
      </motion.div>

      <motion.div
        style={{ scale, opacity: fade }}
        className="relative mx-auto w-full max-w-6xl"
      >
        <p className="font-mono text-xs text-muted">
          <span className="text-emerald-400">●</span> connected to{" "}
          <span className="text-foreground">{p.handle}@limitify</span>
        </p>

        <div className="mt-8 font-mono text-base leading-8 sm:text-lg md:max-w-[60%]">
          <p>
            <span className="text-emerald-400">~</span>{" "}
            <span className="text-accent-text">$</span> {cmd.shown}
            {!cmd.done && <Cursor />}
          </p>
          {cmd.done && (
            <h1 className="mt-1 text-4xl font-medium tracking-[-0.04em] text-foreground sm:text-6xl md:text-7xl">
              {name.shown}
              {!name.done && <Cursor />}
            </h1>
          )}
          {name.done && (
            <p className="mt-6">
              <span className="text-emerald-400">~</span>{" "}
              <span className="text-accent-text">$</span> {cmd2.shown}
              {!cmd2.done && <Cursor />}
            </p>
          )}
          {cmd2.done && (
            <p className="text-muted">
              {tagline.shown}
              {!tagline.done ? <Cursor /> : null}
            </p>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: tagline.done ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex items-center gap-3 font-mono text-xs text-muted"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="text-accent-text"
          >
            ↓
          </motion.span>
          scroll to dive deeper
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

function About({ p }: { p: Portfolio }) {
  const lines: ReactNode[] = [
    <span key="c" className={cm}>{"// who am I, really?"}</span>,
    <span key="d">
      <span className={kw}>const</span> <span className="text-foreground">me</span> ={" "}
      {"{"}
    </span>,
    <span key="n">
      {"  "}name: <span className={str}>&quot;{p.name}&quot;</span>,
    </span>,
    <span key="r">
      {"  "}role: <span className={str}>&quot;{p.role}&quot;</span>,
    </span>,
    <span key="l">
      {"  "}location: <span className={str}>&quot;{p.location}&quot;</span>,
    </span>,
    <span key="ed">
      {"  "}education: <span className={str}>&quot;{p.education}&quot;</span>,
    </span>,
    <span key="lg">
      {"  "}languages: [
      {p.languages.map((l, i) => (
        <span key={l}>
          <span className={str}>&quot;{l}&quot;</span>
          {i < p.languages.length - 1 ? ", " : ""}
        </span>
      ))}
      ],
    </span>,
    <span key="lr">
      {"  "}learning: [
      {p.learning.map((l, i) => (
        <span key={l}>
          <span className={str}>&quot;{l}&quot;</span>
          {i < p.learning.length - 1 ? ", " : ""}
        </span>
      ))}
      ],
    </span>,
    <span key="f">
      {"  "}fuel: [<span className={str}>&quot;guitar&quot;</span>,{" "}
      <span className={str}>&quot;curiosity&quot;</span>],
    </span>,
    <span key="s">
      {"  "}shipping: <span className={kw}>true</span>,
    </span>,
    <span key="e">{"}"};</span>,
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 md:py-36">
      <SectionTag>01 · about</SectionTag>
      <div className="mt-6 grid items-start gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
            Inside the head of a{" "}
            <span className="text-muted">developer.</span>
          </h2>
          <div className="mt-8 space-y-5 text-sm leading-7 text-muted md:text-base">
            {p.about.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </div>
        <Editor file="about.ts" lines={lines} />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

function Skills({ p }: { p: Portfolio }) {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-24 md:py-36">
      <SectionTag>02 · stack</SectionTag>
      <h2 className="mt-6 max-w-2xl text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
        The tools I <span className="text-muted">reach for.</span>
      </h2>

      <div className="mt-14 space-y-10">
        {p.skills.map((group, gi) => (
          <div key={group.group}>
            <p className="font-mono text-xs text-muted">
              <span className={kw}>import</span> {"{ "}
              <span className="text-foreground">{group.group}</span>
              {" }"}
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {group.skills.map((s, si) => {
                const t = techIcons[s.icon];
                return (
                  <motion.li
                    key={s.icon}
                    initial={{ opacity: 0, y: 24, scale: 0.92 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: gi * 0.1 + si * 0.07, duration: 0.5 }}
                    whileHover={{ y: -6 }}
                    style={{ "--brand": `#${t.hex}` } as React.CSSProperties}
                    className="group relative flex flex-col items-center gap-3 px-2 py-4"
                  >
                    <TechIcon
                      name={s.icon}
                      className="relative size-10 opacity-80 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:drop-shadow-[0_0_14px_var(--brand)] sm:size-12"
                    />
                    <span className="relative font-mono text-xs text-muted transition-colors group-hover:text-foreground">
                      {t.label}
                    </span>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Experience as git log                                               */
/* ------------------------------------------------------------------ */

function Experience({ p }: { p: Portfolio }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const grow = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-24 md:py-36">
      <SectionTag>03 · history</SectionTag>
      <h2 className="mt-6 max-w-2xl text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
        <span className="font-mono text-muted">git log</span> --career
      </h2>

      <div ref={ref} className="relative mt-14 pl-8 md:pl-12">
        <div className="absolute bottom-0 left-[7px] top-0 w-px bg-border md:left-[11px]" />
        <motion.div
          style={{ scaleY: grow, transformOrigin: "top" }}
          className="absolute bottom-0 left-[7px] top-0 w-px bg-accent-text md:left-[11px]"
        />

        <div className="space-y-12">
          {p.experience.map((c) => (
            <motion.article
              key={c.hash}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <GitCommit
                aria-hidden
                className="absolute -left-8 top-1 size-4 rounded-full bg-bg text-accent-text md:-left-12 md:size-6"
              />
              <p className="font-mono text-xs">
                <span className="text-amber-400">commit {c.hash}</span>
                <span className="text-muted"> · {c.period}</span>
              </p>
              <h3 className="mt-2 text-2xl font-medium tracking-[-0.03em]">
                {c.title}{" "}
                <span className="text-muted">@ {c.org}</span>
              </h3>
              <p className="mt-1 font-mono text-xs text-muted">{c.place}</p>
              <ul className="mt-4 max-w-2xl space-y-2 text-sm leading-7 text-muted">
                {c.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span className="mt-0.5 font-mono text-accent-text">+</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

function Projects({ p }: { p: Portfolio }) {
  const [open, setOpen] = useState(0);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24 md:py-36">
      <SectionTag>04 · projects</SectionTag>
      <h2 className="mt-6 max-w-2xl text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
        Things I&apos;ve <span className="text-muted">built.</span>
      </h2>

      <div className="mt-14 overflow-hidden rounded-2xl border border-border bg-surface/70 font-mono">
        <div className="border-b border-border px-5 py-3 text-xs text-muted">
          $ ls -la ./projects
        </div>
        {p.projects.map((proj, i) => {
          const active = open === i;
          return (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="border-b border-border last:border-b-0"
            >
              <button
                type="button"
                onClick={() => setOpen(active ? -1 : i)}
                onMouseEnter={() => setOpen(i)}
                aria-expanded={active}
                className="flex w-full items-center gap-4 px-5 py-5 text-left transition-colors hover:bg-foreground/4"
              >
                <span className="w-6 text-xs text-muted">{`0${i + 1}`}</span>
                <span
                  className={`text-lg transition-colors sm:text-2xl ${active ? "text-accent-text" : "text-foreground"}`}
                >
                  {proj.name}
                </span>
                <span className="ml-auto text-xs text-muted">{proj.year}</span>
                <motion.span
                  animate={{ rotate: active ? 90 : 0 }}
                  className="text-accent-text"
                >
                  ›
                </motion.span>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: active ? "auto" : 0,
                  opacity: active ? 1 : 0,
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="flex flex-col gap-6 px-5 pb-6 pl-15 md:flex-row md:items-start">
                  <div className="flex-1">
                    <p className="max-w-2xl font-sans text-sm leading-7 text-muted">
                      {proj.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {proj.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full bg-foreground/6 px-3 py-1 text-[11px] text-foreground/80"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    {proj.links && (
                      <div className="mt-4 flex flex-wrap gap-4">
                        {proj.links.map((l) => (
                          <a
                            key={l.href}
                            href={l.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs text-accent-text hover:underline"
                          >
                            {l.label} ↗
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  {proj.image && (
                    <Image
                      src={proj.image}
                      alt={`${proj.name} preview`}
                      sizes="(min-width: 768px) 260px, 100vw"
                      className="w-full rounded-xl border border-border md:w-65"
                    />
                  )}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

function Contact({ p }: { p: Portfolio }) {
  const [copied, setCopied] = useState<string | null>(null);

  return (
    <section id="contact" className="mx-auto max-w-4xl px-4 py-24 md:py-40">
      <SectionTag>05 · contact</SectionTag>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-6 text-4xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl"
      >
        Got a problem
        <br />
        <span className="text-muted">worth solving?</span>
      </motion.h2>

      <div className="mt-12 rounded-2xl border border-border bg-surface/70 p-6 font-mono text-sm">
        <p className="text-muted">
          <span className="text-emerald-400">~</span>{" "}
          <span className="text-accent-text">$</span> ./reach-out.sh --to{" "}
          <span className={str}>&quot;{p.handle}&quot;</span>
        </p>
        <div className="mt-4 space-y-2">
          {p.emails.map((email) => (
            <button
              key={email}
              type="button"
              onClick={() => {
                navigator.clipboard?.writeText(email);
                setCopied(email);
                setTimeout(() => setCopied(null), 1800);
              }}
              className="flex items-center gap-2 text-left text-foreground hover:text-accent-text"
            >
              {copied === email ? (
                <Check className="size-4" />
              ) : (
                <Copy className="size-4" />
              )}
              {copied === email ? "copied to clipboard" : email}
            </button>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {p.links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="rounded-full bg-foreground px-5 py-2 font-sans text-sm font-medium text-bg transition-opacity hover:opacity-85"
            >
              {l.label} →
            </Link>
          ))}
        </div>
      </div>

      <p className="mt-16 text-center font-mono text-xs text-muted">
        {"// end of file. thanks for reading my brain."}
      </p>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Status bar + progress                                               */
/* ------------------------------------------------------------------ */

function StatusBar({ active, progress }: { active: string; progress: number }) {
  const file = FILES.find((f) => f.id === active)?.file ?? "boot.sh";
  const line = Math.round(progress * 999) + 1;
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 hidden justify-center px-4 pb-4 sm:flex">
      <div className="pointer-events-auto flex items-center gap-4 rounded-full border border-border bg-bg/80 px-4 py-2 font-mono text-[11px] text-muted backdrop-blur-md">
        <Link
          href="/people"
          className="flex items-center gap-1.5 hover:text-foreground"
        >
          <ArrowLeft className="size-3" /> exit
        </Link>
        <span className="flex items-center gap-1.5">
          <GitBranch className="size-3 text-accent-text" /> main
        </span>
        <span className="text-foreground">{file}</span>
        <span>Ln {line}, Col 1</span>
        <span className="text-accent-text">{Math.round(progress * 100)}%</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Root                                                                */
/* ------------------------------------------------------------------ */

export function PortfolioView({ portfolio }: { portfolio: Portfolio }) {
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 140, damping: 28 });
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string>("boot");

  useMotionValueEvent(scrollYProgress, "change", (v) => setProgress(v));

  useEffect(() => {
    const els = FILES.map((f) => document.getElementById(f.id)).filter(
      (e): e is HTMLElement => !!e,
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="relative">
      <motion.div
        aria-hidden
        style={{ scaleX: bar, transformOrigin: "left" }}
        className="fixed inset-x-0 top-0 z-60 h-0.5 bg-linear-to-r from-accent to-glow"
      />
      {/* faint grid, like an editor canvas */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-0 opacity-[0.035] [background-image:linear-gradient(var(--foreground)_1px,transparent_1px),linear-gradient(90deg,var(--foreground)_1px,transparent_1px)] [background-size:48px_48px]"
      />

      <div className="relative">
        <Boot p={portfolio} />
        <About p={portfolio} />
        <Skills p={portfolio} />
        <Experience p={portfolio} />
        <Projects p={portfolio} />
        <Contact p={portfolio} />
      </div>

      <StatusBar active={active} progress={progress} />
    </div>
  );
}
