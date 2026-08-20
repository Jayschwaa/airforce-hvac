import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Home,
  Landmark,
  Briefcase,
  Palette,
  Fan,
  Wind,
  Layers,
  Search,
  Wrench,
  TrendingUp,
  CheckCircle,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PROJECTS } from "@/data/projects";
import { CLIENTS } from "@/data/clients";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Commercial HVAC Solutions | Air Force HVAC",
  description:
    "Precision-tuned commercial HVAC solutions for institutional investors, property managers, and commercial facilities. $40M+ in national facilities sales. Serving South Florida.",
};

const COMMERCIAL_STATS = [
  { value: "10%+", label: "Client Savings on Commercial Projects" },
  { value: "300+", label: "System Installs" },
  { value: "50,000", label: "Sq Ft Duct Installations" },
  { value: "1,000,000", label: "Sq Ft Duct Cleanings" },
  { value: "$400K", label: "Client Savings" },
];

const SECTORS = [
  {
    icon: Building2,
    name: "Multi-Family Housing",
    description:
      "Full-building HVAC systems for apartment complexes and multi-family residential properties.",
  },
  {
    icon: Home,
    name: "Affordable Housing",
    description:
      "Cost-effective HVAC solutions that meet compliance standards while keeping operational costs low.",
  },
  {
    icon: Landmark,
    name: "Condominiums",
    description:
      "Individual unit and common-area HVAC service for condo associations and property managers.",
  },
  {
    icon: Briefcase,
    name: "Commercial Office",
    description:
      "Climate control systems for office buildings that prioritize tenant comfort and energy efficiency.",
  },
  {
    icon: Palette,
    name: "Art & Cultural Spaces",
    description:
      "Precision climate control for galleries, museums, and cultural venues where temperature and humidity matter.",
  },
];

const CAPABILITIES = [
  {
    icon: Fan,
    name: "RTU Installation",
    description:
      "Rooftop unit installation, replacement, and service for commercial properties of all sizes.",
  },
  {
    icon: Wind,
    name: "Duct Installation",
    description:
      "Metal, spiral, and fiberglass duct systems designed and installed for optimal commercial airflow.",
  },
  {
    icon: Layers,
    name: "Split Unit Installation",
    description:
      "Rooftop split systems and interior air handlers configured for multi-zone commercial cooling.",
  },
  {
    icon: Search,
    name: "System Diagnostics & Repair",
    description:
      "Advanced diagnostics to identify failures fast, with repair services that minimize tenant disruption.",
  },
  {
    icon: Wrench,
    name: "Preventive Maintenance Contracts",
    description:
      "Scheduled maintenance programs that extend equipment life and reduce emergency repair costs.",
  },
  {
    icon: TrendingUp,
    name: "Energy Efficiency Consulting",
    description:
      "Audit and optimization services that lower utility costs and improve your building's energy profile.",
  },
];

const EQUITY_BULLETS = [
  "Scope enhancements that maximize value without inflating budgets",
  "Competitive pricing through efficient project management",
  "Improved tenant satisfaction via reliable climate control",
  "Transparent communication from bid through completion",
];

