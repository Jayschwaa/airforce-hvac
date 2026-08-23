import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PROCESS } from "@/data/process";

export function ProcessStrip() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <SectionHeading
              label="How it works"
              heading="Two hours of your time. Ninety days to a number."
              subtitle="The reason internal attempts at this stall is always the same — assembling the records. So we do that part."
            />
          </div>
          <Button href="/how-it-works" variant="outline" className="shrink-0">
            See the full process
          </Button>
        </div>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS.slice(0, 3).map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.n} delay={i * 0.1}>
                <li className="relative border-t-2 border-forest-800/10 pt-6">
                  <span
                    className="absolute -top-px left-0 h-0.5 w-12 bg-gold-400"
                    aria-hidden="true"
                  />
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-gold-600" aria-hidden="true" />
                    <span className="tabular text-[0.8125rem] font-bold text-forest-300">
                      {step.n}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold leading-snug tracking-tight text-forest-800">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[0.8125rem] font-semibold uppercase tracking-wider text-gold-700">
                    {step.duration}
                  </p>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-forest-500">
                    {step.body}
                  </p>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
