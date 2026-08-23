import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ClientRoster } from "@/components/sections/ClientRoster";
import { CTABand } from "@/components/sections/CTABand";
import { SECTORS } from "@/data/sectors";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "Affordable and workforce housing, market-rate multifamily, hotels, office and mixed-use, retail, and venues. Why operating expense recovery matters differently in each.",
  alternates: { canonical: "/who-we-serve" },
};

export default function WhoWeServePage() {
  return (
    <>
      <section className="bg-ink-900 py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <SectionHeading
              as="h1"
              tone="light"
              label="Who we serve"
              heading="The same errors. Very different consequences."
              subtitle="A mis-filed sewer credit is worth the same dollars in a hotel as in a LIHTC deal. What differs is what those dollars do — cover a debt service ratio, protect a tenant escalation, or simply drop to the bottom line."
            />
          </div>
        </Container>
      </section>

      <ClientRoster heading="Portfolios we work across" />

      <div className="divide-y divide-ink-800/8">
        {SECTORS.map((sector, i) => {
          const Icon = sector.icon;
          return (
            <section key={sector.slug} id={sector.slug} className="scroll-mt-24 py-16 sm:py-20">
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
                        {sector.title}
                      </h2>
                    </div>

                    <div className="lg:col-span-7">
                      <p className="font-display text-xl font-semibold leading-snug tracking-tight text-ink-800">
                        {sector.thesis}
                      </p>
                      <ul className="mt-7 space-y-3.5">
                        {sector.points.map((p) => (
                          <li key={p} className="flex gap-3.5">
                            <span
                              className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                              aria-hidden="true"
                            />
                            <span className="leading-relaxed text-ink-600">{p}</span>
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
        heading="Your asset class isn't on the list?"
        body="The method does not change. If a building receives an invoice, that invoice can be wrong — and in our experience it usually is. Tell us what you own."
      />
    </>
  );
}
