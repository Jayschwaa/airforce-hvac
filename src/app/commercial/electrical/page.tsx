import type { Metadata } from "next";
import Link from "next/link";
import {
  Zap,
  PlugZap,
  Lightbulb,
  Power,
  Cable,
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
  title: "Commercial Electrical Services | Air Force HVAC Commercial",
  description:
    "Commercial electrical services — panel upgrades, commercial wiring, lighting systems, and generator installation. Coordinated with HVAC for energy savings and reduced project costs.",
};

const CAPABILITIES = [
  {
    icon: PlugZap,
    title: "Panel Upgrades & Installations",
    description:
      "Commercial electrical panels that support your building's current and future power needs. We upgrade aging panels, add sub-panels for new equipment, and ensure your electrical infrastructure meets code and capacity requirements.",
  },
  {
    icon: Cable,
    title: "Commercial Wiring & Conduit",
    description:
      "New construction wiring, tenant buildout electrical, and rewiring for older buildings. We install EMT, rigid conduit, and wire systems sized for commercial loads — coordinated with your other trades.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Systems",
    description:
      "LED retrofits, new lighting installations, emergency lighting, and exterior lighting for commercial properties. We help reduce your lighting energy costs while improving illumination quality for tenants.",
  },
  {
    icon: Power,
    title: "Generator Installation & Service",
    description:
      "Standby generators for commercial properties that cannot afford power interruptions. We handle sizing, installation, transfer switch wiring, and ongoing maintenance to ensure your backup power is ready when you need it.",
  },
  {
    icon: Zap,
    title: "HVAC Electrical Coordination",
    description:
      "When the same contractor handles both HVAC and electrical, you eliminate coordination gaps, reduce change orders, and save money. We wire disconnects, circuits, and controls as part of an integrated mechanical-electrical scope.",
  },
  {
    icon: Wrench,
    title: "Electrical Troubleshooting & Repair",
    description:
      "Circuit tracing, fault isolation, breaker failures, and emergency electrical repairs for commercial buildings. Our technicians diagnose problems quickly and restore power safely.",
  },
];

const APPROACH_POINTS = [
  "Single contractor for HVAC and electrical eliminates coordination overhead",
  "Licensed electricians experienced with commercial building systems",
  "Energy audits that identify electrical savings opportunities",
  "Code compliance for all commercial electrical installations",
  "Emergency electrical service available for critical building systems",
];

export default function ElectricalPage() {
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
            <span className="text-navy-500">Electrical</span>
          </nav>
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
            Commercial Electrical Services
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            Panel upgrades, commercial wiring, lighting, and generators —
            all coordinated with your HVAC systems for maximum efficiency
            and minimum project cost.
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
            heading="The Multitrade Advantage"
            subtitle="Most commercial HVAC projects require electrical work — new circuits for equipment, disconnect installations, control wiring, and panel capacity upgrades. By handling both trades under one roof, we eliminate the markup, scheduling conflicts, and finger-pointing that come with separate electrical subcontractors."
            centered
          />
        </Container>
      </section>

      {/* Capabilities */}
      <section className="bg-gray-50 py-20">
        <Container>
          <SectionHeading
            label="Capabilities"
            heading="Commercial Electrical Services"
            subtitle="Full-scope electrical work for commercial and multifamily properties."
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
                heading="Integrated Mechanical & Electrical"
              />
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Our multitrade capability is a genuine cost advantage for
                commercial clients. When one contractor handles both the
                mechanical and electrical scope, you get tighter coordination,
                fewer change orders, simpler project management, and real
                dollar savings. It is one of the key reasons our value
                engineering approach delivers 10%+ savings.
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
                <p className="font-rubik text-4xl font-bold text-cyan-500 md:text-5xl">1 Contractor</p>
                <p className="mt-3 text-lg font-semibold text-navy-500">HVAC + Electrical</p>
                <p className="mt-2 text-gray-600">
                  Eliminate coordination overhead and reduce project costs
                  with integrated mechanical-electrical service.
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
            Need Commercial Electrical Work?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Get electrical service coordinated with your HVAC project —
            or as a standalone scope. Either way, you save.
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
