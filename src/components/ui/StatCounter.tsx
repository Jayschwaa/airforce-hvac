"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type StatCounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  className?: string;
};

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

export function StatCounter({
  value,
  prefix = "",
  suffix = "",
  label,
  className,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          let start: number | null = null;

          function step(timestamp: number) {
            if (start === null) start = timestamp;
            const elapsed = timestamp - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutQuart(progress);
            setDisplay(Math.round(eased * value));

            if (progress < 1) {
              requestAnimationFrame(step);
            }
          }

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <div className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
        {prefix}
        {display.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 text-sm uppercase tracking-wider text-gray-500">
        {label}
      </div>
    </div>
  );
}
