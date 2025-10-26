import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const PricingPreview = () => {
  const plans = [
    {
      name: "Simple",
      price: "$299",
      period: "per video",
      description: "Perfect for straightforward edits",
      features: [
        "Up to 20 min raw footage",
        "Basic transitions & effects",
        "Music & sound effects",
        "48-hour turnaround",
        "1 revision round",
      ],
    },
    {
      name: "Complex",
      price: "$999",
      period: "per video",
      description: "Advanced editing for premium content",
      features: [
        "Up to 60 min raw footage",
        "Advanced effects & animations",
        "Color grading included",
        "48-hour turnaround",
        "2 revision rounds",
        "Custom motion graphics",
      ],
      popular: true,
    },
    {
      name: "Ultimate",
      price: "$1,999",
      period: "per month",
      description: "Unlimited editing for serious creators",
      features: [
        "Unlimited video requests",
        "Priority 24-hour turnaround",
        "Unlimited revisions",
        "Dedicated editor",
        "Channel management",
        "Video SEO optimization",
      ],
    },
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Simple, </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            No hidden fees, no surprises. Choose the plan that fits your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.popular
                  ? "border-primary shadow-glow scale-105"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-gradient-primary text-sm font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-foreground mb-2">
                  {plan.price}
                  <span className="text-lg text-muted-foreground font-normal">
                    /{plan.period}
                  </span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
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
                    variant={plan.popular ? "default" : "secondary"}
                  >
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/pricing">
            <Button size="lg" variant="ghost" className="group">
              View Detailed Pricing
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
