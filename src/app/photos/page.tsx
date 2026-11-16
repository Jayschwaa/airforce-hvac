import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PhotoGallery } from "@/components/photos/PhotoGallery";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Photos | Air Force HVAC | Our Work in South Florida",
  description:
    "See photos of Air Force HVAC's work across South Florida — installations, repairs, before & after transformations, and our team in action.",
};

export default function PhotosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-cyan-50/60 to-white py-16 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl"
        />
        <Container>
          <div className="relative text-center">
            <span className="inline-block rounded-full bg-cyan-100 px-4 py-1.5 font-rubik text-sm font-semibold text-cyan-700">
              📸 Behind the scenes
            </span>
            <h1 className="mt-4 font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
              Photo Gallery
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Meet the crew, follow a real install from start to finish, and see the work we do
              in homes and businesses across South Florida. Tap any photo to see it up close.
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="bg-white py-16">
        <Container>
          <PhotoGallery />

          <div className="mt-16 rounded-3xl bg-navy-500 px-6 py-10 text-center">
            <h2 className="font-rubik text-2xl font-bold text-white md:text-3xl">
              Want to be our next success story?
            </h2>
            <p className="mt-2 text-white/80">Our team is ready when you are.</p>
            <a
              href="tel:+17542259220"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-8 py-4 font-rubik font-semibold text-white transition-all hover:bg-cyan-600"
            >
              <Phone className="h-5 w-5" />
              Call 1-754-225-9220
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
