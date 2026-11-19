import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { EMAIL, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Flight Club Membership – Terms & Conditions | Air Force HVAC",
  description:
    "The terms and conditions for every Air Force HVAC Flight Club maintenance membership: benefits, scheduling, price, transfers, cancellation and refunds.",
};

const EFFECTIVE_DATE = "November 17, 2026";
const TERMS_PHONE = "754-225-9220";

function TermsSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="font-rubik text-2xl font-bold text-navy-500">{title}</h2>
      {children}
    </section>
  );
}

function TermsList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-6 text-gray-600">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

const linkClass = "text-cyan-600 hover:text-cyan-500 transition-colors";
const phoneLink = (
  <a href={PHONE_HREF} className={linkClass}>
    {TERMS_PHONE}
  </a>
);
const emailLink = (
  <a href={`mailto:${EMAIL}`} className={linkClass}>
    {EMAIL}
  </a>
);

export default function FlightClubTermsPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-white via-cyan-50/50 to-white py-16 md:py-24 border-b border-gray-100">
        <Container className="text-center">
          <nav className="mb-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-cyan-500 transition-colors">
              Home
            </Link>
            <span className="mx-2">&gt;</span>
            <Link href="/comfort-club" className="hover:text-cyan-500 transition-colors">
              Flight Club
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-navy-500">Terms &amp; Conditions</span>
          </nav>
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
            Flight Club Membership – Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            <span className="font-semibold text-navy-500">Effective</span> {EFFECTIVE_DATE}
          </p>
        </Container>
      </section>

      {/* ── Terms Body ──────────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-12 leading-relaxed text-gray-600">
            <p>
              These terms apply to every Air Force HVAC Flight Club membership. When you accept
              your Flight Club plan online, you agree to these terms. Please keep a copy for your
              records. Questions? Call us at {phoneLink}.
            </p>

            <TermsSection title="1. About this agreement">
              <p>
                Air Force HVAC, Inc. provides this membership. Flight Club is a maintenance
                agreement, not an extended service warranty or service contract. It covers two
                maintenance visits per year, one in spring and one in fall, on the HVAC equipment
                at the service address shown in your plan.
              </p>
            </TermsSection>

            <TermsSection title="2. Your membership benefits">
              <TermsList
                items={[
                  "Two 29-point tune-ups per year, including a disinfectant spray treatment of the ductwork",
                  "Priority scheduling ahead of non-members",
                  "A FREE diagnostic visit when Air Force HVAC performs the repair",
                  "$500 off replacement of the covered equipment by Air Force HVAC",
                  "15% off all repairs performed by Air Force HVAC",
                  "15% off dryer vent cleaning and add-ons performed by Air Force HVAC",
                  "Water-related repairs, such as condensate drain lines, guaranteed for 30 days",
                ]}
              />
            </TermsSection>

            <TermsSection title="3. Scheduling & access">
              <TermsList
                items={[
                  "Tune-ups are scheduled during normal business hours, Monday through Saturday.",
                  "The covered equipment must be accessible at the time of service.",
                ]}
              />
            </TermsSection>

            <TermsSection title="4. Price & payment">
              <TermsList
                items={[
                  "$279 per year is the cash price. A 3% surcharge applies to credit card payments. No surcharge for debit cards, cash, check, ACH or Zelle.",
                  "Service is not provided on past-due accounts.",
                ]}
              />
            </TermsSection>

            <TermsSection title="5. Transfers, cancellation & refunds">
              <TermsList
                items={[
                  "If you sell your home, you may transfer this membership to the new owner.",
                  "Air Force HVAC may cancel this agreement for fraud, material misrepresentation, or nonpayment.",
                  <>
                    After the 3-day cancellation period, you may cancel at any time by calling{" "}
                    {phoneLink} or emailing {emailLink}. Refunds are prorated on the unused portion
                    of the term, less the value of services and discounts already received, and
                    issued within 21 business days.
                  </>,
                ]}
              />
            </TermsSection>

            <TermsSection title="6. Disinfectant products">
              <p>
                Products used are EPA-registered and applied as a preventive measure only. Air
                Force HVAC makes no medical claims and is not a mold remediation specialist.
              </p>
            </TermsSection>

            <TermsSection title="7. Gifted memberships">
              <p>
                Gifted first-year membership: $0 due; $279 value. Listed benefits apply during the
                stated term. If canceled, no refund, cash payment, or monetary compensation is due
                for the gift or its unused portion. Renewal is $279 annually after the gifted year.
                Customer authorization is required before any renewal charge.
              </p>
            </TermsSection>

            <TermsSection title="8. Your right to cancel within 3 business days">
              <p>
                You may cancel this agreement within 3 business days of the date you accepted it.
                If you cancel, your payment will be refunded within 14 business days of our receipt
                of your notice, less the value of any services already performed. To cancel, email{" "}
                {emailLink} within 3 business days, or mail or deliver a signed and dated written
                notice, postmarked within 3 business days, to: Air Force HVAC, Inc., 4350 NW 19th Avenue,
                Unit E, Deerfield Beach, FL 33064.
              </p>
            </TermsSection>

            <TermsSection title="Contact us">
              <p className="rounded-2xl border border-gray-100 bg-cyan-50/40 p-6">
                Air Force HVAC · {phoneLink} ·{" "}
                <Link href="/" className={linkClass}>
                  airforceteam.com
                </Link>{" "}
                · HVAC License CAC1820262
              </p>
            </TermsSection>
          </div>
        </Container>
      </section>
    </>
  );
}
