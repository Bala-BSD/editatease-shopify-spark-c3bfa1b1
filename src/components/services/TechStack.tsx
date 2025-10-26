import { Card } from "@/components/ui/card";

const TechStack = () => {
  const tools = [
    "Premiere Pro",
    "After Effects",
    "DaVinci Resolve",
    "Descript",
    "Runway ML",
    "CapCut Pro",
    "Canva",
    "Frame.io",
  ];

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powered by modern editing tools and cloud-based collaboration.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {tools.map((tool) => (
            <Card key={tool} className="px-6 py-3 hover:border-primary/50 transition-all hover:scale-105 duration-300">
              <span className="font-semibold">{tool}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
