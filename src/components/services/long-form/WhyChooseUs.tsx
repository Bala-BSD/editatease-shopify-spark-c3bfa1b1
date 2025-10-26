import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Zap, TrendingUp, Users, MessageSquare } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "Consistent Quality",
      description: "A dedicated editor who learns your brand's voice and style.",
    },
    {
      icon: Zap,
      title: "Faster Turnarounds",
      description: "AI-assisted workflows + cloud review reduce iteration time.",
    },
    {
      icon: TrendingUp,
      title: "Retention-First",
      description: "We edit for watch time, not just looks.",
    },
    {
      icon: Users,
      title: "Scalable",
      description: "From one video a month to a content calendar of weekly long-form drops.",
    },
    {
      icon: MessageSquare,
      title: "Collaborative",
      description: "Timestamped review links, versioning, and clear feedback loops.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Why Choose{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Edit at Ease?
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {reasons.map((reason) => (
              <Card key={reason.title} className="hover:border-primary/50 transition-all hover:shadow-glow group">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <reason.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                Book a Strategy Call
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
