import { CtaSection } from "@/components/CtaSection";
import { DestinationsSection } from "@/components/DestinationsSection";
import { ExperiencesSection } from "@/components/ExperiencesSection";
import { HeroSection } from "@/components/HeroSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

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
