"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, Copy, MessageSquare, Phone, X } from "lucide-react";
import { PHONE, TEXT_PHONE } from "@/lib/constants";

type Mode = "call" | "text";

/**
 * tel: and sms: links do nothing on most desktop computers, so on devices
 * without a touchscreen we intercept them and show the number instead.
 */
export function DesktopPhoneDialog() {
  const [mode, setMode] = useState<Mode | null>(null);
  const [href, setHref] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0) return;
      if (window.matchMedia("(pointer: coarse)").matches) return;
      const link = (e.target as Element | null)?.closest?.("a[href]");
      const target = link?.getAttribute("href") ?? "";
      if (!/^(tel|sms):/i.test(target) || link?.hasAttribute("data-native-phone")) return;
      e.preventDefault();
      setHref(target);
      setMode(target.toLowerCase().startsWith("sms:") ? "text" : "call");
      setCopied(false);
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (!mode) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMode(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mode]);

  if (!mode) return null;

  async function copyNumber() {
    try {
      await navigator.clipboard.writeText(number);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  const Icon = mode === "text" ? MessageSquare : Phone;
  const number = mode === "text" ? TEXT_PHONE : PHONE;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-900/60 p-4"
      onClick={() => setMode(null)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="phone-dialog-title"
    >
      <div
        className="relative w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setMode(null)}
          className="absolute right-4 top-4 rounded-lg p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-navy-500"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-50">
          <Icon className="h-6 w-6 text-cyan-500" />
        </div>
        <h2 id="phone-dialog-title" className="font-rubik text-xl font-bold text-navy-500">
          {mode === "text" ? "Text us from your phone" : "Call us from your phone"}
        </h2>
        <p className="mt-3 font-rubik text-3xl font-bold text-navy-500">{number}</p>
        <p className="mt-2 text-sm text-gray-500">Available 24/7 for emergencies.</p>

        <div className="mt-6 space-y-3">
          <button
            onClick={copyNumber}
            className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-cyan-500 px-6 py-3 font-rubik font-semibold text-cyan-500 transition-colors hover:bg-cyan-500 hover:text-white"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied!" : "Copy Number"}
          </button>
          <Link
            href="/contact"
            onClick={() => setMode(null)}
            className="flex w-full items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 font-rubik font-semibold text-white transition-colors hover:bg-cyan-600"
          >
            Send Us a Message Instead
          </Link>
          <a
            href={href}
            data-native-phone
            onClick={() => setMode(null)}
            className="block text-sm text-gray-500 underline transition-colors hover:text-cyan-500"
          >
            {mode === "text" ? "Open my computer's messaging app" : "Call with my computer's phone app"}
          </a>
        </div>
      </div>
    </div>
  );
}
