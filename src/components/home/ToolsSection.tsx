import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ToolsSection = () => {
  const tools = [
    { name: "Premiere Pro", skill: "Expert", category: "Editing" },
    { name: "After Effects", skill: "Expert", category: "Motion Graphics" },
    { name: "DaVinci Resolve", skill: "Expert", category: "Color Grading" },
    { name: "Final Cut Pro", skill: "Advanced", category: "Editing" },
    { name: "CapCut", skill: "Expert", category: "Social Media" },
    { name: "Runway AI", skill: "Advanced", category: "AI Tools" },
    { name: "Frame.io", skill: "Expert", category: "Collaboration" },
    { name: "Audition", skill: "Advanced", category: "Audio" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tools & Technologies{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                We Master
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Industry-leading software and cutting-edge workflows
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <Card 
                key={tool.name}
                className="group hover:border-primary/50 transition-all hover:shadow-glow cursor-pointer"
              >
                <CardContent className="p-6 space-y-3 text-center">
                  <div className="w-16 h-16 rounded-xl bg-gradient-subtle flex items-center justify-center mx-auto text-2xl font-bold text-foreground group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all">
                    {tool.name.substring(0, 2)}
                  </div>
                  <h3 className="font-semibold">{tool.name}</h3>
                  <div className="space-y-1">
                    <Badge variant="secondary" className="text-xs">
                      {tool.category}
                    </Badge>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Badge className="text-xs bg-gradient-primary">
                        {tool.skill} Level
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
