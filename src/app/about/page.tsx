import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Target,
  Clock,
  TrendingUp,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "About Us | Air Force HVAC",
  description:
    "Founded by the Kurucz and Schwartz families, Air Force HVAC is rooted in service, integrity, and building lasting relationships. Over 10,000 clients served across South Florida and nationwide.",
};

const VALUES = [
  {
    icon: Heart,
    title: "Family Values",
    description:
      "We treat every property like our own. Our ownership mindset ensures we deliver solutions that protect your investment.",
  },
  {
    icon: Target,
    title: "Precision & Quality",
    description:
      "From RTU installations to ductwork, every job is executed with military-grade precision and attention to detail.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description:
      "24/7 emergency service, on-time arrivals, and consistent communication — you can count on us.",
  },
  {
    icon: TrendingUp,
    title: "Equity Mindset",
    description:
      "We help lower costs and improve returns while providing a better tenant experience.",
  },
];

const ABOUT_STATS = [
  { value: "$40M+", label: "National Sales" },
  { value: "10,000+", label: "Clients Served" },
  { value: "10%+", label: "Client Savings on Commercial Projects" },
  { value: "1,000,000+", label: "Sq Ft Duct Cleanings" },
  { value: "$400K+", label: "Client Savings" },
  { value: "24/7", label: "Emergency Service" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-white via-cyan-50/50 to-white py-20 md:py-28 border-b border-gray-100">
        <Container className="text-center">
          <nav className="mb-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-cyan-500 transition-colors">
              Home
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-navy-500">About</span>
          </nav>
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl lg:text-6xl">
            About Air Force HVAC
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Two families. One mission. Exceptional service.
          </p>
        </Container>
      </section>

      {/* ── Our Story ──────────────────────────────────────── */}
      <section className="py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Family Photo */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/photos/founders.jpg"
                alt="The Kurucz and Schwartz families — founders of Air Force HVAC"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Text */}
            <div>
              <SectionHeading
                label="Who We Are"
                heading="Our Story"
              />
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded by the Kurucz and Schwartz families, our company is
                  rooted in a shared dedication to service, integrity, and
                  building lasting relationships. Together, these two families
                  bring decades of hands-on experience, blending technical
                  expertise with a genuine passion for caring for the people and
                  properties we serve.
                </p>
                <p>
                  Over the years, we&apos;ve had the privilege of supporting more
                  than 10,000 clients across a wide range of trades. Each project
                  has been an opportunity to earn trust through consistency,
                  reliability, and an unwavering attention to detail. What truly
                  sets us apart is not just the quality of our work, but the way
                  we approach it — with a personal touch, a strong work ethic,
                  and a commitment to always doing things the right way.
                </p>
                <p>
                  At our foundation, we are two families united by a common
                  vision: to deliver exceptional service while building something
                  meaningful, enduring, and worthy of the trust our clients place
                  in us every day.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Our Values ─────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 md:py-20">
        <Container>
          <SectionHeading
            label="What Drives Us"
            heading="Our Values"
            centered
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="p-6 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50">
                    <Icon className="h-7 w-7 text-cyan-500" />
                  </div>
                  <h3 className="mt-4 font-rubik text-lg font-bold text-navy-500">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── By The Numbers ─────────────────────────────────── */}
      <section className="bg-cyan-50/60 py-16 md:py-20">
        <Container>
          <SectionHeading
            heading="By The Numbers"
            centered
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ABOUT_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-lg text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 md:py-20">
        <Container className="text-center">
          <SectionHeading
            heading="Ready to Work With Us?"
            subtitle="Get in touch today for a free consultation and see how Air Force HVAC can serve your property."
            centered
          />
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
