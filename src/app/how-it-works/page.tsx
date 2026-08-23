import type { Metadata } from "next";
import { Lock, Clock, Users, BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { CTABand } from "@/components/sections/CTABand";
import { PROCESS } from "@/data/process";
import { FAQS } from "@/data/faqs";
import { FEE_MODEL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "One letter of authority, a 24–36 month forensic audit, a findings memo priced in owner terms, and recovery run to conclusion. Contingency-based: no fee unless we find money.",
  alternates: { canonical: "/how-it-works" },
};

const GUARANTEES = [
  {
    icon: BadgeCheck,
    title: "No fee unless we find money",
    body: "We are paid a share of savings and refunds that are actually realised. Not identified — realised.",
  },
  {
    icon: Clock,
    title: "Two hours of your time",
    body: "One signature, one hour reading the memo, and countersigning the filings. We do the rest.",
  },
  {
    icon: Users,
    title: "You approve every action",
    body: "The letter of authority lets us ask questions and file claims. It never lets us cancel, switch or commit.",
  },
  {
    icon: Lock,
    title: "Your data stays yours",
    body: "Access-controlled, used only for your engagement, never sold, and destroyed on request at the end of the term.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-ink-900 py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <SectionHeading
              as="h1"
              tone="light"
              label="How it works"
              heading="The hard part is getting the records. So we do that part."
              subtitle="Every owner has considered doing this internally. It stalls in the same place every time — nobody has thirty months of invoices from eleven vendors sitting in one folder. We go and get them."
            />
          </div>
        </Container>
      </section>

      {/* The steps */}
      <section className="py-20 sm:py-28">
        <Container>
          <ol className="space-y-px overflow-hidden rounded-2xl border border-ink-800/10 bg-ink-800/10">
            {PROCESS.map((step) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.n}>
                  <li className="grid gap-6 bg-cream-50 p-8 sm:p-10 lg:grid-cols-12 lg:gap-10">
                    <div className="lg:col-span-4">
                      <div className="flex items-center gap-4">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ink-800">
                          <Icon className="h-5 w-5 text-gold-400" aria-hidden="true" />
                        </span>
                        <span className="tabular font-sans text-3xl font-semibold tracking-[-0.04em] text-ink-200">
                          {step.n}
                        </span>
                      </div>
                      <p className="mt-5 text-[0.8125rem] font-bold uppercase tracking-wider text-gold-700">
                        {step.duration}
                      </p>
                    </div>

                    <div className="lg:col-span-8">
                      <h2 className="font-display text-2xl font-bold leading-snug tracking-tight text-ink-800">
                        {step.title}
                      </h2>
                      <p className="mt-4 leading-relaxed text-ink-500">{step.body}</p>
                      <p className="mt-5 border-l-2 border-gold-400 pl-4 text-[0.875rem] text-ink-600">
                        <span className="font-semibold text-ink-800">Your effort: </span>
                        {step.yourEffort}
                      </p>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </Container>
      </section>

      {/* The commercial model */}
      <section className="bg-ink-800 py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <SectionHeading
                tone="light"
                label="The arrangement"
                heading={FEE_MODEL.headline}
              />
              <p className="mt-6 text-lg leading-relaxed text-cream-100/65">
                {FEE_MODEL.detail}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {GUARANTEES.map((g) => {
                const Icon = g.icon;
                return (
                  <div
                    key={g.title}
                    className="rounded-2xl border border-cream-100/12 p-6"
                  >
                    <Icon className="h-5 w-5 text-gold-400" aria-hidden="true" />
                    <h3 className="mt-4 font-display text-lg font-bold leading-snug tracking-tight text-cream-100">
                      {g.title}
                    </h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-cream-100/55">
                      {g.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <SectionHeading
                label="Questions"
                heading="The ones we always get."
                subtitle="Usually asked in roughly this order."
              />
            </div>
            <div className="lg:col-span-8">
              <Accordion items={FAQS} />
            </div>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
