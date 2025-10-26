import { Card, CardContent } from "@/components/ui/card";

const EditingTechniques = () => {
  const techniques = {
    "Storytelling Techniques": [
      "Montage",
      "Continuity Editing",
      "Slow Motion",
      "J-Cut & L-Cut",
    ],
    "Style & Emotion": [
      "Jump Cut",
      "Split Screen",
      "Speed Ramp",
      "Flashback",
    ],
    "Structure & Flow": [
      "Match Cut",
      "Cutaway",
      "Crossfade",
      "Smash Cut",
    ],
  };

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Editing Techniques <span className="bg-gradient-primary bg-clip-text text-transparent">You Should Know</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(techniques).map(([category, items]) => (
              <Card key={category} className="hover:border-primary/50 transition-all">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-center mb-6">{category}</h3>
                  <ul className="space-y-3">
                    {items.map((technique) => (
                      <li
                        key={technique}
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        {technique}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditingTechniques;
