import { Quote } from "lucide-react";

const SocialProof = () => {
  const mainTestimonial = {
    quote: "Last week was my most productive week, perhaps ever.",
    author: "Steven",
    title: "Founder",
    description: "Overclock handles my competitor tracking and content distribution, giving me back 15+ hours per week."
  };

  const supportingTestimonials = [
    {
      quote: "What took me 6 hours in Gumloop took 5 minutes in Overclock.",
      author: "Ann",
      title: "Community Manager"
    },
    {
      quote: "It reduces a two-day process with external writers to less than an hour.",
      author: "Sebastian", 
      title: "Management Advisor"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-6xl mx-auto">
        {/* Main Hero Testimonial */}
        <div className="text-center mb-20">
          <div className="relative">
            <Quote className="w-16 h-16 text-primary/20 mx-auto mb-8" />
            <blockquote className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight max-w-4xl mx-auto">
              "{mainTestimonial.quote}"
            </blockquote>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              {mainTestimonial.description}
            </p>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-lg">
                {mainTestimonial.author.charAt(0)}
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">{mainTestimonial.author}</div>
                <div className="text-muted-foreground">{mainTestimonial.title}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-2">
            Marketing teams are already <span className="gradient-text">saving hours every week</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {supportingTestimonials.map((testimonial, index) => (
            <div key={index} className="relative">
              <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-primary/10 hover:border-primary/20 transition-all duration-300">
                <Quote className="w-6 h-6 text-primary/40 mb-3" />
                <blockquote className="text-lg font-medium text-foreground mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-secondary/60 flex items-center justify-center text-secondary-foreground font-medium text-sm">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  </div>
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