// components/layout/footer.tsx
import Link from "next/link";
import { Logo } from "@/components/ui/logo";

const footerLinks = [
  { label: "Contact", href: "/contact" },
  { label: "Privacy & Cookie Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-8 md:flex-row md:justify-between">
        <Link href="/" aria-label="Home">
          <Logo className="size-14" />
        </Link>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-muted transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <span className="text-xs text-muted">
            © {new Date().getFullYear()} Limitify · All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}