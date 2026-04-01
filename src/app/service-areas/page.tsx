import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SERVICE_AREAS } from "@/data/serviceAreas";
import { PHONE, PHONE_HREF } from "@/lib/constants";

const PILL_COLORS = [
  "bg-cyan-50 text-cyan-700",
  "bg-navy-50 text-navy-600",
  "bg-amber-50 text-amber-700",
];

export const metadata: Metadata = {
  title: "Service Areas | Air Force HVAC",
  description:
    "Air Force HVAC proudly serves Miami-Dade County, Broward County, Palm Beach County, and clients nationwide. $40M+ in national sales across all facilities services platforms.",
};

export default function ServiceAreasPage() {
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
            <span className="text-navy-500">Service Areas</span>
          </nav>
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl lg:text-6xl">
            Service Areas
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Proudly serving Miami-Dade, Broward, and Palm Beach Counties, plus
            clients nationwide.
          </p>
        </Container>
      </section>

      {/* ── Local Coverage ─────────────────────────────────── */}
      <section className="py-20">
        <Container>
          <SectionHeading
            label="Local Coverage"
            heading="South Florida Service Areas"
            centered
          />
          <div className="mt-12 grid gap-12 lg:grid-cols-3">
            {SERVICE_AREAS.counties.map((county, idx) => (
              <div key={county.name}>
                <div className="mb-6 flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-cyan-500" />
                  <h3 className="font-rubik text-2xl font-bold text-navy-500">
                    {county.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {county.cities.map((city) => (
                    <span
                      key={city}
                      className={`rounded-full px-4 py-1.5 text-sm font-medium ${PILL_COLORS[idx % PILL_COLORS.length]}`}
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── National Presence ──────────────────────────────── */}
      <section className="bg-gray-50 py-16 md:py-20">
        <Container>
          <SectionHeading
            label="Coast to Coast"
            heading="National Presence"
            centered
          />
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-600">
            Beyond South Florida, Air Force HVAC serves institutional and
            commercial clients across the United States. From large-scale RTU
            replacements to full facilities management, our team delivers
            wherever the mission takes us.
          </p>

          {/* Map placeholder */}
          <div className="mx-auto mt-10 flex max-w-3xl items-center justify-center rounded-2xl border-2 border-dashed border-navy-200 bg-white py-20">
            <div className="text-center">
              <div className="font-rubik text-5xl font-bold text-navy-500 md:text-6xl">
                $40M+
              </div>
              <p className="mt-2 text-lg text-gray-600">
                in national sales across all facilities services platforms
              </p>
              <p className="mt-1 text-sm text-navy-300">
                Serving clients from coast to coast
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Nationwide Commercial ─────────────────────────── */}
      <section className="bg-navy-500 py-16 md:py-20">
        <Container className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            BEYOND SOUTH FLORIDA
          </p>
          <h2 className="font-rubik text-3xl font-bold text-white md:text-4xl">
            Institutional &amp; Commercial Clients Nationwide
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            In addition to our South Florida service area, we partner with
            institutional and commercial property owners across the United
            States. From large-scale RTU replacements to full facilities
            management and value engineering, our team delivers wherever the
            mission takes us.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
            <div className="text-center">
              <div className="font-rubik text-4xl font-bold text-cyan-400">$40M+</div>
              <div className="mt-1 text-sm text-white/60">National Sales</div>
            </div>
            <div className="text-center">
              <div className="font-rubik text-4xl font-bold text-cyan-400">10%+</div>
              <div className="mt-1 text-sm text-white/60">Client Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="font-rubik text-4xl font-bold text-cyan-400">1M+</div>
              <div className="mt-1 text-sm text-white/60">Sq Ft Cleaned</div>
            </div>
          </div>
          <div className="mt-8">
            <Button
              href={PHONE_HREF}
              size="lg"
              variant="primary"
            >
              Request a Commercial Bid
            </Button>
          </div>
        </Container>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-cyan-500 to-cyan-600 py-16 md:py-20">
        <Container className="text-center">
          <h2 className="font-rubik text-3xl font-bold text-white md:text-4xl">
            Not Sure If We Serve Your Area?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Give us a call and we will let you know how we can help.
          </p>
          <div className="mt-8">
            <Button
              href={PHONE_HREF}
              size="lg"
              variant="secondary"
            >
              Call {PHONE}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
