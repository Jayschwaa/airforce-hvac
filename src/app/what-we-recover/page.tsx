import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/sections/CTABand";
import { RECOVERY_CATEGORIES } from "@/data/recovery";

export const metadata: Metadata = {
  title: "What We Recover",
  description:
    "The eight operating expense categories that produce findings: electric and gas, water and sewer, waste, telecom, vendor service contracts, insurance, processing fees and unclaimed incentives.",
  alternates: { canonical: "/what-we-recover" },
};

export default function WhatWeRecoverPage() {
  return (
    <>
      <section className="bg-ink-900 py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <SectionHeading
              as="h1"
              tone="light"
              label="What we recover"
              heading="Every line on the schedule, re-rated against what it should have been."
              subtitle="An audit is not a search for waste. It is a reconstruction: we re-price twenty-four to thirty-six months of invoices against the tariff, contract and meter data that were actually in force on each of those dates. Where the two disagree, there is money."
            />
          </div>
        </Container>
      </section>

      {/* Index */}
      <section className="border-b border-ink-800/8 bg-cream-200/50 py-10">
        <Container>
          <ul className="flex flex-wrap gap-x-3 gap-y-2.5">
            {RECOVERY_CATEGORIES.map((c) => (
              <li key={c.slug}>
                <a
                  href={`#${c.slug}`}
                  className="inline-flex rounded-full border border-ink-800/15 px-4 py-1.5 text-[0.875rem] text-ink-600 transition-colors hover:border-gold-500 hover:bg-cream-50 hover:text-ink-800"
                >
                  {c.title}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <div className="divide-y divide-ink-800/8">
        {RECOVERY_CATEGORIES.map((c, i) => {
          const Icon = c.icon;
          return (
            <section
              key={c.slug}
              id={c.slug}
              className="scroll-mt-24 py-16 sm:py-20"
            >
              <Container>
                <Reveal>
                  <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-5">
                      <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-800">
                          <Icon className="h-5 w-5 text-gold-400" aria-hidden="true" />
                        </span>
                        <span className="tabular text-[0.8125rem] font-bold text-ink-300">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h2 className="mt-5 font-display text-[1.75rem] font-black leading-tight tracking-[-0.03em] text-ink-800 sm:text-[2rem]">
                        {c.title}
                      </h2>

                      <p className="mt-4 text-lg leading-relaxed text-ink-500">
                        {c.hook}
                      </p>

                      <p className="mt-6 inline-flex rounded-full bg-gold-100 px-4 py-2 text-[0.875rem] font-semibold text-gold-800">
                        Typically {c.typical}
                      </p>
                    </div>

                    <div className="lg:col-span-7">
                      <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-ink-400">
                        What we actually find
                      </h3>
                      <ul className="mt-5 space-y-3.5">
                        {c.findings.map((f) => (
                          <li key={f} className="flex gap-3.5">
                            <span
                              className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                              aria-hidden="true"
                            />
                            <span className="leading-relaxed text-ink-600">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </Container>
            </section>
          );
        })}
      </div>

      <CTABand
        heading="Not sure which line is the problem?"
        body="That is the normal starting position, and it is fine. The audit is what tells you. Give us one building and we will come back with a ranked list of what is wrong with it."
      />
    </>
  );
}
