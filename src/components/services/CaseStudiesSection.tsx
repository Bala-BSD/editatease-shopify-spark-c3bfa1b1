import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, TrendingUp, Video } from "lucide-react";

const CaseStudiesSection = () => {
  const studies = [
    {
      icon: Building2,
      title: "SaaS Brand Video Library",
      results: ["3× LinkedIn engagement", "+41% site traffic"],
    },
    {
      icon: TrendingUp,
      title: "Influencer Reels Campaign",
      results: ["1.8M reach", "340% follower growth"],
    },
    {
      icon: Video,
      title: "Founder Documentary",
      results: ["PR Coverage", "+74% Watch Time"],
    },
  ];

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Case Studies & <span className="bg-gradient-primary bg-clip-text text-transparent">Success Stories</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {studies.map((study) => (
            <Card key={study.title} className="hover:border-primary/50 transition-all hover:scale-105 duration-300">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                  <study.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{study.title}</h3>
                <div className="space-y-2">
                  {study.results.map((result) => (
                    <div key={result} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      <span className="text-muted-foreground">{result}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
            Read Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
