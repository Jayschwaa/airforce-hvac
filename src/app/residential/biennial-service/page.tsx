import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  ChevronRight,
  Phone,
  MessageSquare,
  BadgeCheck,
  Star,
  Calendar,
  Shield,
  Sparkles,
  Wind,
  Droplets,
  ThermometerSun,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Whole Home Biennial Service Program | Air Force HVAC | South Florida",
  description:
    "Complete whole-home HVAC service package: coil cleaning, blower cleaning, compressor maintenance, drain line cleaning, and duct cleaning for $1,800. 18-month option for homes with allergies & pets.",
  keywords: [
    "biennial HVAC service",
    "whole home AC service",
    "HVAC maintenance package",
    "AC tune up South Florida",
    "duct cleaning package",
    "HVAC service discount",
    "Air Force HVAC maintenance",
  ],
};

const serviceItems = [
  {
    icon: Wind,
    title: "Coil Cleaning",
    description:
      "Full evaporator coil deep clean to restore peak cooling efficiency and prevent mold growth.",
  },
  {
    icon: Wrench,
    title: "Blower Cleaning",
    description:
      "Air handler blower wheel cleaning to maximize airflow and reduce energy consumption.",
  },
  {
    icon: ThermometerSun,
    title: "Compressor Maintenance & Refrigerant",
    description:
      "Outdoor unit cleaning, electrical inspection, and refrigerant level check/top-off.",
  },
  {
    icon: Droplets,
    title: "Drain Line Cleaning",
    description:
      "Condensate drain line flush to prevent clogs, water damage, and mold in the drip pan.",
  },
  {
    icon: Shield,
    title: "Duct Cleaning",
    description:
      "Full supply and return duct cleaning with HEPA-filtered equipment. Up to 10 vents included.",
  },
];

export default function BiennialServicePage() {
  return (
    <>
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
            <span className="text-gray-700">Biennial Service Program</span>
          </nav>
        </Container>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-white via-cyan-50/40 to-white py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2">
              <Star className="h-4 w-4 text-white fill-white" />
              <span className="text-sm font-bold tracking-wider text-white">
                BEST VALUE PACKAGE
              </span>
            </div>
            <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
              Whole Home Biennial Service
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              One comprehensive service that covers your entire HVAC system from
              top to bottom. Everything your home needs to run clean and
              efficient.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3 text-gray-500">
              <Calendar className="h-5 w-5 text-cyan-500" />
              <span className="font-medium">
                Every 24 months — or 18 months if you have allergies &amp; pets
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Price Hero */}
      <section className="bg-navy-500 py-12">
        <Container>
          <div className="text-center">
            <p className="text-cyan-400 font-rubik font-semibold text-sm uppercase tracking-wider mb-2">
              Complete Package Price
            </p>
            <div className="flex items-center justify-center gap-2">
              <span className="font-rubik text-7xl font-bold text-white">
                $1,800
              </span>
            </div>
            <p className="mt-3 text-white/60 text-sm max-w-md mx-auto">
              *Pricing assumes one system and 10 vents. Additional systems and
              vents available at standard rates.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="tel:+13053356991"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-8 py-4 font-rubik font-semibold text-white transition-all hover:bg-cyan-600"
              >
                <Phone className="h-5 w-5" />
                Book Now — (305) 335-6991
              </a>
              <a
                href="sms:+13053356991"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 font-rubik font-semibold text-white transition-all hover:bg-white/10"
              >
                <MessageSquare className="h-5 w-5" />
                Text Us
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-500 mb-3">
              EVERYTHING INCLUDED
            </p>
            <h2 className="font-rubik text-3xl font-bold text-navy-500">
              Five Services, One Price
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {serviceItems.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-cyan-200 transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 mb-4">
                  <item.icon className="h-6 w-6 text-cyan-500" />
                </div>
                <h3 className="font-rubik text-lg font-bold text-navy-500">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}

            {/* Savings card */}
            <div className="rounded-xl border-2 border-cyan-200 bg-cyan-50 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 mb-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-rubik text-lg font-bold text-navy-500">
                Save vs. Individual Pricing
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Purchasing these services individually would cost $2,300+. The
                biennial package saves you over $500 while ensuring your entire
                system is serviced at once.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Biennial */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-rubik text-3xl font-bold text-navy-500 text-center mb-10">
              Why Every 2 Years?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <BadgeCheck className="h-6 w-6 text-cyan-500 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-rubik font-bold text-navy-500">
                    South Florida&apos;s Climate Demands It
                  </h3>
                  <p className="mt-1 text-gray-600 text-sm">
                    Your AC runs nearly year-round in our subtropical climate.
                    That means more dust, more humidity, more wear — and faster
                    buildup in ducts and on coils than homes in cooler states.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <BadgeCheck className="h-6 w-6 text-cyan-500 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-rubik font-bold text-navy-500">
                    18 Months If Allergies &amp; Pets
                  </h3>
                  <p className="mt-1 text-gray-600 text-sm">
                    Pet dander, hair, and allergens accumulate faster. If your
                    household has allergy sufferers or pets, we recommend the
                    18-month cycle to maintain optimal indoor air quality.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <BadgeCheck className="h-6 w-6 text-cyan-500 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-rubik font-bold text-navy-500">
                    Prevents Expensive Repairs
                  </h3>
                  <p className="mt-1 text-gray-600 text-sm">
                    Regular maintenance catches problems early — a clogged drain
                    line or dirty coil can lead to water damage, mold, or
                    compressor failure if left unchecked. Prevention is always
                    cheaper than emergency repair.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-cyan-500 to-cyan-600 py-12">
        <Container>
          <div className="text-center">
            <h2 className="font-rubik text-3xl font-bold text-white">
              Schedule Your Biennial Service
            </h2>
            <p className="mt-3 text-white/80 text-lg">
              Call or text us to book. Available 24/7.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="tel:+13053356991"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-rubik font-bold text-cyan-600 transition-all hover:bg-white/90"
              >
                <Phone className="h-5 w-5" />
                (305) 335-6991
              </a>
              <a
                href="sms:+13053356991"
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
