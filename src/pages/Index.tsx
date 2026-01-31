import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import LatestEventModule from "@/components/sections/LatestEventModule";
import AboutSection from "@/components/sections/AboutSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ImpactSection from "@/components/sections/ImpactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <LatestEventModule />
      <AboutSection />
      <ProblemSection />
      <SolutionSection />
      <ImpactSection />
      <Footer />
    </div>
  );
};

export default Index;
