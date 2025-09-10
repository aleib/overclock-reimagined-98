import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/user/month",
      description: "Perfect for solo marketers",
      features: [
        "5 active Playbooks",
        "Core integrations",
        "Slack + Web UI"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "$199",
      period: "/month", 
      description: "Built for growing teams",
      features: [
        "Unlimited Playbooks",
        "Advanced integrations",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "SLA guarantees",
      features: [
        "SAML/SSO",
        "Custom integrations",
        "Dedicated success manager"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-gradient-to-t from-card/30 via-muted/10 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pricing that scales with your <span className="gradient-text">peace of mind</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-card/50 rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-glow ${
                plan.popular 
                  ? 'border-orange/40 shadow-glow' 
                  : 'border-primary/10 hover:border-primary/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-orange text-white px-3 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">
                    {plan.period}
                  </span>
                </div>
                <p className="text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'variant-hero glow' 
                    : 'variant-outline border-primary/20 hover:border-primary/40'
                }`}
                variant={plan.popular ? "hero" : "outline"}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20 max-w-3xl mx-auto">
            <p className="text-primary font-medium">
              Invite-only during paid beta. Lock in early access pricing forever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;