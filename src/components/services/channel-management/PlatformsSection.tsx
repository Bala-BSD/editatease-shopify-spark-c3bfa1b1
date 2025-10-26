import { Card } from "@/components/ui/card";
import { Youtube, Instagram, Music, Linkedin, Video } from "lucide-react";

const PlatformsSection = () => {
  const platforms = [
    { icon: Youtube, name: "YouTube" },
    { icon: Instagram, name: "Instagram" },
    { icon: Music, name: "Spotify" },
    { icon: Linkedin, name: "LinkedIn" },
    { icon: Video, name: "TikTok" },
  ];

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Platforms</span> We Manage
          </h2>
          <p className="text-lg text-muted-foreground">
            Wherever your audience watches—you stay consistent, we stay strategic.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {platforms.map((platform) => (
            <Card key={platform.name} className="p-6 hover:border-primary/50 transition-all hover:scale-110 duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <platform.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="text-xl font-semibold">{platform.name}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
