import { Card, CardContent } from "@/components/ui/card";
import { Video, Clock, Users } from "lucide-react";

const WhatIsLongForm = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            What is{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Long-Form Video Editing?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground text-center mb-12">
            Long-form video editing is the craft of shaping extended content—typically 8 to 90 minutes—into a compelling narrative that sustains attention. It blends story structure, pacing, sound design, and color to keep viewers engaged from the hook to the final frame.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-subtle border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Short-form vs Long-form</h3>
                <p className="text-muted-foreground">
                  Short clips sell the click. Long-form builds authority, loyalty, and watch time—the metrics that move revenue and reputation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-subtle border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Best for:</h3>
                <p className="text-muted-foreground">
                  Podcasts, webinars, interviews, educational content, case-study films, founder stories, documentaries, product deep dives.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <Video className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="font-semibold mb-2">Story Structure</h4>
              <p className="text-sm text-muted-foreground">Narrative arcs that keep viewers engaged</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="font-semibold mb-2">Perfect Pacing</h4>
              <p className="text-sm text-muted-foreground">Maintain momentum throughout</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="font-semibold mb-2">Audience Retention</h4>
              <p className="text-sm text-muted-foreground">Editing that keeps them watching</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsLongForm;
