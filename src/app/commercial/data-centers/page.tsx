import type { Metadata } from "next";
import Link from "next/link";
import {
  Server,
  ShieldCheck,
  Thermometer,
  Activity,
  Layers,
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
  title: "Data Center Cooling Solutions | Air Force HVAC Commercial",
  description:
    "Precision cooling for data centers and server rooms. N+1 redundancy, hot/cold aisle containment, 24/7 monitoring, and emergency service for mission-critical IT environments.",
};

const CAPABILITIES = [
  {
    icon: Thermometer,
    title: "Precision Cooling Systems",
    description:
      "Data center environments require precise temperature and humidity control within tight tolerances. We install and maintain CRAC and CRAH units, in-row cooling, and rear-door heat exchangers designed for high-density IT loads.",
  },
  {
    icon: ShieldCheck,
    title: "N+1 Redundancy Design",
    description:
      "Downtime is not an option. We design cooling systems with N+1 (or greater) redundancy, ensuring that a single equipment failure never compromises your data center's thermal stability or uptime commitments.",
  },
  {
    icon: Layers,
    title: "Hot/Cold Aisle Containment",
    description:
      "Proper aisle containment dramatically improves cooling efficiency. We design and install containment systems that separate hot and cold airstreams, reducing energy waste and improving rack inlet temperatures.",
  },
  {
    icon: Activity,
    title: "24/7 Monitoring & Alerting",
    description:
      "Real-time temperature and humidity monitoring across your data center with automated alerts when conditions drift outside acceptable ranges. Early warning prevents thermal events before they affect equipment.",
  },
  {
    icon: Server,
    title: "Server Room Cooling",
    description:
      "Not every IT environment is a full data center. We also design and install cooling for server rooms, network closets, and edge computing locations — scaled appropriately for the heat load and criticality level.",
  },
  {
    icon: Wrench,
    title: "Emergency Service & Rapid Response",
    description:
      "When a cooling unit fails in a data center, the thermal clock starts immediately. Our emergency response team understands data center urgency and arrives prepared with common replacement parts and temporary cooling solutions.",
  },
];

const APPROACH_POINTS = [
  "Computational Fluid Dynamics (CFD) analysis available for optimizing airflow",
  "Staged installation that maintains cooling during upgrades and expansions",
  "Coordination with electrical and fire suppression contractors",
  "Preventive maintenance programs tailored to mission-critical uptime requirements",
  "Capacity planning support for future server density increases",
];

export default function DataCentersPage() {
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
            <span className="text-navy-500">Data Centers</span>
          </nav>
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
            Data Center Cooling Solutions
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            Precision cooling for server rooms and data centers. We design
            redundant, efficient cooling systems that protect your IT
            infrastructure and maintain uptime commitments.
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
            heading="Cooling Is Your Data Center's Lifeline"
            subtitle="A data center without reliable cooling is a data center on borrowed time. Modern servers generate enormous heat density, and even brief thermal excursions can cause equipment failures, data loss, and costly downtime. Precision cooling is not a luxury — it is the foundation of data center reliability."
            centered
          />
        </Container>
      </section>

      {/* Capabilities */}
      <section className="bg-gray-50 py-20">
        <Container>
          <SectionHeading
            label="Capabilities"
            heading="Data Center Cooling Services"
            subtitle="Mission-critical cooling solutions for IT environments of all sizes."
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
                heading="Engineered for Uptime"
              />
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                We treat every data center project with the understanding that
                cooling failure equals business failure. Our designs
                incorporate redundancy at every level, our installations are
                staged to maintain cooling continuity, and our maintenance
                programs are built around preventing failures — not just
                responding to them.
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
                <p className="font-rubik text-4xl font-bold text-cyan-500 md:text-5xl">N+1</p>
                <p className="mt-3 text-lg font-semibold text-navy-500">Redundancy Standard</p>
                <p className="mt-2 text-gray-600">
                  Every data center cooling design includes redundancy so a
                  single failure never compromises your operations.
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
            Protect Your IT Infrastructure
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Get a precision cooling solution designed for your data center's
            specific heat load, redundancy requirements, and growth plans.
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
