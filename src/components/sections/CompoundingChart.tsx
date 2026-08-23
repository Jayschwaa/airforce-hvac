"use client";

import { useState } from "react";
import { COMPOUNDING } from "@/data/results";

/**
 * Cumulative savings across a seven-year hold, as a stacked column chart.
 *
 * Palette note: the marks are gold-400 (#E8B33C) and gold-600 (#B47C18).
 * That pair measures 16.9 ΔE under deutan/protan simulation, and against the
 * forest-900 ground they clear 9.4:1 and 5.0:1 respectively. gold-400 sits
 * at 1.81:1 on cream, which is why this chart is only ever rendered on
 * forest. Two ordered shades of one hue, not two categorical hues: the
 * segments are "earlier" and "this year", which is a sequence, not an
 * identity.
 */

const W = 720;
const H = 340;
const PAD = { top: 28, right: 20, bottom: 56, left: 58 };
const PLOT_W = W - PAD.left - PAD.right;
const PLOT_H = H - PAD.top - PAD.bottom;

const Y_MAX = 3200; // thousands
const TICKS = [0, 800, 1600, 2400, 3200];
const SEGMENT_GAP = 2; // surface gap between stacked segments

/** Rect with only its top two corners rounded, anchored to the baseline. */
function topRoundedPath(x: number, y: number, w: number, h: number, r: number) {
  const radius = Math.max(0, Math.min(r, h, w / 2));
  return [
    `M${x},${y + h}`,
    `L${x},${y + radius}`,
    `Q${x},${y} ${x + radius},${y}`,
    `L${x + w - radius},${y}`,
    `Q${x + w},${y} ${x + w},${y + radius}`,
    `L${x + w},${y + h}`,
    "Z",
  ].join(" ");
}

