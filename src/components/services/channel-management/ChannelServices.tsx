import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Upload, BarChart3, DollarSign, Palette } from "lucide-react";

const ChannelServices = () => {
  const services = [
    {
      icon: Target,
      title: "Channel Strategy & Positioning",
      description: "Competitor research, audience analysis, and content calendar aligned to growth goals.",
    },
    {
      icon: Upload,
      title: "Upload & Optimization",
      description: "Tags, titles, timestamps, end screens, cards, and SEO-friendly metadata.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Monthly insights on CTR, watch time, and retention with actionable next steps.",
    },
    {
      icon: DollarSign,
      title: "Monetization & Brand Deals",
      description: "Ad placement advice and brand collaboration support for revenue growth.",
    },
    {
      icon: Palette,
      title: "Creative Consistency",
      description: "Thumbnails, intros, and templates that make your channel instantly recognizable.",
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Channel Management Services</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <Card key={service.title} className="hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
              View Full Service Deck
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ChannelServices;
