import { Quote } from "lucide-react";

const SocialProof = () => {
  const mainTestimonial = {
    quote: "Last week was my most productive week, perhaps ever.",
    author: "Steven",
    title: "Founder",
    description: "Overclock handles my competitor tracking and content distribution, giving me back 15+ hours per week."
  };

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
      </div>
    </section>
  );
};

export default SocialProof;