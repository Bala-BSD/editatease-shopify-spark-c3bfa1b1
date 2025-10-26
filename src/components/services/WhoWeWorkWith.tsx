import { Card } from "@/components/ui/card";
import { Users, Building2, GraduationCap, Briefcase } from "lucide-react";

const WhoWeWorkWith = () => {
  const clients = [
    {
      icon: Users,
      title: "Creators & Influencers",
      description: "You focus on recording. We focus on results.",
    },
    {
      icon: Building2,
      title: "Brands & Businesses",
      description: "Corporate storytelling with precision and polish.",
    },
    {
      icon: GraduationCap,
      title: "Educators & Trainers",
      description: "Course videos, lectures, e-learning content simplified.",
    },
    {
      icon: Briefcase,
      title: "Agencies & Startups",
      description: "Reliable backend editing teams to scale content output.",
    },
  ];

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Who <span className="bg-gradient-primary bg-clip-text text-transparent">We Work With</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {clients.map((client) => (
            <Card key={client.title} className="p-6 hover:border-primary/50 transition-all hover:scale-105 duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <client.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{client.title}</h3>
                  <p className="text-muted-foreground">{client.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
