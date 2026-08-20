import type { Metadata } from "next";
import Link from "next/link";
import {
  Building,
  Layers,
  Users,
  Fan,
  Wind,
  ClipboardList,
  CheckCircle,
  Phone,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "New Construction Apartment HVAC | Air Force HVAC Commercial",
  description:
    "Ground-up mechanical systems for new apartment complexes. RTU installation, split systems, central plant design, and multi-story ductwork buildout. Coordinated with GCs for phased delivery.",
};

const CAPABILITIES = [
  {
    icon: Building,
    title: "Ground-Up Mechanical Design",
    description:
      "Complete mechanical system design for new apartment complexes — from single-story garden apartments to mid-rise buildings. We engineer solutions that balance first cost, operating efficiency, and long-term maintainability.",
  },
  {
    icon: Fan,
    title: "RTU & Central Plant Installation",
    description:
      "Rooftop units for common areas, central chilled water plants for larger complexes, and individual split systems for units. We match the right technology to your building type and budget.",
  },
  {
    icon: Wind,
    title: "Multi-Story Ductwork Buildout",
    description:
      "Vertical risers, horizontal trunk lines, and individual unit branches — all fabricated and installed to deliver balanced airflow across every floor and every unit in the building.",
  },
  {
    icon: Users,
    title: "GC Coordination & Phased Installation",
    description:
      "We work hand-in-hand with general contractors, coordinating rough-in, trim-out, and commissioning phases to align with your construction schedule and avoid trade conflicts.",
  },
  {
    icon: Layers,
    title: "Split System Packages",
    description:
      "For apartment complexes using individual unit systems, we provide standardized split system packages that simplify procurement, installation, and future maintenance across the entire property.",
  },
  {
    icon: ClipboardList,
    title: "Permitting & Code Compliance",
    description:
      "We manage all mechanical permits, coordinate inspections, and ensure compliance with Florida mechanical code, energy code, and fire code requirements for multi-family new construction.",
  },
];

const APPROACH_POINTS = [
  "Pre-construction meetings to align mechanical scope with architectural and structural plans",
  "Phased crew deployment that matches your build schedule floor by floor",
  "Value engineering to reduce cost without sacrificing tenant comfort or system longevity",
  "Startup and commissioning of all systems before certificate of occupancy",
  "Warranty support and transition to preventive maintenance after construction closeout",
];

export default function NewBuildApartmentsPage() {
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
            <span className="text-navy-500">New Build Apartments</span>
          </nav>
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
            New Construction Apartment HVAC
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            Ground-up mechanical systems for apartment complexes. We handle
            design, installation, and commissioning — coordinated with your
            GC for phased delivery that keeps the project on schedule.
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

      {/* Industry Overview */}
      <section className="py-20">
        <Container>
          <SectionHeading
            label="Industry Overview"
            heading="New Apartment HVAC Is a Coordination Challenge"
            subtitle="Mechanical work on a new apartment complex touches every other trade. Ductwork shares ceiling space with plumbing and electrical. Refrigerant lines run through walls that need to be closed up on schedule. Getting HVAC right means getting coordination right — and that is where we excel."
            centered
          />
        </Container>
      </section>

      {/* Capabilities */}
      <section className="bg-gray-50 py-20">
        <Container>
          <SectionHeading
            label="Capabilities"
            heading="New Apartment Construction Services"
            subtitle="Full mechanical scope from design through commissioning."
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
                heading="Integrated With Your Build Team"
              />
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                We do not operate in a silo. Our project managers attend
                weekly OAC meetings, coordinate directly with your GC and
                superintendent, and proactively flag potential conflicts before
                they become change orders. The result is smoother builds and
                fewer surprises.
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
                <p className="font-rubik text-5xl font-bold text-cyan-500 md:text-6xl">50K</p>
                <p className="mt-3 text-lg font-semibold text-navy-500">Sq Ft Duct Installed</p>
                <p className="mt-2 text-gray-600">
                  Across new construction apartment projects, with systems
                  designed for balanced airflow and long-term reliability.
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
            Building a New Apartment Complex?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Get a mechanical partner who integrates seamlessly with your
            construction team from day one.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" size="lg" variant="white">
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
