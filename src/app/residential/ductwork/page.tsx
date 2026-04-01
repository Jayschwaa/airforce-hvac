import type { Metadata } from "next";
import Link from "next/link";
import {
  Wind,
  Wrench,
  Sparkles,
  ThermometerSun,
  SlidersHorizontal,
  RefreshCw,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Residential Ductwork Services | Duct Repair & Installation | Air Force HVAC",
  description:
    "Professional residential ductwork in South Florida. Duct installation, repair, sealing, cleaning, insulation, and air balancing. Serving Palm Beach & Broward Counties.",
};

const services = [
  {
    icon: Wind,
    title: "Duct Installation",
    description:
      "Custom ductwork design and installation for new construction, additions, and homes converting from window units to central air. We work with metal, spiral, and flex duct systems \u2014 engineered for optimal airflow in South Florida\u2019s cooling-dominant climate.",
  },
  {
    icon: Wrench,
    title: "Duct Repair & Sealing",
    description:
      "Leaky ducts waste 20\u201330% of your conditioned air, forcing your AC to work harder in Florida\u2019s heat. We locate and seal disconnections, gaps, and deteriorating joints using Aeroseal technology and manual sealing methods to restore your system\u2019s efficiency.",
  },
  {
    icon: Sparkles,
    title: "Duct Cleaning",
    description:
      "Thorough cleaning that removes dust, mold, pet dander, and debris from your entire duct system. South Florida\u2019s humidity promotes mold growth inside ducts, and dirty ducts recirculate contaminants every time your AC cycles on.",
  },
  {
    icon: ThermometerSun,
    title: "Duct Insulation",
    description:
      "Proper duct insulation prevents condensation and energy loss \u2014 especially critical in South Florida where uninsulated ducts in hot attics and crawlspaces sweat, drip, and grow mold. Insulation also reduces the temperature gain that makes your AC work overtime.",
  },
  {
    icon: SlidersHorizontal,
    title: "Air Balancing",
    description:
      "Room-by-room airflow testing and damper adjustment to eliminate hot and cold spots. Many South Florida homes have uneven cooling because their ductwork was never properly balanced after installation or after changes were made to the home.",
  },
  {
    icon: RefreshCw,
    title: "Duct Replacement",
    description:
      "Complete duct system replacement when repair is no longer cost-effective. Ducts older than 15 years, collapsed flex duct, or systems with extensive mold contamination often need full replacement. We design and install new ductwork sized for your current AC system.",
  },
];

const faqs = [
  {
    question: "How do I know if my ductwork needs repair or replacement?",
    answer:
      "Signs include rooms that are noticeably warmer or cooler than others, excessive dust around vents, musty odors when the AC runs, rising energy bills despite regular AC maintenance, and visible damage or disconnections in accessible duct sections. Ductwork older than 15 years in South Florida\u2019s harsh attic conditions is often a candidate for replacement. We offer free ductwork inspections to assess your system.",
  },
  {
    question: "Can leaky ducts really impact my energy bill that much?",
    answer:
      "Absolutely. The U.S. Department of Energy estimates that leaky ducts lose 20\u201330% of conditioned air before it reaches your living spaces. In South Florida, where your AC runs nearly year-round and attic temperatures can exceed 150\u00B0F, that lost air is replaced by superheated attic air being pulled into the duct system. Sealing your ducts is one of the highest-ROI home improvements available.",
  },
  {
    question: "Why is duct insulation so important in Florida?",
    answer:
      "Florida\u2019s extreme heat means your attic can reach 140\u2013160\u00B0F in summer. Uninsulated ducts running through that space absorb tremendous heat, warming your cooled air by 10\u201320 degrees before it reaches your rooms. Uninsulated ducts also sweat in Florida\u2019s humid air, creating condensation that leads to mold growth, water stains on ceilings, and structural damage over time.",
  },
  {
    question: "How often should ductwork be professionally cleaned?",
    answer:
      "We recommend professional duct cleaning every 3\u20135 years for most South Florida homes. Schedule cleaning sooner if you notice musty odors from your vents, see visible mold near registers, have completed renovation work, or have household members with allergies or asthma. Homes with multiple pets may also benefit from more frequent cleaning.",
  },
];

export default function ResidentialDuctworkPage() {
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
            &gt; <span className="text-navy-500">Ductwork</span>
          </nav>
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
            Residential Ductwork Services
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            Your ductwork is the backbone of your home\u2019s comfort system. Leaky,
            dirty, or poorly insulated ducts waste energy, degrade air quality,
            and create hot spots throughout your home. Our ductwork specialists
            fix these problems with solutions designed for South Florida\u2019s
            demanding climate.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Schedule Service
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
            heading="Complete Ductwork Solutions"
            subtitle="From installation to cleaning, we keep your duct system efficient and your home evenly cooled."
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
            heading="Common Ductwork Questions"
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
            Schedule a ductwork inspection or call for a free estimate.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-white/90"
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
