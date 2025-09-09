import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
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
          <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary/40">
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