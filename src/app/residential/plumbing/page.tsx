import type { Metadata } from "next";
import Link from "next/link";
import {
  Droplets,
  Flame,
  Search,
  Pipette,
  Wrench,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Residential Plumbing Services | Pipe Repair & Water Heaters | Air Force HVAC",
  description:
    "Licensed residential plumbing in South Florida. Pipe repair, repiping, water heater installation, leak detection, and drain cleaning. Same-day emergency service in Palm Beach & Broward Counties.",
};

const services = [
  {
    icon: Wrench,
    title: "Pipe Repair & Repiping",
    description:
      "Expert repair and full repiping for copper, PVC, CPVC, and PEX systems. Many older South Florida homes still have original galvanized or polybutylene pipes that are prone to leaks and corrosion \u2014 we replace them with modern, code-compliant materials.",
  },
  {
    icon: Flame,
    title: "Water Heater Installation & Repair",
    description:
      "Tank and tankless water heater service for every household size. We help you choose the right capacity and fuel type, handle permitting, and ensure your installation meets current Florida building codes.",
  },
  {
    icon: Search,
    title: "Leak Detection",
    description:
      "Non-invasive electronic and acoustic leak detection that pinpoints hidden leaks behind walls, under slabs, and in underground pipes. South Florida\u2019s limestone foundations and shifting soils make slab leaks especially common.",
  },
  {
    icon: Pipette,
    title: "Drain Cleaning",
    description:
      "Professional hydro-jetting and cable machine drain clearing for stubborn clogs. South Florida\u2019s root-heavy landscaping and older clay sewer lines often cause recurring backups that store-bought solutions cannot fix.",
  },
  {
    icon: Droplets,
    title: "Toilet & Fixture Repair",
    description:
      "Running toilets, dripping faucets, and faulty shut-off valves waste thousands of gallons per year. We repair or replace all brands and styles, from basic builders-grade to high-end fixtures.",
  },
  {
    icon: ShieldCheck,
    title: "Backflow Prevention",
    description:
      "Installation and annual testing of backflow prevention devices to protect your home\u2019s water supply from contamination. Many South Florida municipalities require certified backflow testing \u2014 we handle the inspection and paperwork.",
  },
];

const faqs = [
  {
    question: "How do I know if my South Florida home needs repiping?",
    answer:
      "Warning signs include discolored water, low water pressure, frequent pinhole leaks, and visible corrosion on exposed pipes. Homes built before 1990 in Palm Beach and Broward Counties often have polybutylene or galvanized pipes that are past their lifespan. We offer free repiping assessments to determine if your home is a candidate.",
  },
  {
    question: "Should I choose a tank or tankless water heater for my Florida home?",
    answer:
      "Both options work well in South Florida. Tankless heaters provide endless hot water, take up less space, and last 15\u201320 years \u2014 but cost more upfront. Traditional tank heaters are more affordable to install and work reliably for 8\u201312 years. Since Florida\u2019s incoming water temperature is already warm, tankless units operate very efficiently here. We evaluate your household\u2019s hot water demand and budget to recommend the best fit.",
  },
  {
    question: "What causes slab leaks, and are they common in South Florida?",
    answer:
      "Slab leaks are very common in South Florida due to the region\u2019s limestone-heavy soil, high water tables, and the copper piping used in many homes built in the 1970s\u201390s. Corrosion from minerals in the water, soil movement, and pipe expansion from heat all contribute. Signs include unexplained water bill increases, warm spots on floors, and the sound of running water when all fixtures are off.",
  },
  {
    question: "Do you offer same-day emergency plumbing service?",
    answer:
      "Yes, we offer same-day emergency plumbing service throughout Palm Beach and Broward Counties. Burst pipes, sewer backups, and major leaks cannot wait \u2014 call us anytime and we will dispatch a licensed plumber to your home as quickly as possible. Flight Club members receive priority scheduling with no overtime charges.",
  },
];

export default function ResidentialPlumbingPage() {
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
            &gt; <span className="text-navy-500">Plumbing</span>
          </nav>
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
            Residential Plumbing Services
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            From emergency leak repairs to full-home repiping, our licensed
            plumbers deliver reliable service with upfront pricing. We specialize
            in the unique plumbing challenges of South Florida homes \u2014
            including slab leaks, aging pipes, and hard-water damage.
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

      {/* Services Grid */}
      <section className="py-20">
        <Container>
          <SectionHeading
            label="Our Services"
            heading="Complete Home Plumbing Solutions"
            subtitle="Licensed plumbing professionals equipped to handle everything from routine maintenance to complex repairs."
            centered
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => (
              <Card key={svc.title} className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                  <svc.icon className="h-6 w-6 text-cyan-500" />
                </div>
                <h3 className="font-rubik text-lg font-bold text-navy-500">
                  {svc.title}
                </h3>
                <p className="mt-2 text-gray-600">{svc.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <Container>
          <SectionHeading
            label="FAQ"
            heading="Common Plumbing Questions"
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
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-white/80">
            Schedule a plumbing service or call for a free estimate.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-white/90"
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
