import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  Search,
  ShieldCheck,
  Wind,
  FileText,
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
  title: "Ductwork Cleaning & Repair | Air Force HVAC Commercial",
  description:
    "Commercial duct cleaning with 1,000,000+ sq ft cleaned. Duct sealing, repair, IAQ improvement, and before/after documentation for commercial properties in South Florida.",
};

const CAPABILITIES = [
  {
    icon: Sparkles,
    title: "Commercial Duct Cleaning",
    description:
      "Professional duct cleaning using NADCA-standard equipment and techniques. We remove years of accumulated dust, debris, mold, and contaminants from your duct system — improving airflow, air quality, and system efficiency.",
  },
  {
    icon: Wrench,
    title: "Duct Sealing & Repair",
    description:
      "Leaky ducts waste energy and reduce comfort. We identify and seal leaks at joints, connections, and damaged sections using industry-standard mastic and mechanical fastening — reducing energy waste by up to 20%.",
  },
  {
    icon: ShieldCheck,
    title: "Mold Remediation in Ductwork",
    description:
      "Florida's humidity creates ideal conditions for mold growth inside duct systems. We identify, remediate, and treat mold-affected ductwork with EPA-registered antimicrobials to restore safe indoor air quality.",
  },
  {
    icon: Wind,
    title: "Indoor Air Quality Improvement",
    description:
      "Dirty ducts circulate contaminants throughout your building every time the system runs. Our cleaning process removes particulates, allergens, and biological growth that affect tenant health and comfort.",
  },
  {
    icon: FileText,
    title: "Before & After Documentation",
    description:
      "We photograph and document duct conditions before and after cleaning, providing property managers with clear evidence of work performed — useful for tenant communications, board reports, and regulatory compliance.",
  },
  {
    icon: Search,
    title: "Duct System Inspection",
    description:
      "Video inspection of your duct system to identify contamination levels, damage, disconnected sections, and design problems. We provide a detailed report with recommendations before any work begins.",
  },
];

const APPROACH_POINTS = [
  "1,000,000+ square feet of commercial ductwork cleaned",
  "NADCA-standard cleaning methods and equipment",
  "Minimal disruption — cleaning can be scheduled after hours or on weekends",
  "Comprehensive before-and-after photo documentation for every project",
  "Follow-up IAQ testing available to verify improvement",
];

export default function DuctworkCleaningPage() {
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
            <span className="text-navy-500">Ductwork Cleaning</span>
          </nav>
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
            Ductwork Cleaning &amp; Repair
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            Over one million square feet of commercial ductwork cleaned.
            We restore your duct system to peak performance with
            professional cleaning, sealing, and repair services.
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
            heading="What Is Inside Your Ducts?"
            subtitle="Years of operation fill commercial duct systems with dust, debris, mold, and biological contaminants. This buildup restricts airflow, forces your equipment to work harder, increases energy costs, and degrades the air your tenants breathe. Professional duct cleaning restores your system and your air quality."
            centered
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-gray-50 p-6 text-center">
              <p className="font-rubik text-3xl font-bold text-cyan-500">1M+</p>
              <p className="mt-2 text-sm text-gray-600">Sq Ft Duct Cleaned</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-6 text-center">
              <p className="font-rubik text-3xl font-bold text-cyan-500">20%</p>
              <p className="mt-2 text-sm text-gray-600">Energy Savings from Sealing</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-6 text-center">
              <p className="font-rubik text-3xl font-bold text-cyan-500">Photo</p>
              <p className="mt-2 text-sm text-gray-600">Before & After Documentation</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="bg-gray-50 py-20">
        <Container>
          <SectionHeading
            label="Capabilities"
            heading="Duct Cleaning & Repair Services"
            subtitle="Comprehensive duct system restoration for commercial properties."
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
                heading="Documented, Professional, Thorough"
              />
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                We do not take shortcuts with duct cleaning. Every project
                starts with a video inspection, includes comprehensive
                photographic documentation, and finishes with a verification
                check. Property managers get a complete report they can share
                with tenants, boards, and ownership.
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
                <p className="font-rubik text-5xl font-bold text-cyan-500 md:text-6xl">1M+</p>
                <p className="mt-3 text-lg font-semibold text-navy-500">Sq Ft Cleaned</p>
                <p className="mt-2 text-gray-600">
                  Of commercial ductwork restored to clean, efficient operation.
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
            Time to Clean Your Ducts?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Improve your air quality and system efficiency with professional
            commercial duct cleaning and repair.
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
