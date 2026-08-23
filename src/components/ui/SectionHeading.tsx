import { cn } from "@/lib/utils";

export function SectionHeading({
  label,
  heading,
  subtitle,
  centered = false,
  tone = "dark",
  className,
  as: Tag = "h2",
}: {
  label?: string;
  heading: React.ReactNode;
  subtitle?: React.ReactNode;
  centered?: boolean;
  /** "dark" = forest type on light surfaces. "light" = cream type on forest surfaces. */
  tone?: "dark" | "light";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  const light = tone === "light";

  return (
    <div className={cn(centered && "text-center", className)}>
      {label && (
        <span
          className={cn(
            "inline-flex items-center gap-2.5 text-[0.6875rem] font-bold uppercase tracking-[0.18em]",
            light ? "text-gold-400" : "text-gold-700",
          )}
        >
          <span
            className={cn(
              "h-px w-7",
              light ? "bg-gold-400" : "bg-gold-600",
            )}
            aria-hidden="true"
          />
          {label}
        </span>
      )}

      <Tag
        className={cn(
          "font-display font-black tracking-[-0.03em]",
          label && "mt-4",
          Tag === "h1"
            ? "text-[2.5rem] leading-[1.04] sm:text-6xl lg:text-[4.25rem]"
            : "text-[2rem] leading-[1.08] sm:text-[2.75rem]",
          light ? "text-cream-100" : "text-forest-800",
        )}
      >
        {heading}
      </Tag>

      {subtitle && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            centered && "mx-auto max-w-2xl",
            light ? "text-cream-100/70" : "text-forest-500",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
