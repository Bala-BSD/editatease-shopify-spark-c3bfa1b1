import { Card } from "@/components/ui/card";
import { TrendingUp, Video, Users } from "lucide-react";

const WorkInNumbers = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "+300%",
      label: "average engagement boost",
    },
    {
      icon: Video,
      value: "2500+",
      label: "short-form videos edited",
    },
    {
      icon: Users,
      value: "80+",
      label: "returning creator clients",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Work <span className="bg-gradient-primary bg-clip-text text-transparent">in Numbers</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-8 text-center hover:border-primary/50 transition-all hover:scale-105 duration-300">
              <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>
        
        <Card className="p-8 bg-gradient-subtle border-primary/20 max-w-3xl mx-auto">
          <p className="text-center text-lg text-foreground font-medium">
            Every edit we deliver is designed to hold attention, not just grab it.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default WorkInNumbers;
