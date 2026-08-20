import type { Metadata } from "next";
import Link from "next/link";
import {
  Fan,
  ArrowUpDown,
  Wrench,
  RefreshCw,
  Gauge,
  Calendar,
  CheckCircle,
  Phone,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Rooftop Units & Split Systems | Air Force HVAC Commercial",
  description:
    "Commercial RTU installation, repair, and replacement. Split system packages for multi-zone cooling. 300+ system installs across South Florida commercial properties.",
};

const CAPABILITIES = [
  {
    icon: Fan,
    title: "RTU Installation & Replacement",
    description:
      "Full rooftop unit installation including curb adapters, ductwork transitions, electrical connections, and startup. We handle crane coordination, old unit removal, and all permitting for a turnkey rooftop solution.",
  },
  {
    icon: ArrowUpDown,
    title: "Commercial Split System Installation",
    description:
      "Indoor air handler and outdoor condenser pairings configured for commercial applications. We install wall-mount, ceiling cassette, and ducted split systems for offices, retail, and multi-unit buildings.",
  },
  {
    icon: Wrench,
    title: "RTU Repair & Diagnostics",
    description:
      "Compressor failures, control board issues, economizer problems, and refrigerant leaks — our technicians diagnose and repair rooftop units from all major manufacturers quickly and correctly.",
  },
  {
    icon: RefreshCw,
    title: "System Changeouts & Upgrades",
    description:
      "When repair costs exceed the value of aging equipment, we provide straightforward replacement proposals. Our changeout process is fast and minimizes downtime for your tenants and operations.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description:
      "Existing RTUs and split systems often underperform due to poor airflow, refrigerant issues, or outdated controls. We tune your equipment to deliver rated capacity and efficiency.",
  },
  {
    icon: Calendar,
    title: "Scheduled Maintenance Programs",
    description:
      "Quarterly or semi-annual RTU and split system maintenance that includes coil cleaning, filter replacement, refrigerant checks, electrical inspections, and performance verification.",
  },
];

const APPROACH_POINTS = [
  "300+ commercial system installs — we have the experience to handle any rooftop or split system project",
  "Multi-brand capability across Carrier, Trane, Lennox, Daikin, and other major manufacturers",
  "Same-day emergency service for critical RTU failures",
  "Crane and rigging coordination for rooftop installations",
  "Warranty administration and manufacturer liaison for equipment issues",
];

export default function RtusSplitSystemsPage() {
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
            <span className="text-navy-500">RTUs &amp; Split Systems</span>
          </nav>
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
            Rooftop Units &amp; Split Systems
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            The workhorses of commercial cooling. We install, repair, and
            maintain rooftop units and split systems for properties of all
            sizes — with over 300 system installs and counting.
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

      {/* Service Overview */}
      <section className="py-20">
        <Container>
          <SectionHeading
            label="Service Overview"
            heading="The Most Common Commercial HVAC Equipment"
            subtitle="Rooftop units and split systems account for the majority of commercial cooling in South Florida. Whether your property has a single 5-ton RTU or 50 units spread across multiple buildings, we have the crew, the experience, and the equipment relationships to handle your project efficiently."
            centered
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-gray-50 p-6 text-center">
              <p className="font-rubik text-3xl font-bold text-cyan-500">300+</p>
              <p className="mt-2 text-sm text-gray-600">System Installs Completed</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-6 text-center">
              <p className="font-rubik text-3xl font-bold text-cyan-500">All Major</p>
              <p className="mt-2 text-sm text-gray-600">Brands Serviced</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-6 text-center">
              <p className="font-rubik text-3xl font-bold text-cyan-500">Same Day</p>
              <p className="mt-2 text-sm text-gray-600">Emergency Response</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="bg-gray-50 py-20">
        <Container>
          <SectionHeading
            label="Capabilities"
            heading="RTU & Split System Services"
            subtitle="Complete service coverage from installation through end-of-life replacement."
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
                heading="Experience at Scale"
              />
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                With over 300 commercial system installs, we have seen every
                configuration, every rooftop challenge, and every brand-specific
                quirk. This experience means faster installs, fewer callbacks,
                and solutions that work right the first time.
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
                <p className="mt-3 text-lg font-semibold text-navy-500">Systems Installed</p>
                <p className="mt-2 text-gray-600">
                  RTUs and split systems across commercial properties
                  throughout South Florida.
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
            Need RTU or Split System Service?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Whether it is a new installation, an emergency repair, or a
            planned replacement — get a fast, accurate quote from our team.
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
