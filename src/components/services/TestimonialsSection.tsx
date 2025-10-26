import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Their edits transformed our webinars into binge-worthy content.",
      author: "Head of Marketing",
      company: "SaaS Brand",
    },
    {
      quote: "I record. They edit. My videos trend.",
      author: "Tech Creator",
      company: "YouTube India",
    },
    {
      quote: "Best editing partner for consistent YouTube uploads.",
      author: "Podcast Host",
      company: "Singapore",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Client</span> Testimonials
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="p-6 hover:border-primary/50 transition-all hover:scale-105 duration-300">
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
