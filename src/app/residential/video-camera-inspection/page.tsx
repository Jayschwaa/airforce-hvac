import type { Metadata } from "next";
import Link from "next/link";
import {
  Ban,
  TreePine,
  Waves,
  Search,
  Home,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Video Camera Pipe Inspection | South Florida | Air Force HVAC",
  description:
    "See inside your pipes before you pay for a repair. Air Force HVAC's video camera inspections diagnose clogs, cracks, and root intrusion without digging or demolition.",
};

const findings = [
  {
    icon: Ban,
    title: "Clogs & Buildup",
    description:
      "Grease, scale, and debris buildup that's narrowing your line and causing recurring backups store-bought drain cleaner can't reach.",
  },
  {
    icon: Home,
    title: "Cracked or Collapsed Pipe",
    description:
      "Structural damage from age, shifting soil, or ground settling that a snake or plunger will never reveal.",
  },
  {
    icon: TreePine,
    title: "Root Intrusion",
    description:
      "Tree and shrub roots that have found their way into aging clay or cast-iron sewer lines through small cracks or joints.",
  },
  {
    icon: Waves,
    title: "Leaks & Pipe Misalignment",
    description:
      "Separated joints and small leaks along a pipe run that would otherwise go unnoticed until they cause bigger damage.",
  },
];

const uses = [
  {
    title: "Diagnosing Recurring Clogs",
    description:
      "If the same drain keeps backing up no matter how many times it's been cleared, a camera inspection shows the actual cause instead of treating the symptom over and over.",
  },
  {
    title: "Pre-Purchase Home Inspections",
    description:
      "Buying a South Florida home with an older sewer line? A camera inspection gives you a clear picture of the plumbing's real condition before you close, not just what's visible from the cleanout.",
  },
  {
    title: "Confirming a Repair Worked",
    description:
      "After a repair or line replacement, we can run the camera through again to verify the fix holds and the line is clear end to end.",
  },
];

const faqs = [
  {
    question: "Is the camera inspection itself going to damage my pipes?",
    answer:
      "No. The camera head travels through your existing pipe on a flexible cable, the same way a drain snake would, and doesn't require any cutting or drilling to insert.",
  },
  {
    question: "Can you tell exactly where a problem is located?",
    answer:
      "Yes. Our camera equipment includes a locator that maps the exact depth and position of whatever we find, so if a repair is needed, we know precisely where to dig instead of opening up a long stretch of yard or flooring.",
  },
  {
    question: "How much can a camera inspection actually save me?",
    answer:
      "By identifying the exact problem and its exact location, we avoid the guesswork that leads to repairing the wrong section or replacing more pipe than necessary. It's the difference between a small, targeted repair and unnecessary excavation.",
  },
  {
    question: "Do you recommend camera inspections as routine maintenance?",
    answer:
      "For homes with mature trees near sewer lines, or clay and cast-iron piping older than 30-40 years, a periodic inspection can catch root intrusion or corrosion early, before it turns into an emergency backup.",
  },
];

export default function VideoCameraInspectionPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-white via-cyan-50/50 to-white py-20 md:py-28 border-b border-gray-100">
        <Container>
          <nav className="mb-6 text-sm text-gray-400">
            <Link href="/" className="transition-colors hover:text-cyan-500">
              Home
            </Link>{" "}
            &gt;{" "}
            <Link
              href="/residential"
              className="transition-colors hover:text-cyan-500"
            >
              Residential
            </Link>{" "}
            &gt; <span className="text-navy-500">Video Camera Inspection</span>
          </nav>
          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
            Video Camera Pipe Inspection
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            Stop guessing what&apos;s wrong with your pipes. Our high-resolution,
            waterproof camera equipment lets us see the actual condition of
            your line in real time, so any repair is targeted and necessary.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Schedule an Inspection
            </Button>
            <Button href={PHONE_HREF} variant="outline" size="lg">
              Call {PHONE}
            </Button>
          </div>
        </Container>
      </section>

      {/* What We Find */}
      <section className="py-20">
        <Container>
          <SectionHeading
            label="What We Look For"
            heading="Problems a Camera Inspection Reveals"
            subtitle="A live look inside the pipe turns guesswork into a clear diagnosis."
            centered
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {findings.map((item) => (
              <Card key={item.title} className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                  <item.icon className="h-6 w-6 text-cyan-500" />
                </div>
                <h3 className="font-rubik text-lg font-bold text-navy-500">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* When to Use It */}
      <section className="py-20 bg-gray-50">
        <Container>
          <SectionHeading
            label="When It Helps Most"
            heading="Common Reasons to Request a Camera Inspection"
            centered
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {uses.map((use) => (
              <Card key={use.title} className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                  <Search className="h-6 w-6 text-cyan-500" />
                </div>
                <h3 className="font-rubik text-lg font-bold text-navy-500">
                  {use.title}
                </h3>
                <p className="mt-2 text-gray-600">{use.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <Container>
          <SectionHeading
            label="FAQ"
            heading="Camera Inspection Questions"
            centered
          />
          <div className="mx-auto mt-10 max-w-3xl">
            <Accordion items={faqs} />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-cyan-500 to-cyan-600 py-16">
        <Container className="text-center">
          <h2 className="font-rubik text-3xl font-bold text-white">
            See What&apos;s Really Going On In Your Pipes
          </h2>
          <p className="mt-4 text-white/80">
            Schedule a camera inspection or call us to discuss your situation.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/contact"
              variant="white"
              size="lg"
            >
              Contact Us
            </Button>
            <Button
              href={PHONE_HREF}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-cyan-600"
            >
              Call {PHONE}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
