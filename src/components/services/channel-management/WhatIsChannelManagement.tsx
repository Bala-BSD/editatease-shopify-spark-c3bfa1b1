import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const WhatIsChannelManagement = () => {
  const includes = [
    "Keyword-optimized titles & metadata",
    "Thumbnail creation & A/B testing",
    "Upload scheduling & publishing",
    "Analytics review & content calendar",
  ];

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            What Is <span className="bg-gradient-primary bg-clip-text text-transparent">Channel Management?</span>
          </h2>
          
          <p className="text-lg text-center text-muted-foreground mb-12">
            Channel management is a complete solution for running a successful YouTube or social channel without losing focus on content creation.
            <br />
            <strong className="text-foreground">We strategize, upload, optimize, and analyze so your content performs 24×7.</strong>
          </p>
          
          <Card className="p-8 bg-gradient-subtle border-primary/20">
            <h3 className="text-2xl font-semibold mb-6 text-center">Includes:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {includes.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhatIsChannelManagement;
