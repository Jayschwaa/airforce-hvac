import type { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  Wrench,
  CloudRain,
  Droplets,
  Fan,
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
  title: "Commercial Roofing Services | Air Force HVAC Commercial",
  description:
    "Commercial flat roof systems, repair, and maintenance. Coordinated with RTU installations for seamless rooftop work. Storm damage assessment and waterproofing for South Florida commercial properties.",
};

const CAPABILITIES = [
  {
    icon: Home,
    title: "Flat Roof Systems",
    description:
      "TPO, EPDM, and modified bitumen flat roof installation for commercial buildings. We install roofing systems engineered for South Florida's sun exposure, wind loads, and driving rain — with manufacturer-backed warranties.",
  },
  {
    icon: Wrench,
    title: "Roof Repair & Maintenance",
    description:
      "Leak detection, patch repairs, flashing replacement, and scheduled maintenance that extends your roof's lifespan. We identify problems early and fix them before they cause interior water damage.",
  },
  {
    icon: Fan,
    title: "RTU Installation Coordination",
    description:
      "Rooftop HVAC equipment and roofing go hand in hand. We coordinate curb installations, roof penetrations, and flashing details so your RTU installation does not compromise your roof warranty or waterproofing.",
  },
  {
    icon: CloudRain,
    title: "Storm Damage Assessment & Repair",
    description:
      "After a hurricane or severe storm, we assess your commercial roof for damage, document conditions for insurance claims, and perform emergency repairs to prevent further water intrusion.",
  },
  {
    icon: Droplets,
    title: "Waterproofing",
    description:
      "Roof coatings, parapet waterproofing, and drainage improvements that protect your building from South Florida's intense rain events. We apply silicone and acrylic roof coatings that extend roof life and improve reflectivity.",
  },
  {
    icon: ClipboardCheck,
    title: "Roof Condition Reports",
    description:
      "Comprehensive roof inspection reports with photographic documentation, condition ratings, and recommended repairs. Useful for property transactions, insurance renewals, and capital planning.",
  },
];

const APPROACH_POINTS = [
  "HVAC-roofing coordination eliminates the blame game between separate contractors",
  "RTU curb and penetration details done right to protect your roof warranty",
  "Emergency tarping and repair available after storm events",
  "Experience with South Florida building codes and wind load requirements",
  "Single point of contact for both your roofing and rooftop HVAC needs",
];

export default function RoofingPage() {
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
            <span className="text-navy-500">Roofing</span>
          </nav>
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
            Commercial Roofing Services
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            Flat roof systems, repair, and maintenance — coordinated with
            rooftop HVAC installations for seamless, warranty-preserving
            results. Built for South Florida weather.
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

      {/* Overview */}
      <section className="py-20">
        <Container>
          <SectionHeading
            label="Service Overview"
            heading="Your Roof and Your HVAC Are Connected"
            subtitle="Every commercial rooftop unit sits on your roof. Every refrigerant line, condensate drain, and electrical conduit penetrates your roof. When different contractors handle roofing and HVAC, the result is often finger-pointing over leaks, voided warranties, and expensive repairs. We solve this by handling both."
            centered
          />
        </Container>
      </section>

      {/* Capabilities */}
      <section className="bg-gray-50 py-20">
        <Container>
          <SectionHeading
            label="Capabilities"
            heading="Commercial Roofing Services"
            subtitle="Full-scope roofing for commercial properties in South Florida."
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
                heading="Roofing + HVAC, One Contractor"
              />
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                The biggest advantage of our commercial roofing service is
                coordination with our HVAC work. When we install an RTU, we
                also handle the curb, the penetrations, and the flashing.
                There is no separate roofing contractor to schedule, no
                warranty gray areas, and no finger-pointing if a leak
                appears. One team, one warranty, one phone call.
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
                <p className="font-rubik text-4xl font-bold text-cyan-500 md:text-5xl">Zero</p>
                <p className="mt-3 text-lg font-semibold text-navy-500">Warranty Gray Areas</p>
                <p className="mt-2 text-gray-600">
                  When one contractor handles roofing and HVAC, there is no
                  ambiguity about who is responsible for roof integrity.
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
            Need Commercial Roofing?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Get roofing service that is coordinated with your HVAC — from
            repairs to full roof replacements.
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
