import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { User, Building, GraduationCap, Mic } from "lucide-react";

const WhoIsThisFor = () => {
  const audiences = [
    {
      icon: User,
      title: "Creators",
      description: "Channel-consistent edits that boost session time",
    },
    {
      icon: Building,
      title: "Brands",
      description: "Clear messaging, executive polish, series cadence",
    },
    {
      icon: GraduationCap,
      title: "Educators",
      description: "Structured lessons, accessibility captions",
    },
    {
      icon: Mic,
      title: "Podcasters",
      description: "Multicam sync, chapter markers, crisp dialogue",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Who is Long-Form Editing{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              For?
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {audiences.map((audience) => (
              <Card key={audience.title} className="hover:border-primary/50 transition-all hover:shadow-glow group">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <audience.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{audience.title}</h3>
                  <p className="text-sm text-muted-foreground">{audience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                Talk to an Editing Specialist
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
