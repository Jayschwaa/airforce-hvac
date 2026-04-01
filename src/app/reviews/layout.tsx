import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Reviews | Air Force HVAC | 600+ Five-Star Reviews",
  description:
    "Read 600+ verified reviews from South Florida homeowners and property managers. See why Air Force HVAC is rated #1 for HVAC, plumbing, electrical, and roofing services.",
  keywords: [
    "Air Force HVAC reviews",
    "HVAC reviews South Florida",
    "AC repair reviews",
    "duct cleaning reviews",
    "plumbing reviews Broward",
    "HVAC company reviews",
  ],
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
