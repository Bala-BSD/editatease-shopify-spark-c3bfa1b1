import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Video, Zap, BarChart3, Palette, Sparkles, Building } from "lucide-react";

const ServicesPreview = () => {
  const services = [
    {
      icon: Video,
      title: "Long-Form Video Editing",
      description: "Comprehensive YouTube video editing services for videos up to 60 minutes of raw footage.",
      link: "/services/long-form-video-editing",
    },
    {
      icon: Zap,
      title: "Short-Form Video Editing",
      description: "Viral-ready vertical videos for TikTok, YouTube Shorts, and Instagram Reels.",
      link: "/services/short-form-video-editing",
    },
    {
      icon: BarChart3,
      title: "Channel Management",
      description: "Strategy, SEO optimization, titles, descriptions, tags, and keyword reports.",
      link: "/services/channel-management",
    },
    {
      icon: Palette,
      title: "Color Grading Services",
      description: "Professional color grading using DaVinci Resolve and Adobe Premiere Pro.",
      link: "/verticals/color-grading-services",
    },
    {
      icon: Sparkles,
      title: "VFX & Motion Graphics",
      description: "Visual effects and dynamic motion graphics with animated text callouts.",
      link: "/verticals/vfx-motion-graphics",
    },
    {
      icon: Building,
      title: "Corporate Video Editing",
      description: "Professional editing for corporate training, marketing, and branding content.",
      link: "/verticals/corporate-video-editing",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              All-in-One Video Editing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From concept to final cut, we handle every aspect of video production with expertise and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <Link key={service.title} to={service.link}>
              <Card className="h-full hover:border-primary/50 transition-all duration-300 hover:shadow-glow group">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button size="lg" variant="secondary" className="group">
              View All Services
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
