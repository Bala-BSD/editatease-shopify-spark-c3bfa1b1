import { Card } from "@/components/ui/card";

const TimelineGuide = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Visual Guide: Inside a <span className="bg-gradient-primary bg-clip-text text-transparent">Video Editor's Timeline</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Every video edit is built layer by layer — visuals, sound, effects, and story.
          </p>

          <Card className="p-8 bg-gradient-subtle">
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-8 bg-primary/20 border-2 border-primary rounded flex items-center justify-center text-xs font-bold">
                    V3
                  </div>
                  <div className="flex-1 h-8 bg-primary/10 rounded border border-primary/30 flex items-center px-3 text-sm">
                    Titles & Graphics
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-16 h-8 bg-primary/20 border-2 border-primary rounded flex items-center justify-center text-xs font-bold">
                    V2
                  </div>
                  <div className="flex-1 h-8 bg-primary/10 rounded border border-primary/30 flex items-center px-3 text-sm">
                    B-Roll & Overlays
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-16 h-8 bg-primary/20 border-2 border-primary rounded flex items-center justify-center text-xs font-bold">
                    V1
                  </div>
                  <div className="flex-1 h-8 bg-primary/10 rounded border border-primary/30 flex items-center px-3 text-sm">
                    Main A-Roll Footage
                  </div>
                </div>
              </div>

              <div className="h-px bg-border" />

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-8 bg-secondary/20 border-2 border-secondary rounded flex items-center justify-center text-xs font-bold">
                    A3
                  </div>
                  <div className="flex-1 h-8 bg-secondary/10 rounded border border-secondary/30 flex items-center px-3 text-sm">
                    Sound Effects
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-16 h-8 bg-secondary/20 border-2 border-secondary rounded flex items-center justify-center text-xs font-bold">
                    A2
                  </div>
                  <div className="flex-1 h-8 bg-secondary/10 rounded border border-secondary/30 flex items-center px-3 text-sm">
                    Background Music
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-16 h-8 bg-secondary/20 border-2 border-secondary rounded flex items-center justify-center text-xs font-bold">
                    A1
                  </div>
                  <div className="flex-1 h-8 bg-secondary/10 rounded border border-secondary/30 flex items-center px-3 text-sm">
                    Primary Dialogue
                  </div>
                </div>
              </div>

              <div className="pt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Tracks:</span> Video (V1–V3), Audio (A1–A3) • 
                  <span className="font-semibold text-foreground ml-2">Elements:</span> Clips, transitions, titles, music, and keyframes
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TimelineGuide;
