import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play, CheckCircle } from "lucide-react";

const LongFormHero = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Transform Long Videos into{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Captivating Stories
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            From podcasts and webinars to documentaries and brand films—we turn raw footage into long-form videos that people actually finish.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>10,000+ hours edited</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Dedicated editor</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Faster turnarounds</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg">
                Get Your Free Trial Edit
              </Button>
            </Link>
            <Link to="/work">
              <Button size="lg" variant="outline" className="text-lg">
                <Play className="h-5 w-5 mr-2" />
                Watch Our Edits
              </Button>
            </Link>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Trusted by creators and brands across tech, education, SaaS, and lifestyle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LongFormHero;
