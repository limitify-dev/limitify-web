// components/layout/mobile-menu.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type Props = {
  links: { label: string; href: string }[];
  activeHref?: string;
};

export function MobileMenu({ links, activeHref }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
        aria-expanded={open}
        className="grid size-8 place-items-center rounded-md border border-white/15"
      >
        {open ? <X className="size-4" /> : <Menu className="size-4" />}
      </button>

      {open && (
        <nav className="absolute inset-x-0 top-16 border-b border-white/5 bg-bg/95 px-4 py-4 backdrop-blur-md">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={activeHref === link.href ? "page" : undefined}
                  className={`block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/5 hover:text-white ${activeHref === link.href ? "bg-white/10 text-white" : "text-muted"}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}