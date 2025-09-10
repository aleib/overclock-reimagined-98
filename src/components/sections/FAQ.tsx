import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Is this reliable enough for production work?",
      answer: "Yes. Every output is reviewed by a dedicated AI agent before you see it. Actions are logged, retryable, and escalate to you if truly stuck. You maintain full control with approval workflows."
    },
    {
      question: "How is this different from just using ChatGPT?",
      answer: "ChatGPT is great for one-off tasks. Overclock handles recurring responsibilities—running 24/7, monitoring changes, and improving from your feedback. It's built for teams to share."
    },
    {
      question: "Will it spam my Slack?",
      answer: "No. Overclock only posts when there's meaningful signal or when your scheduled summary is due. You control the frequency and can route outputs to the web UI first."
    },
    {
      question: "Do I need technical skills?",
      answer: "If you can describe it to an intern, you can delegate it to Overclock. No code, no complex flows—just plain English."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-card/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div className="bg-card/50 rounded-2xl p-8 border border-primary/10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className={index === faqs.length - 1 ? "border-b-0" : ""}>
                <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-8">
          <a 
            href="/FAQ"
            className="text-primary hover:text-primary-glow transition-colors font-medium"
          >
            View all FAQs →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;