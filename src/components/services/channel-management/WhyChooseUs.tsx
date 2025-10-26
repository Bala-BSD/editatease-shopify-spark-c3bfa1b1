import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Users, Clock, Share2, FileText } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: TrendingUp,
      title: "Data-Driven Growth",
      description: "We measure everything—from titles to retention.",
    },
    {
      icon: Users,
      title: "Creator-Centric Team",
      description: "We speak your language—YouTube tags to trends.",
    },
    {
      icon: Clock,
      title: "Faster Execution",
      description: "Content calendar discipline + daily uploads.",
    },
    {
      icon: Share2,
      title: "Cross-Platform Scaling",
      description: "Convert YouTube edits into Reels & Shorts for maximum reach.",
    },
    {
      icon: FileText,
      title: "Transparent Reporting",
      description: "Monthly performance dashboards and bi-weekly syncs.",
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {reasons.map((reason) => (
            <Card key={reason.title} className="p-6 hover:border-primary/50 transition-all hover:scale-105 duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                <reason.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
              Book Your Audit
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
