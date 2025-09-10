import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-background via-primary/5 to-accent/10 relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-16 left-8 w-24 h-24 bg-primary/8 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-12 w-32 h-32 bg-accent/8 rounded-full blur-xl animate-float" style={{ animationDelay: "3s" }}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-secondary/8 rounded-full blur-xl animate-float" style={{ animationDelay: "1.5s" }}></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Stop drowning in busywork. <span className="gradient-text">Start delegating to AI.</span>
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          Join marketing teams who are already saving 10+ hours per week. 
          Get early access to Overclock and lock in founding member pricing.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button size="lg" variant="hero" className="glow text-lg px-8 py-4">
            Get Early Access
          </Button>
          <Button size="lg" variant="outline" className="border-primary/20 hover:border-orange hover:bg-orange hover:text-white transition-all duration-300">
            Book a Setup Call
          </Button>
        </div>

        <p className="text-muted-foreground">
          Questions? Email us at{" "}
          <a 
            href="mailto:hello@overclock.work" 
            className="text-primary hover:text-primary-glow transition-colors"
          >
            hello@overclock.work
          </a>
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;