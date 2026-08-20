import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  Phone,
  MessageSquare,
  ChevronRight,
  BadgeCheck,
  Sparkles,
  Star,
  Crown,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Summer 2026 Pricing | Air Force HVAC | Residential HVAC Service Prices",
  description:
    "Transparent residential HVAC pricing for South Florida. See our Summer 2026 service rates and Flight Club member discounts. Service calls, coil cleaning, duct cleaning, new system installations, and more.",
  keywords: [
    "HVAC pricing South Florida",
    "AC repair cost",
    "AC installation price",
    "duct cleaning cost",
    "HVAC service prices",
    "Air Force HVAC pricing",
    "Flight Club member discount",
  ],
};

interface ServicePrice {
  service: string;
  regular: string;
  member: string;
  note?: string;
}

const maintenanceServices: ServicePrice[] = [
  { service: "Service Call", regular: "$150", member: "$0" },
  { service: "After Hours Service Call", regular: "$300", member: "$150" },
  { service: "Air Handler Coil Cleaning", regular: "$500", member: "$450" },
  { service: "Air Handler Blower Cleaning", regular: "$400", member: "$360" },
  { service: "Air Handler Pull & Put Back", regular: "$750", member: "$715" },
  { service: "Air Handler Coil Acid Wash", regular: "$750", member: "$715" },
  {
    service: "Duct Cleaning - Air Vents",
    regular: "$95/vent",
    member: "$95/vent",
    note: "Price per vent",
  },
  { service: "Drain Line Cleaning", regular: "$200", member: "$180" },
  {
    service: "Compressor Maintenance / Cleaning",
    regular: "$500",
    member: "$450",
  },
  {
    service: "Compressor Capacitor Replacement",
    regular: "$350",
    member: "$315",
  },
  {
    service: "Compressor Contactor Replacement",
    regular: "$350",
    member: "$315",
  },
  { service: "Refrigerant Leak Repair", regular: "$350", member: "$315" },
  { service: "Refrigerant Leak Re-fill", regular: "$350", member: "$315" },
  { service: "Thermostat Replacement", regular: "$350", member: "$315" },
  { service: "UV Light Installation", regular: "$350", member: "$315" },
];

const newSystems = [
  { size: "2 Ton Goodman", price: "$8,055" },
  { size: "3 Ton Goodman", price: "$8,735" },
  { size: "4 Ton Goodman", price: "$9,495" },
  { size: "5 Ton Goodman", price: "$10,255" },
];

