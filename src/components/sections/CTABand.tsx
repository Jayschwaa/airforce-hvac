import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export function CTABand({
  heading = "Start with one building.",
  body = "Pick the asset you like least. We will audit it end to end, at our cost, and show you what is in it. If there is nothing there, you will have an independent confirmation that your opex is clean — and no invoice.",
  cta = "Get your free analysis",
}: {
  heading?: string;
  body?: string;
  cta?: string;
}) {
  return (
    <section className="bg-forest-800 py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-[2rem] font-black leading-[1.08] tracking-[-0.03em] text-cream-100 sm:text-[2.75rem]">
              {heading}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream-100/65">
              {body}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:flex-col lg:items-end">
            <Button href="/contact" variant="primary" size="lg">
              {cta}
            </Button>
            <Button href={PHONE_HREF} variant="outlineLight" size="lg">
              <span className="tabular">{PHONE}</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
