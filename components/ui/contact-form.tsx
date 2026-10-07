"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "@/app/contact/actions";

const initial: ContactState = { status: "idle" };

const projectTypes = [
  "SaaS product",
  "B2B / internal tool",
  "Mobile app",
  "AI integration",
  "Not sure yet",
];
const timelines = ["As soon as possible", "1–3 months", "3+ months", "Just exploring"];

const field =
  "mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition placeholder:text-muted focus:border-accent-text";

export function ContactForm({ className }: { className?: string }) {
  const [state, action, pending] = useActionState(sendContact, initial);
  const v = state.values ?? {};
  const e = state.errors ?? {};

  if (state.status === "success") {
    return (
      <div className={className} role="status">
        <h3 className="text-xl font-light">Thanks, we&apos;ve got your message.</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          We&apos;ll read it properly and reply by email within two business days.
        </p>
      </div>
    );
  }

  return (
    <form action={action} noValidate className={className}>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm">Name</label>
          <input id="name" name="name" autoComplete="name" required
            defaultValue={v.name} aria-invalid={!!e.name} className={field} />
          {e.name && <p className="mt-1 text-xs text-red-500">{e.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="text-sm">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required
            defaultValue={v.email} aria-invalid={!!e.email} className={field} />
          {e.email && <p className="mt-1 text-xs text-red-500">{e.email}</p>}
        </div>
        <div className="md:col-span-2">
          <label htmlFor="company" className="text-sm">
            Company <span className="text-muted">(optional)</span>
          </label>
          <input id="company" name="company" autoComplete="organization"
            defaultValue={v.company} className={field} />
        </div>
        <div>
          <label htmlFor="type" className="text-sm">What are you building?</label>
          <select id="type" name="type" defaultValue={v.type ?? ""} className={field}>
            <option value="" disabled>Select one</option>
            {projectTypes.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className="text-sm">Timeline</label>
          <select id="timeline" name="timeline" defaultValue={v.timeline ?? ""} className={field}>
            <option value="" disabled>Select one</option>
            {timelines.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className="text-sm">Tell us about the project</label>
          <textarea id="message" name="message" rows={5} required
            defaultValue={v.message} aria-invalid={!!e.message}
            placeholder="What problem are you solving, and for whom?"
            className={field} />
          {e.message && <p className="mt-1 text-xs text-red-500">{e.message}</p>}
        </div>
      </div>

      {/* Honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off"
        className="hidden" aria-hidden="true" />

      {state.message && (
        <p className="mt-4 text-sm text-red-500" role="alert">{state.message}</p>
      )}

      <button type="submit" disabled={pending}
        className="mt-6 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-60">
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}