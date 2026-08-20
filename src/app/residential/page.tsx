import type { Metadata } from "next";
import Link from "next/link";
import {
  Star,
  Heart,
  ShieldCheck,
  Clock,
  Thermometer,
  Droplets,
  Zap,
  Home,
  CheckCircle,
  Phone,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Residential Services | Air Force HVAC",
  description:
    "Your home comfort experts in South Florida. HVAC, plumbing, electrical, and roofing services for homeowners in Palm Beach & Broward Counties. Schedule service today.",
};

const TRUST_BADGES = [
  { icon: Star, text: "4.9 Stars" },
  { icon: Heart, text: "Family Owned" },
  { icon: ShieldCheck, text: "Licensed & Insured" },
  { icon: Clock, text: "24/7 Emergency" },
];

const SERVICES = [
  {
    icon: Thermometer,
    name: "HVAC",
    href: "/services/hvac",
    description:
      "AC repair, installation, and maintenance to keep your home comfortable year-round.",
  },
  {
    icon: Droplets,
    name: "Plumbing",
    href: "/services/plumbing",
    description:
      "From leak repairs to full re-pipes, our licensed plumbers handle it all.",
  },
  {
    icon: Zap,
    name: "Electrical",
    href: "/services/electrical",
    description:
      "Panel upgrades, rewiring, lighting, and whole-home electrical solutions.",
  },
  {
    icon: Home,
    name: "Roofing",
    href: "/services/roofing",
    description:
      "Roof repairs, replacements, and inspections to protect your biggest investment.",
  },
];

const GUARANTEES = [
  {
    title: "100% Satisfaction Guarantee",
    description:
      "If you're not happy with our work, we'll make it right — no questions asked.",
  },
  {
    title: "Upfront Pricing",
    description:
      "You'll know the cost before we start. No hidden fees, no surprises on your bill.",
  },
  {
    title: "On-Time or It's Free",
    description:
      "We respect your time. If we're late to your scheduled appointment, the service call is on us.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Air Force HVAC replaced our entire AC system in one day. The crew was professional, clean, and the price was fair. Our house has never been this comfortable.",
    name: "Maria S.",
    location: "Boca Raton, FL",
  },
  {
    quote:
      "We had a plumbing emergency on a Sunday and they were at our door within an hour. Honest pricing and great communication throughout. Highly recommend!",
    name: "David R.",
    location: "Fort Lauderdale, FL",
  },
  {
    quote:
      "We've been Flight Club members for two years now. The regular maintenance has saved us from costly repairs, and the priority scheduling is a lifesaver.",
    name: "Jennifer T.",
    location: "Delray Beach, FL",
  },
];

