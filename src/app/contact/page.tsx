import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ui/ContactForm";
import { PROCESS } from "@/data/process";
import {
  PHONE,
  PHONE_HREF,
  EMAIL,
  ADDRESS,
  HOURS,
  COVERAGE,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start with one building. We audit it end to end at our cost and show you what is in it. No retainer, no capital outlay, no fee unless we find money.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink-900 py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <SectionHeading
              as="h1"
              tone="light"
              label="Contact"
              heading="Start with one building."
              subtitle="Pick the asset you like least — the one where the numbers have never quite made sense. We will audit it end to end at our cost. You will know inside thirty days whether there is anything there."
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-ink-800/10 bg-cream-50 p-8">
                <h2 className="font-display text-xl font-bold tracking-tight text-ink-800">
                  Or reach us directly
                </h2>

                <div className="mt-6 space-y-5 text-[0.9375rem]">
                  <a
                    href={PHONE_HREF}
                    className="flex items-start gap-3.5 transition-colors hover:text-gold-700"
                  >
                    <Phone className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-600" aria-hidden="true" />
                    <span>
                      <span className="block text-[0.75rem] font-bold uppercase tracking-wider text-ink-400">
                        Phone
                      </span>
                      <span className="tabular text-ink-800">{PHONE}</span>
                    </span>
                  </a>

                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-start gap-3.5 transition-colors hover:text-gold-700"
                  >
                    <Mail className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-600" aria-hidden="true" />
                    <span>
                      <span className="block text-[0.75rem] font-bold uppercase tracking-wider text-ink-400">
                        Email
                      </span>
                      <span className="text-ink-800">{EMAIL}</span>
                    </span>
                  </a>

                  <p className="flex items-start gap-3.5">
                    <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-600" aria-hidden="true" />
                    <span>
                      <span className="block text-[0.75rem] font-bold uppercase tracking-wider text-ink-400">
                        Office
                      </span>
                      <span className="text-ink-800">
                        {ADDRESS.street}, {ADDRESS.unit}
                        <br />
                        {ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}
                      </span>
                    </span>
                  </p>

                  <p className="flex items-start gap-3.5">
                    <Clock className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-600" aria-hidden="true" />
                    <span>
                      <span className="block text-[0.75rem] font-bold uppercase tracking-wider text-ink-400">
                        Hours
                      </span>
                      <span className="text-ink-800">{HOURS.display}</span>
                      <span className="mt-0.5 block text-[0.8125rem] text-ink-400">
                        {HOURS.description}
                      </span>
                    </span>
                  </p>
                </div>

                <p className="mt-7 border-t border-ink-800/10 pt-5 text-[0.8125rem] text-ink-400">
                  {COVERAGE}
                </p>
              </div>

              {/* What happens next */}
              <div className="mt-6 rounded-2xl bg-ink-800 p-8">
                <h2 className="font-display text-xl font-bold tracking-tight text-cream-100">
                  What happens next
                </h2>
                <ol className="mt-6 space-y-5">
                  {PROCESS.slice(0, 3).map((step) => (
                    <li key={step.n} className="flex gap-4">
                      <span className="tabular shrink-0 font-sans text-[0.8125rem] font-bold text-gold-400">
                        {step.n}
                      </span>
                      <span>
                        <span className="block font-medium leading-snug text-cream-100">
                          {step.title}
                        </span>
                        <span className="mt-1 block text-[0.8125rem] text-cream-100/50">
                          {step.duration}
                        </span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
