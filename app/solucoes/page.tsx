import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import SolutionsHero from "../../components/solutions/SolutionsHero";
import SystemSolution from "../../components/solutions/SystemSolution";
import WhatWeOffer from "@/components/solutions/WhatWeOffer";

export default function SolutionsPage() {
  return (
    <main className="gradient-mesh overflow-hidden">

      <Header />

      <SolutionsHero />

      <WhatWeOffer />

      <SystemSolution />

      <Footer />

    </main>
  );
}