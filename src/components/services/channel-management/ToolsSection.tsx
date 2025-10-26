import { Card } from "@/components/ui/card";

const ToolsSection = () => {
  const tools = [
    "TubeBuddy",
    "vidIQ",
    "Canva Pro",
    "Premiere Pro",
    "Google Analytics",
    "Notion",
    "Slack",
    "ClickUp",
  ];

  return (
    <section id="tools" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Tools & Tech</span> We Use
          </h2>
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

export default ToolsSection;
