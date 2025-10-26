import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Upload, FileText, Scissors, MessageSquare, Download } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Footage",
      description: "via Google Drive/WeTransfer",
    },
    {
      icon: FileText,
      title: "Brief Us",
      description: "share tone, references, and brand kit",
    },
    {
      icon: Scissors,
      title: "Rough Cut Delivery",
      description: "within 2–3 days",
    },
    {
      icon: MessageSquare,
      title: "Feedback & Revisions",
      description: "collaborative Frame.io review",
    },
    {
      icon: Download,
      title: "Final Export",
      description: "ready for Reels, TikTok, Shorts",
    },
  ];

  return (
    <section id="process" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Editing Process — <span className="bg-gradient-primary bg-clip-text text-transparent">Fast, Fluid, Flawless</span>
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card key={step.title} className="p-6 hover:border-primary/50 transition-all">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-2xl">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold mb-1">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  <div className="hidden md:block flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
              Start Editing Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
