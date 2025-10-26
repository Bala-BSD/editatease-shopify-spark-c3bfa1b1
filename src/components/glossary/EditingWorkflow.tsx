import { Card } from "@/components/ui/card";
import { Upload, Scissors, Sparkles, Palette, Download, MessageSquare } from "lucide-react";

const EditingWorkflow = () => {
  const steps = [
    {
      icon: Upload,
      number: "1",
      title: "Ingest",
      description: "Import and organize raw footage.",
    },
    {
      icon: Scissors,
      number: "2",
      title: "Rough Cut",
      description: "Establish the story flow.",
    },
    {
      icon: Sparkles,
      number: "3",
      title: "Fine Cut",
      description: "Add music, transitions, and polish.",
    },
    {
      icon: Palette,
      number: "4",
      title: "Color & Sound",
      description: "Grade visuals, mix audio.",
    },
    {
      icon: Download,
      number: "5",
      title: "Export",
      description: "Render for the right platform.",
    },
    {
      icon: MessageSquare,
      number: "6",
      title: "Feedback",
      description: "Revise and deliver.",
    },
  ];

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Video Editing Workflow <span className="bg-gradient-primary bg-clip-text text-transparent">(Step-by-Step)</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <Card key={step.number} className="relative overflow-hidden group hover:border-primary/50 transition-all">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-primary opacity-10 rounded-bl-full" />
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {step.number}
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditingWorkflow;
