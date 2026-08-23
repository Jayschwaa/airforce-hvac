"use client";

import { useId, useMemo, useState } from "react";
import { Calculator, Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { currency, compactCurrency } from "@/lib/utils";

type SliderProps = {
  label: string;
  hint: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
};

function Slider({
  label,
  hint,
  min,
  max,
  step,
  value,
  onChange,
  format,
}: SliderProps) {
  const id = useId();
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-[0.9375rem] font-medium text-cream-100">
          {label}
        </label>
        <span className="tabular font-sans text-lg font-semibold text-gold-400">
          {format(value)}
        </span>
      </div>

      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-describedby={`${id}-hint`}
        className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full outline-none
                   focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-4 focus-visible:ring-offset-forest-900
                   [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none
                   [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gold-400
                   [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(232,179,60,0.2)]
                   [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full
                   [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-gold-400"
        style={{
          background: `linear-gradient(to right, var(--color-gold-400) 0%, var(--color-gold-400) ${pct}%, rgba(251,248,242,0.16) ${pct}%, rgba(251,248,242,0.16) 100%)`,
        }}
      />

      <p id={`${id}-hint`} className="mt-2 text-[0.8125rem] text-cream-100/45">
        {hint}
      </p>
    </div>
  );
}

function Output({
  label,
  value,
  note,
  emphasis = false,
}: {
  label: string;
  value: string;
  note: string;
  emphasis?: boolean;
}) {
  return (
    <div
      className={
        emphasis
          ? "rounded-2xl bg-gold-400 p-6 text-forest-900"
          : "rounded-2xl border border-cream-100/12 p-6"
      }
    >
      <div
        className={
          emphasis
            ? "text-xs font-bold uppercase tracking-[0.14em] text-forest-900/65"
            : "text-xs font-bold uppercase tracking-[0.14em] text-cream-100/50"
        }
      >
        {label}
      </div>
      <div
        className={`mt-2 font-sans text-[2.25rem] font-semibold leading-none tracking-[-0.04em] ${
          emphasis ? "text-forest-900" : "text-cream-100"
        }`}
      >
        {value}
      </div>
      <div
        className={`mt-2 text-[0.8125rem] leading-snug ${
          emphasis ? "text-forest-900/70" : "text-cream-100/45"
        }`}
      >
        {note}
      </div>
    </div>
  );
}

export function UpsideCalculator() {
  const [units, setUnits] = useState(1200);
  const [opexPerUnit, setOpexPerUnit] = useState(4200);
  const [recoveryPct, setRecoveryPct] = useState(7);
  const [capRate, setCapRate] = useState(5.5);

  const result = useMemo(() => {
    const controllableOpex = units * opexPerUnit;
    const annualSaving = controllableOpex * (recoveryPct / 100);
    // Back-billing typically reaches further than a single year, but not
    // uniformly — 1.4x the annual figure is the midpoint we actually see.
    const oneTimeRefund = annualSaving * 1.4;
    const valueCreated = annualSaving / (capRate / 100);
    const sevenYearCash = annualSaving * 7 + oneTimeRefund;

    return {
      controllableOpex,
      annualSaving,
      oneTimeRefund,
      valueCreated,
      sevenYearCash,
    };
  }, [units, opexPerUnit, recoveryPct, capRate]);

  return (
    <section className="bg-forest-900 py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <SectionHeading
            tone="light"
            label="The Upside Calculator"
            heading="Run the math on your own portfolio."
            subtitle="Four inputs you already know. The output is stated the way your investment committee states it — recurring cash, one-time recovery, and the value that recurring cash creates at your cap rate."
          />
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Inputs */}
          <div className="space-y-9">
            <Slider
              label="Units in the portfolio"
              hint="Or keys, for hospitality. Use doors, not buildings."
              min={100}
              max={10000}
              step={50}
              value={units}
              onChange={setUnits}
              format={(v) => v.toLocaleString()}
            />
            <Slider
              label="Controllable opex per unit"
              hint="Utilities, waste, telecom, service contracts and insurance — the lines we can actually open. Excludes taxes, debt service and payroll."
              min={2000}
              max={12000}
              step={100}
              value={opexPerUnit}
              onChange={setOpexPerUnit}
              format={(v) => `${currency(v)}/yr`}
            />
            <Slider
              label="Assumed recovery rate"
              hint="Across audited portfolios this lands between 4% and 11%. 7% is the midpoint — leave it there unless you have a reason."
              min={3}
              max={12}
              step={0.5}
              value={recoveryPct}
              onChange={setRecoveryPct}
              format={(v) => `${v}%`}
            />
            <Slider
              label="Your cap rate"
              hint="Used only to translate recurring savings into asset value."
              min={4}
              max={8}
              step={0.25}
              value={capRate}
              onChange={setCapRate}
              format={(v) => `${v.toFixed(2)}%`}
            />

            <div className="flex items-start gap-2.5 rounded-xl border border-cream-100/12 bg-cream-100/[0.03] p-4 text-[0.8125rem] leading-relaxed text-cream-100/50">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
              <p>
                An estimate built from midpoints, not a quote. Your actual
                findings depend on tariffs, contract terms and how long the
                errors have been running. The audit is what produces a number
                you can underwrite.
              </p>
            </div>
          </div>

          {/* Outputs */}
          <div>
            <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-cream-100/50">
              <Calculator className="h-4 w-4 text-gold-400" aria-hidden="true" />
              Estimated upside
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Output
                label="Recurring, every year"
                value={compactCurrency(result.annualSaving)}
                note={`On ${compactCurrency(result.controllableOpex)} of controllable opex`}
              />
              <Output
                label="One-time recovery"
                value={compactCurrency(result.oneTimeRefund)}
                note="Refunds and credits for prior over-billing"
              />
              <Output
                label="Value created"
                value={compactCurrency(result.valueCreated)}
                emphasis
                note={`What ${compactCurrency(result.annualSaving)} of permanent NOI is worth at a ${capRate.toFixed(2)} cap`}
              />
              <Output
                label="Cash over a 7-year hold"
                value={compactCurrency(result.sevenYearCash)}
                note="Recurring savings plus the initial recovery"
              />
            </div>

            <div className="mt-6 rounded-2xl border border-cream-100/12 p-6">
              <p className="font-display text-xl font-bold leading-snug tracking-tight text-cream-100">
                Cost to find out: nothing.
              </p>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-cream-100/55">
                We are paid from the savings we land. If the audit comes back
                clean, you have an independent confirmation that your opex is
                correct — and no invoice.
              </p>
              <Button href="/contact" variant="primary" className="mt-5">
                Start with one building
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
