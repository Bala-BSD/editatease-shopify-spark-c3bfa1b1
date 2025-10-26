import { Card, CardContent } from "@/components/ui/card";
import { FileText, Upload, Edit, MessageSquare, CheckCircle } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: FileText,
      title: "Brief",
      description: "Share your vision, goals, and creative requirements with us",
    },
    {
      icon: Upload,
      title: "Upload Footage",
      description: "Send us your raw clips via secure cloud transfer",
    },
    {
      icon: Edit,
      title: "Rough Cut",
      description: "We create the initial edit for your review",
    },
    {
      icon: MessageSquare,
      title: "Feedback",
      description: "Provide detailed notes via Frame.io for precise revisions",
    },
    {
      icon: CheckCircle,
      title: "Final Export",
      description: "Receive your polished video in your preferred format",
    },
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Process —{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                From Raw to Remarkable
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A streamlined 5-step workflow designed for clarity, collaboration, and quality
            </p>
          </div>

          <div className="relative">
            {/* Progress Line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-primary" 
                 style={{ width: 'calc(100% - 4rem)', marginLeft: '2rem' }} />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {steps.map((step, index) => (
                <Card key={step.title} className="hover:border-primary/50 transition-all hover:shadow-glow group">
                  <CardContent className="p-6 space-y-4 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <step.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="text-sm font-bold text-primary">Step {index + 1}</div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
