import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download } from "lucide-react";

const ChecklistSection = () => {
  const checklistItems = [
    {
      number: 1,
      title: "Define Your Goal",
      description: "What action do you want viewers to take after watching?",
    },
    {
      number: 2,
      title: "Organize Your Footage",
      description: "Label files clearly by scene, take number, or timestamp",
    },
    {
      number: 3,
      title: "Prepare Brand Assets",
      description: "Logos, fonts, color codes, and existing templates",
    },
    {
      number: 4,
      title: "Select Reference Videos",
      description: "Share 2-3 examples of styles you like",
    },
    {
      number: 5,
      title: "Write a Brief",
      description: "Target audience, tone, key messages, and calls-to-action",
    },
    {
      number: 6,
      title: "Check Audio Quality",
      description: "Ensure clean audio tracks without background noise",
    },
    {
      number: 7,
      title: "Specify Deliverables",
      description: "Format, resolution, aspect ratio (16:9, 9:16, 1:1)",
    },
    {
      number: 8,
      title: "Set Your Deadline",
      description: "When do you need the final video delivered?",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Video Editing{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Checklist
              </span>{" "}
              Before You Start
            </h2>
            <p className="text-xl text-muted-foreground">
              Prepare for success with this pre-project checklist
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="space-y-6">
                {checklistItems.map((item) => (
                  <div key={item.number} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold group-hover:scale-110 transition-transform">
                        {item.number}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold mb-1 flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-2" />
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-subtle border-primary/20">
            <CardContent className="p-8 text-center space-y-4">
              <h3 className="text-2xl font-bold">Download the Full Checklist</h3>
              <p className="text-muted-foreground">
                Get our comprehensive PDF guide with detailed tips for each step
              </p>
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                <Download className="mr-2 h-5 w-5" />
                Download Free PDF
              </Button>
              <p className="text-xs text-muted-foreground">
                No email required • Instant download
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChecklistSection;
