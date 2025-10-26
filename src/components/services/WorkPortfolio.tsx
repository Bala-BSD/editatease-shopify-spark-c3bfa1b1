import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play, TrendingUp, ShoppingBag, Users } from "lucide-react";

const WorkPortfolio = () => {
  const highlights = [
    {
      icon: Users,
      title: "Founder Documentary",
      metric: "Views ↑ 260%",
      description: "Before: Raw, unstructured footage",
      after: "After: Cohesive, emotionally engaging story",
    },
    {
      icon: ShoppingBag,
      title: "Product Demo",
      metric: "Conversion ↑ 2.1×",
      description: "Before: Unedited product walkthrough",
      after: "After: Professional demo with graphics",
    },
    {
      icon: TrendingUp,
      title: "Influencer Reel",
      metric: "Engagement ↑ 320%",
      description: "Before: Simple smartphone footage",
      after: "After: Trend-synced viral content",
    },
  ];

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Work <span className="bg-gradient-primary bg-clip-text text-transparent">Speaks for Itself</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Before: Raw, unstructured footage
            <br />
            After: Cohesive, emotionally engaging story with color-graded visuals and sound design.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {highlights.map((item) => (
            <Card key={item.title} className="p-6 hover:border-primary/50 transition-all hover:scale-105 duration-300">
              <div className="aspect-video bg-gradient-subtle rounded-lg mb-4 flex items-center justify-center">
                <Play className="h-16 w-16 text-primary opacity-50" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-3">
                <item.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3">
                {item.metric}
              </div>
              <p className="text-sm text-muted-foreground mb-1">{item.description}</p>
              <p className="text-sm text-foreground">{item.after}</p>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/work">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
              Watch Full Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkPortfolio;
