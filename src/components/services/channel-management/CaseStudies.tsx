import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Laptop, Dumbbell, Podcast } from "lucide-react";

const CaseStudies = () => {
  const studies = [
    {
      icon: Laptop,
      title: "Tech YouTube Channel",
      result: "From 10K to 150K subs in 10 months",
      description: "Strategic content calendar with SEO-optimized titles and custom thumbnails",
    },
    {
      icon: Dumbbell,
      title: "Fitness Brand",
      result: "Revenue up 2.5× through affiliate integration",
      description: "Brand partnership coordination and monetization strategy",
    },
    {
      icon: Podcast,
      title: "Podcast Creator",
      result: "Spotify Top 100 within 4 weeks of optimization",
      description: "Multi-platform distribution and engagement optimization",
    },
  ];

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Case Studies — <span className="bg-gradient-primary bg-clip-text text-transparent">Managed to Monetized</span>
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
                <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3">
                  {study.result}
                </div>
                <p className="text-muted-foreground text-sm">{study.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
            Explore Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
