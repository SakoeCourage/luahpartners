import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustSection } from "@/components/home/TrustSection";
import { PillarsSection } from "@/components/home/PillarsSection";
import { MarketsSection } from "@/components/home/MarketsSection";
import { ListingsCtaSection } from "@/components/home/ListingsCtaSection";
import { PaymentBannerSection } from "@/components/home/PaymentBannerSection";

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
