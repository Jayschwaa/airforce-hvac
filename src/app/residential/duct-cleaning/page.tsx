import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  ChevronRight,
  Phone,
  MessageSquare,
  Wind,
  ShieldCheck,
  Droplets,
  ThermometerSun,
  AlertTriangle,
  CheckCircle2,
  Clock,
  BadgeCheck,
  Sparkles,
  Heart,
  Home,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Duct Cleaning Services | Air Force HVAC | South Florida Duct & System Cleaning",
  description:
    "Professional duct cleaning in South Florida. Full supply & return duct cleaning, air handler coil & blower cleaning, HEPA-filtered equipment. $95 per vent. Serving Miami-Dade, Broward & Palm Beach Counties.",
  keywords: [
    "duct cleaning South Florida",
    "duct cleaning Broward",
    "air duct cleaning near me",
    "HVAC duct cleaning",
    "vent cleaning",
    "air handler cleaning",
    "duct cleaning cost",
    "duct cleaning Deerfield Beach",
    "indoor air quality",
    "mold in ducts",
  ],
};

const problems = [
  { icon: Wind, text: "Dust blowing from vents" },
  { icon: Droplets, text: "Musty or moldy odors" },
  { icon: Heart, text: "Allergy or respiratory issues" },
  { icon: Home, text: "Recent construction or water damage" },
  { icon: ThermometerSun, text: "Pet hair & dander buildup" },
  { icon: AlertTriangle, text: "Reduced airflow & system efficiency" },
];

const included = [
  "Full supply & return duct cleaning",
  "Negative air pressure system",
  "Air handler coil & blower cleaning",
  "HEPA-filtered equipment",
  "3-5 hour average service time",
  "Before & after documentation",
];

const healthPoints = [
  "Improves indoor air quality for your entire home",
  "Helps allergy & asthma sufferers breathe easier",
  "Reduces dust buildup on surfaces and furniture",
  "Supports HVAC efficiency & extends system lifespan",
  "Especially important after water damage, mold, or renovation work",
  "Recommended every 3-5 years for optimal air quality",
];

const faqs = [
  {
    q: "Is duct cleaning really necessary?",
    a: "It's not required, but it's one of the most effective ways to improve indoor air quality — especially after restoration work, remodeling, or if you have pets and allergies. Most homeowners notice an immediate difference in dust levels and air freshness.",
  },
  {
    q: "I've never had my ducts cleaned before. Is that a problem?",
    a: "Most homeowners haven't. It's typically recommended every 3-5 years, or after water damage, remodeling, or mold issues. Years of accumulated dust, pet dander, pollen, and debris can significantly affect the air you breathe daily.",
  },
  {
    q: "Does duct cleaning make a mess?",
    a: "No. We seal the system and use negative air pressure with HEPA-filtered equipment. Everything stays contained within our equipment — your home stays clean throughout the process.",
  },
  {
    q: "How long does it take?",
    a: "A typical whole-home duct cleaning takes 3-5 hours depending on the size of your home and number of vents. We work efficiently while being thorough.",
  },
  {
    q: "How is Air Force different from $199 duct cleaning deals?",
    a: "Discount duct cleaning services often have hidden charges — like per-foot trunk line fees added on-site. We offer transparent pricing ($95 per vent), include trunk line cleaning at no extra cost, and provide full air handler coil and blower cleaning that most competitors don't include.",
  },
  {
    q: "When should I get my ducts cleaned?",
    a: "After water or mold remediation, after any construction or drywall work, if family members have increased allergies or respiratory issues, if you see visible dust coming from vents, or if it's been more than 3-5 years since the last cleaning.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Residential Duct Cleaning",
  provider: {
    "@type": "HVACBusiness",
    name: "Air Force HVAC",
    telephone: "+18552917007",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4350 NW 19th Avenue, Unit E",
      addressLocality: "Deerfield Beach",
      addressRegion: "FL",
      postalCode: "33064",
    },
  },
  areaServed: "South Florida",
  description:
    "Professional duct cleaning service including full supply & return cleaning, air handler coil & blower cleaning, and HEPA-filtered equipment.",
  offers: {
    "@type": "Offer",
    price: "95",
    priceCurrency: "USD",
    unitText: "per vent",
  },
};

