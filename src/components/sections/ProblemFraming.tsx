import { content } from "@/content/overclock";

const ProblemFraming = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - Text content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {content.problemFraming.headline}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {content.problemFraming.description}
            </p>
          </div>
          
          {/* Right column - Supporting illustration placeholder */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Subtle background grid pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl"></div>
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--muted-foreground)) 1px, transparent 0)`,
                  backgroundSize: '20px 20px'
                }}
              ></div>
              
              {/* Central focus element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute w-20 h-20 bg-card border border-border rounded-xl shadow-card flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full animate-ping"></div>
                </div>
              </div>
              
              {/* Floating task elements */}
              <div className="absolute top-8 left-8 w-16 h-12 bg-card/80 backdrop-blur border border-border rounded-lg shadow-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-muted rounded-full"></div>
              </div>
              <div className="absolute top-12 right-12 w-20 h-8 bg-card/80 backdrop-blur border border-border rounded-lg shadow-sm"></div>
              <div className="absolute bottom-16 left-12 w-12 h-16 bg-card/80 backdrop-blur border border-border rounded-lg shadow-sm"></div>
              <div className="absolute bottom-8 right-8 w-18 h-10 bg-card/80 backdrop-blur border border-border rounded-lg shadow-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemFraming;