import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const showcases = [
  {
    caption: "Blower Wheel Deep Clean",
    src: "/images/before-after/blower-wheel.jpg",
    alt: "Before and after blower wheel deep cleaning by Air Force HVAC — dirty caked blower wheel restored to like-new condition",
  },
  {
    caption: "Evaporator Coil Restoration",
    src: "/images/before-after/evaporator-coil.jpg",
    alt: "Before and after evaporator coil restoration by Air Force HVAC — heavily clogged coil cleaned to pristine condition",
  },
];

export function BeforeAfter() {
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionHeading
          label="QUALITY YOU CAN SEE"
          heading="Before & After"
          centered
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {showcases.map((item) => (
            <div
              key={item.caption}
              className="overflow-hidden rounded-xl shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[3/2]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="bg-white px-4 py-3">
                <p className="text-center font-rubik font-semibold text-navy-500">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
