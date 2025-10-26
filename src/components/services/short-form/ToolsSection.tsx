import { Card } from "@/components/ui/card";

const ToolsSection = () => {
  const tools = [
    "Premiere Pro",
    "After Effects",
    "CapCut Pro",
    "Descript",
    "Runway ML",
    "Canva",
    "Frame.io",
  ];

  return (
    <section id="tools" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tools We Use to <span className="bg-gradient-primary bg-clip-text text-transparent">Edit Smart & Fast</span>
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-8">
          {tools.map((tool) => (
            <Card key={tool} className="px-6 py-3 hover:border-primary/50 transition-all hover:scale-105 duration-300">
              <span className="font-semibold">{tool}</span>
            </Card>
          ))}
        </div>
        
        <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
          We combine precision tools with human storytelling.
        </p>
      </div>
    </section>
  );
};

export default ToolsSection;
