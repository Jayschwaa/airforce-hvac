import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FoundLineItem } from "./FoundLineItem";
import { PHONE, PHONE_HREF, FEE_MODEL } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-forest-900">
      {/* Warm bloom behind the artwork, kept well under the text. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-[-20%] h-[36rem] w-[36rem] rounded-full bg-gold-400/[0.07] blur-3xl"
      />

      <Container className="relative">
        <div className="grid items-center gap-16 py-20 sm:py-24 lg:grid-cols-12 lg:gap-12 lg:py-28">
          <div className="min-w-0 lg:col-span-6">
            <p className="inline-flex items-center gap-2.5 rounded-full border border-cream-100/15 px-4 py-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-cream-100/70">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" aria-hidden="true" />
              Operating expense recovery
            </p>

            <h1 className="mt-7 font-display text-[2.75rem] font-black leading-[1.02] tracking-[-0.035em] text-cream-100 sm:text-6xl lg:text-[4.25rem]">
              Same buildings.
              <span className="block text-gold-400">Better returns.</span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-relaxed text-cream-100/70">
              Your portfolio is overpaying on lines nobody has opened in years —
              tariffs, sewer credits, dead circuits, escalating vendor
              contracts. We find it, we recover it, and we hand the difference
              back to NOI.
            </p>

            <p className="mt-4 max-w-lg font-display text-xl font-bold italic tracking-tight text-cream-100">
              Found money for your bottom line.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="primary" size="lg">
                Get your free analysis
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href={PHONE_HREF} variant="outlineLight" size="lg">
                <span className="tabular">{PHONE}</span>
              </Button>
            </div>

            <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-2.5 text-[0.875rem] text-cream-100/55">
              {FEE_MODEL.bullets.slice(0, 3).map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-gold-400" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* min-w-0: without it the grid track inherits min-width:auto and
              the statement card forces the column to its own 448px, which the
              section then clips on narrow viewports. */}
          <div className="min-w-0 lg:col-span-6">
            <FoundLineItem />
          </div>
        </div>
      </Container>
    </section>
  );
}
