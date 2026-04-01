import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle } from "lucide-react";

type Feature = {
  title: string;
  description: string;
};

type ServiceFeaturesProps = {
  features: Feature[];
};

export function ServiceFeatures({ features }: ServiceFeaturesProps) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          label="What We Offer"
          heading="Service Features"
          subtitle="Comprehensive solutions tailored to your needs."
          centered
        />

        <div className="mt-12 space-y-0 divide-y divide-gray-200">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={feature.title}
                className={`flex flex-col gap-6 py-10 md:flex-row md:items-center md:gap-12 ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex shrink-0 items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-50">
                    <CheckCircle className="h-8 w-8 text-cyan-500" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="font-rubik text-xl font-bold text-navy-500">
                    {feature.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
