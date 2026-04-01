"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

const SERVICES = [
  "AC Installation",
  "AC Repair",
  "AC Maintenance",
  "Heating Services",
  "Indoor Air Quality",
  "Commercial HVAC",
] as const;

type FormData = {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  serviceCategory: "commercial" | "residential";
  message: string;
};

type ContactFormProps = {
  className?: string;
};

const initialData: FormData = {
  name: "",
  email: "",
  phone: "",
  serviceType: "",
  serviceCategory: "residential",
  message: "",
};

export function ContactForm({ className }: ContactFormProps) {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): boolean {
    const next: typeof errors = {};
    if (!data.name.trim()) next.name = "Name is required";
    if (!data.email.trim()) {
      next.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      next.email = "Enter a valid email";
    }
    if (!data.phone.trim()) next.phone = "Phone is required";
    if (!data.serviceType) next.serviceType = "Select a service";
    if (!data.message.trim()) next.message = "Message is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  }

  function update(field: keyof FormData, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  }

  if (submitted) {
    return (
      <div className={cn("rounded-xl bg-white p-8 text-center shadow-md", className)}>
        <div className="mb-4 text-4xl">&#10003;</div>
        <h3 className="font-rubik text-2xl font-bold text-navy-500">
          Thank You!
        </h3>
        <p className="mt-2 text-gray-600">
          Your request has been received. We&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  const inputBase =
    "w-full rounded-lg border border-gray-300 px-4 py-3 text-navy-900 transition-all duration-200 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20";

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("space-y-6", className)}
      noValidate
    >
      {/* Name */}
      <div>
        <label htmlFor="cf-name" className="mb-1 block text-sm font-semibold text-navy-500">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="cf-name"
          type="text"
          value={data.name}
          onChange={(e) => update("name", e.target.value)}
          className={cn(inputBase, errors.name && "border-red-400")}
          placeholder="Your full name"
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      {/* Email & Phone */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-email" className="mb-1 block text-sm font-semibold text-navy-500">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            className={cn(inputBase, errors.email && "border-red-400")}
            placeholder="you@email.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="cf-phone" className="mb-1 block text-sm font-semibold text-navy-500">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="cf-phone"
            type="tel"
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={cn(inputBase, errors.phone && "border-red-400")}
            placeholder="(555) 123-4567"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>
      </div>

      {/* Service Type */}
      <div>
        <label htmlFor="cf-service" className="mb-1 block text-sm font-semibold text-navy-500">
          Service Type <span className="text-red-500">*</span>
        </label>
        <select
          id="cf-service"
          value={data.serviceType}
          onChange={(e) => update("serviceType", e.target.value)}
          className={cn(inputBase, !data.serviceType && "text-gray-400", errors.serviceType && "border-red-400")}
        >
          <option value="" disabled>
            Select a service
          </option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.serviceType && (
          <p className="mt-1 text-sm text-red-500">{errors.serviceType}</p>
        )}
      </div>

      {/* Service Category */}
      <div>
        <span className="mb-2 block text-sm font-semibold text-navy-500">
          Service Category
        </span>
        <div className="flex gap-6">
          {(["residential", "commercial"] as const).map((cat) => (
            <label key={cat} className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="serviceCategory"
                value={cat}
                checked={data.serviceCategory === cat}
                onChange={(e) => update("serviceCategory", e.target.value)}
                className="h-4 w-4 accent-cyan-500"
              />
              <span className="capitalize text-navy-700">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="cf-message" className="mb-1 block text-sm font-semibold text-navy-500">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="cf-message"
          rows={5}
          value={data.message}
          onChange={(e) => update("message", e.target.value)}
          className={cn(inputBase, "resize-none", errors.message && "border-red-400")}
          placeholder="Tell us about your HVAC needs..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full">
        Request Service
      </Button>
    </form>
  );
}
