import type { Metadata } from "next";
import Link from "next/link";
import {
  Droplets,
  Flame,
  ShieldCheck,
  PipetteIcon,
  Building2,
  Wrench,
  CheckCircle,
  Phone,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Commercial Plumbing Services | Air Force HVAC Commercial",
  description:
    "Commercial plumbing for apartments, condos, and commercial properties. Pipe installation, water heater systems, backflow prevention, and multi-unit plumbing services in South Florida.",
};

const CAPABILITIES = [
  {
    icon: PipetteIcon,
    title: "Commercial Pipe Installation & Repair",
    description:
      "New construction piping, re-piping for aging buildings, and emergency pipe repair for commercial properties. We work with copper, PEX, CPVC, and cast iron systems to match your building's requirements and budget.",
  },
  {
    icon: Flame,
    title: "Commercial Water Heater Systems",
    description:
      "Tank and tankless commercial water heater installation, replacement, and repair. We size systems for your building's actual demand — from small office suites to 200+ unit apartment communities.",
  },
  {
    icon: ShieldCheck,
    title: "Backflow Prevention & Testing",
    description:
      "Annual backflow preventer testing, repair, and certification required by most South Florida municipalities. We maintain your compliance and handle all paperwork for local water utility reporting.",
  },
  {
    icon: Droplets,
    title: "Drain & Sewer Services",
    description:
      "Commercial drain cleaning, sewer line repair, camera inspection, and hydro-jetting for buildings of all sizes. We clear blockages fast and identify underlying problems that cause recurring issues.",
  },
  {
    icon: Building2,
    title: "Multi-Unit Plumbing",
    description:
      "Apartments and condominiums have unique plumbing challenges — shared risers, aging supply lines, and individual unit shutoffs. We handle multi-unit plumbing projects with minimal tenant disruption and coordinated scheduling.",
  },
  {
    icon: Wrench,
    title: "Plumbing Maintenance Programs",
    description:
      "Scheduled plumbing inspections and maintenance for commercial properties — including fixture checks, water heater service, backflow testing, and drain cleaning to prevent emergency situations.",
  },
];

const APPROACH_POINTS = [
  "Multitrade capability — plumbing coordinated with HVAC and electrical under one contract",
  "Emergency plumbing response for active leaks and drain backups",
  "Experience with multi-unit buildings where plumbing work affects multiple tenants",
  "Permitting and inspection coordination for all commercial plumbing work",
  "Transparent pricing with no hidden charges or surprise add-ons",
];

export default function PlumbingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-white via-cyan-50/50 to-white py-20 md:py-28 border-b border-gray-100">
        <Container>
          <nav className="mb-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-cyan-500">Home</Link>
            <span className="mx-2">&gt;</span>
            <Link href="/commercial" className="hover:text-cyan-500">Commercial</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-navy-500">Plumbing</span>
          </nav>
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
            Commercial Plumbing Services
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            Full-service commercial plumbing for apartments, condos, offices,
            and retail properties. From pipe installation to backflow testing
            to emergency repairs — we handle it all.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">Request a Bid</Button>
            <Button href={PHONE_HREF} variant="outline" size="lg">
              <Phone className="mr-2 h-5 w-5" />
              Call {PHONE}
            </Button>
          </div>
        </Container>
      </section>

      {/* Overview */}
      <section className="py-20">
        <Container>
          <SectionHeading
            label="Service Overview"
            heading="Commercial Plumbing Under One Roof"
            subtitle="Adding plumbing to our HVAC and electrical capabilities means commercial property owners and managers can consolidate more of their building's mechanical infrastructure with a single, trusted contractor. Fewer vendors means simpler management, better coordination, and lower total project costs."
            centered
          />
        </Container>
      </section>

      {/* Capabilities */}
      <section className="bg-gray-50 py-20">
        <Container>
          <SectionHeading
            label="Capabilities"
            heading="Commercial Plumbing Services"
            subtitle="Comprehensive plumbing solutions for commercial and multifamily properties."
            centered
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((cap) => (
              <Card key={cap.title} className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50">
                  <cap.icon className="h-6 w-6 text-cyan-500" />
                </div>
                <h3 className="mt-4 font-rubik text-lg font-bold text-navy-500">
                  {cap.title}
                </h3>
                <p className="mt-2 text-gray-600">{cap.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Approach */}
      <section className="py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                label="Our Approach"
                heading="One Call for All Building Systems"
              />
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Property managers already trust us with their HVAC and
                electrical systems. Adding plumbing to the relationship
                means one vendor, one point of contact, and one team that
                knows your building inside and out. It simplifies your
                operations and ensures all mechanical work is coordinated.
              </p>
              <ul className="mt-6 space-y-3">
                {APPROACH_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-2xl bg-gradient-to-br from-cyan-50 to-cyan-100 p-10 text-center">
                <p className="font-rubik text-4xl font-bold text-cyan-500 md:text-5xl">3 Trades</p>
                <p className="mt-3 text-lg font-semibold text-navy-500">One Contractor</p>
                <p className="mt-2 text-gray-600">
                  HVAC, electrical, and plumbing — all under one roof for
                  simpler management and lower costs.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-cyan-500 to-cyan-600 py-16">
        <Container className="text-center">
          <h2 className="font-rubik text-3xl font-bold text-white md:text-4xl">
            Need Commercial Plumbing Service?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            From emergency repairs to new construction, get plumbing service
            coordinated with your building's other mechanical systems.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" size="lg" className="bg-white text-cyan-600 hover:bg-white/90">
              Request a Bid
            </Button>
            <Button href={PHONE_HREF} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-cyan-600">
              <Phone className="mr-2 h-5 w-5" />
              {PHONE}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
