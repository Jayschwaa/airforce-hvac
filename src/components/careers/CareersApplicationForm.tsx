"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const MAX_RESUME_MB = 4;
const ACCEPT = ".pdf,.doc,.docx,.rtf,.txt,.jpg,.jpeg,.png";

const EXPERIENCE = [
  "No experience — looking to start (Helper / Apprentice)",
  "Less than 1 year",
  "1–3 years",
  "3–5 years",
  "5–10 years",
  "10+ years",
] as const;

type Errors = Partial<Record<"name" | "phone" | "email" | "position" | "resume", string>>;

function YesNo({ name, label }: { name: string; label: string }) {
  return (
    <div>
      <span className="mb-1 block text-sm font-semibold text-navy-500">{label}</span>
      <div className="flex gap-6">
        {["Yes", "No"].map((v) => (
          <label key={v} className="flex cursor-pointer items-center gap-2">
            <input type="radio" name={name} value={v} className="h-4 w-4 accent-cyan-500" />
            <span className="text-navy-700">{v}</span>
          </label>
        ))}
      </div>
    </div>
  );
}


export function CareersApplicationForm({ className }: { className?: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function validate(fd: FormData): boolean {
    const next: Errors = {};
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    if (!get("name")) next.name = "Name is required";
    if (!get("phone")) next.phone = "Phone is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get("email"))) next.email = "Enter a valid email";
    if (!get("position")) next.position = "Select the position you're applying for";
    const resume = fd.get("resume");
    if (resume instanceof File && resume.size > MAX_RESUME_MB * 1024 * 1024) {
      next.resume = `Resume must be under ${MAX_RESUME_MB} MB`;
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (!validate(fd)) return;
    setSending(true);
    setSendError(false);
    try {
      const res = await fetch("/api/careers", { method: "POST", body: fd });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      setSubmitted(true);
      formRef.current?.reset();
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className={cn("rounded-xl bg-white p-8 text-center shadow-md", className)}>
        <div className="mb-4 text-4xl">&#10003;</div>
        <h3 className="font-rubik text-2xl font-bold text-navy-500">Application Received!</h3>
        <p className="mt-2 text-gray-600">
          Thanks for your interest in joining the team. Our hiring team will review your
          application and reach out if it&apos;s a fit.
        </p>
      </div>
    );
  }

  const inputBase =
    "w-full rounded-lg border border-gray-300 px-4 py-3 text-navy-900 transition-all duration-200 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20";
  const labelBase = "mb-1 block text-sm font-semibold text-navy-500";
  const req = <span className="text-red-500">*</span>;
  const opt = <span className="font-normal text-gray-400">(optional)</span>;

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className={cn("space-y-6", className)}
      encType="multipart/form-data"
      noValidate
    >
      {/* Honeypot — hidden from people, catches bots */}
      <div aria-hidden="true" className="hidden">
        <label>
          Company website
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {/* Position */}
      <div>
        <span className={labelBase}>Position Applying For {req}</span>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { value: "commercial", label: "Commercial HVAC Technician" },
            { value: "residential", label: "Residential HVAC Technician" },
          ].map((p) => (
            <label
              key={p.value}
              className={cn(
                "flex cursor-pointer items-center gap-3 rounded-lg border border-gray-300 px-4 py-3 transition-colors has-[:checked]:border-cyan-500 has-[:checked]:bg-cyan-50",
                errors.position && "border-red-400",
              )}
            >
              <input
                type="radio"
                name="position"
                value={p.value}
                className="h-4 w-4 accent-cyan-500"
                onChange={() => setErrors((prev) => ({ ...prev, position: undefined }))}
              />
              <span className="font-semibold text-navy-700">{p.label}</span>
            </label>
          ))}
        </div>
        {errors.position && <p className="mt-1 text-sm text-red-500">{errors.position}</p>}
      </div>

      {/* Name */}
      <div>
        <label htmlFor="ca-name" className={labelBase}>Full Name {req}</label>
        <input id="ca-name" name="name" type="text" autoComplete="name" className={cn(inputBase, errors.name && "border-red-400")} placeholder="Your full name" />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      {/* Phone & Email */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="ca-phone" className={labelBase}>Phone {req}</label>
          <input id="ca-phone" name="phone" type="tel" autoComplete="tel" className={cn(inputBase, errors.phone && "border-red-400")} placeholder="(555) 123-4567" />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="ca-email" className={labelBase}>Email {req}</label>
          <input id="ca-email" name="email" type="email" autoComplete="email" className={cn(inputBase, errors.email && "border-red-400")} placeholder="you@email.com" />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>
      </div>

      {/* City & Experience */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="ca-city" className={labelBase}>City / Area You Live In {opt}</label>
          <input id="ca-city" name="city" type="text" autoComplete="address-level2" className={inputBase} placeholder="e.g. Fort Lauderdale" />
        </div>
        <div>
          <label htmlFor="ca-exp" className={labelBase}>HVAC Experience {opt}</label>
          <select id="ca-exp" name="experience" defaultValue="" className={inputBase}>
            <option value="">Select experience</option>
            {EXPERIENCE.map((x) => (
              <option key={x} value={x}>{x}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Certifications */}
      <div>
        <label htmlFor="ca-certs" className={labelBase}>Certifications &amp; Licenses {opt}</label>
        <input id="ca-certs" name="certifications" type="text" className={inputBase} placeholder="e.g. EPA 608 Universal, NATE, OSHA 10, FL license" />
      </div>

      {/* Yes / No questions */}
      <div className="grid gap-6 sm:grid-cols-3">
        <YesNo name="driversLicense" label="Valid driver's license?" />
        <YesNo name="ownTools" label="Have your own hand tools?" />
        <YesNo name="workAuthorized" label="Authorized to work in the U.S.?" />
      </div>

      {/* Start date */}
      <div>
        <label htmlFor="ca-start" className={labelBase}>When Can You Start? {opt}</label>
        <input id="ca-start" name="startDate" type="text" className={inputBase} placeholder="e.g. Immediately, 2 weeks notice" />
      </div>

      {/* Resume */}
      <div>
        <label htmlFor="ca-resume" className={labelBase}>Upload Resume {opt}</label>
        <input
          id="ca-resume"
          name="resume"
          type="file"
          accept={ACCEPT}
          onChange={() => setErrors((prev) => ({ ...prev, resume: undefined }))}
          className={cn(
            inputBase,
            "cursor-pointer file:mr-4 file:rounded-md file:border-0 file:bg-cyan-500 file:px-4 file:py-2 file:font-semibold file:text-white hover:file:bg-cyan-600",
            errors.resume && "border-red-400",
          )}
        />
        <p className="mt-1 text-xs text-gray-500">PDF, Word, or photo of your resume — max {MAX_RESUME_MB} MB.</p>
        {errors.resume && <p className="mt-1 text-sm text-red-500">{errors.resume}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="ca-message" className={labelBase}>Tell Us About Yourself {opt}</label>
        <textarea id="ca-message" name="message" rows={5} className={cn(inputBase, "resize-none")} placeholder="Past employers, equipment you've worked on, why you want to join Air Force…" />
      </div>

      {sendError && (
        <p className="text-sm text-red-500">
          Sorry, we couldn&apos;t submit your application. Please try again or call us at{" "}
          <a href={PHONE_HREF} className="font-semibold underline">{PHONE}</a>.
        </p>
      )}

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={sending}>
        {sending ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  );
}
