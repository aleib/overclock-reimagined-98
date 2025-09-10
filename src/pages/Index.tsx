import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/sections/VideoSection";
import UseCasesTabs from "@/components/sections/UseCasesTabs";
import ProblemFraming from "@/components/sections/ProblemFraming";
import SolutionOverview from "@/components/sections/SolutionOverview";
import HowItWorks from "@/components/sections/HowItWorks";
import UseCases from "@/components/sections/UseCases";
import SocialProof from "@/components/sections/SocialProof";
import Differentiation from "@/components/sections/Differentiation";
import TeamCredibility from "@/components/sections/TeamCredibility";
import Pricing from "@/components/sections/Pricing";
import { DesignPartnerSection } from "@/components/sections/DesignPartnerSection";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <VideoSection />
        <SocialProof />
        <UseCasesTabs />
        <Pricing />
        <DesignPartnerSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;