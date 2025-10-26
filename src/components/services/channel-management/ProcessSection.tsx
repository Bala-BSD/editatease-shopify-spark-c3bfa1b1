import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Calendar, Rocket, LineChart, DollarSign } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: Search,
      title: "Audit & Strategy Setup",
      description: "Evaluate existing channel metrics.",
    },
    {
      icon: Calendar,
      title: "Content Calendar",
      description: "Plan upload themes and timing.",
    },
    {
      icon: Rocket,
      title: "Execution & Uploads",
      description: "Thumbnails, SEO, captions.",
    },
    {
      icon: LineChart,
      title: "Analytics & Optimization",
      description: "Review CTR, views, retention.",
    },
    {
      icon: DollarSign,
      title: "Scale & Monetize",
      description: "Integrate sponsorships and collabs.",
    },
  ];

  return (
    <section id="process" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Process — <span className="bg-gradient-primary bg-clip-text text-transparent">From Upload to Uplift</span>
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-6 mb-12">
          {steps.map((step, index) => (
            <Card key={step.title} className="p-6 hover:border-primary/50 transition-all">
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-2xl">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-1">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                <div className="hidden md:block flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
            Download Our Process Guide
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
