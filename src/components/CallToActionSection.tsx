import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CallToActionSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <Card className="relative overflow-hidden bg-gradient-card border-primary/20 shadow-elegant">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
          <div className="relative p-8 md:p-12 text-center">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-success mb-2">
                  Stretched Marketing Team?
                </h3>
                <div className="inline-block bg-warning/20 text-warning px-3 py-1 rounded-full text-sm font-medium">
                  LIMITED OFFER
                </div>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8">
              Let's find and automate your biggest time-sinks on a free call.
            </p>
            
            <Button size="lg" variant="hero" className="glow">
              Book Your AI Strategy Session
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CallToActionSection;