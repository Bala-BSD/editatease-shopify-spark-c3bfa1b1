import { Card } from "@/components/ui/card";
import { Zap, Target, TrendingUp } from "lucide-react";

const WhatIsShortForm = () => {
  return (
    <section id="what-is" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            What is <span className="bg-gradient-primary bg-clip-text text-transparent">Short-Form Video Editing?</span>
          </h2>
          
          <p className="text-lg text-center text-muted-foreground mb-12">
            Short-form editing is the art of cutting long moments into punchy stories—optimized for mobile, retention, and virality.
            <br />
            <strong className="text-foreground">Each frame matters. Each beat decides if your audience scrolls or stays.</strong>
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground">15-60 seconds of pure engagement</p>
            </Card>
            
            <Card className="p-6 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Platform Optimized</h3>
              <p className="text-muted-foreground">Tailored for Reels, Shorts & TikTok</p>
            </Card>
            
            <Card className="p-6 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Viral Velocity</h3>
              <p className="text-muted-foreground">Engineered for maximum reach</p>
            </Card>
          </div>
          
          <Card className="p-8 bg-gradient-subtle border-primary/20">
            <h3 className="text-2xl font-semibold mb-4">Best for:</h3>
            <p className="text-muted-foreground text-lg">
              Instagram Reels, YouTube Shorts, TikTok clips, brand snippets, event teasers, launch promos.
            </p>
            <p className="text-foreground text-lg mt-4 font-medium">
              Short-form videos aren't about duration—they're about velocity. The quicker you engage, the deeper you convert.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhatIsShortForm;
