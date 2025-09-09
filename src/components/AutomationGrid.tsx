import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

const automations = [
  {
    title: "Track Competitor Website Changes",
    description: "Get alerts when competitors update their sites",
    color: "from-blue-500 to-cyan-500",
    category: "Monitoring"
  },
  {
    title: "Daily Industry News Digest",
    description: "Start every day knowing what matters",
    color: "from-purple-500 to-pink-500",
    category: "Intelligence"
  },
  {
    title: "Respond to Urgent Social Mentions",
    description: "Never miss an angry customer on social media",
    color: "from-red-500 to-orange-500",
    category: "Social"
  },
  {
    title: "Write Changelog from Linear & GitHub",
    description: "Turn developer updates into customer-friendly changelogs",
    color: "from-green-500 to-emerald-500",
    category: "Content"
  },
  {
    title: "Monitor Keywords on Reddit, X & LinkedIn",
    description: "Track brand mentions and market trends across social platforms",
    color: "from-indigo-500 to-blue-500",
    category: "Social Listening"
  },
  {
    title: "Watch Product Hunt for New Competitors",
    description: "Stay ahead of emerging competition in your space",
    color: "from-yellow-500 to-orange-500",
    category: "Intelligence"
  }
];

const AutomationGrid = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Popular automation ideas</h2>
          <p className="text-xl text-muted-foreground">
            Customize and get started in 3 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automations.map((automation, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow cursor-pointer"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary" className="bg-muted/50 text-muted-foreground">
                    {automation.category}
                  </Badge>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {automation.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {automation.description}
                </p>

                {/* Gradient accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${automation.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationGrid;