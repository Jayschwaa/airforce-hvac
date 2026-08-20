import type { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  Search,
  Wrench,
  RefreshCw,
  CloudRain,
  ArrowDownToLine,
  Wind,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Residential Roofing Services | Roof Repair & Replacement | Air Force HVAC",
  description:
    "Expert residential roofing in South Florida. Roof inspections, repairs, replacements, storm damage repair, and gutter installation. Hurricane-rated materials for Palm Beach & Broward Counties.",
};

const services = [
  {
    icon: Search,
    title: "Roof Inspection",
    description:
      "Comprehensive roof inspections with detailed photo documentation and written reports. Essential before hurricane season, after major storms, and when buying or selling a South Florida home. We check for cracked tiles, missing shingles, flashing failures, and structural concerns.",
  },
  {
    icon: Wrench,
    title: "Roof Repair",
    description:
      "Targeted repairs for leaks, damaged tiles, cracked shingles, deteriorating flashing, and worn sealants. South Florida’s combination of intense UV radiation, salt air, and driving rain accelerates roof wear — timely repairs prevent small issues from becoming major damage.",
  },
  {
    icon: RefreshCw,
    title: "Roof Replacement",
    description:
      "Full tear-off and replacement using Florida Building Code-rated materials designed to withstand Category 5 winds. We work with architectural shingles, concrete and clay tile, metal roofing, and flat roof systems — all backed by manufacturer warranties.",
  },
  {
    icon: CloudRain,
    title: "Storm Damage Repair",
    description:
      "Rapid response after hurricanes and tropical storms. We provide emergency tarping to prevent interior water damage and complete permanent repairs as quickly as possible. Our team assists with insurance documentation and claims to help you get fair coverage.",
  },
  {
    icon: ArrowDownToLine,
    title: "Gutter Installation",
    description:
      "Seamless aluminum gutter installation sized for South Florida’s heavy rainfall. Properly functioning gutters protect your foundation, prevent fascia rot, and reduce erosion around your home. We also offer gutter guards to minimize maintenance.",
  },
  {
    icon: Wind,
    title: "Attic Ventilation",
    description:
      "Balanced attic ventilation systems that reduce heat buildup and moisture accumulation. In South Florida, poor attic ventilation can push temperatures above 150°F, baking your roof deck from below and driving up cooling costs significantly.",
  },
];

const faqs = [
  {
    question: "How often should I have my roof inspected in South Florida?",
    answer:
      "We recommend an annual inspection, ideally before hurricane season begins in June. You should also schedule an inspection after any major storm event and if you notice interior water stains, missing tiles, or granule buildup in your gutters. Florida’s intense UV exposure and tropical weather cause roofing materials to degrade faster than in cooler, drier climates.",
  },
  {
    question: "How long does a roof typically last in South Florida?",
    answer:
      "Roof lifespan in South Florida depends on the material: asphalt shingles last 15–20 years, concrete and clay tile last 25–50 years, and metal roofing can last 40–70 years. However, storm damage, poor ventilation, and salt air exposure near the coast can shorten these lifespans. Regular maintenance and timely repairs are key to maximizing your roof’s life.",
  },
  {
    question: "Do you help with insurance claims after storm damage?",
    answer:
      "Yes. We provide detailed inspection reports with photographs and written damage assessments that support your insurance claim. Our team works with all major insurance carriers and can meet with your adjuster on-site. We do not charge for initial storm damage inspections.",
  },
  {
    question: "What roofing material is best for hurricane protection?",
    answer:
      "Metal roofing and concrete tile offer the best wind resistance, with many products rated for winds exceeding 180 mph. Impact-rated architectural shingles are also a strong, more affordable option. All roofing materials we install meet or exceed Florida Building Code requirements for high-velocity hurricane zones, which covers most of Palm Beach and Broward Counties.",
  },
];

export default function ResidentialRoofingPage() {
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
            &gt; <span className="text-navy-500">Roofing</span>
          </nav>
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
            Residential Roofing Services
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            Your roof is your home’s first defense against South Florida’s
            hurricanes, heavy rain, and relentless sun. From routine inspections
            to full replacements with hurricane-rated materials, Air Force HVAC
            keeps your roof strong and your home protected.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Schedule Inspection
            </Button>
            <Button href={PHONE_HREF} variant="outline" size="lg">
              Call {PHONE}
            </Button>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <Container>
          <SectionHeading
            label="Our Services"
            heading="Complete Residential Roofing"
            subtitle="Protecting South Florida homes with expert roofing services and hurricane-rated materials."
            centered
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => (
              <Card key={svc.title} className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                  <svc.icon className="h-6 w-6 text-cyan-500" />
                </div>
                <h3 className="font-rubik text-lg font-bold text-navy-500">
                  {svc.title}
                </h3>
                <p className="mt-2 text-gray-600">{svc.description}</p>
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
            heading="Common Roofing Questions"
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
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-white/80">
            Schedule a roof inspection or call for a free estimate.
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
