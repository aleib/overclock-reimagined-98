import { Zap, MessageSquare, Cpu } from "lucide-react";

const Differentiation = () => {
  const differentiators = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Unlike Zapier or Make:",
      description: "You don't build workflows—you delegate responsibilities. No brittle connections or complex logic trees."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "Unlike ChatGPT:",
      description: "Built for recurring work, not one-off queries. Runs continuously, learns from feedback, and improves over time."
    },
    {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      title: "Unlike Other AI Tools:",
      description: "No complex agent builders. Just describe what you need and get a magical \"it's ready\" moment."
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for marketers who want <span className="gradient-text">outcomes, not another tool to manage</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {differentiators.map((diff, index) => (
            <div 
              key={index}
              className="group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-card/50 rounded-2xl p-8 border border-primary/10 hover:border-primary/20 transition-colors text-center h-full">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    {diff.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {diff.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {diff.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiation;