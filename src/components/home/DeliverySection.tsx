import { Card, CardContent } from "@/components/ui/card";
import { Zap, Cloud, Users } from "lucide-react";

const DeliverySection = () => {
  const features = [
    {
      icon: Zap,
      title: "AI-Assisted Workflows",
      description: "Smart auto-transcription and scene detection speed up the process while editors maintain creative control",
    },
    {
      icon: Cloud,
      title: "Cloud Review System",
      description: "Real-time collaboration via Frame.io means faster feedback loops and instant revisions",
    },
    {
      icon: Users,
      title: "Rapid Iteration",
      description: "Multiple editors work in parallel on complex projects to meet tight deadlines without compromising quality",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How We Deliver Results{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Faster
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge technology meets human creativity for unmatched speed and quality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {features.map((feature) => (
              <Card key={feature.title} className="hover:border-primary/50 transition-all hover:shadow-glow group">
                <CardContent className="p-8 space-y-4 text-center">
                  <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Traditional Editing Timeline</h3>
                  <div className="h-3 w-96 bg-muted rounded-full" />
                  <p className="text-sm text-muted-foreground">5-7 days average</p>
                </div>
                <div className="text-4xl text-muted-foreground">→</div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-primary">Edit At Ease Timeline</h3>
                  <div className="h-3 w-48 bg-gradient-primary rounded-full" />
                  <p className="text-sm text-foreground font-semibold">48 hours guaranteed</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
