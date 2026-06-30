import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  DollarSign,
  CalendarClock,
  ShieldCheck,
  Plus,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import {
  FLIGHT_CLUB_PLANS,
  FLIGHT_CLUB_ADDONS,
} from "@/data/flightClub";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Flight Club Membership | Air Force HVAC",
  description:
    "Join the Air Force HVAC Flight Club for priority service, seasonal tune-ups, and exclusive discounts starting at just $30/month.",
};

const TUNE_UP_ITEMS = [
  {
    question: "Check thermostat settings",
    answer:
      "We verify your thermostat is properly calibrated and programmed for optimal comfort and energy efficiency.",
  },
  {
    question: "Tighten electrical connections",
    answer:
      "Loose connections can cause unsafe operation and reduce equipment life. We inspect and tighten all electrical components.",
  },
  {
    question: "Lubricate moving parts",
    answer:
      "Proper lubrication reduces friction in motors, extending their lifespan and reducing electricity consumption.",
  },
  {
    question: "Check condensate drain",
    answer:
      "A plugged drain can cause water damage and affect indoor humidity levels. We ensure proper drainage.",
  },
  {
    question: "Check system controls",
    answer:
      "We verify the start cycle, operation, and shut-off sequence to ensure safe and proper operation.",
  },
  {
    question: "Clean and adjust blower components",
    answer:
      "Proper airflow is essential for comfort and efficiency. We clean and calibrate blower components for optimal performance.",
  },
  {
    question: "Check refrigerant levels",
    answer:
      "Too much or too little refrigerant reduces efficiency and increases operating costs. We check and adjust as needed.",
  },
  {
    question: "Clean evaporator and condenser coils",
    answer:
      "Dirty coils reduce the system's ability to cool your space and cause it to run longer, increasing energy costs.",
  },
  {
    question: "Check and replace air filter",
    answer:
      "A dirty filter restricts airflow, reducing efficiency and degrading indoor air quality. We check and replace as needed.",
  },
  {
    question: "Inspect ductwork",
    answer:
      "We visually inspect accessible ductwork for leaks, damage, or insulation issues that could waste energy.",
  },
];

const WHY_JOIN = [
  {
    icon: DollarSign,
    title: "Save Money",
    description:
      "Members save an average of 15% on repairs and avoid costly breakdowns.",
  },
  {
    icon: CalendarClock,
    title: "Priority Service",
    description:
      "Skip the line with priority scheduling and reduced wait times.",
  },
  {
    icon: ShieldCheck,
    title: "Peace of Mind",
    description:
      "Regular maintenance extends equipment life and prevents unexpected failures.",
  },
];

export default function FlightClubPage() {
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
            <span className="text-navy-500">Flight Club</span>
          </nav>
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl lg:text-6xl">
            Join the Flight Club
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Priority service, seasonal tune-ups, and exclusive discounts —
            starting at just $30/month.
          </p>
        </Container>
      </section>

      {/* ── Pricing Cards ──────────────────────────────────── */}
      <section className="py-20">
        <Container>
          <SectionHeading
            label="Choose Your Plan"
            heading="Simple, Transparent Pricing"
            centered
          />
          <div className="mx-auto mt-12 grid max-w-3xl gap-8 md:grid-cols-2">
            {FLIGHT_CLUB_PLANS.map((plan) => {
              const isAnnual = plan.interval === "year";
              return (
                <Card
                  key={plan.name}
                  className={
                    isAnnual
                      ? "relative border-2 border-cyan-500 shadow-lg shadow-cyan-500/10"
                      : ""
                  }
                >
                  {isAnnual && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                      Best Value
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="font-rubik text-xl font-bold text-navy-500">
                      {plan.name} Plan
                    </h3>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="font-rubik text-4xl font-bold text-navy-500">
                        {plan.price}
                      </span>
                      <span className="text-gray-500">
                        /{plan.interval === "month" ? "mo" : "yr"}
                      </span>
                    </div>
                    {plan.savingsNote && (
                      <p className="mt-1 text-sm font-semibold text-cyan-500">
                        {plan.savingsNote}
                      </p>
                    )}
                    <ul className="mt-6 space-y-3">
                      {plan.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-2 text-gray-600"
                        >
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Button
                        href="/contact"
                        variant="primary"
                        size="lg"
                        className="w-full"
                      >
                        Choose {plan.name}
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Add-Ons ────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 md:py-20">
        <Container>
          <SectionHeading
            label="Enhance Your Plan"
            heading="Available Add-Ons"
            centered
          />
          <div className="mx-auto mt-10 grid max-w-xl gap-6 sm:grid-cols-2">
            {FLIGHT_CLUB_ADDONS.map((addon) => (
              <Card key={addon.name} className="p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cyan-50">
                  <Plus className="h-6 w-6 text-cyan-500" />
                </div>
                <h3 className="mt-3 font-rubik text-lg font-bold text-navy-500">
                  {addon.name}
                </h3>
                <p className="mt-1 font-rubik text-2xl font-bold text-cyan-500">
                  {addon.price}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ── What's Included ────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <Container>
          <SectionHeading
            label="Tune-Up Details"
            heading="What's Included"
            subtitle="Every seasonal tune-up covers a comprehensive checklist to keep your system running at peak performance."
            centered
          />
          <div className="mx-auto mt-10 max-w-3xl">
            <Accordion items={TUNE_UP_ITEMS} />
          </div>
        </Container>
      </section>

      {/* ── Why Join ───────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 md:py-20">
        <Container>
          <SectionHeading
            label="Membership Benefits"
            heading="Why Join the Flight Club?"
            centered
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {WHY_JOIN.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50">
                    <Icon className="h-8 w-8 text-cyan-500" />
                  </div>
                  <h3 className="mt-4 font-rubik text-xl font-bold text-navy-500">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-cyan-500 to-cyan-600 py-16 md:py-20">
        <Container className="text-center">
          <h2 className="font-rubik text-3xl font-bold text-white md:text-4xl">
            Sign Up Today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Protect your HVAC investment with regular maintenance and priority
            service. Call us or schedule online.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              href={PHONE_HREF}
              size="lg"
              className="bg-white text-cyan-600 hover:bg-white/90"
            >
              Call {PHONE}
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-cyan-600">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
