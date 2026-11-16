"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PHOTO_CATEGORIES, PHOTOS, type PhotoCategory } from "@/data/photos";

type Filter = PhotoCategory | "all";

const categoryLabel = Object.fromEntries(
  PHOTO_CATEGORIES.map((c) => [c.id, `${c.emoji} ${c.label}`]),
) as Record<PhotoCategory, string>;

export function PhotoGallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const photos = filter === "all" ? PHOTOS : PHOTOS.filter((p) => p.category === filter);
  const open = openIndex === null ? null : photos[openIndex];

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((i) => (i === null ? i : (i + delta + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    }
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, step]);

  const filters: { id: Filter; label: string; count: number }[] = [
    { id: "all", label: "✨ All Photos", count: PHOTOS.length },
    ...PHOTO_CATEGORIES.map((c) => ({
      id: c.id,
      label: `${c.emoji} ${c.label}`,
      count: PHOTOS.filter((p) => p.category === c.id).length,
    })),
  ];

  return (
    <>
      {/* Filters */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            aria-pressed={filter === f.id}
            className={cn(
              "rounded-full border px-5 py-2.5 font-rubik text-sm font-semibold transition-all",
              filter === f.id
                ? "border-navy-500 bg-navy-500 text-white shadow-md"
                : "border-gray-200 bg-white text-navy-500 hover:border-cyan-400 hover:bg-cyan-50",
            )}
          >
            {f.label}
            <span
              className={cn(
                "ml-2 rounded-full px-2 py-0.5 text-xs",
                filter === f.id ? "bg-white/20" : "bg-cyan-50 text-cyan-700",
              )}
            >
              {f.count}
            </span>
          </button>
        ))}
      </div>

      {filter === "install" && (
        <p className="mx-auto -mt-4 mb-10 max-w-xl text-center text-gray-600">
          Follow a real system replacement from delivery to done, in order.
        </p>
      )}

      {/* Snapshot grid: masonry columns, except Install Day, which uses rows so steps read left to right */}
      <div
        className={
          filter === "install"
            ? "grid items-start gap-x-6 sm:grid-cols-2 lg:grid-cols-3"
            : "columns-1 gap-6 sm:columns-2 lg:columns-3"
        }
      >
        {photos.map((photo, i) => (
          <motion.div
            key={`${filter}-${photo.src}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
            className="mb-6 break-inside-avoid"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="block w-full rounded-2xl bg-white p-3 pb-4 text-left shadow-md ring-1 ring-gray-100 transition-shadow duration-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={photo.src}
                  alt={`${photo.title}: ${photo.caption}`}
                  width={photo.width}
                  height={photo.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-auto w-full"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 font-rubik text-xs font-semibold text-navy-500 shadow-sm backdrop-blur">
                  {categoryLabel[photo.category]}
                </span>
              </div>
              <h2 className="mt-4 px-1 font-rubik text-lg font-bold text-navy-500">
                {photo.title}
              </h2>
              <p className="mt-1 px-1 text-sm leading-relaxed text-gray-600">{photo.caption}</p>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open && openIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={open.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-900/90 p-4 backdrop-blur-sm"
          >
            <figure
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-full w-full max-w-4xl flex-col items-center"
            >
              <Image
                key={open.src}
                src={open.src}
                alt={`${open.title}: ${open.caption}`}
                width={open.width}
                height={open.height}
                sizes="(max-width: 1024px) 100vw, 900px"
                className="h-auto max-h-[70vh] w-auto rounded-xl object-contain shadow-2xl"
              />
              <figcaption className="mt-4 max-w-2xl text-center text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                  {categoryLabel[open.category]}
                  {` · ${openIndex + 1} of ${photos.length}`}
                </span>
                <span className="mt-1 block font-rubik text-2xl font-bold">{open.title}</span>
                <span className="mt-1 block text-white/80">{open.caption}</span>
              </figcaption>
            </figure>

            <button
              type="button"
              onClick={close}
              aria-label="Close photo"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-3xl leading-none text-white transition hover:bg-white/25"
            >
              ×
            </button>
            {photos.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(-1);
                  }}
                  aria-label="Previous photo"
                  className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 sm:left-6"
                >
                  <ChevronLeft className="h-7 w-7" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(1);
                  }}
                  aria-label="Next photo"
                  className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 sm:right-6"
                >
                  <ChevronRight className="h-7 w-7" />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
