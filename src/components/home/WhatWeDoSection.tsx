import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const WhatWeDoSection = () => {
  const steps = [
    {
      title: "Raw Footage",
      description: "Unedited clips, multiple takes, and various camera angles",
    },
    {
      title: "Professional Editing",
      description: "Storytelling, transitions, sound design, and color grading",
    },
    {
      title: "Final Render",
      description: "Polished, engaging video ready for your audience",
    },
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Does a{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Video Editing Agency
              </span>{" "}
              Do?
            </h2>
            <p className="text-xl text-muted-foreground">
              We transform raw footage into compelling stories through expert{" "}
              <strong>storytelling</strong>, <strong>seamless transitions</strong>,{" "}
              <strong>professional sound design</strong>, and{" "}
              <strong>cinematic color grading</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {steps.map((step, index) => (
              <div key={step.title} className="flex flex-col items-center">
                <Card className="w-full hover:border-primary/50 transition-all hover:shadow-glow group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute right-0 translate-x-1/2">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
