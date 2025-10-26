import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Simple",
      price: "$299",
      period: "per video",
      description: "Perfect for straightforward edits and quick turnarounds",
      features: [
        "Up to 20 minutes raw footage",
        "Basic transitions & effects",
        "Music & sound effects",
        "Color correction",
        "48-hour turnaround",
        "1 revision round",
        "HD export (1080p)",
      ],
    },
    {
      name: "Complex",
      price: "$999",
      period: "per video",
      description: "Advanced editing for premium, polished content",
      features: [
        "Up to 60 minutes raw footage",
        "Advanced effects & animations",
        "Professional color grading",
        "Motion graphics & titles",
        "48-hour turnaround",
        "2 revision rounds",
        "4K export available",
        "Custom thumbnails",
      ],
      popular: true,
    },
    {
      name: "Ultimate",
      price: "$1,999",
      period: "per month",
      description: "Unlimited editing for serious content creators",
      features: [
        "Unlimited video requests",
        "Priority 24-hour turnaround",
        "Unlimited revisions",
        "Dedicated senior editor",
        "Channel management included",
        "Video SEO optimization",
        "Keyword research reports",
        "Thumbnail design included",
        "Strategy consultation calls",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Simple, </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Transparent Pricing
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              No hidden fees, no surprises. Choose the plan that fits your content creation needs and budget.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative flex flex-col ${
                  plan.popular
                    ? "border-primary shadow-glow md:scale-105"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-gradient-primary text-sm font-semibold text-primary-foreground whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="text-5xl font-bold text-foreground mb-2">
                    {plan.price}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {plan.period}
                  </span>
                  <p className="text-muted-foreground mt-4">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <ul className="space-y-3 mb-8 flex-grow">
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
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Frequently Asked <span className="bg-gradient-primary bg-clip-text text-transparent">Questions</span>
            </h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">What's your turnaround time?</h3>
                  <p className="text-muted-foreground">
                    We guarantee a 48-hour turnaround for Simple and Complex plans. Ultimate plan members get priority 24-hour turnaround.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">How many revisions do I get?</h3>
                  <p className="text-muted-foreground">
                    Simple includes 1 revision round, Complex includes 2 rounds, and Ultimate members get unlimited revisions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Can I upgrade or downgrade my plan?</h3>
                  <p className="text-muted-foreground">
                    Yes! You can switch between plans at any time. Changes take effect on your next billing cycle.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">What file formats do you accept?</h3>
                  <p className="text-muted-foreground">
                    We accept all major video formats including MP4, MOV, AVI, and more. We'll work with whatever format you have.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
