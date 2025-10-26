import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Video, Zap, BarChart3, ArrowRight } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: Video,
      title: "Long-Form Editing",
      link: "/services/long-form-video-editing",
    },
    {
      icon: Zap,
      title: "Short-Form Editing",
      link: "/services/short-form-video-editing",
    },
    {
      icon: BarChart3,
      title: "Channel Management",
      link: "/services/channel-management",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Video Editing Services <span className="bg-gradient-primary bg-clip-text text-transparent">for Every Need</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Each crafted with specialized workflows and expert editors.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <Card key={service.title} className="hover:border-primary/50 transition-all hover:scale-105 duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <Link to={service.link}>
                  <Button className="bg-gradient-primary hover:shadow-glow w-full">
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
