import type { Metadata } from "next";
import { HeroSection } from "@/feature-slices/home/HeroSection";
import { TrustSection } from "@/feature-slices/home/TrustSection";
import { PillarsSection } from "@/feature-slices/home/PillarsSection";
import { MarketsSection } from "@/feature-slices/home/MarketsSection";
import { ListingsCtaSection } from "@/feature-slices/home/ListingsCtaSection";
import { PaymentBannerSection } from "@/feature-slices/home/PaymentBannerSection";

export const metadata: Metadata = {
  title:
    "Residential Property Management Washington DC, Maryland | Luah Partners",
  description:
    "Building and stewarding homes in the capital region. Residential property management, acquisition, leasing, and home improvement across Washington, DC and Maryland.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <PillarsSection />
      <MarketsSection />
      <ListingsCtaSection />
      <PaymentBannerSection />
    </>
  );
}
