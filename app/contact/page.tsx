import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ui/contact-form";
import { PageIntro } from "@/components/ui/page-intro";

export const metadata: Metadata = {
  title: "Contact · Limitify",
  description: "Tell Limitify about your project and we'll reply within two business days.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        label=""
        title="Tell us what you're working toward."
        description="Share a few details about what you're building. We read every message and reply personally."
      />

      <section className="mx-auto max-w-7xl px-4 pb-24 md:pb-32">
        <div className="grid gap-10 p-6 md:grid-cols-5 md:gap-16 md:p-12">
          <div className="md:col-span-2">
            <p className="text-xs font-medium uppercase text-accent-text">
              Start a project
            </p>
            <h2 className="mt-4 text-2xl font-light leading-tight md:text-3xl">
              A direct line for your next build.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              Whether it&apos;s a new SaaS product, a B2B platform, or adding AI to
              something you already run, the more context you share, the more
              useful our first reply will be.
            </p>
            <p className="mt-8 text-sm text-muted">
              Prefer email?{" "}
              <a href="mailto:team@limitify.rw" className="text-accent-text underline-offset-4 hover:underline">
                team@limitify.rw
              </a>
              <br />
              We reply within two business days.
            </p>
          </div>
          <div className="md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}