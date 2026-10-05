import CtaSection from "../components/CtaSection";
import FactoryAdvantageSection from "../components/FactoryAdvantageSection";
import FaqSection from "../components/FaqSection";
import HeroSection from "../components/HeroSection";
import MarketAdvantageSection from "../components/MarketAdvantageSection";
import ProcessSection from "../components/ProcessSection";
import ProjectsGallerySection from "../components/ProjectsGallerySection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#18181B]">
      {/* Hero: headline, client logos, stats and enquiry form (Figma "Hero Component") */}
      <HeroSection />

      {/* Our Process: six-step project path (Figma "Landing Page") */}
      <ProcessSection />

      {/* Market advantage: bento grid of six strengths (Figma "Frame 18") */}
      <MarketAdvantageSection />

      {/* Factory advantage: photo banner with five check points (Figma "Frame 270") */}
      <FactoryAdvantageSection />

      {/* Projects gallery: six project photos (Figma "Projects gallery") */}
      <ProjectsGallerySection />

      {/* FAQ: sticky intro on the left, accordion on the right (Figma "faq") */}
      <FaqSection />

      {/* CTA: contact cards and enquiry form (Figma "CTA") */}
      <CtaSection />
    </div>
  );
}
