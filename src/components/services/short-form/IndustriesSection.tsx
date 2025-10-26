import { Card } from "@/components/ui/card";
import { Laptop, GraduationCap, Dumbbell, Building2, Coffee } from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    {
      icon: Laptop,
      name: "Tech & SaaS",
      description: "Explainer clips, launch teasers",
    },
    {
      icon: GraduationCap,
      name: "Education",
      description: "Micro-learning Reels",
    },
    {
      icon: Dumbbell,
      name: "Fitness & Lifestyle",
      description: "Transformation edits, trend syncs",
    },
    {
      icon: Building2,
      name: "Real Estate",
      description: "Property walk-through snippets",
    },
    {
      icon: Coffee,
      name: "Podcasts",
      description: "Knowledge bites & highlights",
    },
  ];

  return (
    <section id="industries" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Industries <span className="bg-gradient-primary bg-clip-text text-transparent">We Serve</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {industries.map((industry) => (
            <Card key={industry.name} className="p-6 hover:border-primary/50 transition-all hover:scale-105 duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                <industry.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
              <p className="text-muted-foreground">{industry.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
