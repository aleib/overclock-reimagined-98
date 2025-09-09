import { Eye, RefreshCw, BarChart3, Users } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: <Eye className="w-8 h-8 text-primary" />,
      title: "Competitor Intelligence",
      description: "Stop manually checking competitor sites. Overclock monitors pricing pages, blog posts, and social channels—alerting you only when something meaningful changes.",
      example: '"Track my competitors and summarize changes weekly"'
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-primary" />,
      title: "Content Repurposing",
      description: "Transform one piece of content into many. Overclock turns blog posts into LinkedIn updates, email newsletters into Twitter threads, and video transcripts into articles.",
      example: '"Turn every blog post into 3 LinkedIn posts with different angles"'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Marketing Operations",
      description: "Get all your metrics in one place. Overclock pulls data from every platform, compiles custom reports, and delivers insights on schedule.",
      example: '"Every Monday, send me our key metrics with week-over-week changes"'
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Lead Intelligence",
      description: "Know everything about your prospects. Overclock enriches leads, tracks job changes, and identifies newly funded companies matching your ICP.",
      example: '"Find all Series A SaaS companies founded in the last 6 months"'
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Delegate these <span className="gradient-text">responsibilities today</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-card/50 rounded-2xl p-8 border border-primary/10 hover:border-primary/20 transition-colors h-full">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    {useCase.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {useCase.title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {useCase.description}
                </p>
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                  <p className="text-sm text-primary italic font-medium">
                    {useCase.example}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;