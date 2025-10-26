import { Card, CardContent } from "@/components/ui/card";
import { Award, Star, TrendingUp } from "lucide-react";

const AwardsSection = () => {
  const awards = [
    { name: "Best Video Agency 2024", org: "Creative Awards" },
    { name: "Top Rated Service", org: "Trustpilot" },
    { name: "Excellence in Editing", org: "Industry Summit" },
  ];

  const features = [
    { name: "Forbes", category: "Featured In" },
    { name: "Campaign India", category: "Featured In" },
    { name: "Marketing Week", category: "Featured In" },
    { name: "Content Marketing Institute", category: "Featured In" },
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Awards &{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Recognition
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Industry-recognized excellence in video editing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {awards.map((award) => (
              <Card key={award.name} className="hover:border-primary/50 transition-all hover:shadow-glow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto">
                    <Award className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg">{award.name}</h3>
                  <p className="text-sm text-muted-foreground">{award.org}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-background">
            <CardContent className="p-8">
              <h3 className="text-center text-lg font-semibold mb-6 text-muted-foreground">
                Featured In
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="flex flex-col items-center justify-center space-y-2 group"
                  >
                    <div className="w-full h-16 bg-gradient-subtle rounded-lg flex items-center justify-center group-hover:bg-gradient-primary transition-all">
                      <span className="text-lg font-bold text-muted-foreground group-hover:text-primary-foreground transition-all">
                        {feature.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
