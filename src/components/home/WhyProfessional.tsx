import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Target, Zap } from "lucide-react";

const WhyProfessional = () => {
  const stats = [
    { icon: TrendingUp, value: "+72%", label: "Engagement Increase" },
    { icon: Users, value: "+85%", label: "Viewer Retention" },
    { icon: Target, value: "3.5x", label: "Better Conversion" },
    { icon: Zap, value: "94%", label: "Brand Recall" },
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Professional Video Editing
              </span>{" "}
              Matters
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional editing isn't just about making videos look pretty—it's about
              transforming raw footage into powerful brand storytelling that drives real
              business results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">The Emotional Impact</h3>
              <p className="text-muted-foreground">
                A professionally edited video tells a story that resonates. It captures
                emotions, builds trust, and creates memorable moments that stick with your
                audience long after they've watched.
              </p>
              <p className="text-muted-foreground">
                From the perfect music sync to color grading that evokes the right mood,
                every frame is crafted to make your viewers <em>feel</em> something.
              </p>
            </div>
            <div className="h-64 bg-gradient-subtle rounded-lg flex items-center justify-center">
              <div className="text-muted-foreground">Emotional Storytelling Visual</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <Card key={stat.label} className="hover:border-primary/50 transition-all hover:shadow-glow">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mx-auto">
                    <stat.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyProfessional;
