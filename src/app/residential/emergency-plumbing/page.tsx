import type { Metadata } from "next";
import Link from "next/link";
import {
  Siren,
  Waves,
  Flame,
  Gauge,
  ShowerHead,
  Clock,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "24/7 Emergency Plumbing | South Florida | Air Force HVAC",
  description:
    "Burst pipe, sewage backup, or no hot water? Air Force HVAC provides true 24/7 emergency plumbing across Miami-Dade, Broward & Palm Beach Counties with no overtime charges for Flight Club members.",
};

const emergencies = [
  {
    icon: Waves,
    title: "Burst or Leaking Pipes",
    description:
      "Every minute a burst pipe runs unaddressed adds to the water damage. We dispatch quickly and can isolate the affected section to stop the flow while repairs are made.",
  },
  {
    icon: ShowerHead,
    title: "Sewage Backups & Overflows",
    description:
      "A sewage backup is both a plumbing problem and a health hazard. We clear the blockage, inspect the line, and help you understand what caused it.",
  },
  {
    icon: Flame,
    title: "Water Heater Failures",
    description:
      "No hot water, a leaking tank, or a unit making unusual noises — we diagnose the issue on the spot and can often repair or replace the same day.",
  },
  {
    icon: Gauge,
    title: "No Water or Low Pressure",
    description:
      "Sudden loss of water pressure or a total outage can point to anything from a failed valve to a major line break. We track down the cause fast.",
  },
];

const faqs = [
  {
    question: "Is your emergency plumbing service really available 24/7?",
    answer:
      "Yes — nights, weekends, and holidays included. Plumbing emergencies don't wait for business hours, and neither do we.",
  },
  {
    question: "How quickly can someone get to my home?",
    answer:
      "Response times vary by location and current call volume, but we prioritize active emergencies like burst pipes and sewage backups and dispatch the nearest available technician right away.",
  },
  {
    question: "What should I do while I'm waiting for a technician to arrive?",
    answer:
      "If you can safely access it, shut off the water at the main valve to limit damage, and move any valuables away from the affected area. Avoid using electrical outlets or appliances near standing water.",
  },
  {
    question: "Do Flight Club members get priority during emergencies?",
    answer:
      "Yes. Flight Club members receive priority scheduling on emergency calls and are not charged overtime rates for after-hours service, which can otherwise add significantly to an emergency repair bill.",
  },
  {
    question: "What if the emergency has already caused water damage?",
    answer:
      "We stop the source first. If the damage is extensive, our sister company, United Water Restoration Group, handles drying, mold prevention, and full restoration, so you're not coordinating two separate companies during an already stressful situation.",
  },
];

export default function EmergencyPlumbingPage() {
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
            &gt; <span className="text-navy-500">Emergency Plumbing</span>
          </nav>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2">
            <Siren className="h-4 w-4 text-red-500" />
            <span className="text-sm font-semibold tracking-wide text-red-600">
              24/7 EMERGENCY RESPONSE
            </span>
          </div>
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
            Emergency Plumbing Service
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            Burst pipes and sewage backups don&apos;t keep business hours, and
            neither do we. Our licensed plumbers are available around the
            clock across Miami-Dade, Broward, and Palm Beach Counties.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href={PHONE_HREF} size="lg">
              Call Now: {PHONE}
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Request Service
            </Button>
          </div>
        </Container>
      </section>

      {/* Emergencies Handled */}
      <section className="py-20">
        <Container>
          <SectionHeading
            label="What We Handle"
            heading="Plumbing Emergencies We Respond To"
            centered
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {emergencies.map((item) => (
              <Card key={item.title} className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                  <item.icon className="h-6 w-6 text-cyan-500" />
                </div>
                <h3 className="font-rubik text-lg font-bold text-navy-500">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Speed Matters */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
            <Clock className="h-10 w-10 text-cyan-500" />
            <h2 className="font-rubik text-2xl font-bold text-navy-500">
              The First Few Hours Matter Most
            </h2>
            <p className="text-gray-600">
              Water damage compounds quickly — what starts as a wet floor can
              turn into warped subfloor, mold growth, and damaged drywall
              within a day or two. Getting a licensed plumber on-site quickly
              to stop the source is the single biggest factor in keeping
              repair costs down.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <Container>
          <SectionHeading
            label="FAQ"
            heading="Emergency Plumbing Questions"
            centered
          />
          <div className="mx-auto mt-10 max-w-3xl">
            <Accordion items={faqs} />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-cyan-500 to-cyan-600 py-16">
        <Container className="text-center">
          <h2 className="font-rubik text-3xl font-bold text-white">
            Plumbing Emergency Right Now?
          </h2>
          <p className="mt-4 text-white/80">
            Don&apos;t wait for it to get worse. Call us any time, day or night.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href={PHONE_HREF}
              variant="white"
              size="lg"
            >
              Call {PHONE}
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-cyan-600"
            >
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
