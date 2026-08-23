import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/**
 * The single argument the whole brand rests on: a recurring dollar of opex
 * is not worth a dollar — it is worth a dollar capitalised.
 */
export function CapRateMath() {
  const steps = [
    {
      value: "$1",
      label: "of recurring opex removed",
      note: "A billing error corrected once, then gone for good.",
    },
    {
      value: "$1",
      label: "of permanent NOI",
      note: "It never comes back, so it underwrites as permanent.",
    },
    {
      value: "$18.18",
      label: "of asset value at a 5.5 cap",
      note: "The same dollar, capitalised at your own exit assumption.",
    },
  ];

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-display text-[2rem] font-black leading-[1.08] tracking-[-0.03em] text-ink-800 sm:text-[2.75rem]">
                You don&rsquo;t need another building.
                <span className="block text-gold-700">
                  You need this one to earn more.
                </span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-500">
                Acquiring NOI is expensive, slow and competitive. Recovering
                NOI you are already generating — and quietly handing to a
                utility — costs you nothing and takes ninety days.
              </p>
              <p className="mt-4 leading-relaxed text-ink-500">
                This is the entire argument. A recurring expense reduction is
                not a rebate. It is a permanent change to the income statement,
                and it capitalises into value at whatever cap rate you underwrite
                the asset at.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-3">
              {steps.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.1}>
                  <div className="relative h-full rounded-2xl border border-ink-800/8 bg-cream-50 p-6">
                    {i < steps.length - 1 && (
                      <ArrowRight
                        className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-gold-600 sm:block"
                        aria-hidden="true"
                      />
                    )}
                    <div
                      className={`font-sans text-[2.5rem] font-semibold leading-none tracking-[-0.04em] ${
                        i === steps.length - 1 ? "text-gold-700" : "text-ink-800"
                      }`}
                    >
                      {s.value}
                    </div>
                    <p className="mt-3 font-medium leading-snug text-ink-800">
                      {s.label}
                    </p>
                    <p className="mt-2 text-[0.8125rem] leading-relaxed text-ink-400">
                      {s.note}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <p className="mt-6 border-l-2 border-gold-400 pl-5 text-[0.9375rem] leading-relaxed text-ink-500">
                Across a portfolio the arithmetic stops being abstract quickly.
                Six figures of recovered annual expense on a mid-sized book is
                seven figures of value — created without a shovel, a permit, or
                a dollar of capital.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
