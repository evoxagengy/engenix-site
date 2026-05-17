import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MouseGlow from "@/components/effects/MouseGlow";
import SectionDivider from "@/components/ui/SectionDivider";

import Hero from "@/components/hero/Hero";

import TrustBar from "@/components/sections/TrustBar";
import Modules from "@/components/sections/Modules";
import Solutions from "@/components/sections/Solutions";
import DashboardShowcase from "@/components/sections/DashboardShowcase";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main>

      <MouseGlow />

      <Header />

      <Hero />

      <SectionDivider />

      <TrustBar />

      <SectionDivider />

      <Modules />

      <SectionDivider />

      <Solutions />

      <SectionDivider />

      <DashboardShowcase />

      <CTASection />

      <Footer />

    </main>
  );
}