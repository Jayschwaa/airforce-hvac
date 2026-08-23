import { Info } from "lucide-react";
import { FIGURES_ARE_ILLUSTRATIVE } from "@/data/results";

/**
 * Renders only while results.ts still holds placeholder figures. Delete the
 * flag — not this component — once audited numbers are in place.
 */
export function IllustrativeNotice({ className }: { className?: string }) {
  if (!FIGURES_ARE_ILLUSTRATIVE) return null;

  return (
    <div
      className={`flex items-start gap-2.5 rounded-xl border border-gold-600/30 bg-gold-50 p-4 text-[0.8125rem] leading-relaxed text-gold-800 ${className ?? ""}`}
    >
      <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
      <p>
        <strong className="font-semibold">Sample figures.</strong> The numbers
        on this page illustrate how findings are reported and are not results
        from named engagements. Replace them with audited data before launch.
      </p>
    </div>
  );
}
