import { Card } from "@/components/ui/card";
import { TrendingUp, Clock, Users } from "lucide-react";

const ImpactNumbers = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "+320%",
      label: "Subscriber Growth Avg.",
    },
    {
      icon: Clock,
      value: "1.2B",
      label: "Watch Minutes Tracked",
    },
    {
      icon: Users,
      value: "100+",
      label: "Active Managed Channels",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Impact <span className="bg-gradient-primary bg-clip-text text-transparent">in Numbers</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
      </div>
    </section>
  );
};

export default ImpactNumbers;
