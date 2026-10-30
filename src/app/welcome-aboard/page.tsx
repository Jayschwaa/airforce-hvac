import type { Metadata } from "next";
import { Check, Gift } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { FreeMembershipForm } from "@/components/flight-club/FreeMembershipForm";
import { PHONE, PHONE_HREF } from "@/lib/constants";

// Unlisted QR-code landing page: kept out of the nav and sitemap, and
// marked noindex so search engines don't surface it.
export const metadata: Metadata = {
  title: "Your Free Flight Club Membership | Air Force HVAC",
  description:
    "Claim your complimentary Air Force HVAC Flight Club membership — two professional AC tune-ups a year and priority scheduling, valued at $279.",
  alternates: { canonical: null },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

const BENEFITS = [
  "2 professional AC tune-ups (once every 6 months)",
  "Priority scheduling",
  "Improved efficiency and performance",
  "Helps prevent costly repairs",
  "A more comfortable home",
];

export default function WelcomeAboardPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-white via-cyan-50/50 to-white py-16 md:py-24 border-b border-gray-100">
        <Container className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
            <Gift className="h-4 w-4" />
            Exclusive for United Restoration Customers Only
          </span>
          <h1 className="mt-6 font-rubik text-4xl font-bold text-navy-500 md:text-5xl lg:text-6xl">
            Your Flight Club Membership Is On Us
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Thanks for scanning! Claim a{" "}
            <strong className="text-navy-500">FREE</strong> Flight Club
            membership —{" "}
            <strong className="text-navy-500">valued at $279</strong>.
          </p>
        </Container>
      </section>

      {/* ── Benefits + Sign-up ─────────────────────────────── */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="mx-auto grid max-w-5xl items-start gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <span className="text-sm font-semibold uppercase tracking-wider text-cyan-500">
                What You Get
              </span>
              <div className="mt-2 mb-4 h-1 w-12 rounded bg-cyan-500" />
              <h2 className="font-rubik text-3xl font-bold text-navy-500">
                Member Benefits
              </h2>
              <ul className="mt-6 space-y-4">
                {BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-gray-600">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-gray-500">
                Prefer to talk to someone?{" "}
                <a href={PHONE_HREF} className="font-semibold text-cyan-500 hover:underline">
                  Call {PHONE}
                </a>{" "}
                and mention the Flight Club QR offer.
              </p>
            </div>

            <Card className="p-6 md:p-8 lg:col-span-3 hover:translate-y-0">
              <h2 className="font-rubik text-2xl font-bold text-navy-500">
                Claim Your Free Membership
              </h2>
              <p className="mt-2 mb-6 text-gray-600">
                Fill this out and our team will reach out to activate your
                membership and book your first tune-up.
              </p>
              <FreeMembershipForm />
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
