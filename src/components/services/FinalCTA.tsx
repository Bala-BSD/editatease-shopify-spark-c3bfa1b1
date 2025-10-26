import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Video, ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-8">
            <Video className="h-10 w-10 text-primary-foreground" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Edit <span className="bg-gradient-primary bg-clip-text text-transparent">Your Story Next</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8">
            You shoot. We shape. Together, we build content that moves audiences.
            <br />
            🎬 Start your next project today
          </p>
          
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-6">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
