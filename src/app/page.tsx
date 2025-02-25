import { CtaSection } from "@/features/landing-page/components/cta/cta-section";
import { DestinationsSection } from "@/features/landing-page/components/gallery/destinations-section";
import { ExperiencesSection } from "@/features/landing-page/components/experiences/experiences-section";
import { HeroSection } from "@/features/landing-page/components/hero/hero-section";
import { TestimonialsSection } from "@/features/landing-page/components/testimonials/testimonials-section";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="md:px-8 bg-bgColor">
        <DestinationsSection />
        <ExperiencesSection />
        <TestimonialsSection />
        <CtaSection />
      </div>
    </div>
  );
};

export default Home;
