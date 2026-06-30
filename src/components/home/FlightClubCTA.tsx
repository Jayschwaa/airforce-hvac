import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Phone } from "lucide-react";

const benefits = [
  "Member-only pricing on all services",
  "Priority scheduling — skip the line",
  "Annual AC tune-up included",
  "Discounted pricing on all services",
];

export function FlightClubCTA() {
  return (
    <section className="bg-gradient-to-r from-cyan-50 via-cyan-100 to-cyan-50 py-16">
      <Container>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
          {/* Left content */}
          <div>
            <h2 className="font-rubik text-3xl font-bold text-navy-500 md:text-4xl">
              Join the Flight Club
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              $30/month or $300/year
            </p>

            <ul className="mt-6 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-500" />
                  <span className="text-gray-600">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button
                variant="primary"
                size="lg"
                href="tel:+13053356991"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call to Join
              </Button>
            </div>
          </div>

          {/* Right badges */}
          <div className="flex shrink-0 items-center gap-6">
            {/* Monthly */}
            <div className="relative flex h-40 w-40 items-center justify-center rounded-full border-4 border-cyan-300/40 bg-white shadow-lg">
              <div className="text-center">
                <span className="block font-rubik text-4xl font-bold text-cyan-500">
                  $30
                </span>
                <span className="text-sm font-semibold text-gray-500">
                  /month
                </span>
              </div>
              <div className="absolute -inset-3 rounded-full border-2 border-dashed border-cyan-200" />
            </div>
            {/* Annual */}
            <div className="relative flex h-40 w-40 items-center justify-center rounded-full border-4 border-emerald-300/40 bg-white shadow-lg">
              <div className="text-center">
                <span className="block font-rubik text-4xl font-bold text-emerald-500">
                  $300
                </span>
                <span className="text-sm font-semibold text-gray-500">
                  /year
                </span>
                <span className="block text-xs font-bold text-emerald-600 mt-1">
                  Save $60!
                </span>
              </div>
              <div className="absolute -inset-3 rounded-full border-2 border-dashed border-emerald-200" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
