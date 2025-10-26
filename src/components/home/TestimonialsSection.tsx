import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Content Creator",
      industry: "YouTube",
      rating: 5,
      text: "Edit At Ease transformed my channel. Their editors understand pacing and storytelling better than anyone I've worked with. My engagement is up 72%!",
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      industry: "Tech",
      rating: 5,
      text: "The 48-hour turnaround is a game-changer for our campaigns. Quality never suffers, and the team is incredibly responsive to feedback.",
      avatar: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "Real Estate Agent",
      industry: "Real Estate",
      rating: 5,
      text: "My property tours look cinematic now. Clients are impressed before they even visit. Worth every penny for the professional edge it gives me.",
      avatar: "ER",
    },
    {
      name: "David Thompson",
      role: "Podcast Host",
      industry: "Media",
      rating: 5,
      text: "From full episodes to viral clips, they handle it all. My podcast has grown 3x since partnering with Edit At Ease.",
      avatar: "DT",
    },
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Our Clients Say
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from real creators and businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="hover:border-primary/50 transition-all hover:shadow-glow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                    <Badge variant="secondary">{testimonial.industry}</Badge>
                  </div>

                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