export function CompoundingChart() {
  const [hover, setHover] = useState<number | null>(null);

  const data = COMPOUNDING.years;
  const band = PLOT_W / data.length;
  const barW = Math.min(52, band * 0.54);

  const yOf = (v: number) => PAD.top + PLOT_H - (v / Y_MAX) * PLOT_H;
  const active = hover === null ? null : data[hover];
  // The readout always shows something: the hovered column, or the endpoint.
  const readout = active ?? data[data.length - 1];

  return (
    <figure className="m-0">
      <figcaption className="mb-1 font-display text-2xl font-bold tracking-tight text-cream-100">
        One $431K finding, held for seven years
      </figcaption>
      <p className="mb-7 max-w-xl text-[0.9375rem] leading-relaxed text-cream-100/55">
        A recurring saving is not a one-time gain. It repeats every year you
        own the asset — and it is still in the income statement on the day you
        sell.
      </p>

      {/* Legend — two series, so a legend is always present — alongside a
          readout that reserves its own space above the plot. Keeping the
          readout out of the plot means hovering never occludes a mark. */}
      <div className="mb-5 flex min-h-[2.75rem] flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.8125rem] text-cream-100/60">
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-sm bg-gold-400" aria-hidden="true" />
            Saved this year
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-sm bg-gold-600" aria-hidden="true" />
            Saved in earlier years
          </span>
        </div>

        <div aria-live="polite" className="text-right">
          <span className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-cream-100/40">
            Year {readout.year}
          </span>
          <span className="tabular block text-[0.9375rem] leading-tight text-cream-100">
            <span className="font-semibold">
              ${readout.cumulative.toLocaleString()}K
            </span>{" "}
            saved to date
            <span className="text-gold-400">
              {" "}
              (+${readout.annual.toLocaleString()}K)
            </span>
          </span>
        </div>
      </div>

      <div className="relative">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full"
          role="img"
          aria-label="Stacked column chart: cumulative savings from a single $431,000 annual finding, rising from $431,000 in year one to $3.0 million by year seven."
        >
          {/* Recessive gridlines and tick labels */}
          {TICKS.map((t) => (
            <g key={t}>
              <line
                x1={PAD.left}
                y1={yOf(t)}
                x2={W - PAD.right}
                y2={yOf(t)}
                stroke="rgba(251,248,242,0.10)"
                strokeWidth="1"
              />
              <text
                x={PAD.left - 12}
                y={yOf(t) + 4}
                textAnchor="end"
                className="tabular fill-[rgba(251,248,242,0.40)] text-[13px]"
              >
                {t === 0 ? "$0" : `$${(t / 1000).toFixed(1)}M`}
              </text>
            </g>
          ))}

          {data.map((d, i) => {
            const cx = PAD.left + band * i + band / 2;
            const x = cx - barW / 2;
            const prior = d.cumulative - d.annual;

            const yTotal = yOf(d.cumulative);
            const yPriorTop = yOf(prior);
            const baseline = yOf(0);

            // Top segment: this year's addition.
            const topH = yPriorTop - yTotal - (prior > 0 ? SEGMENT_GAP : 0);
            // Bottom segment: everything banked before it.
            const priorH = baseline - yPriorTop;

            const isHover = hover === i;
            const isLast = i === data.length - 1;

            return (
              <g
                key={d.year}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(i)}
                onBlur={() => setHover(null)}
                tabIndex={0}
                role="listitem"
                aria-label={`Year ${d.year}: $${d.cumulative.toLocaleString()} thousand saved to date`}
                className="cursor-pointer outline-none"
                style={{ opacity: hover === null || isHover ? 1 : 0.55 }}
              >
                {/* Hit target wider than the mark */}
                <rect
                  x={PAD.left + band * i}
                  y={PAD.top}
                  width={band}
                  height={PLOT_H}
                  fill="transparent"
                />

                {prior > 0 && (
                  <rect
                    x={x}
                    y={yPriorTop}
                    width={barW}
                    height={priorH}
                    className="fill-gold-600"
                  />
                )}

                <path
                  d={topRoundedPath(x, yTotal, barW, Math.max(topH, 2), 4)}
                  className="fill-gold-400"
                />

                {/* Direct-label the endpoint only — never every column. */}
                {(isLast || isHover) && (
                  <text
                    x={cx}
                    y={yTotal - 12}
                    textAnchor="middle"
                    className="fill-cream-100 text-[15px] font-semibold"
                  >
                    ${(d.cumulative / 1000).toFixed(2)}M
                  </text>
                )}

                <text
                  x={cx}
                  y={H - PAD.bottom + 26}
                  textAnchor="middle"
                  className={
                    isHover
                      ? "fill-cream-100 text-[13px] font-semibold"
                      : "fill-[rgba(251,248,242,0.45)] text-[13px]"
                  }
                >
                  Yr {d.year}
                </text>
              </g>
            );
          })}

          {/* Baseline */}
          <line
            x1={PAD.left}
            y1={yOf(0)}
            x2={W - PAD.right}
            y2={yOf(0)}
            stroke="rgba(251,248,242,0.25)"
            strokeWidth="1"
          />
        </svg>

      </div>

      {/* Identity is never colour-alone: the same data, as a table. */}
      <details className="mt-6 group">
        <summary className="cursor-pointer text-[0.8125rem] text-cream-100/50 transition-colors hover:text-gold-400">
          View as a table
        </summary>
        <table className="tabular mt-4 w-full max-w-md text-left text-[0.875rem]">
          <thead>
            <tr className="border-b border-cream-100/15 text-cream-100/50">
              <th scope="col" className="py-2 pr-4 font-medium">Year</th>
              <th scope="col" className="py-2 pr-4 font-medium">Saved that year</th>
              <th scope="col" className="py-2 font-medium">Cumulative</th>
            </tr>
          </thead>
          <tbody className="text-cream-100/80">
            {data.map((d) => (
              <tr key={d.year} className="border-b border-cream-100/8">
                <td className="py-2 pr-4">{d.year}</td>
                <td className="py-2 pr-4">${d.annual.toLocaleString()}K</td>
                <td className="py-2">${d.cumulative.toLocaleString()}K</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  );
}
