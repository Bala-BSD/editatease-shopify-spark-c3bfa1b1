import { Card, CardContent } from "@/components/ui/card";
import { Building2, Shirt, Home, GraduationCap, Briefcase, Hotel } from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    { icon: Building2, name: "Tech & SaaS", color: "from-blue-500 to-cyan-500" },
    { icon: Shirt, name: "Fashion & Retail", color: "from-pink-500 to-rose-500" },
    { icon: Home, name: "Real Estate", color: "from-green-500 to-emerald-500" },
    { icon: GraduationCap, name: "Education", color: "from-yellow-500 to-orange-500" },
    { icon: Briefcase, name: "Corporate", color: "from-purple-500 to-indigo-500" },
    { icon: Hotel, name: "Hospitality", color: "from-red-500 to-pink-500" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Industries{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                We Edit For
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Versatile expertise across diverse sectors and verticals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Card 
                key={industry.name}
                className="group hover:border-primary/50 transition-all hover:shadow-glow cursor-pointer overflow-hidden"
              >
                <CardContent className="p-8 text-center space-y-4 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <div className="relative">
                    <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <industry.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mt-4">{industry.name}</h3>
                    <div className="mt-2 text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                      Hover to preview
                    </div>
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

export default IndustriesSection;
