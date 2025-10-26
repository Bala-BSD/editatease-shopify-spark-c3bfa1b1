import { Card } from "@/components/ui/card";
import { Laptop, Dumbbell, GraduationCap, Home, Podcast, ShoppingCart } from "lucide-react";

const IndustriesServed = () => {
  const industries = [
    { icon: Laptop, name: "Tech & SaaS" },
    { icon: Dumbbell, name: "Fitness & Lifestyle" },
    { icon: GraduationCap, name: "Education & E-learning" },
    { icon: Home, name: "Real Estate" },
    { icon: Podcast, name: "Podcast & Media" },
    { icon: ShoppingCart, name: "D2C & Ecommerce" },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Industries</span> We Serve
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {industries.map((industry) => (
            <Card key={industry.name} className="p-6 hover:border-primary/50 transition-all hover:scale-105 duration-300 text-center">
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <industry.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-semibold">{industry.name}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
