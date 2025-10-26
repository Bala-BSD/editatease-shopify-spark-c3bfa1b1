import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Video, Zap, TrendingUp, Target } from "lucide-react";

const ExploreResources = () => {
  const resources = [
    {
      icon: Video,
      title: "Video Editing Services",
      description: "Professional editing for creators, brands, and agencies.",
      link: "/services",
    },
    {
      icon: Zap,
      title: "Short-Form Video Editing",
      description: "Reels, Shorts, and TikToks that go viral.",
      link: "/services/short-form-video-editing",
    },
    {
      icon: TrendingUp,
      title: "Channel Management",
      description: "Complete YouTube and social channel optimization.",
      link: "/services/channel-management",
    },
    {
      icon: Target,
      title: "Long-Form Video Editing",
      description: "Podcasts, documentaries, and corporate films.",
      link: "/services/long-form-video-editing",
    },
  ];

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Explore More <span className="bg-gradient-primary bg-clip-text text-transparent">Resources</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource) => (
              <Card key={resource.title} className="hover:border-primary/50 transition-all group">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <resource.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">{resource.title}</h3>
                  <p className="text-muted-foreground">{resource.description}</p>
                  <Button asChild variant="secondary" className="w-full">
                    <Link to={resource.link}>Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreResources;
