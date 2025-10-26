import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, BarChart3 } from "lucide-react";

const CaseStudies = () => {
  const studies = [
    {
      icon: TrendingUp,
      title: "E-commerce Brand Launch",
      result: "+2.4M Reels Views",
      description: "Product launch campaign with trending music and dynamic product shots",
    },
    {
      icon: Users,
      title: "Podcast Micro-Edits",
      result: "+110% Followers Growth",
      description: "Bite-sized knowledge clips that drove audience to full episodes",
    },
    {
      icon: BarChart3,
      title: "Fitness Coach Reels",
      result: "+180% Story Reach",
      description: "Transformation montages with motivational overlays and progress tracking",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Case Studies — <span className="bg-gradient-primary bg-clip-text text-transparent">Viral by Design</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {studies.map((study) => (
            <Card key={study.title} className="hover:border-primary/50 transition-all hover:scale-105 duration-300">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                  <study.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3">
                  {study.result}
                </div>
                <p className="text-muted-foreground">{study.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
            Explore Full Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
