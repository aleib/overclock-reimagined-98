import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, TrendingUp, FileText, BarChart3, Users } from "lucide-react";

const UseCasesTabs = () => {
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [animationPhase, setAnimationPhase] = useState(0); // 0: Ask, 1: Result
  const [isHovered, setIsHovered] = useState(false);

  const useCases = [
    {
      id: "competitor",
      title: "Competitor Intelligence",
      icon: TrendingUp,
      ask: "Track my competitors and summarize changes weekly",
      result: {
        type: "slack",
        content: {
          title: "📊 Weekly Competitor Update",
          items: [
            "• Acme Corp updated pricing (+15% on Pro plan)",
            "• Beta Inc launched new feature: AI Analytics",
            "• Gamma Ltd published 3 new case studies",
            "• Delta Co hired 2 senior engineers"
          ],
          footer: "Full analysis in #competitor-intel"
        }
      }
    },
    {
      id: "content",
      title: "Content Repurposing", 
      icon: FileText,
      ask: "Turn every blog post into 3 LinkedIn posts with different angles",
      result: {
        type: "linkedin",
        content: {
          title: "From: 'How to Scale Your SaaS'",
          posts: [
            "🚀 The #1 mistake SaaS founders make when scaling? Ignoring unit economics until it's too late...",
            "💡 Unpopular opinion: Your SaaS doesn't need more features. It needs better onboarding...",
            "📈 3 metrics that predicted our 10x growth (and why MRR isn't enough)..."
          ]
        }
      }
    },
    {
      id: "operations",
      title: "Marketing Operations",
      icon: BarChart3, 
      ask: "Every Monday, send me our key metrics with week-over-week changes",
      result: {
        type: "metrics",
        content: {
          title: "📈 Weekly Marketing Report",
          metrics: [
            { label: "Website Traffic", value: "12.4K", change: "+15%" },
            { label: "New Leads", value: "89", change: "+8%" },
            { label: "Conversion Rate", value: "3.2%", change: "+0.4%" },
            { label: "CAC", value: "$127", change: "-12%" }
          ]
        }
      }
    },
    {
      id: "leads",
      title: "Lead Intelligence",
      icon: Users,
      ask: "Find all Series A SaaS companies founded in the last 6 months",
      result: {
        type: "leads",
        content: {
          title: "🎯 New Series A Targets",
          companies: [
            { name: "DataFlow AI", funding: "Series A", stage: "$8M raised" },
            { name: "CloudSync Pro", funding: "Series A", stage: "$12M raised" },
            { name: "AutoScale Labs", funding: "Series A", stage: "$15M raised" }
          ],
          footer: "43 total matches found"
        }
      }
    }
  ];

  // Auto-cycle through use cases
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      if (animationPhase === 0) {
        // Show result for current use case
        setAnimationPhase(1);
      } else {
        // Move to next use case and show ask
        setActiveUseCase((prev) => (prev + 1) % useCases.length);
        setAnimationPhase(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [animationPhase, isHovered, useCases.length]);

  const handleTabClick = (index: number) => {
    setActiveUseCase(index);
    setAnimationPhase(0);
  };

  const renderAnimationCard = () => {
    const currentUseCase = useCases[activeUseCase];
    
    if (animationPhase === 0) {
      // Ask phase
      return (
        <motion.div
          key="ask"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-card border border-border rounded-xl p-6 shadow-lg max-w-lg mx-auto"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">You're typing...</span>
          </div>
          <div className="text-foreground font-medium text-lg mb-4">
            "{currentUseCase.ask}"
          </div>
          <div className="flex justify-end">
            <Button size="sm" variant="default" className="text-sm">
              Send <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      );
    } else {
      // Result phase
      const result = currentUseCase.result;
      
      return (
        <motion.div
          key="result"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-card border border-primary/20 rounded-xl p-6 shadow-lg max-w-lg mx-auto"
        >
          <div className="flex items-center space-x-3 mb-4">
            <Check className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Complete!</span>
          </div>
          
          {result.type === "slack" && (
            <div className="space-y-3">
              <div className="font-semibold text-foreground">{result.content.title}</div>
              <div className="space-y-1">
                {result.content.items.map((item, idx) => (
                  <div key={idx} className="text-sm text-muted-foreground">{item}</div>
                ))}
              </div>
              <div className="text-xs text-muted-foreground/70 mt-3">
                {result.content.footer}
              </div>
            </div>
          )}
          
          {result.type === "linkedin" && (
            <div className="space-y-3">
              <div className="text-sm font-medium text-muted-foreground">{result.content.title}</div>
              <div className="space-y-2">
                {result.content.posts.map((post, idx) => (
                  <div key={idx} className="text-sm bg-muted/50 rounded-lg p-3 text-foreground">
                    {post}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {result.type === "metrics" && (
            <div className="space-y-3">
              <div className="font-semibold text-foreground">{result.content.title}</div>
              <div className="grid grid-cols-2 gap-3">
                {result.content.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-lg font-bold text-foreground">{metric.value}</div>
                    <div className="text-xs text-muted-foreground">{metric.label}</div>
                    <div className="text-xs text-primary font-medium">{metric.change}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {result.type === "leads" && (
            <div className="space-y-3">
              <div className="font-semibold text-foreground">{result.content.title}</div>
              <div className="space-y-2">
                {result.content.companies.map((company, idx) => (
                  <div key={idx} className="flex justify-between items-center p-2 bg-muted/30 rounded-lg">
                    <div>
                      <div className="font-medium text-foreground text-sm">{company.name}</div>
                      <div className="text-xs text-muted-foreground">{company.stage}</div>
                    </div>
                    <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {company.funding}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-xs text-muted-foreground/70 text-center">
                {result.content.footer}
              </div>
            </div>
          )}
        </motion.div>
      );
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Delegate these responsibilities today.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform simple requests into powerful, automated workflows. See how Overclock handles your most repetitive tasks.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Tabs */}
          <div className="space-y-6">
            <div className="space-y-4">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <button
                    key={useCase.id}
                    onClick={() => handleTabClick(index)}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                      activeUseCase === index
                        ? 'border-primary bg-primary/5 shadow-lg'
                        : 'border-border hover:border-primary/50 bg-card'
                    }`}
                  >
                    <Icon className={`w-6 h-6 mb-3 ${
                      activeUseCase === index ? 'text-primary' : 'text-muted-foreground'
                    }`} />
                    <div className={`font-semibold mb-2 ${
                      activeUseCase === index ? 'text-primary' : 'text-foreground'
                    }`}>
                      {useCase.title}
                    </div>
                  </button>
                );
              })}
            </div>
            
            {/* Progress indicator */}
            <div className="flex justify-center space-x-2">
              {useCases.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeUseCase === index ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Animation Demo */}
          <div 
            className="flex justify-center lg:justify-end"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="w-full max-w-lg">
              <AnimatePresence mode="wait">
                {renderAnimationCard()}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesTabs;