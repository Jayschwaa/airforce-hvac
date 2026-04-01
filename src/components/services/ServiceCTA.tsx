import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export function ServiceCTA() {
  return (
    <section className="bg-gradient-to-r from-cyan-500 to-cyan-600 py-16 md:py-20">
      <Container className="text-center">
        <h2 className="font-rubik text-3xl font-bold text-white md:text-4xl">
          Ready to Get Started?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-cyan-50">
          Schedule a service appointment or call us for a free estimate.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={PHONE_HREF} variant="secondary" size="lg">
            Call {PHONE}
          </Button>
          <Button
            href="sms:+13053356991"
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-cyan-600"
          >
            Text Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
