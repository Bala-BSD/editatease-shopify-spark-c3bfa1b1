import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Tech Startup Product Launch",
      beforeDesc: "Raw, multi-angle footage",
      afterDesc: "Sleek, cinematic final edit",
      category: "Commercial",
    },
    {
      title: "YouTube Creator Vlog",
      beforeDesc: "60 min unstructured footage",
      afterDesc: "Engaging 12-min story",
      category: "Long-Form",
    },
    {
      title: "Real Estate Property Tour",
      beforeDesc: "Shaky drone + walk-through",
      afterDesc: "Smooth, luxury showcase",
      category: "Real Estate",
    },
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Portfolio:{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                See the Transformation
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Watch raw footage become polished, professional content
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={project.title} className="overflow-hidden hover:border-primary/50 transition-all">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Before */}
                    <div className="space-y-3">
                      <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        Before
                      </div>
                      <div className="aspect-video bg-gradient-subtle rounded-lg flex items-center justify-center group hover:shadow-glow transition-all cursor-pointer">
                        <Play className="h-12 w-12 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all" />
                      </div>
                      <p className="text-muted-foreground text-sm">{project.beforeDesc}</p>
                    </div>

                    {/* After */}
                    <div className="space-y-3">
                      <div className="text-sm font-semibold text-primary uppercase tracking-wider">
                        After
                      </div>
                      <div className="aspect-video bg-gradient-primary rounded-lg flex items-center justify-center group hover:shadow-glow transition-all cursor-pointer">
                        <Play className="h-12 w-12 text-primary-foreground group-hover:scale-110 transition-all" />
                      </div>
                      <p className="text-foreground text-sm font-medium">{project.afterDesc}</p>
                    </div>
                  </div>

                  {index === 0 && (
                    <div className="mt-6 p-4 bg-secondary rounded-lg">
                      <p className="text-sm text-muted-foreground italic">
                        "The transformation was incredible. Our product launch video went viral
                        and drove 300% more signups than expected!" - Sarah, Marketing Director
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
              View Full Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
