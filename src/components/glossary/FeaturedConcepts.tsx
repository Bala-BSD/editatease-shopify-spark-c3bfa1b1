import { Card, CardContent } from "@/components/ui/card";
import { Film, Palette, Clock, Sparkles, Layers, Gauge, Scissors, Video } from "lucide-react";

const FeaturedConcepts = () => {
  const concepts = [
    {
      icon: Film,
      term: "B-roll",
      meaning: "Supplementary footage that enhances the main narrative (A-roll).",
    },
    {
      icon: Palette,
      term: "LUT (Look-Up Table)",
      meaning: "A preset file that instantly applies a specific color tone or cinematic look.",
    },
    {
      icon: Layers,
      term: "Timeline",
      meaning: "The digital workspace where editors arrange video, audio, and effects in sequence.",
    },
    {
      icon: Sparkles,
      term: "Color Grading",
      meaning: "Adjusting hues, contrast, and brightness to achieve a consistent, stylized visual tone.",
    },
    {
      icon: Clock,
      term: "Transition",
      meaning: "Visual or motion effect between two clips (e.g., cut, dissolve, wipe).",
    },
    {
      icon: Gauge,
      term: "Rendering",
      meaning: "The process of exporting the final edited video into a playable format.",
    },
    {
      icon: Scissors,
      term: "Jump Cut",
      meaning: "A sudden change in perspective or time within the same scene to maintain rhythm.",
    },
    {
      icon: Video,
      term: "Frame Rate (FPS)",
      meaning: "Number of frames displayed per second; affects motion smoothness (e.g., 24fps = cinematic).",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Editing Concepts</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {concepts.map((concept) => (
              <Card key={concept.term} className="hover:border-primary/50 transition-all hover:scale-105 duration-300 group">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <concept.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">{concept.term}</h3>
                  <p className="text-sm text-muted-foreground">{concept.meaning}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedConcepts;
