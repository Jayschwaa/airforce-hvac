import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Home,
  Wrench,
  ThermometerSun,
  Calendar,
  Shield,
  CheckCircle,
  Phone,
  MapPin,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Multifamily HVAC Solutions | Air Force HVAC Commercial",
  description:
    "Full-service HVAC for condo associations, apartment complexes, and mixed-use buildings. Unit-by-unit and common area systems, preventive maintenance contracts. Serving South Florida multifamily properties.",
};

const CAPABILITIES = [
  {
    icon: Home,
    title: "Unit-by-Unit System Service",
    description:
      "Individual unit HVAC installation, repair, and replacement with minimal disruption to neighboring residents. We coordinate access schedules with property managers for efficient multi-unit rollouts.",
  },
  {
    icon: Building2,
    title: "Common Area Climate Control",
    description:
      "Lobbies, hallways, fitness centers, and clubhouses require different solutions than individual units. We design and maintain common area systems that keep shared spaces comfortable year-round.",
  },
  {
    icon: Wrench,
    title: "Full System Replacements",
    description:
      "When aging systems need a complete overhaul, we manage large-scale replacement projects across entire buildings — handling logistics, permitting, and phased installation to keep residents comfortable.",
  },
  {
    icon: ThermometerSun,
    title: "Heat Pump & High-Efficiency Upgrades",
    description:
      "Help your property reduce energy costs with modern heat pump systems and high-SEER equipment. We identify the best upgrade path for your building type and budget.",
  },
  {
    icon: Calendar,
    title: "Preventive Maintenance Contracts",
    description:
      "Custom maintenance programs sized for your property — from quarterly filter changes to comprehensive semi-annual inspections. Reduce emergency calls, extend equipment life, and maintain tenant satisfaction.",
  },
  {
    icon: Shield,
    title: "Emergency Response Service",
    description:
      "When a system goes down in a multifamily building, every hour matters. Our priority response program ensures your property gets fast service when tenants are affected.",
  },
];

const PROJECTS = [
  {
    name: "Jamaican House Condo",
    units: "150+",
    detail: "Full HVAC system service and preventive maintenance for a large condominium community, including unit-by-unit replacements and common area system upgrades.",
  },
  {
    name: "North Barcelona",
    units: "200+",
    buildings: "16",
    detail: "Portfolio-wide HVAC service across 16 buildings, coordinating phased installations and maintenance schedules to minimize resident disruption across the entire community.",
  },
];

const APPROACH_POINTS = [
  "Single point of contact for property managers — one call handles everything",
  "Flexible scheduling around tenant occupancy and building access rules",
  "Volume pricing for multi-unit and multi-building properties",
  "Detailed reporting for board presentations and owner communications",
  "Licensed, insured, and experienced with condo association requirements",
];

export default function MultifamilyPage() {
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
            <span className="text-navy-500">Multifamily</span>
          </nav>
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
            Multifamily HVAC Solutions
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            Comprehensive HVAC service for condo associations, apartment
            complexes, and mixed-use buildings. From individual unit
            replacements to building-wide system overhauls, we keep your
            residents comfortable and your property performing.
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
            heading="Multifamily Properties Need a Different Approach"
            subtitle="Managing HVAC across dozens or hundreds of units is nothing like servicing a single property. You need a contractor who understands tenant coordination, phased rollouts, association governance, and the unique mechanical challenges of multi-unit buildings."
            centered
          />
        </Container>
      </section>

      {/* Capabilities */}
      <section className="bg-gray-50 py-20">
        <Container>
          <SectionHeading
            label="Capabilities"
            heading="Services for Multifamily Properties"
            subtitle="Every service designed for the scale and complexity of multi-unit buildings."
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

      {/* Featured Projects */}
      <section className="py-20">
        <Container>
          <SectionHeading
            label="Proof Points"
            heading="Multifamily Projects We Have Delivered"
            centered
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <Card key={project.name} className="p-8">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="h-4 w-4" />
                  <span>South Florida</span>
                </div>
                <h3 className="mt-3 font-rubik text-xl font-bold text-navy-500">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm font-semibold text-cyan-500">
                  {project.units} Units
                  {project.buildings ? ` across ${project.buildings} Buildings` : ""}
                </p>
                <p className="mt-3 text-gray-600">{project.detail}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Approach */}
      <section className="bg-gray-50 py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                label="Our Approach"
                heading="Built for Property Managers"
              />
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                We know that multifamily property managers are juggling dozens of
                priorities at once. Our team functions as an extension of yours —
                handling scheduling, permitting, tenant communication support,
                and post-installation documentation so you can focus on running
                your property.
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
                <p className="font-rubik text-5xl font-bold text-cyan-500 md:text-6xl">350+</p>
                <p className="mt-3 text-lg font-semibold text-navy-500">Units Serviced</p>
                <p className="mt-2 text-gray-600">
                  Across major multifamily communities in South Florida,
                  with preventive maintenance contracts keeping systems running.
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
            Ready to Simplify Your Property&apos;s HVAC?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Get a single partner for all your multifamily HVAC needs — from
            unit replacements to building-wide maintenance programs.
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
