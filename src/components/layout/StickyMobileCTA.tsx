"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { PHONE_HREF } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-forest-800/10 bg-cream-50/95 backdrop-blur-md transition-transform duration-300 lg:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="flex h-[4.25rem] items-center gap-3 px-4">
        <a
          href={PHONE_HREF}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-forest-800/20 text-[0.9375rem] font-semibold text-forest-800 transition-colors hover:bg-forest-800 hover:text-cream-100"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call
        </a>
        <Link
          href="/contact"
          className="flex h-12 flex-[1.6] items-center justify-center rounded-full bg-gold-400 text-[0.9375rem] font-semibold text-forest-900 transition-colors hover:bg-gold-300"
        >
          Get your free analysis
        </Link>
      </div>
    </div>
  );
}
