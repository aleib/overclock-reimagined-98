import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemFraming from "@/components/sections/ProblemFraming";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemFraming />
      </main>
    </div>
  );
};

export default Index;