import { Check } from "lucide-react";

type Row = {
  code: string;
  desc: string;
  amount: string;
  /** The row we caught. */
  flagged?: boolean;
  correct?: string;
};

const ROWS: readonly Row[] = [
  { code: "SC-9  ", desc: "General large — demand", amount: "$38,412.00" },
  { code: "ADJ-04", desc: "Merchant function charge", amount: "$1,206.44" },
  {
    code: "SWR-01",
    desc: "Sewer, 100% of metered intake",
    amount: "$14,880.20",
    flagged: true,
    correct: "$9,142.06",
  },
  { code: "GRT-02", desc: "Gross receipts tax", amount: "$2,940.18" },
  { code: "TEL-11", desc: "Analog lines ×38", amount: "$3,116.00" },
];

/**
 * The hero artwork: a utility statement with one line caught. Decorative —
 * the amounts are illustrative and the whole block is hidden from
 * assistive tech, since the point it makes is made in the prose beside it.
 */
export function FoundLineItem() {
  return (
    <div aria-hidden="true" className="relative mx-auto max-w-md select-none">
      <div className="rounded-2xl border border-cream-100/12 bg-ink-800 p-7 shadow-2xl">
        <div className="flex items-start justify-between border-b border-cream-100/10 pb-5">
          <div>
            <p className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-cream-100/40">
              Statement · 24-month review
            </p>
            <p className="mt-1.5 font-display text-lg font-bold tracking-tight text-cream-100">
              1,240 units · 9 buildings
            </p>
          </div>
          <span className="rounded-full bg-gold-400/15 px-2.5 py-1 text-[0.6875rem] font-bold uppercase tracking-wider text-gold-400">
            Audited
          </span>
        </div>

        <ul className="tabular mt-5 space-y-3.5 text-[0.8125rem]">
          {ROWS.map((row) => (
            <li key={row.code} className="flex items-baseline justify-between gap-4">
              <span className="flex min-w-0 items-baseline gap-3">
                <span
                  className={
                    row.flagged
                      ? "shrink-0 font-semibold text-gold-400"
                      : "shrink-0 text-cream-100/30"
                  }
                >
                  {row.code}
                </span>
                <span
                  className={
                    row.flagged
                      ? "truncate font-medium text-cream-100"
                      : "truncate text-cream-100/45"
                  }
                >
                  {row.desc}
                </span>
              </span>

              {row.flagged ? (
                <span className="flex shrink-0 items-baseline gap-2">
                  <span className="text-cream-100/35 line-through">{row.amount}</span>
                  <span className="font-semibold text-gold-400">{row.correct}</span>
                </span>
              ) : (
                <span className="shrink-0 text-cream-100/45">{row.amount}</span>
              )}
            </li>
          ))}
        </ul>

        {/* Right-aligned so the badge below can overlap the left edge
            without ever covering this line. */}
        <div className="mt-6 border-t border-cream-100/10 pt-5 text-right text-[0.8125rem] text-cream-100/50">
          Never filed · 11 years
        </div>
      </div>

      {/* The result, pinned to the corner of the statement. */}
      <div className="absolute -bottom-8 -left-4 rounded-2xl bg-gold-400 px-6 py-4 shadow-xl sm:-left-10">
        <div className="flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-ink-900/65">
          <Check className="h-3.5 w-3.5" />
          Recovered
        </div>
        <div className="tabular mt-1 font-sans text-3xl font-semibold leading-none tracking-[-0.04em] text-ink-900">
          $612,000
        </div>
        <div className="mt-1 text-[0.75rem] text-ink-900/65">
          + $188K every year after
        </div>
      </div>
    </div>
  );
}
