import type { Metadata } from "next";
import Link from "next/link";
import {
  Thermometer,
  Waves,
  Gauge,
  Video,
  Droplet,
  AlertTriangle,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Leak Detection Services | South Florida | Air Force HVAC",
  description:
    "Pinpoint hidden leaks without tearing up walls or floors. Air Force HVAC uses thermal imaging, acoustic sensors, and camera diagnostics across Miami-Dade, Broward & Palm Beach Counties.",
};

const tools = [
  {
    icon: Thermometer,
    title: "Infrared Thermal Imaging",
    description:
      "Our thermal cameras read surface temperature differences caused by moisture moving behind drywall, under tile, and inside slabs — often revealing a leak's footprint before a single tool touches the wall.",
  },
  {
    icon: Waves,
    title: "Acoustic Listening Equipment",
    description:
      "Pressurized water escaping a pipe creates a distinct sound signature. Ground microphones and listening discs let our technicians triangulate that sound to a specific section of pipe, not just a general area.",
  },
  {
    icon: Droplet,
    title: "Moisture Meters & Sensors",
    description:
      "Calibrated meters measure moisture content inside drywall, subfloor, and concrete, helping us confirm a leak's presence and track how far water has traveled from its source.",
  },
  {
    icon: Video,
    title: "Camera Line Inspection",
    description:
      "For drain and sewer lines, a waterproof push camera gives us a live, real-time view inside the pipe so we can see cracks, offsets, or root intrusion directly instead of guessing.",
  },
  {
    icon: Gauge,
    title: "Pressure Testing",
    description:
      "Isolating sections of your plumbing system and testing pressure helps us confirm whether a leak exists in a specific zone before any exploratory work begins.",
  },
];

const warningSigns = [
  "A water bill that jumps with no change in usage",
  "Warm or damp patches on an otherwise dry floor",
  "The sound of running water when every fixture is off",
  "Musty odors or unexplained mold near baseboards",
  "Cracks forming in flooring, drywall, or the foundation",
  "A noticeable drop in water pressure throughout the house",
];

const faqs = [
  {
    question: "Will you have to cut into my walls or floors to find a leak?",
    answer:
      "In most cases, no. We start with non-invasive methods — thermal imaging, acoustic listening, and moisture readings — to narrow the leak down to a specific area first. Any opening we make afterward is small and targeted rather than exploratory demolition.",
  },
  {
    question: "How long does a leak detection visit take?",
    answer:
      "A typical visit runs one to three hours depending on the size of the home and how the leak is behaving. Straightforward fixture leaks can be confirmed quickly; a slab leak with limited surface symptoms takes longer to isolate.",
  },
  {
    question: "Why do South Florida homes get slab leaks so often?",
    answer:
      "Much of South Florida sits on shifting, limestone-heavy soil, and many homes built from the 1970s through the 1990s have copper supply lines running through the slab. Mineral-heavy water, soil movement, and decades of pipe expansion and contraction all combine to make slab leaks more common here than in most parts of the country.",
  },
  {
    question: "What happens after you find the leak?",
    answer:
      "We walk you through exactly what we found, where it is, and the repair options available — from a targeted spot repair to rerouting the line. You get straightforward pricing before any repair work begins, no surprise charges after the fact.",
  },
];

export default function LeakDetectionPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-white via-cyan-50/50 to-white py-20 md:py-28 border-b border-gray-100">
        <Container>
          <nav className="mb-6 text-sm text-gray-400">
            <Link href="/" className="transition-colors hover:text-cyan-500">
              Home
            </Link>{" "}
            &gt;{" "}
            <Link
              href="/residential"
              className="transition-colors hover:text-cyan-500"
            >
              Residential
            </Link>{" "}
            &gt; <span className="text-navy-500">Leak Detection</span>
          </nav>
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
            Leak Detection Services
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            A leak you can&apos;t see can still cost you thousands in water bills
            and structural damage. Our technicians combine thermal imaging,
            acoustic sensors, and camera inspection to find hidden leaks
            accurately, without unnecessary demolition.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Schedule an Inspection
            </Button>
            <Button href={PHONE_HREF} variant="outline" size="lg">
              Call {PHONE}
            </Button>
          </div>
        </Container>
      </section>

      {/* Warning Signs */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading
            label="Know the Signs"
            heading="Six Signs You May Have a Hidden Leak"
            centered
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {warningSigns.map((sign) => (
              <div
                key={sign}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4"
              >
                <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-500" />
                <span className="text-gray-700">{sign}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tools & Methods */}
      <section className="py-20">
        <Container>
          <SectionHeading
            label="How We Find It"
            heading="Detection Technology That Skips the Guesswork"
            subtitle="We layer multiple detection methods so we can confirm a leak's location before we ever pick up a tool."
            centered
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <Card key={tool.title} className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                  <tool.icon className="h-6 w-6 text-cyan-500" />
                </div>
                <h3 className="font-rubik text-lg font-bold text-navy-500">
                  {tool.title}
                </h3>
                <p className="mt-2 text-gray-600">{tool.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <Container>
          <SectionHeading
            label="FAQ"
            heading="Leak Detection Questions"
            centered
          />
          <div className="mx-auto mt-10 max-w-3xl">
            <Accordion items={faqs} />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-cyan-500 to-cyan-600 py-16">
        <Container className="text-center">
          <h2 className="font-rubik text-3xl font-bold text-white">
            Think You Might Have a Hidden Leak?
          </h2>
          <p className="mt-4 text-white/80">
            The sooner it&apos;s found, the less it costs to fix. Schedule an
            inspection or call us anytime.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/contact"
              variant="white"
              size="lg"
            >
              Contact Us
            </Button>
            <Button
              href={PHONE_HREF}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-cyan-600"
            >
              Call {PHONE}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
