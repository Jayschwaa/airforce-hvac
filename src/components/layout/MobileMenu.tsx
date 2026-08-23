"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, Phone, Mail } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { NAV_ITEMS, PHONE, PHONE_HREF, EMAIL } from "@/lib/constants";

export function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  // Lock scroll and wire Escape while the panel is open.
  useEffect(() => {
    if (!isOpen) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] bg-ink-900 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="flex h-16 items-center justify-between px-5">
            <Logo variant="light" />
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="rounded-full p-2 text-cream-100/70 transition-colors hover:bg-cream-100/10 hover:text-cream-100"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col px-5">
            {NAV_ITEMS.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block border-b border-cream-100/10 py-4 font-display text-3xl font-bold tracking-tight text-cream-100 transition-colors hover:text-gold-400"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="mt-10 space-y-3 px-5">
            <Button href="/contact" variant="primary" size="lg" className="w-full">
              Get your free analysis
            </Button>
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 py-3 text-cream-100/70 transition-colors hover:text-gold-400"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span className="tabular">{PHONE}</span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center justify-center gap-2 text-sm text-cream-100/50 transition-colors hover:text-gold-400"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {EMAIL}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
