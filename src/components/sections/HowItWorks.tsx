import { MessageSquare, Settings, Repeat, ThumbsUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Describe What You Need",
      description: '"Monitor my top 5 competitors. Tell me when their pricing or messaging changes."',
      subtitle: "No flowcharts. No code. Just plain English in Slack or our web UI."
    },
    {
      number: "2",
      icon: <Settings className="w-6 h-6" />,
      title: "Overclock Creates Your Playbook",
      description: "We generate a human-readable plan and spin up AI agents to execute it. You can review and adjust anytime.",
      subtitle: ""
    },
    {
      number: "3",
      icon: <Repeat className="w-6 h-6" />,
      title: "It Runs Reliably Forever",
      description: "Agents work 24/7, checking sources, creating content, compiling reports. They retry when stuck and escalate only when needed.",
      subtitle: ""
    },
    {
      number: "4",
      icon: <ThumbsUp className="w-6 h-6" />,
      title: "You Stay in Control",
      description: "Review outputs in a simple approval inbox. Give feedback with a 👍 or 👎. Every adjustment makes the system smarter.",
      subtitle: ""
    }
  ];

  return (
    <section className="py-24 px-6 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            From description to <span className="gradient-text">delegation in minutes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card/50 rounded-2xl p-6 border border-primary/10 hover:border-primary/20 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary font-bold mr-3">
                    {step.number}
                  </div>
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  {step.subtitle && (
                    <p className="text-xs text-muted-foreground/80 italic">
                      {step.subtitle}
                    </p>
                  )}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-card/50 rounded-2xl p-8 border border-primary/10 max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground">
              See exactly what your AI teammate is doing with complete action logs. 
              <span className="text-primary font-medium"> No black box—just transparent, reliable execution.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;