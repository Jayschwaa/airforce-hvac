"use client";

import { useState, useEffect, useCallback } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/data/testimonials";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const totalSlides = TESTIMONIALS.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto-play every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  // Determine visible testimonials based on current index
  function getVisible(count: number) {
    const items: typeof TESTIMONIALS = [];
    for (let i = 0; i < count; i++) {
      items.push(TESTIMONIALS[(current + i) % totalSlides]);
    }
    return items;
  }

  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <SectionHeading
          label="TESTIMONIALS"
          heading="What Our Clients Say"
          centered
        />

        <div className="relative mt-12">
          {/* Arrows */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute -left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-2 text-navy-400 shadow-md hover:bg-cyan-50 transition-colors lg:-left-5"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute -right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-2 text-navy-400 shadow-md hover:bg-cyan-50 transition-colors lg:-right-5"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {/* Show 1 on mobile, 2 on md, 3 on lg */}
              {getVisible(3).map((t, i) => (
                <div
                  key={`${t.name}-${i}`}
                  className={`rounded-xl bg-white p-6 shadow-sm border border-gray-100 ${
                    i === 1 ? "hidden md:block" : ""
                  } ${i === 2 ? "hidden lg:block" : ""}`}
                >
                  {/* Stars */}
                  <div className="mb-3 flex gap-1">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star
                        key={s}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="text-gray-600 leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  {/* Author */}
                  <div className="mt-4">
                    <p className="font-bold text-navy-500">{t.name}</p>
                    <p className="text-sm text-gray-400">{t.location}</p>
                  </div>
                  {/* Service badge */}
                  <span className="mt-3 inline-block rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-600">
                    {t.serviceType}
                  </span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i === current ? "bg-cyan-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
