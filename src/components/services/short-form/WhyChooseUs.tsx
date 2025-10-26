import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Zap, Palette, Target, Check } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Clock,
      title: "Faster Delivery",
      description: "<72-hour turnaround on short clips.",
    },
    {
      icon: Zap,
      title: "AI-Accelerated Workflow",
      description: "Speech detection + auto cut sync = precision speed.",
    },
    {
      icon: Palette,
      title: "On-Brand Every Time",
      description: "Your fonts, your tone, your vibe—every edit matches.",
    },
    {
      icon: Target,
      title: "Platform-Optimized",
      description: "Aspect ratios, captions, and music licensed per platform.",
    },
  ];

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">Edit at Ease</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {reasons.map((reason) => (
            <Card key={reason.title} className="p-6 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <reason.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <Card className="p-8 bg-gradient-subtle border-primary/20 max-w-3xl mx-auto">
          <p className="text-center text-lg text-foreground font-medium">
            Editing isn't just cutting—it's understanding what keeps thumbs from scrolling.
          </p>
        </Card>
        
        <div className="text-center mt-12">
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
              <Check className="mr-2 h-5 w-5" />
              Start Editing Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
