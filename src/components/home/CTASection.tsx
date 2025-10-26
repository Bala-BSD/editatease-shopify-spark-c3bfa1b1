import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-lg text-accent italic">
            "Every frame deserves a story."
          </p>
          
          <h2 className="text-5xl md:text-6xl font-bold">
            Let's Edit{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Your Story
            </span>{" "}
            Next
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join 1,000+ creators and brands who trust Edit At Ease to transform their raw
            footage into scroll-stopping content.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-6">
                <Play className="mr-2 h-5 w-5" />
                Start Your Project
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                View Pricing
              </Button>
            </Link>
          </div>

          <div className="pt-8 flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                48 Hours
              </div>
              <div className="text-sm text-muted-foreground">Turnaround</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                50k+
              </div>
              <div className="text-sm text-muted-foreground">Videos Edited</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-sm text-muted-foreground">Human Editors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
