import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, TrendingUp, Code } from "lucide-react";

const Academy = () => {
  const categories = [
    {
      icon: Video,
      title: "Editing Tutorials",
      description: "Master Premiere Pro, DaVinci Resolve, and advanced editing techniques.",
      articles: ["Premiere Pro Basics", "Color Grading Theory", "Audio Post-Production"],
    },
    {
      icon: TrendingUp,
      title: "Creator Strategy",
      description: "Learn how to grow your channel and monetize your content effectively.",
      articles: ["YouTube Monetization Guide", "Video SEO Best Practices", "Content Strategy"],
    },
    {
      icon: Code,
      title: "Technical Guides",
      description: "Deep dives into video formats, codecs, and technical specifications.",
      articles: ["Video Formats Explained", "Codec Comparison", "Export Settings Guide"],
    },
    {
      icon: BookOpen,
      title: "Industry Insights",
      description: "Stay updated with the latest trends and best practices in video editing.",
      articles: ["Creator Burnout Study", "Industry Trends 2024", "Workflow Optimization"],
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
                Knowledge Hub
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Learn video editing, content strategy, and industry best practices from the experts.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {categories.map((category) => (
              <Card key={category.title} className="hover:border-primary/50 transition-all">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                  <p className="text-muted-foreground">{category.description}</p>
                  <div className="space-y-2 pt-2">
                    <div className="text-sm font-semibold text-foreground">Popular Articles:</div>
                    <ul className="space-y-1">
                      {category.articles.map((article) => (
                        <li key={article} className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                          • {article}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="secondary" className="w-full mt-4">
                    Explore {category.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Articles */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Articles</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Complete Premiere Pro Guide",
                  category: "Tutorial",
                  readTime: "15 min read",
                },
                {
                  title: "YouTube Monetization in 2024",
                  category: "Strategy",
                  readTime: "10 min read",
                },
                {
                  title: "Understanding Video Codecs",
                  category: "Technical",
                  readTime: "12 min read",
                },
              ].map((article) => (
                <Card key={article.title} className="hover:border-primary/50 transition-all cursor-pointer group">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-full h-40 bg-gradient-subtle rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                      <BookOpen className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs text-primary font-semibold">{article.category}</div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <div className="text-sm text-muted-foreground">{article.readTime}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Glossary CTA */}
          <Card className="bg-gradient-subtle border-primary/20 mt-16">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Video Editing <span className="bg-gradient-primary bg-clip-text text-transparent">Glossary</span>
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Browse our comprehensive glossary of video editing terms, techniques, and industry jargon.
              </p>
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                Explore Glossary
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Academy;
