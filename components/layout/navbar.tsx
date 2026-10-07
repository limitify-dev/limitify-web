"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { MobileMenu } from "@/components/layout/mobile-menu";

export const navLinks = [
  { label: "Studio", href: "/studio" },
  { label: "Work", href: "/work" },
  { label: "People", href: "/people" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHomeActive = pathname === "/";
  const activeHref = navLinks.find(
    ({ href }) => pathname === href || pathname.startsWith(`${href}/`),
  )?.href;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Progressive blur: strongest at the top, fades to nothing at the bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 h-24 backdrop-blur-sm mask-[linear-gradient(to_bottom,black_60%,transparent)]"
      />

      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link
          href="/"
          aria-label="Home"
          aria-current={isHomeActive ? "page" : undefined}
          className="flex items-center gap-0 justify-center"
        >
          <Logo className="size-14" />
          <span
            className="text-2xl tracking-[0.02em] text-foreground font-bold"
            style={{ fontFamily: "var(--font-aquire)" }}
          >
            LIMITIFY
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-border bg-foreground/5 p-1 backdrop-blur-md md:flex">
          <Link
            href="/"
            aria-label="Home"
            title="Home"
            aria-current={isHomeActive ? "page" : undefined}
            className={`grid size-8 place-items-center rounded-full transition-colors hover:bg-foreground/10 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${isHomeActive ? "bg-foreground/10 text-foreground" : "text-muted"}`}
          >
            <Home aria-hidden="true" className="size-4" />
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={activeHref === link.href ? "page" : undefined}
              className={`rounded-full px-4 py-1.5 text-xs transition-colors hover:bg-foreground/10 hover:text-foreground ${activeHref === link.href ? "bg-foreground/10 text-foreground" : "text-muted"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/"
            aria-label="Home"
            title="Home"
            aria-current={isHomeActive ? "page" : undefined}
            className={`grid size-8 place-items-center rounded-md border transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${isHomeActive ? "border-white/30 bg-white/10 text-foreground" : "border-white/15 text-muted"}`}
          >
            <Home aria-hidden="true" className="size-4" />
          </Link>
          <MobileMenu links={navLinks} activeHref={activeHref} />
        </div>
      </div>
    </header>
  );
}