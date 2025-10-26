import { Card } from "@/components/ui/card";

const WhatAreServices = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            What Are <span className="bg-gradient-primary bg-clip-text text-transparent">Video Editing Services?</span>
          </h2>
          
          <Card className="p-8 bg-gradient-subtle border-primary/20">
            <p className="text-lg text-center text-muted-foreground mb-6">
              Video editing is more than cuts and transitions — it's the craft of storytelling through visuals and sound.
              <br />
              <strong className="text-foreground">Every frame, color tone, and beat of music adds emotion, clarity, and impact.</strong>
            </p>
            
            <p className="text-lg text-center text-muted-foreground mb-6">
              Whether you're a creator, a business, or a studio — we help you transform raw content into professionally finished videos that perform across platforms.
            </p>
            
            <p className="text-xl text-center font-semibold text-foreground">
              From cinematic long-form edits to viral short clips, Edit at Ease does it all.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhatAreServices;
