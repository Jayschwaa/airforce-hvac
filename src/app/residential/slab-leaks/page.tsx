import type { Metadata } from "next";
import Link from "next/link";
import {
  Waves,
  Thermometer,
  Layers,
  Clock,
  Home,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Slab Leak Detection & Repair | South Florida | Air Force HVAC",
  description:
    "Slab leaks are common in South Florida's shifting, limestone-heavy soil. Air Force HVAC locates and repairs slab leaks with minimal disruption to your floors and foundation.",
};

const process = [
  {
    icon: Waves,
    title: "Acoustic Listening",
    description:
      "We start by listening for the sound signature of pressurized water escaping underground — a fast, non-destructive first step that narrows down the search area.",
  },
  {
    icon: Thermometer,
    title: "Thermal Imaging",
    description:
      "Infrared cameras scan your flooring for warm spots created by hot water lines leaking beneath the slab, giving us a visual map to cross-reference with the acoustic data.",
  },
  {
    icon: Layers,
    title: "Pinpoint Confirmation",
    description:
      "Once the readings agree, we mark the smallest possible area for access — protecting the rest of your flooring and foundation from unnecessary disruption.",
  },
];

const repairOptions = [
  {
    title: "Spot Repair",
    description:
      "When the pipe is otherwise in good condition, we access the exact leak point, repair or replace that section, and restore the flooring above it.",
  },
  {
    title: "Reroute",
    description:
      "For pipes with limited remaining lifespan, we can reroute the water line through walls or the attic instead of the slab, avoiding future slab work entirely.",
  },
  {
    title: "Full Repipe",
    description:
      "If your home's original piping is nearing the end of its life throughout, a full repipe addresses the root cause instead of treating one leak at a time.",
  },
];

const warningSigns = [
  "A warm spot on the floor that wasn't there before",
  "Water bills climbing without a clear reason",
  "The sound of water running with everything shut off",
  "New cracks in flooring, tile grout, or the foundation",
  "Falling water pressure throughout the home",
  "Mold or a musty smell coming up through carpet or baseboards",
];

const faqs = [
  {
    question: "How urgent is a suspected slab leak?",
    answer:
      "Treat it as time-sensitive. A slab leak left unaddressed can undermine flooring, encourage mold growth, and in some cases affect the foundation itself. The sooner it's confirmed, the smaller and less expensive the repair tends to be.",
  },
  {
    question: "Will fixing a slab leak mean tearing up my whole floor?",
    answer:
      "Not usually. Because we confirm the leak's location with acoustic and thermal equipment before any digging starts, most repairs only require opening a small, targeted section of flooring rather than an entire room.",
  },
  {
    question: "Why are slab leaks so common in South Florida specifically?",
    answer:
      "A combination of factors is at play: shifting, limestone-heavy soil, high water tables, and copper supply lines that are now decades old in many homes built between the 1970s and 1990s. Mineral content in the water accelerates pipe corrosion from the inside, while ground movement stresses the pipe from the outside.",
  },
  {
    question: "Does homeowner's insurance cover slab leak repair?",
    answer:
      "Coverage varies by policy — some cover the cost to access and repair the leak but not the underlying pipe replacement, while others exclude slab leaks entirely. We provide detailed documentation of our findings that you can submit with a claim, but recommend confirming your specific coverage with your insurer.",
  },
];

export default function SlabLeaksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-white via-cyan-50/50 to-white py-20 md:py-28 border-b border-gray-100">
        <Container>
          <nav className="mb-6 text-sm text-gray-400">
            <Link href="/" className="transition-colors hover:text-cyan-500">
              Home
            </Link>{" "}
            &gt;{" "}
            <Link
              href="/residential"
              className="transition-colors hover:text-cyan-500"
            >
              Residential
            </Link>{" "}
            &gt; <span className="text-navy-500">Slab Leaks</span>
          </nav>
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
            Slab Leak Detection &amp; Repair
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            A leak hidden beneath your home&apos;s foundation can quietly cause
            major damage before it&apos;s ever noticed. We locate slab leaks
            precisely and repair them with the least disruption possible to
            your floors and foundation.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Schedule Service
            </Button>
            <Button href={PHONE_HREF} variant="outline" size="lg">
              Call {PHONE}
            </Button>
          </div>
        </Container>
      </section>

      {/* Warning Signs */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading
            label="Know the Signs"
            heading="Signs Your Home May Have a Slab Leak"
            centered
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {warningSigns.map((sign) => (
              <div
                key={sign}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4"
              >
                <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-500" />
                <span className="text-gray-700">{sign}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-20">
        <Container>
          <SectionHeading
            label="Our Process"
            heading="How We Pinpoint a Slab Leak"
            subtitle="We confirm the location before any concrete or flooring is disturbed."
            centered
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {process.map((step) => (
              <Card key={step.title} className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                  <step.icon className="h-6 w-6 text-cyan-500" />
                </div>
                <h3 className="font-rubik text-lg font-bold text-navy-500">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Repair Options */}
      <section className="py-20 bg-gray-50">
        <Container>
          <SectionHeading
            label="Repair Options"
            heading="The Right Fix for Your Pipe's Condition"
            centered
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {repairOptions.map((opt) => (
              <Card key={opt.title} className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                  <Home className="h-6 w-6 text-cyan-500" />
                </div>
                <h3 className="font-rubik text-lg font-bold text-navy-500">
                  {opt.title}
                </h3>
                <p className="mt-2 text-gray-600">{opt.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <Container>
          <SectionHeading label="FAQ" heading="Slab Leak Questions" centered />
          <div className="mx-auto mt-10 max-w-3xl">
            <Accordion items={faqs} />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-cyan-500 to-cyan-600 py-16">
        <Container className="text-center">
          <h2 className="font-rubik text-3xl font-bold text-white">
            Don&apos;t Wait on a Suspected Slab Leak
          </h2>
          <p className="mt-4 text-white/80">
            Early detection means a smaller repair. Schedule a visit or call
            us now.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/contact"
              variant="white"
              size="lg"
            >
              Contact Us
            </Button>
            <Button
              href={PHONE_HREF}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-cyan-600"
            >
              Call {PHONE}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
