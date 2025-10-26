import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ServicesTable = () => {
  const services = [
    {
      name: "Corporate Video",
      features: ["Training Videos", "Brand Stories", "Internal Comms", "Sales Pitches"],
      link: "/verticals/corporate-video-editing",
    },
    {
      name: "Commercial",
      features: ["Social Media Ads", "Product Promos", "Brand Campaigns", "TV Spots"],
      link: "/verticals/social-media-ad-editing",
    },
    {
      name: "Product Demo",
      features: ["Explainer Videos", "App Demos", "Feature Tours", "Tutorials"],
      link: "/verticals/explainer-video-services",
    },
    {
      name: "Event Coverage",
      features: ["Conference Recaps", "Weddings", "Live Events", "Highlights"],
      link: "/services/long-form-video-editing",
    },
    {
      name: "Social Media",
      features: ["Reels", "TikToks", "Shorts", "Stories"],
      link: "/services/short-form-video-editing",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Video Editing Services{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              at a Glance
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compare our core offerings and find the perfect fit for your project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.name}
              className={`hover:border-primary/50 transition-all hover:shadow-glow group ${
                index === 2 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <CardContent className="p-6 space-y-4 h-full flex flex-col">
                <div className="h-2 w-full bg-gradient-primary rounded-full" />
                <h3 className="text-xl font-bold text-center">{service.name}</h3>
                <ul className="space-y-2 flex-grow">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm">
                      <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to={service.link}>
                  <Button variant="secondary" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    Learn More
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

export default ServicesTable;
