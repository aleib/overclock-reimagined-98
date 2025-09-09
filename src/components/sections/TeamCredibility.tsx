import { Award, Users, TrendingUp, Code } from "lucide-react";

const TeamCredibility = () => {
  const credentials = [
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      text: "9+ years working together"
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      text: "Previous exit to Aruba/HPE"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      text: "Shipped LinkedIn Rewind to 300K users in 2 weeks"
    },
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      text: "Deep expertise in reliable AI systems"
    }
  ];

  return (
    <section className="py-24 px-6 bg-card/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Built by a team that <span className="gradient-text">ships</span>
        </h2>
        
        <div className="mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            We're not first-time founders playing with AI. We've built and sold a B2B SaaS company, 
            scaled products to millions in ARR, and run over 10 million production LLM calls.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {credentials.map((credential, index) => (
            <div 
              key={index}
              className="flex items-center space-x-4 bg-card/50 rounded-xl p-6 border border-primary/10 hover:border-primary/20 transition-colors"
            >
              <div className="p-2 bg-primary/10 rounded-lg">
                {credential.icon}
              </div>
              <span className="text-muted-foreground font-medium">
                {credential.text}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-card/50 rounded-2xl p-8 border border-primary/10">
          <p className="text-lg text-foreground font-medium">
            We know what it takes to build products that work—
            <span className="text-primary"> and keep working.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamCredibility;