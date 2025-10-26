import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const WhyChooseUsSection = () => {
  const benefits = [
    "48-hour guaranteed turnaround on all projects",
    "100% human editors—no AI-generated content",
    "Dedicated project manager for seamless communication",
    "Frame.io collaboration for precise, timestamped feedback",
    "Unlimited revisions on Ultimate plan",
    "Scalable solutions from single videos to ongoing partnerships",
  ];

  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose Us as Your{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Video Editing Agency
                </span>
                ?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We're not just editors—we're storytelling partners committed to your success.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <p className="ml-3 text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-primary flex items-center justify-center">
                  <div className="text-center text-primary-foreground space-y-2">
                    <div className="text-4xl font-bold">Our Team</div>
                    <div className="text-sm">Professional Editors Who Care</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
