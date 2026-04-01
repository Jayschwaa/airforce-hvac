import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { SERVICES } from "@/data/services";
import {
  Thermometer,
  Wind,
  Leaf,
  Droplets,
  Home,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, LucideIcon> = {
  Thermometer,
  Wind,
  Leaf,
  Droplets,
  Home,
  Zap,
};

export function ServicesGrid() {
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionHeading
          label="OUR SERVICES"
          heading="What We Do"
          subtitle="Comprehensive commercial and residential solutions across HVAC, ductwork, plumbing, roofing, electrical, and indoor air quality."
          centered
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Card key={service.slug}>
                {/* Top color bar */}
                <div className="h-1 bg-cyan-500" />
                <div className="p-6">
                  {/* Icon */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50">
                    {Icon && <Icon className="h-6 w-6 text-cyan-500" />}
                  </div>
                  {/* Name */}
                  <h3 className="font-rubik text-lg font-bold text-navy-500">
                    {service.name}
                  </h3>
                  {/* Description */}
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    {service.shortDescription}
                  </p>
                  {/* Link */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-4 inline-flex items-center text-sm font-semibold text-cyan-500 hover:text-cyan-600 transition-colors"
                  >
                    Learn More
                    <span className="ml-1">&rarr;</span>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
