import Link from "next/link";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICE_AREAS } from "@/data/serviceAreas";

const PILL_COLORS = [
  "bg-cyan-50 text-cyan-700",
  "bg-navy-50 text-navy-600",
  "bg-amber-50 text-amber-700",
];

export function ServiceAreasSection() {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <SectionHeading
          label="SERVING SOUTH FLORIDA"
          heading="Areas We Serve"
          centered
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {SERVICE_AREAS.counties.map((county, idx) => (
            <div
              key={county.name}
              className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100"
            >
              <div className="mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-cyan-500" />
                <h3 className="font-rubik text-lg font-bold text-navy-500">
                  {county.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {county.cities.map((city) => (
                  <span
                    key={city}
                    className={`rounded-full px-3 py-1 text-xs font-medium ${PILL_COLORS[idx % PILL_COLORS.length]}`}
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-gray-600">
          Serving all of Miami-Dade, Broward, and Palm Beach Counties.{" "}
          <Link
            href="/service-areas"
            className="font-medium text-cyan-500 hover:text-cyan-600 transition-colors underline underline-offset-2"
          >
            View full service area details
          </Link>
        </p>
      </Container>
    </section>
  );
}
