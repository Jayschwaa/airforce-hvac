import type { Metadata } from "next";
import Link from "next/link";
import {
  Warehouse,
  Wind,
  Droplets,
  ThermometerSun,
  Zap,
  DoorOpen,
  CheckCircle,
  Phone,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Warehouse & Industrial HVAC | Air Force HVAC Commercial",
  description:
    "Large-volume cooling and ventilation for warehouses and industrial facilities. Evaporative cooling, spot cooling, loading dock climate control, and energy-efficient solutions for large spaces.",
};

const CAPABILITIES = [
  {
    icon: Wind,
    title: "High-Volume Ventilation Systems",
    description:
      "Large warehouses need massive air movement to maintain safe working conditions. We design and install high-volume ventilation systems — from HVLS ceiling fans to powered exhaust systems — that keep air circulating across your entire floor area.",
  },
  {
    icon: Droplets,
    title: "Evaporative Cooling Solutions",
    description:
      "For warehouses where traditional AC is cost-prohibitive, evaporative cooling provides significant temperature reduction at a fraction of the operating cost. We size and install systems for facilities of any square footage.",
  },
  {
    icon: ThermometerSun,
    title: "Spot Cooling for Work Zones",
    description:
      "Not every square foot of a warehouse needs the same temperature. We install targeted spot cooling for packing stations, quality control areas, and employee work zones where comfort directly impacts productivity.",
  },
  {
    icon: DoorOpen,
    title: "Loading Dock Climate Control",
    description:
      "Loading docks are the biggest source of conditioned air loss. We install air curtains, dock seals, and dedicated cooling systems that maintain interior conditions even during heavy shipping operations.",
  },
  {
    icon: Warehouse,
    title: "Office & Break Room HVAC",
    description:
      "Warehouse offices and break rooms need traditional comfort cooling even when the main floor does not. We design split systems and dedicated units for occupied spaces within industrial facilities.",
  },
  {
    icon: Zap,
    title: "Energy-Efficient Large-Space Solutions",
    description:
      "Cooling a 50,000+ sq ft building is expensive. We engineer solutions that minimize energy waste — stratification destratification fans, programmable controls, and equipment selection optimized for your specific facility.",
  },
];

const APPROACH_POINTS = [
  "Site assessment to understand your facility's unique airflow and heat load challenges",
  "Phased installation that does not disrupt warehouse operations",
  "Solutions scaled to your budget — from basic ventilation to full climate control",
  "Coordination with racking systems, fire suppression, and other building systems",
  "Maintenance programs designed for industrial environments and heavy-use equipment",
];

export default function WarehousesPage() {
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
            <span className="text-navy-500">Warehouses</span>
          </nav>
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
            Warehouse &amp; Industrial HVAC
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            Large-volume cooling and ventilation solutions for warehouses,
            distribution centers, and industrial facilities. We engineer
            comfort and safety for the biggest spaces.
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
            heading="Industrial Spaces Need Industrial Solutions"
            subtitle="Standard commercial HVAC approaches do not work for warehouses. The volumes are too large, the heat loads too variable, and the operational constraints too different. We specialize in solutions designed specifically for large industrial and distribution environments."
            centered
          />
        </Container>
      </section>

      {/* Capabilities */}
      <section className="bg-gray-50 py-20">
        <Container>
          <SectionHeading
            label="Capabilities"
            heading="Warehouse & Industrial Services"
            subtitle="Purpose-built climate solutions for large-format facilities."
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
                heading="Engineered for Your Operation"
              />
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Every warehouse is different — product type, ceiling height,
                door frequency, occupancy patterns, and budget all affect the
                right HVAC solution. We start with a thorough site assessment
                and design a system that addresses your specific challenges,
                not a one-size-fits-all package.
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
                <p className="font-rubik text-4xl font-bold text-cyan-500 md:text-5xl">50K+</p>
                <p className="mt-3 text-lg font-semibold text-navy-500">Sq Ft Capabilities</p>
                <p className="mt-2 text-gray-600">
                  We design and install systems for facilities ranging from
                  10,000 to over 100,000 square feet.
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
            Cool Your Warehouse the Smart Way
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Get an engineered cooling and ventilation solution designed for
            your specific facility and budget.
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
