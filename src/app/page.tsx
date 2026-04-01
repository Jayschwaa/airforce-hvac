import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ComfortClubCTA } from "@/components/home/ComfortClubCTA";
import { VendorPartners } from "@/components/home/VendorPartners";
import { EmergencyCTA } from "@/components/home/EmergencyCTA";
import { ResidentialCommercialSplit } from "@/components/home/ResidentialCommercialSplit";
import { ServiceAreasSection } from "@/components/home/ServiceAreasSection";
import { EndMarketsSection } from "@/components/home/EndMarketsSection";

export const metadata: Metadata = {
  title:
    "Air Force HVAC | Your Space, Our Mission | South Florida HVAC, Plumbing & Electrical",
  description:
    "South Florida's trusted partner for commercial & residential HVAC, ductwork, plumbing, roofing, and electrical services. $40M+ in national sales. Family owned since 2010. Serving Broward & Palm Beach Counties.",
  keywords: [
    "HVAC South Florida",
    "commercial HVAC",
    "residential AC repair",
    "ductwork installation",
    "plumbing services",
    "roofing repair",
    "electrical services",
    "Broward County HVAC",
    "Palm Beach HVAC",
    "Air Force HVAC",
  ],
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ResidentialCommercialSplit />
      <ServicesGrid />
      <TestimonialsSection />
      <EndMarketsSection />
      <BeforeAfter />
      <ComfortClubCTA />
      <VendorPartners />
      <EmergencyCTA />
      <ServiceAreasSection />
    </>
  );
}
