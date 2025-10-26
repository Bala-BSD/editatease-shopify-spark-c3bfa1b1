import { Card } from "@/components/ui/card";
import { Check, Zap, TrendingUp, Monitor } from "lucide-react";

const WhyChooseServices = () => {
  const reasons = [
    {
      icon: Check,
      title: "Consistency Across Every Edit",
      description: "Dedicated editors who learn your style.",
    },
    {
      icon: Zap,
      title: "Speed + Quality",
      description: "AI-assisted cuts with human storytelling finesse.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Packages",
      description: "From one edit to a full content calendar.",
    },
    {
      icon: Monitor,
      title: "Cross-Platform Output",
      description: "Deliverables optimized for all screens.",
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
            <Card key={reason.title} className="p-6 hover:border-primary/50 transition-all hover:scale-105 duration-300">
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
          <p className="text-center text-xl text-foreground font-medium">
            We're not just editors — we're your creative post-production partners.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default WhyChooseServices;
