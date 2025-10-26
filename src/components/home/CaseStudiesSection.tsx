import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Eye, MousePointerClick } from "lucide-react";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      client: "TechFlow SaaS",
      industry: "Technology",
      challenge: "Low engagement on product demo videos",
      solution: "Restructured narrative with motion graphics and testimonials",
      results: [
        { icon: Eye, metric: "+156%", label: "View Duration" },
        { icon: MousePointerClick, metric: "+89%", label: "Click-Through Rate" },
        { icon: TrendingUp, metric: "+234%", label: "Trial Signups" },
      ],
    },
    {
      client: "Luxe Real Estate",
      industry: "Real Estate",
      challenge: "Property tours looked amateur and failed to attract high-end buyers",
      solution: "Cinematic drone footage with professional color grading",
      results: [
        { icon: Eye, metric: "+92%", label: "Property Inquiries" },
        { icon: MousePointerClick, metric: "+67%", label: "Showing Bookings" },
        { icon: TrendingUp, metric: "$2.1M", label: "Sales Increase" },
      ],
    },
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Case Studies
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Real clients, real results, real impact
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study) => (
              <Card key={study.client} className="hover:border-primary/50 transition-all hover:shadow-glow">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{study.client}</h3>
                      <Badge variant="secondary">{study.industry}</Badge>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-destructive">
                        The Challenge
                      </h4>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-primary">
                        Our Solution
                      </h4>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-4">Key Results</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {study.results.map((result) => (
                        <div
                          key={result.label}
                          className="p-4 bg-background rounded-lg text-center space-y-2"
                        >
                          <result.icon className="h-6 w-6 text-primary mx-auto" />
                          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                            {result.metric}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button variant="outline" className="w-full">
                      View Full Case Study →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
