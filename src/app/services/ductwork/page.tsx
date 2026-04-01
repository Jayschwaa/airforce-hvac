import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { SERVICES } from "@/data/services";

const service = SERVICES.find((s) => s.slug === "ductwork");

export function generateMetadata(): Metadata {
  if (!service) return {};
  return {
    title: `${service.name} Services | Air Force HVAC`,
    description: service.shortDescription,
  };
}

export default function DuctworkPage() {
  if (!service) return notFound();

  return (
    <>
      <ServiceHero
        title={service.name}
        description={service.shortDescription}
        iconName={service.icon}
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading label="Overview" heading={`${service.name} Services`} />
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                {service.longDescription}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="aspect-4/3 w-full rounded-2xl bg-gradient-to-br from-navy-100 to-navy-200" />
            </div>
          </div>
        </Container>
      </section>

      <ServiceFeatures features={service.features} />

      <section className="bg-gray-50 py-16 md:py-24">
        <Container>
          <SectionHeading
            label="FAQ"
            heading="Frequently Asked Questions"
            centered
          />
          <div className="mx-auto mt-10 max-w-3xl">
            <Accordion items={service.faqs} />
          </div>
        </Container>
      </section>

      <ServiceCTA />
    </>
  );
}
