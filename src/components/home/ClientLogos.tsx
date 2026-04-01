import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LogoMarquee } from "@/components/ui/LogoMarquee";
import { CLIENTS } from "@/data/clients";

export function ClientLogos() {
  return (
    <section className="bg-white py-16">
      <Container>
        <SectionHeading
          label="TRUSTED BY"
          heading="Industry-Leading Clients"
          centered
        />

        <div className="mt-10">
          <LogoMarquee items={CLIENTS} />
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Including $1T Asset Managers, Property Groups &amp; Commercial
          Developers
        </p>
      </Container>
    </section>
  );
}
