import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play, Upload } from "lucide-react";

const ShortFormHero = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Edit Fast. <span className="bg-gradient-primary bg-clip-text text-transparent">Engage Faster.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Your story deserves to trend. Whether it's a 15-second Reel or a 60-second YouTube Short, we turn raw clips into viral, scroll-stopping content.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-muted-foreground">5M+ Reels Views</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-muted-foreground">2500+ Edits Delivered</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-muted-foreground">Avg. 300% Engagement Boost</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                <Upload className="mr-2 h-5 w-5" />
                Upload Footage Now
              </Button>
            </Link>
            <Link to="/work">
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo Reel
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShortFormHero;
