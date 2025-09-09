import { Quote } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      quote: "Last week was my most productive week, perhaps ever.",
      author: "Steven",
      title: "Founder",
      description: "Overclock handles my competitor tracking and content distribution, giving me back 15+ hours per week."
    },
    {
      quote: "What took me 6 hours in Gumloop took 5 minutes in Overclock.",
      author: "Ann",
      title: "Community Manager",
      description: "I described what I needed, and it just worked. No complex setup, no debugging."
    },
    {
      quote: "It reduces a two-day process with external writers to less than an hour.",
      author: "Sebastian",
      title: "Management Advisor",
      description: "The quality matches my decade of PR experience, but the speed is incomparable."
    }
  ];

  return (
    <section className="py-24 px-6 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Marketing teams are already <span className="gradient-text">saving hours every week</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-card/50 rounded-2xl p-8 border border-primary/10 hover:border-primary/20 transition-colors h-full">
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-primary/60 mb-4" />
                  <blockquote className="text-lg font-medium text-foreground mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-foreground">{testimonial.author}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{testimonial.title}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {testimonial.description}
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

export default SocialProof;