export default function ResidentialPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-white via-cyan-50/50 to-white py-24 md:py-32 border-b border-gray-100">
        <Container>
          <span className="inline-block rounded-full bg-cyan-50 px-4 py-1.5 text-sm font-semibold text-cyan-600">
            Serving Palm Beach &amp; Broward Counties
          </span>
          <h1 className="mt-6 font-rubik text-4xl font-bold text-navy-500 md:text-5xl lg:text-6xl">
            Your Home Comfort Experts
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            From AC tune-ups to full-home re-pipes, our licensed technicians
            deliver reliable service you can trust. Family owned since 2010.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Schedule Service
            </Button>
            <Button href={PHONE_HREF} variant="outline" size="lg">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>
        </Container>
      </section>

      {/* ── Trust Strip ─────────────────────────────────────── */}
      <section className="border-b border-gray-100 bg-gray-50 py-8">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {TRUST_BADGES.map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 text-gray-700"
              >
                <badge.icon className="h-5 w-5 text-cyan-500" />
                <span className="text-sm font-semibold font-rubik">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Services Grid ───────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            label="What We Do"
            heading="Residential Services"
            subtitle="Everything your home needs under one roof."
            centered
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <Link key={service.name} href={service.href} className="group">
                <Card className="p-6 h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50 group-hover:bg-cyan-100 transition-colors">
                    <service.icon className="h-6 w-6 text-cyan-500" />
                  </div>
                  <h3 className="mt-4 font-rubik text-lg font-bold text-navy-500 group-hover:text-cyan-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-cyan-500">
                    Learn More{" "}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Guarantees ──────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 md:py-24">
        <Container>
          <SectionHeading
            label="Our Promise"
            heading="Guarantees You Can Count On"
            centered
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {GUARANTEES.map((guarantee) => (
              <Card key={guarantee.title} className="p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cyan-50">
                  <CheckCircle className="h-6 w-6 text-cyan-500" />
                </div>
                <h3 className="mt-4 font-rubik text-lg font-bold text-navy-500">
                  {guarantee.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {guarantee.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Flight Club Teaser ─────────────────────────────── */}
      <section className="bg-gradient-to-r from-cyan-500 to-cyan-600 py-14 md:py-16">
        <Container className="text-center">
          <h2 className="font-rubik text-3xl font-bold text-white md:text-4xl">
            Join the Flight Club
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Starting at just $30/mo, get priority scheduling, annual tune-ups,
            and exclusive discounts on repairs.
          </p>
          <div className="mt-8">
            <Button
              href="/comfort-club"
              size="lg"
              variant="white"
            >
              Learn About Flight Club
            </Button>
          </div>
        </Container>
      </section>

      {/* ── Scheduling Form ─────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              label="Book Now"
              heading="Schedule Your Service"
              subtitle="Fill out the form below and a team member will confirm your appointment within one business hour."
              centered
            />
            <form
              className="mt-10 space-y-5"
              action="/contact"
              method="GET"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="res-name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    id="res-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="res-phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    id="res-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(555) 123-4567"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="res-service"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Service Needed
                  </label>
                  <select
                    id="res-service"
                    name="service"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="hvac">HVAC</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="electrical">Electrical</option>
                    <option value="roofing">Roofing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="res-zip"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Zip Code
                  </label>
                  <input
                    id="res-zip"
                    name="zip"
                    type="text"
                    required
                    placeholder="33431"
                    pattern="[0-9]{5}"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition"
                  />
                </div>
              </div>

              <fieldset>
                <legend className="block text-sm font-medium text-gray-700 mb-2">
                  Urgency
                </legend>
                <div className="flex flex-wrap gap-4">
                  {(["Routine", "Urgent", "Emergency"] as const).map(
                    (level) => (
                      <label
                        key={level}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="urgency"
                          value={level.toLowerCase()}
                          defaultChecked={level === "Routine"}
                          className="h-4 w-4 text-cyan-500 border-gray-300 focus:ring-cyan-500"
                        />
                        <span className="text-sm text-gray-700">{level}</span>
                      </label>
                    )
                  )}
                </div>
              </fieldset>

              <Button type="submit" size="lg" className="w-full">
                Request Appointment
              </Button>
            </form>
          </div>
        </Container>
      </section>

      {/* ── Testimonials ────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 md:py-24">
        <Container>
          <SectionHeading
            label="Reviews"
            heading="What Homeowners Say"
            centered
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <Card key={t.name} className="p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4 border-t border-gray-100 pt-4">
                  <p className="font-rubik font-semibold text-navy-500 text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-500">{t.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Emergency CTA ───────────────────────────────────── */}
      <section className="bg-gradient-to-r from-navy-500 to-navy-600 py-14 md:py-16">
        <Container className="text-center">
          <h2 className="font-rubik text-3xl font-bold text-white md:text-4xl">
            Need Emergency Service?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Our 24/7 emergency team is standing by. Call now and a technician
            will be on the way.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href={PHONE_HREF}
              size="lg"
              className="bg-white text-navy-600 hover:bg-white/90"
            >
              <Phone className="mr-2 h-5 w-5" />
              {PHONE}
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-navy-600"
            >
              Schedule Online
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
