import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ADDRESS, EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Air Force HVAC",
  description:
    "Learn what personal information Air Force Team HVAC & Plumbing collects, how we use and share it, and the privacy choices available to you.",
};

const EFFECTIVE_DATE = "October 20, 2026";
const LEGAL_NAME = "Air Force HVAC, Inc. d/b/a Air Force Team HVAC & Plumbing";
const POLICY_PHONE = "305-335-6991";
const POLICY_PHONE_HREF = "tel:+13053356991";

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="font-rubik text-2xl font-bold text-navy-500">{title}</h2>
      {children}
    </section>
  );
}

function PolicyList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-6 text-gray-600">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicyPage() {
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
            <span className="text-navy-500">Privacy Policy</span>
          </nav>
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Air Force Team HVAC &amp; Plumbing
          </p>
          <p className="mt-2 text-sm text-gray-500">
            <span className="font-semibold text-navy-500">Effective Date:</span>{" "}
            {EFFECTIVE_DATE}
          </p>
        </Container>
      </section>

      {/* ── Policy Body ─────────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-12 leading-relaxed text-gray-600">
            <p>
              At {LEGAL_NAME} (&ldquo;Air Force Team,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;), we respect your privacy
              and are committed to protecting the personal information you share
              with us. This Privacy Policy explains what information we collect,
              how we use and share it, and the choices you have.
            </p>

            <PolicySection title="Information We Collect">
              <p>
                <strong className="text-navy-500">Information you give us.</strong>{" "}
                When you contact us, request service, complete an online form, or
                respond to one of our advertisements, we may collect:
              </p>
              <PolicyList
                items={[
                  "Your name",
                  "Phone number",
                  "Email address",
                  "Service address",
                  "Information about the services you are requesting",
                  "Payment information, when you pay for services",
                ]}
              />
              <p>
                <strong className="text-navy-500">
                  Information collected automatically.
                </strong>{" "}
                When you visit our website, we and our advertising and analytics
                partners may use cookies, pixels (such as the Meta Pixel), and
                similar technologies. These may collect your IP address, browser
                and device type, the pages you visit, the site that referred you
                to us, and how you interact with our website and ads. We use this
                information to operate and improve our website, measure how our
                advertising performs, and show you relevant ads on other websites
                and platforms.
              </p>
              <p>
                You can control cookies through your browser settings. You can
                also adjust your ad preferences in your Facebook and Instagram
                account settings.
              </p>
            </PolicySection>

            <PolicySection title="How We Use Your Information">
              <p>We use your information to:</p>
              <PolicyList
                items={[
                  "Respond to inquiries and service requests.",
                  "Contact you to schedule appointments.",
                  "Provide HVAC and plumbing services.",
                  "Send appointment confirmations, reminders, and other service-related communications.",
                  "Process payments and send invoices.",
                  "Follow up regarding estimates, services, and customer satisfaction.",
                  "Send promotional offers and updates where permitted by law and consistent with your communication preferences.",
                  "Operate, secure, and improve our website and services.",
                  "Comply with legal obligations.",
                ]}
              />
            </PolicySection>

            <PolicySection title="Facebook and Instagram Advertising">
              <p>
                When you submit a form through one of our Facebook or Instagram
                advertisements, Air Force Team HVAC &amp; Plumbing receives the
                information you provide. We use this information to contact you
                about your request, answer your questions, and help schedule
                services.
              </p>
              <p>Submitting an inquiry does not automatically confirm an appointment.</p>
            </PolicySection>

            <PolicySection title="Text Messaging (SMS)">
              <p>
                If you provide your mobile number and agree to receive text
                messages, Air Force Team HVAC &amp; Plumbing may send you texts
                about appointment confirmations and reminders, technician
                dispatch updates, job status and completion, billing
                notifications, customer feedback requests, and, if you opt in to
                them, promotional offers.
              </p>
              <PolicyList
                items={[
                  "Message frequency varies.",
                  "Message and data rates may apply.",
                  <>
                    Reply <strong className="text-navy-500">STOP</strong> at any
                    time to unsubscribe. Reply{" "}
                    <strong className="text-navy-500">HELP</strong> for help, or
                    contact us using the information below.
                  </>,
                  "Consent to receive text messages is not a condition of purchasing any goods or services.",
                ]}
              />
              <p>
                <strong className="text-navy-500">
                  No mobile information will be shared with third parties or
                  affiliates for marketing or promotional purposes.
                </strong>{" "}
                Text messaging opt-in data and consent will not be shared with
                any third parties, except service providers that help us deliver
                the messages.
              </p>
            </PolicySection>

            <PolicySection title="Sharing Your Information">
              <p>We do not sell your personal information.</p>
              <p>
                We may share information with trusted service providers who help
                us with scheduling, customer communications, text messaging,
                payment processing, advertising, website hosting, and business
                operations. These providers may use your information only to
                perform services for us and are expected to protect it.
              </p>
              <p>
                We may also disclose information when required by law, to protect
                our rights or the safety of others, or in connection with a sale
                or transfer of our business.
              </p>
            </PolicySection>

            <PolicySection title="Protecting and Retaining Your Information">
              <p>
                We take reasonable steps to protect personal information from
                unauthorized access, use, or disclosure. However, no electronic
                storage or transmission method is completely secure.
              </p>
              <p>
                We keep personal information only as long as needed for the
                purposes described in this policy, including service records,
                warranty support, and legal, accounting, or tax requirements.
              </p>
            </PolicySection>

            <PolicySection title="Your Privacy Choices">
              <p>
                You may contact us to request access to, correction of, or
                deletion of your personal information, subject to applicable
                legal and recordkeeping requirements.
              </p>
              <p>
                You may opt out of promotional emails by using the unsubscribe
                link in any email, and out of text messages by replying STOP. You
                may still receive service-related messages about appointments or
                work you have requested.
              </p>
            </PolicySection>

            <PolicySection title="Children's Privacy">
              <p>
                Our services are not directed to children under 13, and we do not
                knowingly collect their personal information.
              </p>
            </PolicySection>

            <PolicySection title="Updates to This Policy">
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on our website with an updated effective date.
              </p>
            </PolicySection>

            <PolicySection title="Contact Us">
              <p>
                If you have questions about this Privacy Policy or how your
                information is used, please contact us:
              </p>
              <address className="not-italic rounded-2xl border border-gray-100 bg-cyan-50/40 p-6 text-gray-600">
                <p className="font-semibold text-navy-500">{LEGAL_NAME}</p>
                <p>
                  {ADDRESS.street}, {ADDRESS.unit}
                </p>
                <p>
                  {ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}
                </p>
                <p className="mt-3">
                  Email:{" "}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-cyan-600 hover:text-cyan-500 transition-colors"
                  >
                    {EMAIL}
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    href={POLICY_PHONE_HREF}
                    className="text-cyan-600 hover:text-cyan-500 transition-colors"
                  >
                    {POLICY_PHONE}
                  </a>
                </p>
              </address>
            </PolicySection>
          </div>
        </Container>
      </section>
    </>
  );
}