export default function CommercialPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-white via-cyan-50/50 to-white py-24 md:py-32 border-b border-gray-100">
        <Container>
          <span className="inline-block rounded-full bg-cyan-50 px-4 py-1.5 text-sm font-semibold text-cyan-600">
            $40M+ in National Facilities Sales
          </span>
          <h1 className="mt-6 font-rubik text-4xl font-bold text-navy-500 md:text-5xl lg:text-6xl">
            Commercial HVAC Solutions
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Delivering precision-tuned HVAC solutions with an ownership mindset
            for institutional investors, property managers, and commercial
            facilities.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Partner With Us
            </Button>
            <Button
              href={PHONE_HREF}
              variant="outline"
              size="lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>
        </Container>
      </section>

      {/* ── By The Numbers ──────────────────────────────────── */}
      <section className="border-b border-gray-100 bg-gray-50 py-16">
        <Container>
          <SectionHeading
            label="By The Numbers"
            heading="Proven Track Record"
            centered
          />
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {COMMERCIAL_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-white p-6 text-center shadow-sm"
              >
                <p className="font-rubik text-2xl font-bold text-cyan-500 md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Sectors Served ──────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            label="Industries"
            heading="Sectors We Serve"
            subtitle="Specialized HVAC expertise across commercial and institutional property types."
            centered
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map((sector) => (
              <Card key={sector.name} className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50">
                  <sector.icon className="h-6 w-6 text-cyan-500" />
                </div>
                <h3 className="mt-4 font-rubik text-lg font-bold text-navy-500">
                  {sector.name}
                </h3>
                <p className="mt-2 text-gray-600">{sector.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Capabilities ────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 md:py-24">
        <Container>
          <SectionHeading
            label="Capabilities"
            heading="Our Commercial Capabilities"
            subtitle="End-to-end HVAC services for large-scale commercial properties."
            centered
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((cap) => (
              <Card key={cap.name} className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50">
                  <cap.icon className="h-6 w-6 text-cyan-500" />
                </div>
                <h3 className="mt-4 font-rubik text-lg font-bold text-navy-500">
                  {cap.name}
                </h3>
                <p className="mt-2 text-gray-600">{cap.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Equity Mindset ──────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                label="Our Approach"
                heading="An Equity Mindset"
              />
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                We help lower costs and improve returns while providing a better
                tenant experience. Our team approaches every project as if we
                have equity in the outcome — because when your property performs
                better, so does our reputation.
              </p>
              <ul className="mt-6 space-y-3">
                {EQUITY_BULLETS.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" />
                    <span className="text-gray-700">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-center">
              <div className="rounded-2xl bg-gradient-to-br from-cyan-50 to-cyan-100 p-10 text-center">
                <p className="font-rubik text-5xl font-bold text-cyan-500 md:text-6xl">
                  $400K+
                </p>
                <p className="mt-3 text-lg font-semibold text-navy-500">
                  Client Savings Delivered
                </p>
                <p className="mt-2 text-gray-600">
                  Through scope optimization, competitive pricing, and efficient
                  project execution.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Featured Projects ───────────────────────────────── */}
      <section className="bg-gray-50 py-16 md:py-24">
        <Container>
          <SectionHeading
            label="Portfolio"
            heading="Featured Projects"
            subtitle="Recent commercial engagements that showcase our capabilities."
            centered
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <Card key={project.name} className="flex flex-col">
                <div className="h-48 bg-gradient-to-br from-cyan-100 to-cyan-200" />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-rubik text-xl font-bold text-navy-500">
                    {project.name}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="h-4 w-4" />
                    <span>
                      {project.address}, {project.city}, {project.state}{" "}
                      {project.zip}
                    </span>
                  </div>
                  {project.units && (
                    <p className="mt-2 text-sm font-semibold text-cyan-500">
                      {project.units} Units
                      {project.buildings
                        ? ` across ${project.buildings} Buildings`
                        : ""}
                    </p>
                  )}
                  <p className="mt-3 flex-1 text-gray-600">{project.scope}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Trusted Clients ─────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            label="Trusted By"
            heading="Our Institutional Clients"
            subtitle="We partner with leading property groups and asset managers."
            centered
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {CLIENTS.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-8 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="font-rubik text-sm font-semibold text-navy-500 md:text-base">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-cyan-500 to-cyan-600 py-16 md:py-20">
        <Container className="text-center">
          <h2 className="font-rubik text-3xl font-bold text-white md:text-4xl">
            Partner With Us
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Ready to discuss your commercial HVAC project? Our team is standing
            by for a free consultation.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/contact"
              size="lg"
              variant="white"
            >
              Request a Consultation
            </Button>
            <Button
              href={PHONE_HREF}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-cyan-600"
            >
              <Phone className="mr-2 h-5 w-5" />
              {PHONE}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