export default function DuctCleaningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
            <span className="text-gray-700">Duct Cleaning</span>
          </nav>
        </Container>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-white via-cyan-50/40 to-white py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/50 bg-cyan-50 px-4 py-2">
              <Sparkles className="h-4 w-4 text-cyan-500" />
              <span className="text-sm font-semibold tracking-wider text-cyan-600">
                BREATHE EASIER
              </span>
            </div>
            <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
              Professional Duct &amp; System Cleaning
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Your HVAC system works like the lungs of your house. It pulls air
              through dirty returns and pushes that same air back through every
              room. Even after cleaning your space, the system keeps circulating
              contaminants — unless the ducts are addressed.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="tel:+18552917007"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-8 py-4 font-rubik font-semibold text-white transition-all hover:bg-cyan-600"
              >
                <Phone className="h-5 w-5" />
                Call 1-855-291-7007
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
        </Container>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-rubik text-3xl font-bold text-navy-500">
              Signs Your Ducts Need Cleaning
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Dirty duct systems circulate dust, mold spores, pet dander,
              pollen, and construction debris throughout your home — even when
              the house looks clean.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {problems.map((p) => (
              <div
                key={p.text}
                className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50">
                  <p.icon className="h-5 w-5 text-red-500" />
                </div>
                <span className="font-medium text-navy-500">{p.text}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="font-rubik text-3xl font-bold text-navy-500">
                What&apos;s Included in Our Service
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our professional duct cleaning goes far beyond what discount
                services offer. We use negative air pressure systems and
                HEPA-filtered equipment to ensure every contaminant is captured
                — not just moved around.
              </p>
              <div className="mt-8 space-y-3">
                {included.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-500 shrink-0" />
                    <span className="text-navy-500 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-cyan-200 bg-white p-8 shadow-sm">
              <h3 className="font-rubik text-xl font-bold text-navy-500 mb-6">
                Transparent Pricing
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <span className="font-medium text-navy-500">
                    Per Vent &amp; Return
                  </span>
                  <span className="font-rubik text-2xl font-bold text-cyan-500">
                    $95
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <span className="font-medium text-navy-500">
                    Air Handler Acid Wash (each)
                  </span>
                  <span className="font-rubik text-2xl font-bold text-cyan-500">
                    $450
                  </span>
                </div>
                <div className="bg-navy-500 rounded-xl p-5 text-white">
                  <p className="text-sm text-white/70 mb-1">Example: 10 vents + 2 air handlers</p>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Total</span>
                    <span className="font-rubik text-3xl font-bold">
                      $1,850
                    </span>
                  </div>
                </div>
                <p className="text-xs text-gray-400">
                  Trunk line cleaning included at no extra charge. No hidden
                  fees.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why We're Different */}
      <section className="py-16 bg-white">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-rubik text-3xl font-bold text-navy-500 text-center mb-4">
              Why Air Force vs. Discount Duct Cleaners
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              Not all duct cleaning is created equal. Here&apos;s how our service
              compares.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border-2 border-red-200 bg-red-50/50 p-6">
                <h3 className="font-rubik font-bold text-red-600 mb-4">
                  Discount Services ($199 Deals)
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                    Hidden per-foot trunk line charges added on-site
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                    No air handler coil or blower cleaning
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                    Lower-tier equipment and rushed service
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                    Final bill often 3-4x the advertised price
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border-2 border-cyan-200 bg-cyan-50/50 p-6">
                <h3 className="font-rubik font-bold text-cyan-600 mb-4">
                  Air Force HVAC
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="h-4 w-4 text-cyan-500 mt-0.5 shrink-0" />
                    Transparent $95/vent pricing — no surprises
                  </li>
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="h-4 w-4 text-cyan-500 mt-0.5 shrink-0" />
                    Full air handler coil &amp; blower cleaning included
                  </li>
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="h-4 w-4 text-cyan-500 mt-0.5 shrink-0" />
                    HEPA-filtered, negative air pressure equipment
                  </li>
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="h-4 w-4 text-cyan-500 mt-0.5 shrink-0" />
                    Free trunk line cleaning — always included
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Health Benefits */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-10">
            <h2 className="font-rubik text-3xl font-bold text-navy-500">
              Health &amp; Value Benefits
            </h2>
            <p className="mt-3 text-gray-600">
              Education, not fear. Here&apos;s why clean ducts matter for your
              family.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {healthPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-xl bg-white border border-gray-200 p-5 shadow-sm"
              >
                <ShieldCheck className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                <span className="text-sm font-medium text-navy-500">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-rubik text-3xl font-bold text-navy-500 text-center mb-10">
              <HelpCircle className="inline h-8 w-8 text-cyan-500 mr-2 -mt-1" />
              Common Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-xl border border-gray-200 bg-white p-6"
                >
                  <h3 className="font-rubik font-bold text-navy-500">
                    {faq.q}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* When to Get It Done */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-rubik text-3xl font-bold text-navy-500 mb-8">
              Best Times to Schedule Duct Cleaning
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "After water or mold remediation",
                "After construction or drywall work",
                "When family members have increased allergies",
                "Visible dust coming from vents",
                "Moving into a new home",
                "Every 3-5 years for maintenance",
              ].map((time) => (
                <div
                  key={time}
                  className="flex items-center gap-3 rounded-lg bg-white border border-gray-200 px-5 py-4"
                >
                  <Clock className="h-4 w-4 text-cyan-500 shrink-0" />
                  <span className="text-sm font-medium text-navy-500">
                    {time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-cyan-500 to-cyan-600 py-12">
        <Container>
          <div className="text-center">
            <h2 className="font-rubik text-3xl font-bold text-white">
              Ready for Cleaner Air?
            </h2>
            <p className="mt-3 text-white/80 text-lg max-w-xl mx-auto">
              Let us clean your ducts so everything is truly clean from top to
              bottom. Call or text anytime — available 24/7.
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
