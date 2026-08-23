import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { RECOVERY_CATEGORIES } from "@/data/recovery";

export function RecoveryGrid() {
  return (
    <section className="bg-cream-200/50 py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <SectionHeading
            label="What we open"
            heading="Eight lines nobody has looked at in six years."
            subtitle="We do not guess where the money is. These are the categories that produce findings, in the order they usually produce them."
          />
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink-800/10 bg-ink-800/10 sm:grid-cols-2 lg:grid-cols-4">
          {RECOVERY_CATEGORIES.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.slug} delay={Math.min(i, 4) * 0.05}>
                <Link
                  href={`/what-we-recover#${c.slug}`}
                  className="group flex h-full flex-col bg-cream-50 p-7 transition-colors hover:bg-cream-100"
                >
                  <Icon
                    className="h-6 w-6 text-gold-600 transition-transform duration-300 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-ink-800">
                    {c.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-ink-500">
                    {c.short}
                  </p>
                  <p className="mt-5 flex items-center gap-1.5 text-[0.8125rem] font-semibold text-gold-700">
                    Typically {c.typical}
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
