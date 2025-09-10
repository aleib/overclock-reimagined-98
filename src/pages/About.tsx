import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import { CheckCircle, Users, Target, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Overclock</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Overclock is a no-code AI agent builder for marketing automation. Describe your AI workflow in plain text and our AI agent builder will get it done.
            </p>
          </div>
        </section>

        {/* Our Promise */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Promise</h2>
            <div className="bg-card/50 rounded-2xl p-8 border border-primary/10">
              <p className="text-lg text-center text-muted-foreground leading-relaxed">
                When you delegate something to Overclock, it's handled forever. We design for radical simplicity on the surface and an adaptive, resilient engine underneath.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Who We Serve</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card/50 rounded-xl p-8 border border-primary/10 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">SaaS Teams</h3>
                <p className="text-muted-foreground">
                  Solo marketers and small, oversubscribed teams at SaaS startups
                </p>
              </div>
              <div className="bg-card/50 rounded-xl p-8 border border-primary/10 text-center">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Agencies</h3>
                <p className="text-muted-foreground">
                  Freelance marketers and agencies managing multiple clients
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why It's Different */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Why It's Different</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-card/30 rounded-xl border border-primary/10">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Describe your AI workflow in plain text—no brittle flows to maintain
                </p>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-card/30 rounded-xl border border-primary/10">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Reliability first: evaluation gates prevent bad outputs from your AI agent
                </p>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-card/30 rounded-xl border border-primary/10">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Runs where your team already works (Slack)
                </p>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-card/30 rounded-xl border border-primary/10">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Built to bundle related work into coordinated packages ("Skill‑Packs"), so value compounds over time
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">How It Works</h2>
            <div className="bg-card/50 rounded-2xl p-8 border border-primary/10">
              <p className="text-lg text-muted-foreground leading-relaxed">
                When you build an AI agent, Overclock decomposes your request into steps, executes them using connected tools, and records what happened. The AI workflow updates from real execution data and your feedback, so results improve over time.
              </p>
            </div>
          </div>
        </section>

        {/* The Team */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">The Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card/30 rounded-xl p-6 border border-primary/10 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">DW</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">David Wilson</h3>
                <p className="text-muted-foreground mb-4">CEO</p>
                <a 
                  href="https://www.linkedin.com/in/daviddbwilson/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  LinkedIn →
                </a>
              </div>
              <div className="bg-card/30 rounded-xl p-6 border border-primary/10 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">RD</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Ross Douglas</h3>
                <p className="text-muted-foreground mb-4">Backend</p>
                <a 
                  href="https://www.linkedin.com/in/rsdouglas/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  LinkedIn →
                </a>
              </div>
              <div className="bg-card/30 rounded-xl p-6 border border-primary/10 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">AL</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Alex Leibhammer</h3>
                <p className="text-muted-foreground mb-4">Frontend</p>
                <a 
                  href="https://www.linkedin.com/in/alexleibhammer/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  LinkedIn →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
            <div className="space-y-6">
              <div className="bg-card/50 rounded-xl p-6 border border-primary/10">
                <h3 className="text-lg font-semibold mb-2">Hunch.tools</h3>
                <p className="text-muted-foreground">
                  A visual AI workspace that taught us the power of frictionless UX and that most demand was in marketing
                </p>
              </div>
              <div className="bg-card/50 rounded-xl p-6 border border-primary/10">
                <h3 className="text-lg font-semibold mb-2">LinkedIn Rewind</h3>
                <p className="text-muted-foreground">
                  A viral mini‑app (300k users) that built our early audience
                </p>
              </div>
              <div className="bg-card/50 rounded-xl p-6 border border-primary/10">
                <h3 className="text-lg font-semibold mb-2">Coauthor.studio</h3>
                <p className="text-muted-foreground">
                  Showed that point solutions miss the full workflow
                </p>
              </div>
              <div className="bg-card/50 rounded-xl p-6 border border-primary/10">
                <h3 className="text-lg font-semibold mb-2">Overclock.work</h3>
                <p className="text-muted-foreground">
                  Slack‑native automations; strong growth, and the insight that value comes from bundling related work
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;