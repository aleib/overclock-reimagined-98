import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AutomationGrid from "@/components/AutomationGrid";
import CallToActionSection from "@/components/CallToActionSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AutomationGrid />
        <CallToActionSection />
      </main>
    </div>
  );
};

export default Index;