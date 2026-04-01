import type { Metadata } from "next";
import Link from "next/link";
import {
  Store,
  UtensilsCrossed,
  Clock,
  FileText,
  Thermometer,
  Wind,
  CheckCircle,
  Phone,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Retail & Restaurant HVAC Buildouts | Air Force HVAC Commercial",
  description:
    "Tenant improvement HVAC for retail spaces and restaurants. Kitchen ventilation, make-up air systems, fast turnaround for lease deadlines, and permitting coordination in South Florida.",
};

const CAPABILITIES = [
  {
    icon: Store,
    title: "Tenant Improvement HVAC",
    description:
      "Whether you are building out a new retail space or reconfiguring an existing one, we design and install HVAC systems tailored to your specific tenant use — from boutique shops to large-format retail.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant Kitchen Ventilation",
    description:
      "Type I and Type II hood systems, make-up air units, and exhaust fans sized and installed to meet Florida fire code and health department requirements. We handle the entire kitchen ventilation package.",
  },
  {
    icon: Wind,
    title: "Make-Up Air Systems",
    description:
      "Restaurants and commercial kitchens need balanced air pressure. We design and install make-up air systems that replace exhausted air, maintain comfortable dining areas, and prevent negative pressure problems.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround Delivery",
    description:
      "Lease clocks are ticking from day one. We understand the urgency of retail buildouts and structure our crews and procurement to meet aggressive timelines without compromising quality.",
  },
  {
    icon: FileText,
    title: "Permitting Coordination",
    description:
      "We manage all mechanical permit applications, coordinate with local building departments, and schedule inspections to align with your construction timeline — keeping your buildout on track.",
  },
  {
    icon: Thermometer,
    title: "Comfort Zoning for Mixed Use",
    description:
      "Retail spaces with multiple tenants need independent climate zones. We design systems that give each tenant control over their own space while sharing infrastructure efficiently.",
  },
];

const APPROACH_POINTS = [
  "Pre-lease HVAC assessments to help landlords and tenants understand buildout costs",
  "Coordination with landlord base-building systems and existing infrastructure",
  "After-hours installation available to avoid disrupting neighboring tenants",
  "Turnkey mechanical scope including electrical connections and gas piping",
  "Post-buildout support with maintenance contracts for long-term tenant comfort",
];

export default function RetailBuildoutsPage() {
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
            <span className="text-navy-500">Retail Buildouts</span>
          </nav>
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
            Retail &amp; Restaurant HVAC Buildouts
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            Fast, code-compliant HVAC buildouts for retail spaces and
            restaurants. From kitchen ventilation to tenant comfort zoning,
            we deliver on tight timelines so you can open your doors on
            schedule.
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
            heading="Retail HVAC Runs on Deadlines"
            subtitle="Every day a retail space sits unfinished is lost revenue. Restaurant buildouts have even more complexity — kitchen ventilation, fire suppression coordination, health department approvals. You need a mechanical contractor who treats your lease deadline like their own."
            centered
          />
        </Container>
      </section>

      {/* Capabilities */}
      <section className="bg-gray-50 py-20">
        <Container>
          <SectionHeading
            label="Capabilities"
            heading="Retail & Restaurant HVAC Services"
            subtitle="Complete mechanical buildout services for commercial retail and food service spaces."
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
                heading="Speed Without Shortcuts"
              />
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                We have refined our retail buildout process to eliminate wasted
                time without cutting corners. Pre-fabricated ductwork, advance
                equipment procurement, and dedicated project coordination mean
                your space gets comfortable fast — and stays that way.
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
                <p className="font-rubik text-4xl font-bold text-cyan-500 md:text-5xl">On Time</p>
                <p className="mt-3 text-lg font-semibold text-navy-500">Delivery Commitment</p>
                <p className="mt-2 text-gray-600">
                  We structure every retail buildout around your opening date,
                  not our convenience.
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
            Opening a New Retail or Restaurant Space?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Get a fast, accurate bid for your tenant buildout HVAC — including
            kitchen ventilation and permitting support.
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
