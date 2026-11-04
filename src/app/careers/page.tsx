import type { Metadata } from "next";
import Link from "next/link";
import { Wrench, Truck, GraduationCap, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { CareersApplicationForm } from "@/components/careers/CareersApplicationForm";

export const metadata: Metadata = {
  title: "Careers | Air Force HVAC",
  description:
    "Join the Air Force HVAC team. We're hiring commercial and residential HVAC technicians across Miami-Dade, Broward, Palm Beach & St. Lucie Counties. Apply online.",
};

const PERKS = [
  { icon: Wrench, title: "Steady Work", text: "Commercial and residential projects year-round across South Florida." },
  { icon: GraduationCap, title: "Room to Grow", text: "Training and a clear path from helper to lead technician." },
  { icon: Truck, title: "Equipped to Succeed", text: "The vehicles, equipment, and support to do the job right." },
  { icon: ShieldCheck, title: "Safety First", text: "A team that puts your safety and professionalism first." },
];

export default function CareersPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="border-b border-gray-100 bg-gradient-to-br from-white via-cyan-50/50 to-white py-20 md:py-28">
        <Container className="text-center">
          <nav className="mb-6 text-sm text-gray-400">
            <Link href="/" className="transition-colors hover:text-cyan-500">Home</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-navy-500">Careers</span>
          </nav>
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl lg:text-6xl">
            Join Our Team
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            We&apos;re hiring commercial and residential HVAC technicians. Fill out the
            application below and upload your resume — our hiring team will be in touch.
          </p>
        </Container>
      </section>

      {/* ── Application ────────────────────────────────────── */}
      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="mb-6 font-rubik text-2xl font-bold text-navy-500">
                Technician Application
              </h2>
              <CareersApplicationForm />
            </div>

            <div className="lg:col-span-2">
              <Card className="p-8">
                <h3 className="font-rubik text-xl font-bold text-navy-500">Why Air Force?</h3>
                <div className="mt-6 space-y-5">
                  {PERKS.map(({ icon: Icon, title, text }) => (
                    <div key={title} className="flex items-start gap-3">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" />
                      <div>
                        <div className="font-semibold text-navy-500">{title}</div>
                        <p className="text-sm text-gray-600">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
