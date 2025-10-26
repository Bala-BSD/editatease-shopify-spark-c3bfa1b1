import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const LongFormPricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹6,999",
      period: "/video",
      features: [
        "Up to 15 minutes",
        "Clean cuts, basic titles",
        "Light color & audio polish",
        "1 round of revisions",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "₹11,999",
      period: "/video",
      features: [
        "Up to 45 minutes",
        "Motion graphics, full color grade",
        "Sound design",
        "2 rounds of revisions",
        "Captions + chapter markers",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "60–90 minutes",
        "Series packages, multi-camera",
        "Dedicated editor + PM",
        "Thumbnails, social teasers",
        "Priority turnaround",
        "Brand edit bible",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Our{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Pricing Packages
            </span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16">
            Transparent, scale-friendly pricing for long-form video editing services.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative ${
                  plan.popular ? "border-primary shadow-glow" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-primary">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-primary hover:shadow-glow"
                          : ""
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.name === "Enterprise" ? "Get Custom Quote" : "Get Started"}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-4">
            <Link to="/pricing">
              <Button size="lg" variant="outline">
                See Detailed Pricing
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">
              Prices are indicative; final quotes depend on footage volume, complexity, and timeline.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LongFormPricing;
