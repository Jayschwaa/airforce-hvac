import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  Star,
  Clock,
  ShieldCheck,
  Heart,
  Truck,
  Phone,
  MessageSquare,
} from "lucide-react";

const trustBadges = [
  { icon: Clock, text: "24/7 Emergency" },
  { icon: ShieldCheck, text: "Licensed & Insured" },
  { icon: Heart, text: "Family Owned" },
];

export function HeroSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-cyan-50/40 to-white">
        {/* Subtle geometric pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(30deg, #3ab0d0 12%, transparent 12.5%, transparent 87%, #3ab0d0 87.5%, #3ab0d0),
              linear-gradient(150deg, #3ab0d0 12%, transparent 12.5%, transparent 87%, #3ab0d0 87.5%, #3ab0d0),
              linear-gradient(30deg, #3ab0d0 12%, transparent 12.5%, transparent 87%, #3ab0d0 87.5%, #3ab0d0),
              linear-gradient(150deg, #3ab0d0 12%, transparent 12.5%, transparent 87%, #3ab0d0 87.5%, #3ab0d0),
              linear-gradient(60deg, rgba(58,176,208,0.5) 25%, transparent 25.5%, transparent 75%, rgba(58,176,208,0.5) 75%, rgba(58,176,208,0.5)),
              linear-gradient(60deg, rgba(58,176,208,0.5) 25%, transparent 25.5%, transparent 75%, rgba(58,176,208,0.5) 75%, rgba(58,176,208,0.5))
            `,
            backgroundSize: "80px 140px",
            backgroundPosition:
              "0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px",
          }}
        />

        {/* Two-column content */}
        <Container className="relative z-10 py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left side: team photo */}
            <div className="order-1 lg:order-1">
              <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/hero-team.png"
                  alt="Air Force HVAC team in front of branded service vehicles"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right side: content */}
            <div className="order-2 lg:order-2">
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/50 bg-cyan-50 px-4 py-2">
                <Star className="h-4 w-4 text-cyan-500" />
                <span className="text-sm font-semibold tracking-wider text-cyan-600">
                  COMMERCIAL &amp; RESIDENTIAL EXCELLENCE
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-rubik text-4xl font-bold leading-tight text-navy-500 md:text-5xl lg:text-6xl">
                Your Space,
                <br />
                Our Mission
              </h1>

              {/* Subheadline */}
              <p className="mt-6 max-w-xl text-lg text-gray-600 md:text-xl">
                South Florida&apos;s trusted partner for commercial HVAC,
                ductwork, plumbing, roofing, and electrical services. $40M+ in
                national sales. Family owned since 2010.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button variant="primary" size="lg" href="tel:+13053356991">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </Button>
                <Button variant="outline" size="lg" href="sms:+13053356991">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Text Us
                </Button>
              </div>

              {/* Trust badges */}
              <div className="mt-10 flex flex-wrap gap-6">
                {trustBadges.map((badge) => (
                  <div
                    key={badge.text}
                    className="flex items-center gap-2 text-gray-500"
                  >
                    <badge.icon className="h-5 w-5 text-cyan-500" />
                    <span className="text-sm font-medium">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats strip */}
      <div className="border-y border-gray-200 bg-gray-50 py-4">
        <Container>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-12">
            <div className="flex items-center gap-2 text-gray-700">
              <Truck className="h-5 w-5 text-cyan-500" />
              <span className="text-sm font-semibold font-rubik">
                5,000+ Homes Visited Annually
              </span>
            </div>
            <div className="hidden h-4 w-px bg-gray-300 sm:block" />
            <div className="flex items-center gap-2 text-gray-700">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm font-semibold font-rubik">
                600+ Five-Star Reviews
              </span>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
