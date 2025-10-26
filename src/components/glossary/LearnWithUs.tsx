import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const LearnWithUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <Card className="max-w-4xl mx-auto bg-gradient-subtle border-primary/20">
          <div className="p-12 text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Learn Video Editing with <span className="bg-gradient-primary bg-clip-text text-transparent">Edit at Ease</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Want to skip the learning curve?
              Our professional editors handle short-form, long-form, and YouTube channel management so you can focus on content creation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow">
                <Link to="/services">Explore Video Editing Services →</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link to="/work">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LearnWithUs;
