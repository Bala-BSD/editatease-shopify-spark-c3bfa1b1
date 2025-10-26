import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, FileText } from "lucide-react";

const ChannelHero = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            You Create. <span className="bg-gradient-primary bg-clip-text text-transparent">We Manage.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            We handle everything after you hit record—from uploads and SEO to thumbnails, analytics, and growth strategies.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-muted-foreground">100M+ Views</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-muted-foreground">1B+ Watch Minutes</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-muted-foreground">Trusted by Top Creators</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                <TrendingUp className="mr-2 h-5 w-5" />
                Book Free Channel Audit
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              <FileText className="mr-2 h-5 w-5" />
              See Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChannelHero;
