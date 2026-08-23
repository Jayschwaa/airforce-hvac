import { cn } from "@/lib/utils";

/**
 * Upside wordmark: three ascending bars (the "up") set against the
 * wordmark. Drawn as markup rather than a raster so it stays crisp,
 * recolours per surface, and needs no asset pipeline.
 */
export function Logo({
  className,
  variant = "dark",
  showTagline = false,
}: {
  className?: string;
  /** "dark" = forest text for light surfaces. "light" = cream text for forest surfaces. */
  variant?: "dark" | "light";
  showTagline?: boolean;
}) {
  const wordColor = variant === "light" ? "text-cream-100" : "text-forest-800";
  const taglineColor = variant === "light" ? "text-cream-100/55" : "text-forest-400";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 28 28"
        aria-hidden="true"
        className="h-7 w-7 shrink-0 text-gold-400"
        fill="currentColor"
      >
        <rect x="1" y="17" width="6.5" height="10" rx="2" opacity="0.45" />
        <rect x="10.75" y="11" width="6.5" height="16" rx="2" opacity="0.72" />
        <rect x="20.5" y="3" width="6.5" height="24" rx="2" />
      </svg>

      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.6rem] font-black leading-none tracking-[-0.035em]",
            wordColor,
          )}
        >
          Upside
        </span>
        {showTagline && (
          <span
            className={cn(
              "mt-1 text-[0.5rem] font-semibold uppercase tracking-[0.22em]",
              taglineColor,
            )}
          >
            Better Returns
          </span>
        )}
      </span>
    </span>
  );
}
