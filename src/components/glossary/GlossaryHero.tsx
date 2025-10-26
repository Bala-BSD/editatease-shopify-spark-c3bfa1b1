import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Film } from "lucide-react";
import { Link } from "react-router-dom";

const GlossaryHero = () => {
  return (
    <section className="pt-32 pb-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6">
            <Film className="h-8 w-8 text-primary-foreground" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Video Editing Glossary: Every <span className="bg-gradient-primary bg-clip-text text-transparent">Term, Technique, and Tool</span> Explained
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Welcome to Edit at Ease's ultimate guide to video editing.
            Whether you're a beginner, brand marketer, or pro editor, this glossary breaks down every piece of jargon — from A-roll to Zoom transition — in simple, actionable language.
          </p>

          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="🔍 Search the glossary..." 
              className="pl-12 h-14 text-lg"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow">
              <a href="#alphabet">Browse A–Z ↓</a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link to="/resources/video-editing-glossary.pdf">Download Glossary PDF</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlossaryHero;
