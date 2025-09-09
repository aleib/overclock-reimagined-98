import { CheckCircle, Target, TrendingUp } from "lucide-react";

const SolutionOverview = () => {
  const pillars = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Plain English, Not Flowcharts",
      description: "Describe outcomes, not workflows. If you can explain it to an intern, you can delegate it to Overclock."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Engineered for Reliability",
      description: "Multiple agents review each other's work. Self-healing when things change. Clear logs show exactly what happened."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Gets Smarter Over Time",
      description: "Your feedback teaches the system. Every thumbs up or correction improves the next run."
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Delegation to AI that <span className="gradient-text">actually works</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Overclock isn't another workflow builder. It's an AI teammate that takes entire responsibilities off your plate.
            </p>
            <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
              Just describe what you need in plain English—like "track my competitors" or "turn blog posts into LinkedIn content"—and Overclock creates a team of AI agents to handle it reliably in the background.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-card/50 rounded-2xl p-8 border border-primary/10 hover:border-primary/20 transition-colors">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    {pillar.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;