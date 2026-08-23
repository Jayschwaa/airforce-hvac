import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatTile } from "@/components/ui/StatTile";
import { Reveal } from "@/components/ui/Reveal";
import { CompoundingChart } from "@/components/sections/CompoundingChart";
import { IllustrativeNotice } from "@/components/sections/IllustrativeNotice";
import { TestimonialStrip } from "@/components/sections/TestimonialStrip";
import { CTABand } from "@/components/sections/CTABand";
import { HEADLINE_STATS, CASE_STUDIES } from "@/data/results";

export const metadata: Metadata = {
  title: "Results",
  description:
    "How findings are reported: one-time refunds, annual run-rate reductions, NOI lift in basis points, and the asset value that recurring saving creates at your cap rate.",
  alternates: { canonical: "/results" },
};

export default function ResultsPage() {
  return (
    <>
      <section className="bg-ink-900 py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <SectionHeading
              as="h1"
              tone="light"
              label="Results"
              heading="Findings, reported the way you underwrite."
              subtitle="Not a spreadsheet of anomalies. Every engagement closes with four numbers: what we recovered, what we removed permanently, what that does to NOI, and what it is worth at your cap rate."
            />
          </div>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {HEADLINE_STATS.map((s) => (
              <StatTile
                key={s.label}
                tone="light"
                label={s.label}
                value={s.value}
                prefix={"prefix" in s ? s.prefix : undefined}
                suffix={s.suffix}
                delta={s.delta}
                trend={s.trend}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <IllustrativeNotice className="max-w-3xl" />
        </Container>
      </section>

      {/* Case studies */}
      <section className="pb-8 pt-10 sm:pb-12">
        <Container>
          <div className="max-w-2xl">
            <SectionHeading
              label="Case studies"
              heading="Three engagements, start to finish."
            />
          </div>

          <div className="mt-14 space-y-6">
            {CASE_STUDIES.map((cs) => (
              <Reveal key={cs.headline}>
                <article className="overflow-hidden rounded-2xl border border-ink-800/10 bg-cream-50">
                  <div className="grid lg:grid-cols-12">
                    <div className="border-b border-ink-800/8 p-8 sm:p-10 lg:col-span-7 lg:border-b-0 lg:border-r">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <span className="rounded-full bg-ink-800 px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-wider text-gold-400">
                          {cs.sector}
                        </span>
                        <span className="text-[0.8125rem] text-ink-400">{cs.scale}</span>
                      </div>

                      <h3 className="mt-5 font-display text-2xl font-black leading-tight tracking-[-0.02em] text-ink-800 sm:text-[1.75rem]">
                        {cs.headline}
                      </h3>

                      <div className="mt-7 space-y-5">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-ink-400">
                            The situation
                          </h4>
                          <p className="mt-2.5 leading-relaxed text-ink-600">
                            {cs.problem}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-ink-400">
                            What we did
                          </h4>
                          <p className="mt-2.5 leading-relaxed text-ink-600">
                            {cs.found}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-cream-200/50 p-8 sm:p-10 lg:col-span-5">
                      <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-ink-400">
                        The four numbers
                      </h4>
                      <dl className="mt-6 space-y-6">
                        {cs.metrics.map((m, i) => (
                          <div key={m.label}>
                            <dt className="text-[0.8125rem] text-ink-500">{m.label}</dt>
                            <dd
                              className={`mt-1 font-sans text-[1.75rem] font-semibold leading-none tracking-[-0.04em] ${
                                i === cs.metrics.length - 1
                                  ? "text-gold-700"
                                  : "text-ink-800"
                              }`}
                            >
                              {m.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Compounding — the chart lives on ink, where gold clears contrast. */}
      <section className="mt-12 bg-ink-900 py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                tone="light"
                label="The part people miss"
                heading="A finding is an annuity, not a cheque."
                subtitle="Owners instinctively price a recovery as a one-time event. It is not. Once a tariff is corrected or a contract re-cut, the saving repeats for as long as you hold the asset — and then capitalises into the exit on top."
              />
              <p className="mt-6 leading-relaxed text-cream-100/55">
                That is why this work underwrites so unusually well. There is no
                capital at risk, no execution risk, and no ramp. The only
                question is whether the money is there — and it is, in nine out
                of ten first-time audits.
              </p>
            </div>

            <div className="lg:col-span-7">
              <CompoundingChart />
            </div>
          </div>
        </Container>
      </section>

      <TestimonialStrip />
      <CTABand />
    </>
  );
}
