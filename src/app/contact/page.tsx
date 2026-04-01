import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  AlertTriangle,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/ui/ContactForm";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PHONE, PHONE_HREF, EMAIL, ADMIN_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Air Force HVAC",
  description:
    "Get in touch with Air Force HVAC for a free estimate, schedule service, or learn more about our commercial capabilities. Serving Palm Beach & Broward Counties.",
};

export default function ContactPage() {
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
            <span className="text-navy-500">Contact</span>
          </nav>
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Get in touch for a free estimate, schedule service, or learn more
            about our commercial capabilities.
          </p>
        </Container>
      </section>

      {/* ── Main Content ───────────────────────────────────── */}
      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="mb-6 font-rubik text-2xl font-bold text-navy-500">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h3 className="font-rubik text-xl font-bold text-navy-500">
                  Contact Information
                </h3>

                <div className="mt-6 space-y-5">
                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" />
                    <div>
                      <div className="text-sm font-semibold text-navy-400">
                        Phone
                      </div>
                      <a
                        href={PHONE_HREF}
                        className="text-lg font-semibold text-navy-500 transition-colors hover:text-cyan-500"
                      >
                        {PHONE}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" />
                    <div>
                      <div className="text-sm font-semibold text-navy-400">
                        Email
                      </div>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="text-navy-500 transition-colors hover:text-cyan-500"
                      >
                        {EMAIL}
                      </a>
                      <br />
                      <a
                        href={`mailto:${ADMIN_EMAIL}`}
                        className="text-sm text-gray-500 transition-colors hover:text-cyan-500"
                      >
                        {ADMIN_EMAIL}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" />
                    <div>
                      <div className="text-sm font-semibold text-navy-400">
                        Business Hours
                      </div>
                      <div className="space-y-0.5 text-sm text-gray-600">
                        <p>Mon - Fri: 7AM - 6PM</p>
                        <p>Saturday: 8AM - 4PM</p>
                        <p>Sunday: Emergency Only</p>
                      </div>
                    </div>
                  </div>

                  {/* Service Area */}
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" />
                    <div>
                      <div className="text-sm font-semibold text-navy-400">
                        Service Area
                      </div>
                      <p className="text-sm text-gray-600">
                        Palm Beach &amp; Broward Counties
                      </p>
                    </div>
                  </div>
                </div>

                {/* 24/7 Emergency Badge */}
                <div className="mt-8 rounded-xl bg-gradient-to-r from-cyan-50 to-cyan-100 p-4">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-cyan-600" />
                    <span className="font-rubik text-sm font-bold text-navy-500">
                      24/7 Emergency Service
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">
                    For emergencies, call us anytime day or night.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Emergency Banner ───────────────────────────────── */}
      <section className="bg-gradient-to-r from-cyan-500 to-cyan-600 py-16 md:py-20">
        <Container className="text-center">
          <h2 className="font-rubik text-3xl font-bold text-white md:text-4xl">
            Need Emergency Service?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Our team is available 24/7 for HVAC emergencies.
          </p>
          <div className="mt-6">
            <a
              href={PHONE_HREF}
              className="font-rubik text-4xl font-bold text-white transition-colors hover:text-white/80 md:text-5xl"
            >
              {PHONE}
            </a>
          </div>
          <div className="mt-6">
            <Button
              href={PHONE_HREF}
              size="lg"
              className="bg-white text-cyan-600 hover:bg-white/90"
            >
              Call Now
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
