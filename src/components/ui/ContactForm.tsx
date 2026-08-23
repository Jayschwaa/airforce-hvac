"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const PORTFOLIO_SIZES = [
  "1 building (a pilot)",
  "2–10 buildings",
  "11–50 buildings",
  "51–100 buildings",
  "100+ buildings",
] as const;

const ASSET_TYPES = [
  "Affordable / workforce housing",
  "Market-rate multifamily",
  "Hotels & hospitality",
  "Office & mixed-use",
  "Retail",
  "Venues & entertainment",
  "Mixed portfolio",
] as const;

type Status = "idle" | "sending" | "sent" | "error";

function Field({
  label,
  children,
  required,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[0.8125rem] font-semibold text-ink-800">
        {label}
        {required && <span className="text-gold-700"> *</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

const inputClass =
  "w-full rounded-xl border border-ink-800/15 bg-cream-50 px-4 py-3 text-[0.9375rem] text-ink-800 " +
  "placeholder:text-ink-300 transition-colors focus:border-gold-500 focus:outline-none " +
  "focus:ring-2 focus:ring-gold-400/30";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real people leave this empty.
    if (data.get("company_website")) return;

    setStatus("sending");

    try {
      // ⚠️ TODO: point this at the real handler before launch — a Next.js
      // route handler at app/api/enquiry/route.ts, or a form service.
      // Until then the submission is acknowledged locally so the flow can
      // be reviewed end to end.
      await new Promise((resolve) => setTimeout(resolve, 700));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-gold-600/30 bg-gold-50 p-10 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold-400">
          <Check className="h-6 w-6 text-ink-900" aria-hidden="true" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-ink-800">
          Thank you — that&rsquo;s all we need to start.
        </h3>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-ink-500">
          We will come back within one business day with the letter of
          authority and a short list of the accounts we would like to pull
          first. No preparation needed on your end.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-[0.875rem] font-semibold text-gold-700 underline decoration-gold-400 decoration-2 underline-offset-4"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute h-0 w-0 overflow-hidden opacity-0"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" required>
          <input name="name" required autoComplete="name" className={inputClass} />
        </Field>
        <Field label="Company" required>
          <input name="company" required autoComplete="organization" className={inputClass} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" required>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </Field>
        <Field label="Phone">
          <input name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Portfolio size">
          <select name="portfolio" defaultValue="" className={cn(inputClass, "cursor-pointer")}>
            <option value="" disabled>
              Select…
            </option>
            {PORTFOLIO_SIZES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Asset type">
          <select name="assetType" defaultValue="" className={cn(inputClass, "cursor-pointer")}>
            <option value="" disabled>
              Select…
            </option>
            {ASSET_TYPES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Anything we should know?">
        <textarea
          name="message"
          rows={4}
          placeholder="A refinance timeline, a problem asset, a line item that has always looked wrong to you…"
          className={cn(inputClass, "resize-y")}
        />
      </Field>

      {status === "error" && (
        <p role="alert" className="text-[0.875rem] text-red-700">
          Something went wrong sending that. Please email us directly and we
          will pick it up straight away.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink-800 px-8 py-4 font-semibold text-cream-100 transition-colors hover:bg-ink-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink-800 focus-visible:ring-offset-2 disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Request the free analysis"}
        {status !== "sending" && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
      </button>

      <p className="text-[0.8125rem] leading-relaxed text-ink-400">
        No retainer, no obligation, and nothing is pulled until you sign the
        letter of authority. We do not sell or share your information.
      </p>
    </form>
  );
}
