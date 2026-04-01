import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  Gauge,
  Settings,
  Calendar,
  AlertTriangle,
  Leaf,
  CheckCircle,
  Phone,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Office Building HVAC Solutions | Air Force HVAC Commercial",
  description:
    "Commercial office building HVAC services — VAV systems, building automation, preventive maintenance programs, and after-hours emergency service for South Florida office properties.",
};

const CAPABILITIES = [
  {
    icon: Gauge,
    title: "VAV System Service & Installation",
    description:
      "Variable Air Volume systems are the backbone of modern office climate control. We install, repair, and optimize VAV boxes, controllers, and ductwork to maintain precise comfort across every zone in your building.",
  },
  {
    icon: Settings,
    title: "Building Automation Integration",
    description:
      "We work with all major BAS platforms to integrate HVAC controls, optimize scheduling, and provide real-time monitoring. Better automation means lower energy costs and fewer tenant complaints.",
  },
  {
    icon: Briefcase,
    title: "Tenant Comfort Management",
    description:
      "Hot and cold calls destroy tenant satisfaction. We tune your systems for balanced airflow, calibrate thermostats, and address problem zones so every office suite stays comfortable during business hours.",
  },
  {
    icon: Calendar,
    title: "Preventive Maintenance Programs",
    description:
      "Custom maintenance schedules for office buildings — from monthly filter service to quarterly comprehensive inspections. We document everything and alert you to issues before they become emergencies.",
  },
  {
    icon: AlertTriangle,
    title: "After-Hours Emergency Service",
    description:
      "When a chiller trips on a Friday afternoon or a rooftop unit fails over the weekend, we respond fast. Our emergency team understands that office tenants expect comfort on Monday morning — no excuses.",
  },
  {
    icon: Leaf,
    title: "Energy Management & Optimization",
    description:
      "We audit your building's HVAC energy consumption and implement upgrades that reduce utility costs — from economizer optimization to VFD retrofits on fan motors and pumps.",
  },
];

const APPROACH_POINTS = [
  "Dedicated account manager for each office property",
  "Minimal disruption scheduling — most work done after hours or on weekends",
  "Quarterly performance reports with energy usage trending",
  "Coordination with property management for tenant communication",
  "Capital planning support for equipment replacement budgeting",
];

export default function OfficeBuildingsPage() {
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
            <span className="text-navy-500">Office Buildings</span>
          </nav>
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
            Office Building HVAC Solutions
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            Keep your tenants comfortable and your operating costs under
            control. We provide full-service HVAC for office buildings —
            from preventive maintenance to emergency response to energy
            optimization.
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
            heading="Office HVAC Is a Tenant Retention Strategy"
            subtitle="In commercial office, HVAC comfort directly impacts tenant satisfaction and lease renewals. A building with chronic hot and cold complaints loses tenants. A building with reliable, efficient climate control retains them. We help you be the second kind."
            centered
          />
        </Container>
      </section>

      {/* Capabilities */}
      <section className="bg-gray-50 py-20">
        <Container>
          <SectionHeading
            label="Capabilities"
            heading="Office Building HVAC Services"
            subtitle="Comprehensive solutions for Class A, B, and C office properties."
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
                heading="A Partner for Property Management"
              />
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                We understand that office property managers need a
                responsive, professional HVAC partner — not a vendor who
                disappears between service calls. Our dedicated account
                management model means you always have a direct line to
                someone who knows your building inside and out.
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
                <p className="mt-3 text-lg font-semibold text-navy-500">Emergency Response</p>
                <p className="mt-2 text-gray-600">
                  Because tenant comfort cannot wait until Monday morning.
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
            Upgrade Your Building&apos;s HVAC Program
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Get a customized maintenance and service proposal for your
            office property — designed to improve tenant comfort and
            reduce operating costs.
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
