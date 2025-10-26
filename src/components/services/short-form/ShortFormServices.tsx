import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Video, Brain, Megaphone, Users } from "lucide-react";

const ShortFormServices = () => {
  const services = [
    {
      icon: Video,
      title: "Reels & Shorts Editing",
      description: "Hook-first cuts with captions, transitions, trending music, and brand-consistent overlays.",
    },
    {
      icon: Brain,
      title: "Thought-Leadership Clips",
      description: "Turn webinars, podcasts, or long talks into snackable content that builds credibility.",
    },
    {
      icon: Megaphone,
      title: "Brand & Product Promos",
      description: "High-energy edits designed for launches, D2C sales, and performance marketing campaigns.",
    },
    {
      icon: Users,
      title: "Influencer & Creator Edits",
      description: "Custom cuts aligned with your niche—beauty, tech, fitness, education, or lifestyle.",
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Short-Form Editing Services</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <Card key={service.title} className="hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-lg">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/work">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
              View Reel Samples
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShortFormServices;
