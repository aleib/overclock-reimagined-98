import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <div className="space-y-8 animate-slide-up">
          <Badge variant="secondary" className="px-4 py-2 bg-card/50 border-primary/20 text-primary">
            🚀 Overclock is in paid beta
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Delegate your{" "}
            <span className="gradient-text">marketing busywork</span>
          </h1>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-xl md:text-2xl text-primary font-medium">
              Overclock is an AI teammate to handle repetitive work.
            </p>
            <p className="text-lg text-muted-foreground">
              No code, no complex flows, just describe what you need. Overclock handles the rest.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" variant="hero" className="glow text-lg px-8 py-4">
              Get started →
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary/40">
              Watch demo
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm">See demo</span>
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-glow/10 rounded-full blur-xl animate-float" style={{ animationDelay: "4s" }}></div>
    </section>
  );
};

export default HeroSection;