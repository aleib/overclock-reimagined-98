import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/sections/VideoSection";
import ProblemFraming from "@/components/sections/ProblemFraming";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <VideoSection />
        <ProblemFraming />
      </main>
    </div>
  );
};

export default Index;