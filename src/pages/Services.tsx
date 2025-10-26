import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Video, Zap, BarChart3, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const coreServices = [
    {
      icon: Video,
      title: "Long-Form Video Editing",
      description: "Comprehensive YouTube video editing services for videos up to 60 minutes of raw footage. Perfect for in-depth content, tutorials, and vlogs.",
      link: "/services/long-form-video-editing",
      features: ["Up to 60 min footage", "Advanced transitions", "Music & SFX", "Color correction"],
    },
    {
      icon: Zap,
      title: "Short-Form Video Editing",
      description: "Viral-ready vertical videos optimized for TikTok, YouTube Shorts, and Instagram Reels. Capture attention in the first 3 seconds.",
      link: "/services/short-form-video-editing",
      features: ["15-60 second videos", "Platform optimization", "Trending effects", "Fast delivery"],
    },
    {
      icon: BarChart3,
      title: "Channel Management",
      description: "Complete YouTube strategy including SEO optimization, titles, descriptions, tags, and detailed keyword research reports.",
      link: "/services/channel-management",
      features: ["Video SEO", "Keyword research", "Thumbnail strategy", "Analytics reports"],
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
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Video Editing Services
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Professional editing solutions tailored to your content needs. From long-form YouTube videos to viral short-form content.
            </p>
          </div>

          {/* Core Services */}
          <div className="space-y-8 mb-16">
            {coreServices.map((service, index) => (
              <Card key={service.title} className="hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className={index % 2 === 1 ? "md:order-2" : ""}>
                      <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                        <service.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-muted-foreground text-lg mb-6">{service.description}</p>
                      <Link to={service.link}>
                        <Button className="bg-gradient-primary hover:shadow-glow">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                    <div className={index % 2 === 1 ? "md:order-1" : ""}>
                      <div className="bg-card border border-border rounded-lg p-6">
                        <h3 className="font-semibold mb-4">Key Features:</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center text-muted-foreground">
                              <Clock className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* How It Works */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-subtle border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-center mb-8">
                  Our <span className="bg-gradient-primary bg-clip-text text-transparent">3-Step Process</span>
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center mx-auto mb-4">
                      1
                    </div>
                    <h3 className="font-semibold text-xl mb-2">Buy</h3>
                    <p className="text-muted-foreground">Choose your service and submit your project details</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center mx-auto mb-4">
                      2
                    </div>
                    <h3 className="font-semibold text-xl mb-2">Brief</h3>
                    <p className="text-muted-foreground">Provide footage and specific editing requirements</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center mx-auto mb-4">
                      3
                    </div>
                    <h3 className="font-semibold text-xl mb-2">Review</h3>
                    <p className="text-muted-foreground">Receive your edit via Frame.io and request revisions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8">Let's bring your vision to life with professional video editing.</p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
