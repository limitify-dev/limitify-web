// components/ui/email-form.tsx
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

export function EmailForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className={cn("w-full max-w-sm", className)}>
      <form
        onSubmit={onSubmit}
        className="flex items-center gap-2 rounded-xl border border-border bg-surface p-1.5"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          aria-label="Email address"
          className="min-w-0 flex-1 bg-transparent px-3 text-xs text-foreground outline-none placeholder:text-muted"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-lg bg-accent px-4 py-2 text-xs font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "Get notified"}
        </button>
      </form>
      <p role="status" className="mt-2 h-4 text-xs text-muted">
        {status === "success" && "Thanks, we'll be in touch."}
        {status === "error" && "Something went wrong. Please try again."}
      </p>
    </div>
  );
}