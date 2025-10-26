import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play, Edit } from "lucide-react";

const ServicesHero = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Video Editing Services</span> for Every Story
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            From brand films to creator reels — we turn raw footage into polished stories that captivate.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-muted-foreground">5000+ videos edited</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-muted-foreground">Trusted by creators, brands, and agencies globally</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                <Edit className="mr-2 h-5 w-5" />
                Get a Free Trial Edit
              </Button>
            </Link>
            <Link to="/work">
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                <Play className="mr-2 h-5 w-5" />
                Watch Our Showreel
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
