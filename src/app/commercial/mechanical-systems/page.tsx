import type { Metadata } from "next";
import Link from "next/link";
import {
  Cog,
  Snowflake,
  Flame,
  Wind,
  TrendingUp,
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
  title: "Commercial Mechanical Systems | Air Force HVAC Commercial",
  description:
    "Full-service commercial mechanical systems — chillers, cooling towers, air handling units, and boilers. Installation, repair, replacement, and energy efficiency upgrades for South Florida commercial properties.",
};

const CAPABILITIES = [
  {
    icon: Snowflake,
    title: "Chiller Service & Installation",
    description:
      "Air-cooled and water-cooled chiller installation, repair, and replacement for commercial properties. We service all major brands and handle everything from compressor replacements to complete chiller plant upgrades.",
  },
  {
    icon: Cog,
    title: "Cooling Tower Maintenance",
    description:
      "Cooling towers require specialized maintenance to operate efficiently and avoid legionella risk. We provide comprehensive tower service including cleaning, water treatment coordination, fan motor replacement, and basin repair.",
  },
  {
    icon: Wind,
    title: "Air Handling Unit Service",
    description:
      "AHU installation, coil replacement, fan motor service, bearing replacement, and controls upgrades. We keep your air handlers running efficiently and extend their useful life through proactive maintenance.",
  },
  {
    icon: Flame,
    title: "Boiler Systems",
    description:
      "Commercial boiler installation, repair, and annual inspections. From domestic hot water boilers to hydronic heating systems, we ensure reliable operation and code compliance for your facility.",
  },
  {
    icon: Wrench,
    title: "System Design & Engineering",
    description:
      "When your facility needs a new mechanical system or a major upgrade, our team provides load calculations, equipment selection, and system design that balances performance, efficiency, and budget.",
  },
  {
    icon: TrendingUp,
    title: "Energy Efficiency Upgrades",
    description:
      "VFD retrofits on pumps and fans, economizer installations, heat recovery systems, and controls upgrades that reduce your mechanical system's energy consumption — often with utility rebate support.",
  },
];

const APPROACH_POINTS = [
  "Multi-brand expertise — we service and install all major commercial equipment manufacturers",
  "Lifecycle cost analysis to help you decide between repair and replacement",
  "Emergency response for critical mechanical system failures",
  "Planned replacement programs that spread capital costs over time",
  "Commissioning and startup services for new installations",
];

export default function MechanicalSystemsPage() {
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
            <span className="text-navy-500">Mechanical Systems</span>
          </nav>
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
            Commercial Mechanical Systems
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            Chillers, cooling towers, air handling units, and boilers —
            installed, repaired, and maintained by a team that understands
            large-scale commercial mechanical infrastructure.
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
            label="Service Overview"
            heading="The Heart of Your Building"
            subtitle="Your mechanical systems are the heart of your building's comfort and functionality. When they run efficiently, energy costs drop and tenant satisfaction rises. When they fail, everything stops. We provide the full range of mechanical services to keep your building performing at its best."
            centered
          />
        </Container>
      </section>

      {/* Capabilities */}
      <section className="bg-gray-50 py-20">
        <Container>
          <SectionHeading
            label="Capabilities"
            heading="Mechanical System Services"
            subtitle="Complete lifecycle support for commercial mechanical equipment."
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
                heading="Lifecycle Mechanical Partnership"
              />
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                We do not just fix what is broken. Our approach to mechanical
                systems management considers the full lifecycle of your
                equipment — from initial design and installation through
                ongoing maintenance, efficiency optimization, and eventual
                replacement planning. This long-term perspective saves you
                money and prevents surprises.
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
                  Across commercial properties in South Florida — from
                  single RTUs to complex chiller plants.
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
            Need Mechanical System Service?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            From emergency repairs to planned replacements, we are your
            single-source mechanical systems partner.
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
