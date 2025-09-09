import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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
            <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary/20 hover:border-orange hover:bg-orange hover:text-white transition-all duration-300"
                >
                  Watch demo
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0 bg-background/95 backdrop-blur border border-primary/20">
                <div className="aspect-video w-full">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/wQr27857gy8?si=zf2uos9KeE1vtgw1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="rounded-lg"
                  />
                </div>
              </DialogContent>
            </Dialog>
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