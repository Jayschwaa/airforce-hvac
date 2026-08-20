import type { Metadata } from "next";
import Link from "next/link";
import {
  Thermometer,
  Wrench,
  Settings,
  Timer,
  Snowflake,
  Wind,
  AlertTriangle,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Residential HVAC Services | AC Repair & Installation | Air Force HVAC",
  description:
    "Expert residential HVAC services in South Florida. AC repair, installation, maintenance, ductless mini-splits, and 24/7 emergency service. Serving Palm Beach & Broward Counties.",
};

const services = [
  {
    icon: Wrench,
    title: "AC Repair",
    description:
      "Fast, reliable air conditioning repair for all makes and models. Our trucks carry common parts so most repairs are completed in a single visit — critical when South Florida temperatures climb above 90°F.",
  },
  {
    icon: Snowflake,
    title: "AC Installation",
    description:
      "Complete system replacement and new construction installs. We perform Manual J load calculations to size your system correctly for your home’s layout, insulation, and Florida’s extreme heat and humidity.",
  },
  {
    icon: Settings,
    title: "AC Maintenance & Tune-Ups",
    description:
      "Preventive maintenance that catches refrigerant leaks, clogged drains, and worn capacitors before they cause a breakdown. Essential in South Florida where your AC runs 10–12 months per year.",
  },
  {
    icon: Thermometer,
    title: "Thermostat Replacement",
    description:
      "Upgrade to a smart or programmable thermostat for better comfort and lower energy bills. We install and configure Nest, Ecobee, Honeywell, and more — optimized for Florida’s cooling-dominant climate.",
  },
  {
    icon: Wind,
    title: "Ductless Mini-Splits",
    description:
      "Ideal for Florida room additions, garages, and older homes without ductwork. Mini-splits deliver efficient zoned cooling without the expense of extending your existing duct system.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency AC Service",
    description:
      "24/7 emergency repair when your AC fails at the worst possible time. In South Florida’s heat, a broken AC is more than discomfort — it’s a health risk for seniors, children, and pets.",
  },
];

const faqs = [
  {
    question: "How much does a typical AC repair cost in South Florida?",
    answer:
      "Most residential AC repairs in Palm Beach and Broward Counties range from $150 to $600, depending on the issue. Common repairs like capacitor or contactor replacement fall on the lower end, while compressor or evaporator coil repairs cost more. We provide upfront pricing before any work begins so there are no surprises.",
  },
  {
    question: "How often should I have my AC serviced in South Florida?",
    answer:
      "We recommend twice-yearly maintenance — once in early spring before peak summer, and once in the fall. South Florida’s year-round heat means your AC runs far more than systems in cooler climates, accelerating wear on components. Regular tune-ups can extend your system’s life by 5–7 years and reduce energy bills by up to 15%.",
  },
  {
    question: "When should I replace my AC system instead of repairing it?",
    answer:
      "Consider replacement if your system is over 12–15 years old, uses R-22 refrigerant (which is no longer manufactured), requires frequent repairs, or your energy bills have been climbing steadily. A new high-efficiency system can cut cooling costs by 30–50% — a significant savings when your AC runs nearly year-round in Florida.",
  },
  {
    question: "How quickly can you respond to an AC emergency?",
    answer:
      "For emergency calls within our Palm Beach and Broward County service area, we typically have a technician on-site within 2–4 hours. Flight Club members receive priority scheduling and are often seen within 1–2 hours. We understand that in South Florida, a failed AC system is an urgent situation.",
  },
];

export default function ResidentialHvacPage() {
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
            &gt; <span className="text-navy-500">HVAC</span>
          </nav>
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
            Residential HVAC Services
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            Keep your South Florida home cool and comfortable year-round with
            expert AC repair, installation, and maintenance from Air Force HVAC.
            Our licensed technicians serve Palm Beach and Broward Counties with
            24/7 emergency availability and upfront pricing.
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

      {/* Why Homeowners Choose Us */}
      <section className="border-b border-gray-100 bg-gray-50 py-12">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: AlertTriangle,
                title: "24/7 Emergency Service",
                text: "AC emergencies don’t wait for business hours. Our technicians are available around the clock, including weekends and holidays.",
              },
              {
                icon: Settings,
                title: "Licensed & Certified Technicians",
                text: "Every tech on our team is EPA-certified, background-checked, and trained on the latest equipment from Carrier, Trane, Lennox, and more.",
              },
              {
                icon: Timer,
                title: "Upfront, Honest Pricing",
                text: "You’ll know the exact cost before we start. No hidden fees, no pressure to upsell, and no overtime charges for Flight Club members.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
                  <item.icon className="h-6 w-6 text-cyan-500" />
                </div>
                <div>
                  <h3 className="font-rubik text-lg font-bold text-navy-500">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <Container>
          <SectionHeading
            label="Our Services"
            heading="Residential AC & HVAC Solutions"
            subtitle="From routine maintenance to full system replacements, we handle every aspect of your home’s comfort."
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
            heading="Common HVAC Questions"
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
            Schedule your AC service or call for a free in-home estimate.
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
