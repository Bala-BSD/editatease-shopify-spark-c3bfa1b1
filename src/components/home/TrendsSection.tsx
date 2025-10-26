import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Film, Smartphone } from "lucide-react";

const TrendsSection = () => {
  const trends = [
    {
      icon: Sparkles,
      title: "AI-Assisted Editing",
      description: "Intelligent automation speeds up workflows while maintaining creative control",
    },
    {
      icon: Film,
      title: "Cinematic LUTs",
      description: "Hollywood-grade color grading presets for professional aesthetics",
    },
    {
      icon: Smartphone,
      title: "Vertical-First Formats",
      description: "9:16 mobile-optimized content dominates social platforms",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Badge variant="secondary" className="text-sm">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Breaking News
            </Badge>
            <span className="text-sm text-muted-foreground">Updated October 2025</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            New Trends in{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Video Editing (2025)
            </span>
          </h2>

          <p className="text-xl text-muted-foreground text-center mb-12">
            Stay ahead of the curve with the latest innovations shaping video production
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {trends.map((trend) => (
              <Card key={trend.title} className="hover:border-primary/50 transition-all hover:shadow-glow group">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <trend.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{trend.title}</h3>
                  <p className="text-muted-foreground">{trend.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendsSection;
