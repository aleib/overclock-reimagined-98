import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { content } from "@/content/overclock";
import { Sparkles } from "lucide-react";

export function DesignPartnerSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8 lg:p-12 text-center shadow-lg border border-primary/20">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-primary-foreground" />
            </div>
            
            <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold mb-4">
              LIMITED OFFER
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Design Partner program (limited)
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              {content.designPartner.headline}
            </p>
            
            <div className="space-y-3 mb-8 text-left max-w-md mx-auto">
              {content.designPartner.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button variant="default" size="lg">
              {content.designPartner.cta}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}