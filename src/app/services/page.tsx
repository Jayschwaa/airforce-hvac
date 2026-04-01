import type { Metadata } from "next";
import Link from "next/link";
import {
  Thermometer,
  Wind,
  Leaf,
  Droplets,
  Home,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SERVICES } from "@/data/services";
import type { LucideProps } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Air Force HVAC",
  description:
    "Full-range HVAC, ductwork, indoor air quality, plumbing, roofing, and electrical services for commercial and residential properties in South Florida.",
};

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  Thermometer,
  Wind,
  Leaf,
  Droplets,
  Home,
  Zap,
};

const COLOR_BARS = [
  "bg-cyan-500",
  "bg-cyan-300",
  "bg-cyan-600",
  "bg-cyan-400",
  "bg-cyan-200",
  "bg-cyan-700",
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-white via-cyan-50/50 to-white py-20 md:py-28 border-b border-gray-100">
        <Container className="text-center">
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl lg:text-6xl">
            Complete Property Solutions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            From HVAC and ductwork to plumbing, roofing, and electrical — we
            deliver a full range of services to keep your property comfortable,
            efficient, and compliant.
          </p>
        </Container>
      </section>

      {/* ── Service Cards ───────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => {
              const Icon = ICON_MAP[service.icon] ?? Thermometer;
              const barColor = COLOR_BARS[index % COLOR_BARS.length];

              return (
                <Card key={service.slug} className="flex flex-col">
                  {/* Color top bar */}
                  <div className={`h-1.5 ${barColor}`} />

                  <div className="flex flex-1 flex-col p-6">
                    {/* Icon */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50">
                      <Icon className="h-7 w-7 text-cyan-500" />
                    </div>

                    {/* Name */}
                    <h3 className="mt-4 font-rubik text-xl font-bold text-navy-500">
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-gray-600">
                      {service.shortDescription}
                    </p>

                    {/* Badges */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.isCommercial && (
                        <span className="rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-500">
                          Commercial
                        </span>
                      )}
                      {service.isResidential && (
                        <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-600">
                          Residential
                        </span>
                      )}
                    </div>

                    {/* Key features */}
                    <ul className="mt-4 space-y-1.5 text-sm text-gray-600">
                      {service.features.slice(0, 4).map((feature) => (
                        <li
                          key={feature.title}
                          className="flex items-start gap-2"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                          {feature.title}
                        </li>
                      ))}
                    </ul>

                    {/* Link */}
                    <div className="mt-auto pt-6">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1.5 font-rubik font-semibold text-cyan-500 transition-colors hover:text-cyan-600"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Bottom CTA ──────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 md:py-20">
        <Container className="text-center">
          <SectionHeading
            heading="Not Sure What You Need?"
            subtitle="Contact us for a free assessment. Our team will evaluate your property and recommend the right solutions."
            centered
          />
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Get a Free Assessment
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
