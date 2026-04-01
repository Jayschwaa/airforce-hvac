import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label?: string;
  heading: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeading({
  label,
  heading,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {label && (
        <>
          <span className="text-sm font-semibold uppercase tracking-wider text-cyan-500">
            {label}
          </span>
          <div
            className={cn(
              "mt-2 mb-4 h-1 w-12 rounded bg-cyan-500",
              centered && "mx-auto",
            )}
          />
        </>
      )}
      <h2 className="font-rubik text-3xl font-bold text-navy-500 md:text-4xl">
        {heading}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
      )}
    </div>
  );
}
