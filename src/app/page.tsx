import { Suspense } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustCounters } from "@/components/sections/TrustCounters";
import { LensPreview } from "@/components/sections/LensPreview";
import { CTABlock } from "@/components/sections/CTABlock";
import { ProcessTeaser } from "@/components/sections/ProcessTeaser";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustCounters />
      <LensPreview />
      <ProcessTeaser />
      <CTABlock />
    </>
  );
}
