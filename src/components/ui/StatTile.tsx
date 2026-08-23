"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

/** Counts up once, when the tile first scrolls into view. */
function useCountUp(target: number, decimals: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion: land on the final value immediately.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || done.current) return;
        done.current = true;

        const duration = 1600;
        let start: number | null = null;
        const step = (ts: number) => {
          start ??= ts;
          const progress = Math.min((ts - start) / duration, 1);
          const eased = easeOutQuart(progress);
          const factor = Math.pow(10, decimals);
          setValue(Math.round(eased * target * factor) / factor);
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, decimals]);

  return { ref, value };
}

/**
 * Sparkline: 12 points, de-emphasis hue for history, accent for the
 * current period. 2px stroke, no axes — it is texture, not a chart.
 */
function Sparkline({ points, tone }: { points: readonly number[]; tone: "dark" | "light" }) {
  const w = 92;
  const h = 26;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const span = max - min || 1;

  const coords = points.map((p, i) => {
    const x = (i / (points.length - 1)) * w;
    const y = h - ((p - min) / span) * (h - 4) - 2;
    return [x, y] as const;
  });

  const d = coords.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const [lastX, lastY] = coords[coords.length - 1];

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="mt-4 h-[26px] w-[92px] overflow-visible"
      aria-hidden="true"
    >
      <path
        d={d}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={tone === "light" ? "stroke-cream-100/30" : "stroke-forest-200"}
      />
      <circle cx={lastX} cy={lastY} r="3.5" className="fill-gold-400" />
    </svg>
  );
}

export type StatTileProps = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  /** Signed change against a named period, e.g. "+18% vs. prior year" */
  delta?: string;
  trend?: readonly number[];
  tone?: "dark" | "light";
  className?: string;
};

export function StatTile({
  label,
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  delta,
  trend,
  tone = "dark",
  className,
}: StatTileProps) {
  const { ref, value: shown } = useCountUp(value, decimals);
  const light = tone === "light";

  return (
    <div ref={ref} className={cn("flex flex-col", className)}>
      <div
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.14em]",
          light ? "text-cream-100/50" : "text-forest-400",
        )}
      >
        {label}
      </div>

      {/* Sans, not display — a display face on a figure reads as decoration.
          Proportional figures: these are standalone values, not a column. */}
      <div
        className={cn(
          "mt-2.5 font-sans text-[2.75rem] font-semibold leading-none tracking-[-0.04em]",
          light ? "text-cream-100" : "text-forest-800",
        )}
      >
        {prefix}
        {shown.toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })}
        {suffix}
      </div>

      {delta && (
        <div className={cn("mt-2 text-sm", light ? "text-gold-300" : "text-gold-700")}>
          {delta}
        </div>
      )}

      {trend && <Sparkline points={trend} tone={tone} />}
    </div>
  );
}
