import type { Metadata } from "next";
import Link from "next/link";
import {
  Zap,
  Cable,
  ToggleRight,
  Fan,
  Lightbulb,
  Battery,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Residential Electrical Services | Panel Upgrades & Wiring | Air Force HVAC",
  description:
    "Licensed residential electricians in South Florida. Panel upgrades, wiring, generator installation, surge protection, and more. Serving Palm Beach & Broward Counties.",
};

const services = [
  {
    icon: Zap,
    title: "Panel Upgrades",
    description:
      "Upgrade your electrical panel to handle modern loads. Many South Florida homes built in the 1970s–90s still have 100-amp panels or outdated Federal Pacific and Zinsco breakers that are safety hazards. We upgrade to 200-amp or 400-amp service to support new AC systems, EV chargers, and more.",
  },
  {
    icon: Cable,
    title: "Wiring & Rewiring",
    description:
      "New circuit installation, aluminum-to-copper rewiring, and whole-home rewiring for older properties. Florida’s building codes are among the strictest in the country — all of our work is fully permitted and inspected.",
  },
  {
    icon: ToggleRight,
    title: "Outlet & Switch Installation",
    description:
      "GFCI and AFCI outlet upgrades, USB outlet installation, outdoor-rated outlets, and smart switch setups. Florida code requires GFCI protection in kitchens, bathrooms, garages, and all outdoor locations.",
  },
  {
    icon: Fan,
    title: "Ceiling Fan Installation",
    description:
      "Proper ceiling fan installation with secure mounting and correct wiring. In South Florida, ceiling fans supplement your AC to improve air circulation and can reduce cooling costs by making rooms feel 4–6 degrees cooler.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Upgrades",
    description:
      "Recessed lighting, under-cabinet lighting, landscape lighting, and LED retrofits. We design and install lighting solutions that enhance your home’s aesthetics while reducing energy consumption in the Florida heat.",
  },
  {
    icon: Battery,
    title: "Generator Installation",
    description:
      "Whole-home standby generators that keep your AC, refrigerator, and essential systems running during hurricane season power outages. We install, maintain, and repair Generac, Kohler, and other major brands with automatic transfer switches.",
  },
  {
    icon: ShieldCheck,
    title: "Surge Protection",
    description:
      "Whole-home surge protection systems that guard your electronics and appliances from lightning strikes and grid surges. South Florida sees more lightning per square mile than almost anywhere in the country — surge protection is essential, not optional.",
  },
];

const faqs = [
  {
    question: "How do I know if my electrical panel needs an upgrade?",
    answer:
      "Common signs include frequently tripped breakers, a panel rated at 100 amps or less, a Federal Pacific or Zinsco brand panel (both known safety concerns), visible rust or corrosion, and plans to install a new AC system, hot tub, or EV charger. Most older South Florida homes benefit from upgrading to a 200-amp panel to handle modern electrical demands.",
  },
  {
    question: "Do I need a permit for electrical work in South Florida?",
    answer:
      "Yes, virtually all electrical work beyond simple fixture swaps requires a permit in Palm Beach and Broward Counties. This includes panel upgrades, new circuit installation, rewiring, and generator hookups. Air Force HVAC pulls all necessary permits and schedules inspections as part of our service — you never have to visit a permitting office.",
  },
  {
    question: "What size whole-home generator do I need for hurricane season?",
    answer:
      "For a typical South Florida home, a 14–20 kW generator covers essential circuits including air conditioning, refrigerator, lights, and a few outlets. For whole-home coverage including an electric range, pool pump, and EV charger, 22–26 kW is common. We perform a detailed load analysis and help you prioritize circuits within your budget.",
  },
  {
    question: "Is whole-home surge protection worth it in South Florida?",
    answer:
      "Absolutely. South Florida is in “Lightning Alley” — the region with the highest lightning density in the United States. A single lightning strike near your home can send voltage spikes through power lines and destroy computers, smart TVs, HVAC controls, and appliances. A whole-home surge protector costs a fraction of replacing those items and provides continuous protection.",
  },
];

export default function ResidentialElectricalPage() {
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
            &gt; <span className="text-navy-500">Electrical</span>
          </nav>
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
            Residential Electrical Services
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            Safe, code-compliant electrical work for South Florida homeowners.
            From panel upgrades and whole-home rewiring to generator
            installations that keep you powered through hurricane season, our
            licensed electricians handle it all.
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
            heading="Complete Home Electrical Solutions"
            subtitle="Licensed electricians delivering safe, permitted, and inspected work for every project."
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
            heading="Common Electrical Questions"
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
            Schedule an electrical service or call for a free estimate.
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
