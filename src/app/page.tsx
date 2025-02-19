import { CtaSection } from "@/features/landing-page/components/cta/CtaSection";
import { DestinationsSection } from "@/features/landing-page/components/gallery/DestinationsSection";
import { ExperiencesSection } from "@/features/landing-page/components/experiences/ExperiencesSection";
import { HeroSection } from "@/features/landing-page/components/hero/HeroSection";
import { TestimonialsSection } from "@/features/landing-page/components/testimonials/TestimonialsSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <DestinationsSection />
      <ExperiencesSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
};

export default Home;
