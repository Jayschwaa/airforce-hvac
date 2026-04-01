"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { PHONE_HREF } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] transition-transform duration-300",
        visible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="flex items-center h-16 px-4 gap-3">
        <a
          href={PHONE_HREF}
          className="flex-1 flex items-center justify-center gap-2 h-11 rounded-lg bg-navy-500 text-white font-rubik font-semibold text-sm transition-colors hover:bg-navy-400"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <a
          href="sms:+13053356991"
          className="flex-1 flex items-center justify-center h-11 rounded-lg bg-cyan-500 text-white font-rubik font-semibold text-sm transition-colors hover:bg-cyan-600"
        >
          Text Us
        </a>
      </div>
    </div>
  );
}
