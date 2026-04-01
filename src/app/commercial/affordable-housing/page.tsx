import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  DollarSign,
  Building2,
  Leaf,
  Users,
  ClipboardCheck,
  CheckCircle,
  Phone,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Affordable Housing HVAC Solutions | Air Force HVAC Commercial",
  description:
    "HUD/LIHTC-compliant HVAC services for affordable housing communities. Budget-conscious installations, portfolio-wide service agreements, and 10%+ cost savings across 200+ unit projects in South Florida.",
};

const CAPABILITIES = [
  {
    icon: ShieldCheck,
    title: "HUD & LIHTC Compliance",
    description:
      "We navigate the regulatory landscape so you don't have to. Every installation meets HUD housing quality standards and LIHTC energy efficiency mandates, ensuring your properties pass inspections without costly rework.",
  },
  {
    icon: DollarSign,
    title: "Budget-Optimized System Selection",
    description:
      "Our value engineering team identifies equipment that delivers maximum performance per dollar — balancing acquisition cost, energy efficiency, and maintenance requirements to protect your operating budget.",
  },
  {
    icon: Building2,
    title: "Large-Scale Portfolio Service",
    description:
      "From 200+ unit communities to multi-property portfolios, we deploy crews and coordinate schedules to minimize disruption while delivering consistent quality across every building in your portfolio.",
  },
  {
    icon: Leaf,
    title: "Energy Efficiency Programs",
    description:
      "We help affordable housing operators access utility rebates, select ENERGY STAR-rated equipment, and implement controls that reduce tenant utility costs — a key factor in maintaining affordability.",
  },
  {
    icon: Users,
    title: "Tenant-Sensitive Installation",
    description:
      "Our teams are trained to work respectfully in occupied units, keeping noise and disruption to a minimum. We coordinate schedules with property managers to protect tenant satisfaction and retention.",
  },
  {
    icon: ClipboardCheck,
    title: "Preventive Maintenance Contracts",
    description:
      "Scheduled maintenance programs designed for affordable housing budgets. We extend equipment life, prevent emergency breakdowns, and provide documentation for regulatory compliance audits.",
  },
];

const APPROACH_POINTS = [
  "Equity mindset — we treat your investment like our own, finding savings without cutting corners",
  "10%+ average cost savings through value engineering and efficient project management",
  "Portfolio-wide pricing that rewards scale and long-term partnerships",
  "Transparent documentation for investor reporting and compliance audits",
  "Phased installation options that accommodate occupied buildings and tight budgets",
];

export default function AffordableHousingPage() {
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
            <span className="text-navy-500">Affordable Housing</span>
          </nav>
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
            Affordable Housing HVAC Solutions
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            Compliance-focused, budget-conscious HVAC services for affordable
            housing communities. We help owners maximize returns while keeping
            tenants comfortable and meeting every HUD and LIHTC requirement.
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
            heading="Why Affordable Housing Needs a Specialist"
            subtitle="Affordable housing HVAC is not like standard commercial work. Strict compliance requirements, tight operating budgets, and occupied-unit logistics demand a contractor who understands the unique pressures property owners and managers face."
            centered
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-gray-50 p-6 text-center">
              <p className="font-rubik text-3xl font-bold text-cyan-500">200+</p>
              <p className="mt-2 text-sm text-gray-600">Unit Projects Completed</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-6 text-center">
              <p className="font-rubik text-3xl font-bold text-cyan-500">10%+</p>
              <p className="mt-2 text-sm text-gray-600">Average Cost Savings</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-6 text-center">
              <p className="font-rubik text-3xl font-bold text-cyan-500">$400K+</p>
              <p className="mt-2 text-sm text-gray-600">Client Savings Delivered</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="bg-gray-50 py-20">
        <Container>
          <SectionHeading
            label="Capabilities"
            heading="Services for Affordable Housing"
            subtitle="End-to-end HVAC solutions tailored to the financial and regulatory realities of affordable housing."
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
                heading="An Equity Mindset for Affordable Housing"
              />
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Affordable housing operators work with tighter margins than any
                other sector. That is exactly why we approach every project as if
                we have equity in the outcome. We engineer cost out of the
                project — not quality — so your property performs better for
                tenants and investors alike.
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
                <p className="font-rubik text-5xl font-bold text-cyan-500 md:text-6xl">10%+</p>
                <p className="mt-3 text-lg font-semibold text-navy-500">Average Cost Savings</p>
                <p className="mt-2 text-gray-600">
                  Through value engineering, efficient scheduling, and
                  portfolio-wide pricing for affordable housing operators.
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
            Partner With Us on Your Next Project
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Let us show you how our equity mindset translates into real savings
            for your affordable housing portfolio.
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
