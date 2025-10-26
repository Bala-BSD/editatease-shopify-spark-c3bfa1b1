import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play, ArrowRight } from "lucide-react";

const PortfolioSection = () => {
  const examples = [
    {
      title: "Founder Story",
      before: "Uncut interview",
      after: "15s viral clip with auto captions, music sync, and hook-first flow",
    },
    {
      title: "Webinar Highlight",
      before: "Long presentation",
      after: "30s key takeaway with dynamic text overlays",
    },
    {
      title: "Product Launch",
      before: "Raw product demo",
      after: "45s high-energy promo with branded graphics",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Portfolio: <span className="bg-gradient-primary bg-clip-text text-transparent">See the Edit in Action</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore how we transform dull footage into thumb-stopping content.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {examples.map((example) => (
            <Card key={example.title} className="p-6 hover:border-primary/50 transition-all">
              <div className="aspect-video bg-gradient-subtle rounded-lg mb-4 flex items-center justify-center">
                <Play className="h-16 w-16 text-primary opacity-50" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{example.title}</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Before:</span>
                  <p className="text-foreground">{example.before}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-primary mx-auto" />
                <div>
                  <span className="text-muted-foreground">After:</span>
                  <p className="text-foreground">{example.after}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/work">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
              Watch Our Reels
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
