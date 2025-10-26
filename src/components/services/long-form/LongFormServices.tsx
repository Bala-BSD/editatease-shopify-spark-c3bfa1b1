import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Youtube, Mic, Film, Building } from "lucide-react";

const LongFormServices = () => {
  const services = [
    {
      icon: Youtube,
      title: "YouTube Long-Form Editing",
      description: "Channel-consistent storytelling, chaptering, SEO-smart titling, and retention-focused pacing.",
    },
    {
      icon: Mic,
      title: "Podcast Video Editing (Audio + Video)",
      description: "Clean cuts, smart jump-cuts, lower-thirds, multicam sync, intro/outro packages, audiogram snippets.",
    },
    {
      icon: Film,
      title: "Web Series & Documentary Edits",
      description: "Narrative arcs, b-roll curation, score selection, motion graphics, graded for cinematic feel.",
    },
    {
      icon: Building,
      title: "Corporate Long-Format Storytelling",
      description: "Townhalls, leadership talks, product walkthroughs, training content—clear, on-brand, reusable.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Our{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Long-Form Editing Services
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service) => (
              <Card key={service.title} className="hover:border-primary/50 transition-all hover:shadow-glow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-4">
            <Link to="/work">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                View Samples
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">
              Need short clips too? Try{" "}
              <Link to="/services/short-form-video-editing" className="text-primary hover:underline">
                Short-Form Video Editing
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LongFormServices;
