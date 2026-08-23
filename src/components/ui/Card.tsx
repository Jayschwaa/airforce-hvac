import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-forest-800/8 bg-cream-50 p-7 shadow-[0_1px_2px_rgba(16,48,31,0.04)]",
        "transition-all duration-300 hover:border-gold-400/50 hover:shadow-[0_12px_32px_-12px_rgba(16,48,31,0.18)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
