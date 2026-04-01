import type { Metadata } from "next";
import Link from "next/link";
import {
  Wind,
  Ruler,
  Layers,
  Building2,
  Gauge,
  Hammer,
  CheckCircle,
  Phone,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Commercial Ductwork Buildout | Air Force HVAC Commercial",
  description:
    "Metal, spiral, and fiberglass duct fabrication and installation for commercial properties. 50,000+ sq ft installed. New construction and retrofit ductwork designed for optimal airflow.",
};

const CAPABILITIES = [
  {
    icon: Wind,
    title: "Metal Duct Fabrication & Installation",
    description:
      "Custom-fabricated galvanized sheet metal ductwork for commercial applications. We build trunk lines, branch runs, and transitions in our shop and install them with precision on your job site.",
  },
  {
    icon: Layers,
    title: "Spiral Duct Systems",
    description:
      "Spiral duct offers superior airtightness, lower friction loss, and faster installation than rectangular duct. We design and install spiral systems for commercial spaces where performance and aesthetics both matter.",
  },
  {
    icon: Ruler,
    title: "Fiberglass Duct Board",
    description:
      "For applications where thermal insulation and sound attenuation are priorities, fiberglass duct board provides an efficient solution. We fabricate and install duct board systems for offices, retail, and healthcare spaces.",
  },
  {
    icon: Building2,
    title: "New Construction Ductwork",
    description:
      "Ground-up duct design and installation coordinated with your GC and other trades. We work from engineered plans or develop duct layouts from scratch based on equipment specifications and building geometry.",
  },
  {
    icon: Hammer,
    title: "Retrofit & Modification",
    description:
      "Adding cooling to a new area, reconfiguring zones, or adapting ductwork for new equipment. We modify existing duct systems to accommodate building changes without starting from scratch.",
  },
  {
    icon: Gauge,
    title: "Airflow Design & Balancing",
    description:
      "Proper duct design is about more than just connecting equipment to registers. We engineer duct systems for optimal static pressure, balanced airflow, and minimal energy waste across every zone.",
  },
];

const APPROACH_POINTS = [
  "50,000+ square feet of commercial ductwork installed and counting",
  "In-house fabrication capability for faster turnaround and quality control",
  "Coordination with structural, electrical, and plumbing trades to avoid conflicts",
  "Duct leakage testing to verify airtight installations",
  "Design assistance when engineering drawings are incomplete or unavailable",
];

export default function DuctworkBuildoutPage() {
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
            <span className="text-navy-500">Ductwork Buildout</span>
          </nav>
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
            Commercial Ductwork Buildout
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            Metal, spiral, and fiberglass duct systems designed and installed
            for commercial properties. Over 50,000 square feet of ductwork
            installed with a focus on optimal airflow and energy efficiency.
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
            heading="Ductwork Makes or Breaks Your HVAC System"
            subtitle="You can install the best equipment on the market, but if the ductwork is undersized, leaky, or poorly designed, your building will never be comfortable and your energy bills will never come down. We design and build duct systems that deliver the airflow your equipment was designed to provide."
            centered
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-gray-50 p-6 text-center">
              <p className="font-rubik text-3xl font-bold text-cyan-500">50,000+</p>
              <p className="mt-2 text-sm text-gray-600">Sq Ft Duct Installed</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-6 text-center">
              <p className="font-rubik text-3xl font-bold text-cyan-500">3 Types</p>
              <p className="mt-2 text-sm text-gray-600">Metal, Spiral & Fiberglass</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-6 text-center">
              <p className="font-rubik text-3xl font-bold text-cyan-500">In-House</p>
              <p className="mt-2 text-sm text-gray-600">Fabrication Capability</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="bg-gray-50 py-20">
        <Container>
          <SectionHeading
            label="Capabilities"
            heading="Ductwork Services"
            subtitle="From design through installation and testing."
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
                heading="Engineered for Airflow"
              />
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                We treat ductwork as an engineered system, not just sheet metal
                connecting point A to point B. Every duct run is designed for
                proper velocity, balanced static pressure, and minimal
                turbulence. The result is a system that delivers comfort to
                every zone while keeping fan energy to a minimum.
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
                <p className="mt-3 text-lg font-semibold text-navy-500">Sq Ft Installed</p>
                <p className="mt-2 text-gray-600">
                  Of commercial ductwork — designed, fabricated, and installed
                  for optimal performance.
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
            Need Commercial Ductwork?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            From new construction buildouts to retrofit modifications,
            get a ductwork solution engineered for your space.
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
