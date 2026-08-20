import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingDown,
  FileSearch,
  Wind,
  FileText,
  Zap,
  Handshake,
  CheckCircle,
  Phone,
  DollarSign,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Value Engineering & Cost Savings | Air Force HVAC Commercial",
  description:
    "Engineering plan review, efficient duct design, permitting guidance, and electrical coordination that delivers 10%+ average savings. $400K+ in documented client savings across commercial HVAC projects.",
};

const CAPABILITIES = [
  {
    icon: FileSearch,
    title: "Engineering Plan Review",
    description:
      "We review mechanical engineering plans before construction begins, identifying opportunities to substitute more cost-effective equipment, simplify system layouts, and eliminate over-engineering — without sacrificing performance or code compliance.",
  },
  {
    icon: Wind,
    title: "Efficient Duct Design & Materials",
    description:
      "The right duct material, the right size, and the right routing can save thousands on a commercial project. We analyze duct layouts and recommend changes that reduce material costs, installation labor, and long-term energy consumption.",
  },
  {
    icon: FileText,
    title: "Permitting Guidance",
    description:
      "Navigating South Florida's permitting process can add weeks and unexpected costs to a project. Our experience with local building departments helps you avoid common pitfalls, reduce revision cycles, and get approvals faster.",
  },
  {
    icon: Zap,
    title: "Electrical Coordination",
    description:
      "As a multitrade contractor handling both HVAC and electrical, we eliminate the markup and coordination overhead of separate contractors. This integrated approach enables real price savings and fewer change orders.",
  },
  {
    icon: TrendingDown,
    title: "Equipment Right-Sizing",
    description:
      "Oversized HVAC equipment is one of the most common and expensive mistakes in commercial construction. We perform load calculations that match equipment to actual building requirements — avoiding excess capacity you pay for but never use.",
  },
  {
    icon: Handshake,
    title: "Equity Mindset Partnership",
    description:
      "We approach every project as if we have equity in the outcome. That means we proactively find savings opportunities, flag unnecessary expenses, and optimize scope — because your project's financial success is our reputation.",
  },
];

const SAVINGS_EXAMPLES = [
  {
    title: "Equipment Substitution",
    description: "Replacing over-specified equipment with properly sized alternatives that meet performance requirements at lower cost.",
    savings: "5-15%",
  },
  {
    title: "Duct Material Optimization",
    description: "Selecting the most cost-effective duct material for each application — metal, spiral, or fiberglass — based on performance needs.",
    savings: "8-12%",
  },
  {
    title: "Multitrade Coordination",
    description: "Handling HVAC and electrical under one contract eliminates duplicate overhead and reduces change orders.",
    savings: "10-20%",
  },
  {
    title: "Permitting Efficiency",
    description: "Getting plans right the first time avoids revision fees, re-submission delays, and the carrying costs of a stalled project.",
    savings: "Weeks saved",
  },
];

const APPROACH_POINTS = [
  "10%+ average cost savings delivered to commercial clients",
  "$400K+ in documented savings across our project portfolio",
  "Savings found before construction begins — not through change orders after",
  "Every recommendation maintains or improves system performance and code compliance",
  "Transparent documentation so you can see exactly where every dollar was saved",
];

export default function ValueEngineeringPage() {
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
            <span className="text-navy-500">Value Engineering</span>
          </nav>
          <span className="inline-block rounded-full bg-cyan-50 px-4 py-1.5 text-sm font-semibold text-cyan-600">
            Key Differentiator
          </span>
          <h1 className="mt-4 font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
            Value Engineering &amp; Cost Savings
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            We do not just install HVAC systems — we engineer cost out of
            your project. Through plan review, materials optimization,
            multitrade coordination, and permitting expertise, we deliver
            10%+ average savings without sacrificing quality.
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

      {/* Stats */}
      <section className="border-b border-gray-100 bg-gray-50 py-16">
        <Container>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="rounded-xl bg-white p-6 text-center shadow-sm">
              <p className="font-rubik text-3xl font-bold text-cyan-500">10%+</p>
              <p className="mt-2 text-sm text-gray-600">Average Client Savings</p>
            </div>
            <div className="rounded-xl bg-white p-6 text-center shadow-sm">
              <p className="font-rubik text-3xl font-bold text-cyan-500">$400K+</p>
              <p className="mt-2 text-sm text-gray-600">Documented Savings</p>
            </div>
            <div className="rounded-xl bg-white p-6 text-center shadow-sm">
              <p className="font-rubik text-3xl font-bold text-cyan-500">Multi</p>
              <p className="mt-2 text-sm text-gray-600">Trade Capability</p>
            </div>
            <div className="rounded-xl bg-white p-6 text-center shadow-sm">
              <p className="font-rubik text-3xl font-bold text-cyan-500">Pre-Build</p>
              <p className="mt-2 text-sm text-gray-600">Savings Identification</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="py-20">
        <Container>
          <SectionHeading
            label="How We Save You Money"
            heading="Value Engineering Services"
            subtitle="Six proven strategies that deliver measurable cost reductions on commercial HVAC projects."
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

      {/* Savings Breakdown */}
      <section className="bg-gray-50 py-20">
        <Container>
          <SectionHeading
            label="Real Savings"
            heading="Where the Savings Come From"
            subtitle="Specific areas where our value engineering approach delivers measurable cost reductions."
            centered
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {SAVINGS_EXAMPLES.map((example) => (
              <Card key={example.title} className="p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-50">
                    <DollarSign className="h-5 w-5 text-cyan-500" />
                  </div>
                  <span className="font-rubik text-lg font-bold text-cyan-500">{example.savings}</span>
                </div>
                <h3 className="mt-3 font-rubik text-lg font-bold text-navy-500">
                  {example.title}
                </h3>
                <p className="mt-2 text-gray-600">{example.description}</p>
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
                label="Our Philosophy"
                heading="An Equity Mindset"
              />
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Most contractors optimize for their own margin. We optimize
                for your project's total cost. When we review your plans, we
                are looking for ways to save you money — not ways to add
                scope. This equity mindset is why our clients come back
                project after project, and why we have delivered over $400K
                in documented savings.
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
                <p className="font-rubik text-5xl font-bold text-cyan-500 md:text-6xl">$400K+</p>
                <p className="mt-3 text-lg font-semibold text-navy-500">Client Savings Delivered</p>
                <p className="mt-2 text-gray-600">
                  Through plan review, materials optimization, and multitrade
                  coordination across our commercial project portfolio.
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
            Let Us Find the Savings in Your Next Project
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Send us your plans and we will show you where value engineering
            can reduce your project cost — before construction begins.
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
