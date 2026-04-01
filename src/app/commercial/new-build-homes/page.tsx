import type { Metadata } from "next";
import Link from "next/link";
import {
  Hammer,
  Ruler,
  Zap,
  Wind,
  DollarSign,
  FileCheck,
  CheckCircle,
  Phone,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "New Construction Home HVAC | Air Force HVAC Commercial",
  description:
    "Builder partnerships for new construction home HVAC in South Florida. System design, equipment selection, duct layout, energy code compliance, and volume pricing for developers.",
};

const CAPABILITIES = [
  {
    icon: Ruler,
    title: "System Design & Load Calculations",
    description:
      "We perform Manual J load calculations for every floor plan, ensuring each home gets a properly sized system — not an oversized unit that wastes energy or an undersized one that cannot keep up with Florida heat.",
  },
  {
    icon: Wind,
    title: "Duct Layout & Installation",
    description:
      "Custom duct designs optimized for each floor plan. We coordinate with framers and other trades to ensure clean runs, minimize pressure drops, and deliver balanced airflow to every room.",
  },
  {
    icon: Zap,
    title: "Energy Code Compliance",
    description:
      "Florida's energy code requirements are strict and evolving. We stay current on all code updates and ensure every installation passes inspection the first time — keeping your build schedule on track.",
  },
  {
    icon: Hammer,
    title: "Builder Partnership Programs",
    description:
      "We work as an integrated member of your build team. Consistent crews, predictable pricing, and reliable scheduling mean fewer delays and fewer surprises across your entire development.",
  },
  {
    icon: DollarSign,
    title: "Volume Pricing for Developers",
    description:
      "Building 10 homes or 100, our volume pricing gives developers predictable per-unit costs. We lock in equipment pricing and standardize installations to pass savings directly to you.",
  },
  {
    icon: FileCheck,
    title: "Permitting & Inspection Support",
    description:
      "We handle all HVAC permit applications, coordinate inspections, and ensure documentation is complete. Your project manager gets one less thing to worry about on every build.",
  },
];

const APPROACH_POINTS = [
  "Dedicated crews assigned to your development for consistency and speed",
  "Pre-construction coordination to avoid conflicts with other trades",
  "Standardized equipment packages that simplify warranty and maintenance",
  "Flexible scheduling that adapts to your construction timeline",
  "Post-installation testing and commissioning for every unit",
];

export default function NewBuildHomesPage() {
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
            <span className="text-navy-500">New Build Homes</span>
          </nav>
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
            New Construction Home HVAC
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            Reliable HVAC partner for home builders and developers. From spec
            homes to custom builds, we deliver system design, installation,
            and inspection-ready documentation on your schedule.
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
            heading="Built for Builder Timelines"
            subtitle="New construction HVAC requires a contractor who moves at the speed of your build schedule. Delays in rough-in or trim-out ripple through every other trade. We show up on time, every time, with the right materials and the right crew."
            centered
          />
        </Container>
      </section>

      {/* Capabilities */}
      <section className="bg-gray-50 py-20">
        <Container>
          <SectionHeading
            label="Capabilities"
            heading="New Construction HVAC Services"
            subtitle="Everything your build needs from design through final inspection."
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
                heading="A True Builder Partnership"
              />
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                We do not just install systems — we integrate into your
                construction workflow. Our project coordinators attend
                pre-construction meetings, align with your schedule, and
                communicate proactively so HVAC never becomes a bottleneck
                on your job site.
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
                <p className="font-rubik text-5xl font-bold text-cyan-500 md:text-6xl">300+</p>
                <p className="mt-3 text-lg font-semibold text-navy-500">System Installs</p>
                <p className="mt-2 text-gray-600">
                  Across new construction homes in South Florida, with
                  first-time inspection pass rates that keep your schedule moving.
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
            Let&apos;s Build Together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Looking for a reliable HVAC partner for your next development?
            Get volume pricing and dedicated crew scheduling.
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
