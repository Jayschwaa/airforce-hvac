import type { Metadata } from "next";
import Link from "next/link";
import {
  Leaf,
  Sun,
  Droplets,
  Wind,
  ClipboardCheck,
  HeartPulse,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Indoor Air Quality Services | Air Purification & Humidity Control | Air Force HVAC",
  description:
    "Improve your South Florida home’s indoor air quality. Air purification, UV light treatment, humidity control, duct cleaning, and allergen reduction. Serving Palm Beach & Broward Counties.",
};

const services = [
  {
    icon: Leaf,
    title: "Air Purification Systems",
    description:
      "Whole-home HEPA filtration and electronic air cleaners that capture 99.97% of airborne particles. South Florida’s year-round pollen seasons, mold spores, and high particulate counts make air purification especially valuable for allergy and asthma sufferers.",
  },
  {
    icon: Sun,
    title: "UV Light Treatment",
    description:
      "UV-C germicidal lights installed inside your ductwork and near the evaporator coil to neutralize mold, bacteria, and viruses. Florida’s humidity creates ideal conditions for mold growth on AC coils — UV treatment keeps your system clean and your air safe.",
  },
  {
    icon: Droplets,
    title: "Humidity Control",
    description:
      "Whole-home dehumidifiers that maintain optimal 45–55% relative humidity levels. South Florida’s outdoor humidity regularly exceeds 80%, and your AC alone cannot always keep indoor moisture in check. Excess humidity leads to mold, musty odors, and structural damage.",
  },
  {
    icon: Wind,
    title: "Duct Cleaning",
    description:
      "Thorough cleaning that removes accumulated dust, mold, pet dander, and debris from your entire duct system. In South Florida, where windows stay closed for much of the year while the AC runs, dirty ducts recirculate contaminants throughout your home.",
  },
  {
    icon: ClipboardCheck,
    title: "Air Quality Testing",
    description:
      "Comprehensive indoor air quality assessments that measure particulate levels, humidity, volatile organic compounds (VOCs), and mold spore concentrations. Testing identifies the exact sources of your air quality problems so we can target solutions effectively.",
  },
  {
    icon: HeartPulse,
    title: "Allergen Reduction",
    description:
      "Multi-layered allergen reduction strategies combining enhanced filtration, humidity control, UV treatment, and duct sealing. Designed for South Florida families dealing with persistent allergy symptoms that worsen indoors, especially during mold-heavy summer months.",
  },
];

const faqs = [
  {
    question: "Why is indoor air quality such a big concern in South Florida?",
    answer:
      "South Florida’s combination of high humidity, warm temperatures, and extended pollen seasons creates ideal conditions for mold growth, dust mites, and airborne allergens. Because homes are sealed up with the AC running for most of the year, contaminants accumulate indoors and can reach concentrations 2–5 times higher than outdoor levels. Proper IAQ solutions are not a luxury here — they are a health necessity.",
  },
  {
    question: "Will a whole-home dehumidifier reduce my energy bills?",
    answer:
      "Yes. When indoor humidity is properly controlled, your air conditioner does not have to work as hard to make your home feel comfortable. Many South Florida homeowners see a noticeable reduction in cooling costs after installing a whole-home dehumidifier, because lower humidity allows you to set your thermostat a few degrees higher without sacrificing comfort.",
  },
  {
    question: "How do I know if I have an indoor air quality problem?",
    answer:
      "Common signs include persistent allergy or asthma symptoms that improve when you leave the house, musty or stale odors, visible mold around vents or on walls, condensation on windows, and excessive dust accumulation. If multiple family members experience respiratory issues, headaches, or fatigue at home, an air quality test can identify the root cause.",
  },
  {
    question: "How often should I have my ducts cleaned in South Florida?",
    answer:
      "We recommend professional duct cleaning every 3–5 years for most South Florida homes. However, you may want to schedule cleaning sooner if you notice musty odors from your vents, have completed a renovation, recently moved into a new home, or have pets that shed heavily. Homes with allergy or asthma sufferers benefit from more frequent cleaning.",
  },
];

export default function ResidentialIndoorAirQualityPage() {
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
            &gt; <span className="text-navy-500">Indoor Air Quality</span>
          </nav>
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
            Indoor Air Quality Services
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            Breathe cleaner, healthier air in your South Florida home. Our IAQ
            experts design custom solutions — from air purification and UV
            treatment to humidity control and duct cleaning — that address the
            unique air quality challenges of living in a tropical climate.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Schedule Assessment
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
            heading="Cleaner Air for Your Home"
            subtitle="Advanced indoor air quality solutions designed for South Florida’s unique climate challenges."
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
            heading="Common Air Quality Questions"
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
            Schedule an air quality assessment or call for a free consultation.
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
