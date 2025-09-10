import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const UseCasesTabs = () => {
  const useCases = [
    {
      id: "competitor",
      title: "Competitor Intelligence",
      description: "Stop wasting hours checking sites. Get signal-only updates you can actually use.",
      items: [
        "Monitor competitor pricing pages and homepages for changes.",
        "Get a weekly digest of their new blog posts and social activity.",
        "Scan Product Hunt and news outlets for new threats.",
        "Track job changes and hiring trends at key accounts."
      ]
    },
    {
      id: "content",
      title: "Social & Content Repurposing",
      description: "Turn your expertise into a consistent stream of high-quality content, without the grind.",
      items: [
        "Repurpose long-form blog posts into LinkedIn and X/Twitter threads.",
        "Scan Reddit and X for trending topics in your niche.",
        "Summarize customer call transcripts to find questions, objections, and content ideas.",
        "Monitor VIPs to prompt timely engagement with pre-written comment ideas."
      ]
    },
    {
      id: "operations",
      title: "Marketing Ops & Reporting",
      description: "Automate the operational \"grunt work\" that powers your marketing engine.",
      items: [
        "Compile KPIs from 5 different platforms into one weekly Slack summary.",
        "Summarize customer support tickets to spot trends.",
        "Draft changelog posts and internal updates from GitHub commits.",
        "Enrich new leads with company data and social profiles."
      ]
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Hand off your most repetitive marketing work.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start with our most popular responsibilities. We'll help you customize them, or you can create your own from scratch.
          </p>
        </div>

        <Tabs defaultValue="competitor" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-card/50 border border-primary/10">
            {useCases.map((useCase) => (
              <TabsTrigger 
                key={useCase.id}
                value={useCase.id}
                className="text-sm md:text-base font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {useCase.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {useCases.map((useCase) => (
            <TabsContent key={useCase.id} value={useCase.id}>
              <Card className="bg-card/50 border-primary/10 shadow-lg">
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {useCase.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {useCase.items.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default UseCasesTabs;