const biennialIncludes = [
  "Coil Cleaning",
  "Blower Cleaning",
  "Compressor Maintenance & Refrigerant",
  "Drain Line Cleaning",
  "Duct Cleaning",
];

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Residential HVAC Services - Summer 2026 Pricing",
  provider: {
    "@type": "HVACBusiness",
    name: "Air Force HVAC",
    telephone: "+18552917007",
  },
  areaServed: "South Florida",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "HVAC Service Pricing",
    itemListElement: maintenanceServices.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.service },
      price: s.regular.replace("$", "").replace("/vent", ""),
      priceCurrency: "USD",
    })),
  },
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      {/* Breadcrumb */}
      <div className="border-b border-gray-100 bg-gray-50">
        <Container>
          <nav className="flex items-center gap-2 py-3 text-sm text-gray-500">
            <Link href="/" className="hover:text-cyan-500 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link
              href="/residential"
              className="hover:text-cyan-500 transition-colors"
            >
              Residential
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gray-700">Pricing</span>
          </nav>
        </Container>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-white via-cyan-50/40 to-white py-16">
        <Container>
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/50 bg-cyan-50 px-4 py-2">
              <Sparkles className="h-4 w-4 text-cyan-500" />
              <span className="text-sm font-semibold tracking-wider text-cyan-600">
                SUMMER 2026
              </span>
            </div>
            <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
              Residential Pricing
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Transparent, upfront pricing. No surprises, no hidden fees.
              Flight Club members save on every service.
            </p>
          </div>
        </Container>
      </section>

      {/* Flight Club Banner */}
      <section className="bg-navy-500 py-6">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3 text-white">
              <Crown className="h-6 w-6 text-yellow-400" />
              <div>
                <p className="font-rubik font-bold text-lg">
                  Flight Club Members Save on Every Service
                </p>
                <p className="text-white/70 text-sm">
                  Starting at just $30/month — member pricing shown in green
                  below
                </p>
              </div>
            </div>
            <a
              href="tel:+18552917007"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 font-rubik font-semibold text-white transition-all hover:bg-cyan-600 shrink-0"
            >
              <Phone className="h-4 w-4" />
              Join Flight Club
            </a>
          </div>
        </Container>
      </section>

      {/* Service & Repair Pricing Table */}
      <section className="py-16 bg-white">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="h-6 w-6 text-cyan-500" />
              <h2 className="font-rubik text-2xl font-bold text-navy-500">
                Service & Repair Pricing
              </h2>
            </div>

            {/* Table Header */}
            <div className="rounded-t-xl bg-navy-500 px-6 py-4 grid grid-cols-12 gap-4 text-white">
              <div className="col-span-6 font-rubik font-semibold text-sm">
                Service
              </div>
              <div className="col-span-3 text-center font-rubik font-semibold text-sm">
                Regular Price
              </div>
              <div className="col-span-3 text-center font-rubik font-semibold text-sm">
                <span className="inline-flex items-center gap-1">
                  <Crown className="h-3.5 w-3.5 text-yellow-400" />
                  Member Price
                </span>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-100 border-x border-b border-gray-200 rounded-b-xl overflow-hidden">
              {maintenanceServices.map((item, i) => (
                <div
                  key={item.service}
                  className={`px-6 py-4 grid grid-cols-12 gap-4 items-center ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                  }`}
                >
                  <div className="col-span-6">
                    <p className="font-medium text-navy-500 text-sm">
                      {item.service}
                    </p>
                    {item.note && (
                      <p className="text-xs text-gray-400 mt-0.5">
                        {item.note}
                      </p>
                    )}
                  </div>
                  <div className="col-span-3 text-center">
                    <span className="font-rubik font-semibold text-gray-700">
                      {item.regular}
                    </span>
                  </div>
                  <div className="col-span-3 text-center">
                    <span className="font-rubik font-bold text-emerald-600">
                      {item.member}
                    </span>
                    {item.member === "$0" && (
                      <span className="ml-1 inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-700">
                        FREE
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* New System Installation */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <BadgeCheck className="h-6 w-6 text-cyan-500" />
              <h2 className="font-rubik text-2xl font-bold text-navy-500">
                New System Installation
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {newSystems.map((sys) => (
                <div
                  key={sys.size}
                  className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm hover:shadow-md hover:border-cyan-200 transition-all"
                >
                  <p className="font-rubik font-semibold text-navy-500 text-lg">
                    {sys.size}
                  </p>
                  <p className="mt-3 font-rubik text-3xl font-bold text-cyan-500">
                    {sys.price}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    Complete installation
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-sm text-gray-500">
              Prices include equipment, labor, and standard installation. Custom
              configurations available — call for a quote.
            </p>
          </div>
        </Container>
      </section>

      {/* Whole Home Biennial Service */}
      <section className="py-16 bg-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border-2 border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-cyan-50 p-8 md:p-10 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-1.5 mb-6">
                <Star className="h-4 w-4 text-white fill-white" />
                <span className="text-sm font-bold text-white tracking-wide">
                  BEST VALUE
                </span>
              </div>

              <h2 className="font-rubik text-3xl font-bold text-navy-500">
                Whole Home Biennial Service
              </h2>
              <p className="mt-2 text-gray-500">
                Discount Package &mdash; (18 Months If Allergies &amp; Pets)
              </p>

              <div className="mt-8 flex items-center justify-center">
                <div className="relative">
                  <span className="font-rubik text-6xl font-bold text-cyan-500">
                    $1,800
                  </span>
                </div>
              </div>

              <div className="mt-8 mx-auto max-w-md">
                <p className="text-sm font-semibold text-navy-500 mb-4 uppercase tracking-wider">
                  Includes:
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {biennialIncludes.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-lg bg-white border border-gray-200 px-4 py-2.5"
                    >
                      <BadgeCheck className="h-4 w-4 text-cyan-500 shrink-0" />
                      <span className="text-sm font-medium text-navy-500">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-6 text-xs text-gray-400">
                *Pricing assumes one system and 10 vents
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="tel:+18552917007"
                  className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-8 py-4 font-rubik font-semibold text-white transition-all hover:bg-cyan-600"
                >
                  <Phone className="h-5 w-5" />
                  Call to Book — 1-855-291-7007
                </a>
                <a
                  href="sms:+18552917007"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-cyan-500 px-8 py-4 font-rubik font-semibold text-cyan-500 transition-all hover:bg-cyan-500 hover:text-white"
                >
                  <MessageSquare className="h-5 w-5" />
                  Text Us
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Before & After Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-500 mb-3">
              QUALITY YOU CAN SEE
            </p>
            <h2 className="font-rubik text-3xl font-bold text-navy-500">
              Before &amp; After
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              See the difference professional HVAC service makes. These are real
              results from South Florida homes.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                caption: "Blower Wheel Deep Clean",
                src: "/images/before-after/blower-wheel.jpg",
                alt: "Before and after blower wheel deep cleaning by Air Force HVAC",
              },
              {
                caption: "Evaporator Coil Restoration",
                src: "/images/before-after/evaporator-coil.jpg",
                alt: "Before and after evaporator coil restoration by Air Force HVAC",
              },
            ].map((item) => (
              <div
                key={item.caption}
                className="overflow-hidden rounded-xl shadow-md"
              >
                <div className="relative aspect-[3/2]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="bg-white px-4 py-3">
                  <p className="text-center font-rubik font-semibold text-navy-500">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-cyan-500 to-cyan-600 py-12">
        <Container>
          <div className="text-center">
            <h2 className="font-rubik text-3xl font-bold text-white">
              Ready to Schedule Service?
            </h2>
            <p className="mt-3 text-white/80 text-lg">
              Call or text us anytime — we&apos;re available 24/7.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="tel:+18552917007"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-rubik font-bold text-cyan-600 transition-all hover:bg-white/90"
              >
                <Phone className="h-5 w-5" />
                1-855-291-7007
              </a>
              <a
                href="sms:+18552917007"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-4 font-rubik font-semibold text-white transition-all hover:bg-white hover:text-cyan-600"
              >
                <MessageSquare className="h-5 w-5" />
                Text Us
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
