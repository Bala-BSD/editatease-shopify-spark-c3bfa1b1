import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PricingPackages = () => {
  const plans = [
    {
      name: "Starter",
      idealFor: "Single edits, podcasts, social content",
      priceRange: "₹3,499–₹6,999/video",
    },
    {
      name: "Growth",
      idealFor: "Monthly content calendars, creators",
      priceRange: "₹10,000–₹25,000/mo",
      popular: true,
    },
    {
      name: "Enterprise",
      idealFor: "Brand retainer, channel management",
      priceRange: "Custom Quote",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Video Editing <span className="bg-gradient-primary bg-clip-text text-transparent">Packages & Pricing</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
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
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Ideal For:</p>
                <p className="text-foreground mb-6">{plan.idealFor}</p>
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
                  {plan.priceRange}
                </div>
                <Link to="/pricing">
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-primary hover:shadow-glow' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/pricing">
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              View Detailed Pricing
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;
