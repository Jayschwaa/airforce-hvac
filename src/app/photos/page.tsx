import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Photos | Air Force HVAC | Our Work in South Florida",
  description:
    "See photos of Air Force HVAC's work across South Florida — installations, repairs, before & after transformations, and our team in action.",
};

const photos = [
  {
    src: "/images/photos/rooftop-rtu-service.jpg",
    alt: "Air Force HVAC technician servicing a rooftop RTU unit",
  },
  {
    src: "/images/photos/commercial-ductwork.jpg",
    alt: "Commercial spiral ductwork installation by Air Force HVAC",
  },
  {
    src: "/images/photos/duct-cleaning-equipment.jpg",
    alt: "Professional HEPA-filtered duct cleaning equipment in a residential home",
  },
  {
    src: "/images/photos/copper-brazing.jpg",
    alt: "Air Force HVAC technician brazing copper refrigerant lines on an evaporator coil",
  },
  {
    src: "/images/photos/coil-cleaning-outdoor.jpg",
    alt: "Evaporator coil pulled for deep acid wash cleaning",
  },
  {
    src: "/images/photos/office-storefront.jpg",
    alt: "Air Force HVAC office and storefront in Deerfield Beach, Florida",
  },
  {
    src: "/images/photos/tech-duct-cleaning.jpg",
    alt: "Air Force HVAC technician with HEPA backpack vacuum performing duct cleaning",
  },
  {
    src: "/images/photos/team-service-van.jpg",
    alt: "Air Force HVAC team with fully stocked service van ready for a job",
  },
  {
    src: "/images/photos/tech-at-door.jpg",
    alt: "Air Force HVAC technician arriving at customer front door with shoe covers",
  },
  {
    src: "/images/photos/warehouse-project.jpg",
    alt: "Large commercial warehouse HVAC project by Air Force HVAC",
  },
  {
    src: "/images/photos/rooftop-ocean-view.jpg",
    alt: "Air Force HVAC technician on rooftop catwalk with ocean view servicing commercial HVAC units",
  },
  {
    src: "/images/photos/blower-inspection.jpg",
    alt: "Air Force HVAC team inspecting inside a large commercial blower unit",
  },
];

export default function PhotosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-white via-cyan-50/40 to-white py-16">
        <Container>
          <div className="text-center">
            <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
              Photo Gallery
            </h1>
          </div>
        </Container>
      </section>

      {/* Photo Grid */}
      <section className="py-16 bg-white">
        <Container>
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {photos.map((photo) => (
              <div
                key={photo.src}
                className="mb-4 break-inside-avoid overflow-hidden rounded-xl shadow-sm transition-all hover:shadow-lg"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="tel:+13053356991"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-8 py-4 font-rubik font-semibold text-white transition-all hover:bg-cyan-600"
            >
              <Phone className="h-5 w-5" />
              Call (305) 335-6991
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
