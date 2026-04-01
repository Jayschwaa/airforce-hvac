import type { Metadata } from "next";
import Link from "next/link";
import {
  HeartPulse,
  Shield,
  Wind,
  Droplets,
  AlertTriangle,
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
  title: "Healthcare Facility HVAC | Air Force HVAC Commercial",
  description:
    "Critical environment HVAC for healthcare facilities. Positive/negative pressure rooms, HEPA filtration, humidity control, redundancy systems, and 24/7 emergency response for hospitals and clinics.",
};

const CAPABILITIES = [
  {
    icon: Shield,
    title: "Positive & Negative Pressure Rooms",
    description:
      "Infection control depends on correct room pressurization. We design, install, and verify positive pressure rooms for operating suites and immunocompromised patients, and negative pressure rooms for isolation and airborne infection control.",
  },
  {
    icon: Wind,
    title: "Advanced Air Filtration Systems",
    description:
      "HEPA filtration, UV-C germicidal systems, and multi-stage filtration for critical care areas. We ensure your facility meets or exceeds ASHRAE 170 ventilation standards for healthcare occupancies.",
  },
  {
    icon: Droplets,
    title: "Precision Humidity Control",
    description:
      "Operating rooms, pharmacies, and sterile supply areas require strict humidity ranges. We install and maintain humidification and dehumidification systems that hold conditions within required tolerances.",
  },
  {
    icon: HeartPulse,
    title: "Redundancy & Backup Systems",
    description:
      "Healthcare facilities cannot afford HVAC downtime. We design redundant systems with automatic failover — backup chillers, redundant AHUs, and emergency ventilation — so patient care is never compromised.",
  },
  {
    icon: AlertTriangle,
    title: "24/7 Emergency Response",
    description:
      "When a critical system fails at 2 AM, we respond immediately. Our healthcare emergency team understands the urgency and protocols required for hospital and clinic HVAC emergencies.",
  },
  {
    icon: ClipboardCheck,
    title: "Healthcare Code Compliance",
    description:
      "FGI Guidelines, ASHRAE 170, Joint Commission requirements, and state health department regulations — we ensure your HVAC systems meet every applicable healthcare code and standard.",
  },
];

const APPROACH_POINTS = [
  "Infection control risk assessments (ICRA) before any construction or maintenance work",
  "Background-checked technicians trained in healthcare facility protocols",
  "Minimal disruption scheduling that prioritizes patient care operations",
  "Comprehensive documentation for Joint Commission and regulatory audits",
  "Ongoing monitoring and preventive maintenance for critical systems",
];

export default function HospitalsPage() {
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
            <span className="text-navy-500">Hospitals</span>
          </nav>
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
            Healthcare Facility HVAC
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            Critical environment HVAC for hospitals, clinics, and medical
            offices. Where air quality is a patient safety issue, you need
            a contractor who understands healthcare-grade mechanical systems.
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
            heading="HVAC Is a Patient Safety System"
            subtitle="In healthcare facilities, HVAC is not just about comfort — it is a critical component of infection control, surgical safety, and pharmaceutical integrity. The wrong air pressure, the wrong filter, or the wrong humidity level can have serious consequences. Healthcare HVAC demands specialized knowledge and zero tolerance for error."
            centered
          />
        </Container>
      </section>

      {/* Capabilities */}
      <section className="bg-gray-50 py-20">
        <Container>
          <SectionHeading
            label="Capabilities"
            heading="Healthcare HVAC Services"
            subtitle="Specialized mechanical services for hospitals, clinics, surgical centers, and medical offices."
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
                heading="Healthcare-Grade Standards"
              />
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                We approach every healthcare project with the understanding
                that HVAC failures in a medical facility are not an
                inconvenience — they are a patient safety event. Our
                technicians are trained in ICRA protocols, our work
                follows strict containment procedures, and our
                documentation meets regulatory audit standards.
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
                <p className="font-rubik text-4xl font-bold text-cyan-500 md:text-5xl">24/7</p>
                <p className="mt-3 text-lg font-semibold text-navy-500">Critical Response</p>
                <p className="mt-2 text-gray-600">
                  Round-the-clock emergency service for healthcare facilities
                  where system uptime is non-negotiable.
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
            Need Healthcare-Grade HVAC Service?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Partner with a team that understands the critical requirements
            of hospital and clinical HVAC systems.
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
