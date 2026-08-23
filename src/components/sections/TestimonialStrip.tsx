import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/data/results";

export function TestimonialStrip() {
  return (
    <section className="bg-cream-200/50 py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.quote} delay={i * 0.1}>
              <figure className="flex h-full flex-col">
                <Quote className="h-7 w-7 text-gold-400" aria-hidden="true" />
                <blockquote className="mt-5 flex-1 font-display text-xl font-semibold leading-snug tracking-tight text-ink-800">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-ink-800/10 pt-4 text-[0.875rem]">
                  <span className="block font-semibold text-ink-800">{t.name}</span>
                  <span className="text-ink-400">{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
