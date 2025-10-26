import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const ChannelPricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹19,999",
      period: "/month",
      features: [
        "Upload management for up to 4 videos / week",
        "Basic SEO and analytics report",
      ],
    },
    {
      name: "Growth",
      price: "₹39,999",
      period: "/month",
      popular: true,
      features: [
        "Complete YouTube management (8–12 videos)",
        "Custom thumbnails, content calendar",
        "Bi-weekly reports",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Plan",
      features: [
        "Dedicated channel manager + editor team",
        "Paid campaign integration",
        "Brand partnership coordination",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Pricing Packages</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative ${plan.popular ? 'border-primary shadow-glow scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/pricing">
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-primary hover:shadow-glow' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/pricing">
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              Get Custom Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ChannelPricing;
