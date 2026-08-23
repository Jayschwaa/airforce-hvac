import { HeroSection } from "@/components/home/HeroSection";
import { StatsRow } from "@/components/home/StatsRow";
import { ClientRoster } from "@/components/sections/ClientRoster";
import { CapRateMath } from "@/components/sections/CapRateMath";
import { RecoveryGrid } from "@/components/home/RecoveryGrid";
import { UpsideCalculator } from "@/components/sections/UpsideCalculator";
import { ProcessStrip } from "@/components/home/ProcessStrip";
import { TestimonialStrip } from "@/components/sections/TestimonialStrip";
import { CTABand } from "@/components/sections/CTABand";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsRow />
      <ClientRoster />
      <CapRateMath />
      <RecoveryGrid />
      <UpsideCalculator />
      <ProcessStrip />
      <TestimonialStrip />
      <CTABand />
    </>
  );
}
