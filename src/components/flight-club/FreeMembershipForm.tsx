"use client";

import { useState } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import { cn } from "@/lib/utils";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

type FormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  notes: string;
};

const NEED_CONTACT = "Enter a phone number or email so we can reach you";

const initialData: FormData = {
  name: "",
  email: "",
  phone: "",
  address: "",
  notes: "",
};

export function FreeMembershipForm({ className }: { className?: string }) {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  function validate(): boolean {
    const next: typeof errors = {};
    if (!data.name.trim()) next.name = "Name is required";
    if (!data.address.trim()) next.address = "Service address is required";
    if (!data.email.trim() && !data.phone.trim()) {
      next.phone = NEED_CONTACT;
    } else if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      next.email = "Enter a valid email";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    setSendError(false);
    try {
      // Reuses the contact form's email pipeline; the service type flags it as a QR sign-up.
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          serviceType: "FREE Flight Club Membership (QR Code)",
          serviceCategory: "residential",
          message: [
            "Free Flight Club membership sign-up via QR code landing page.",
            `Service address: ${data.address.trim()}`,
            `Notes: ${data.notes.trim() || "—"}`,
          ].join("\n"),
        }),
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      sendGAEvent("event", "generate_lead", {
        form: "flight_club_qr",
        service_type: "free_flight_club",
      });
      setSubmitted(true);
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  }

  function update(field: keyof FormData, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
    const cleared = field === "email" && errors.phone === NEED_CONTACT ? "phone" : null;
    if (errors[field] || cleared) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        if (cleared) delete copy[cleared];
        return copy;
      });
    }
  }

  if (submitted) {
    return (
      <div className={cn("rounded-xl bg-white p-8 text-center shadow-md", className)}>
        <div className="mb-4 text-4xl">&#10003;</div>
        <h3 className="font-rubik text-2xl font-bold text-navy-500">
          Welcome to the Flight Club!
        </h3>
        <p className="mt-2 text-gray-600">
          Your free membership request is in. Our team will reach out shortly to
          activate it and schedule your first tune-up.
        </p>
      </div>
    );
  }

  const inputBase =
    "w-full rounded-lg border border-gray-300 px-4 py-3 text-navy-900 transition-all duration-200 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20";

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-6", className)} noValidate>
      {/* Name */}
      <div>
        <label htmlFor="fc-name" className="mb-1 block text-sm font-semibold text-navy-500">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="fc-name"
          type="text"
          autoComplete="name"
          value={data.name}
          onChange={(e) => update("name", e.target.value)}
          className={cn(inputBase, errors.name && "border-red-400")}
          placeholder="Your full name"
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      {/* Email & Phone */}
      <div className="grid gap-6 sm:grid-cols-2">
        <p className="-mb-4 text-sm text-gray-500 sm:col-span-2">
          Phone or email <span className="text-red-500">*</span> &mdash; whichever you prefer.
        </p>
        <div>
          <label htmlFor="fc-phone" className="mb-1 block text-sm font-semibold text-navy-500">
            Phone
          </label>
          <input
            id="fc-phone"
            type="tel"
            autoComplete="tel"
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={cn(inputBase, errors.phone && "border-red-400")}
            placeholder="(555) 123-4567"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="fc-email" className="mb-1 block text-sm font-semibold text-navy-500">
            Email
          </label>
          <input
            id="fc-email"
            type="email"
            autoComplete="email"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            className={cn(inputBase, (errors.email || errors.phone === NEED_CONTACT) && "border-red-400")}
            placeholder="you@email.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>
      </div>

      {/* Address */}
      <div>
        <label htmlFor="fc-address" className="mb-1 block text-sm font-semibold text-navy-500">
          Service Address <span className="text-red-500">*</span>
        </label>
        <input
          id="fc-address"
          type="text"
          autoComplete="street-address"
          value={data.address}
          onChange={(e) => update("address", e.target.value)}
          className={cn(inputBase, errors.address && "border-red-400")}
          placeholder="Street, city, ZIP"
        />
        {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="fc-notes" className="mb-1 block text-sm font-semibold text-navy-500">
          Anything we should know? <span className="font-normal text-gray-400">(optional)</span>
        </label>
        <textarea
          id="fc-notes"
          rows={3}
          value={data.notes}
          onChange={(e) => update("notes", e.target.value)}
          className={cn(inputBase, "resize-none")}
          placeholder="System age, issues you've noticed, best time to call..."
        />
      </div>

      {sendError && (
        <p className="text-sm text-red-500">
          Sorry, we couldn&apos;t submit your sign-up. Please try again or call us at{" "}
          <a href={PHONE_HREF} className="font-semibold underline">
            {PHONE}
          </a>
          .
        </p>
      )}

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={sending}>
        {sending ? "Sending..." : "Claim My Free Membership"}
      </Button>
    </form>
  );
}
