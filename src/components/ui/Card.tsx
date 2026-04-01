import { cn } from "@/lib/utils";

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg",
        className,
      )}
    >
      {children}
    </div>
  );
}
