import { cn } from "@/lib/utils";

type MarqueeItem = {
  name: string;
  logo?: string;
};

type LogoMarqueeProps = {
  items: MarqueeItem[];
  className?: string;
};

export function LogoMarquee({ items, className }: LogoMarqueeProps) {
  /* Duplicate items so the strip can loop seamlessly */
  const doubled = [...items, ...items];

  return (
    <div
      className={cn(
        "group relative overflow-hidden",
        className,
      )}
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

      <div className="flex w-max animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="mx-6 flex h-16 w-36 shrink-0 items-center justify-center grayscale transition-all duration-300 hover:grayscale-0"
          >
            {item.logo ? (
              <img
                src={item.logo}
                alt={item.name}
                className="max-h-full max-w-full object-contain"
              />
            ) : (
              <span className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-navy-400">
                {item.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
