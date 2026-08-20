import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Phone } from "lucide-react";

export function EmergencyCTA() {
  return (
    <section className="bg-gradient-to-r from-cyan-500 to-cyan-600 py-12">
      <Container>
        <div className="text-center">
          <h2 className="font-rubik text-3xl font-bold text-white md:text-4xl">
            {/* Pulsing red dot */}
            <span className="relative mr-3 inline-block h-3 w-3 align-middle">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500" />
            </span>
            24/7 Emergency Service Available
          </h2>

          <p className="mt-3 text-lg text-white/80">
            When you need us most, we&apos;re just a call away.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <Phone className="h-6 w-6 text-white" />
            <a
              href="tel:+18552917007"
              className="font-rubik text-3xl font-bold text-white hover:text-white/80 transition-colors md:text-4xl"
            >
              1-855-291-7007
            </a>
          </div>

          <div className="mt-6">
            <Button
              variant="secondary"
              size="lg"
              href="tel:+18552917007"
            >
              Call Now
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
