import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Work = () => {
  const portfolioItems = [
    {
      title: "Tech Startup Launch Video",
      category: "Corporate",
      type: "Long-Form",
      description: "Product launch video with motion graphics and professional color grading.",
    },
    {
      title: "Travel Vlog Series",
      category: "YouTube",
      type: "Long-Form",
      description: "10-episode travel series with cinematic color correction and dynamic pacing.",
    },
    {
      title: "Real Estate Property Tour",
      category: "Real Estate",
      type: "Cinematic",
      description: "Luxury property showcase with drone footage and smooth transitions.",
    },
    {
      title: "Social Media Ad Campaign",
      category: "Marketing",
      type: "Short-Form",
      description: "15-second ads optimized for Instagram and TikTok with viral potential.",
    },
    {
      title: "Podcast Highlights Package",
      category: "Podcast",
      type: "Short-Form",
      description: "6 viral-ready podcast clips with animated subtitles and graphics.",
    },
    {
      title: "Event Recap Video",
      category: "Event",
      type: "Trailer",
      description: "High-energy conference recap with music sync and attendee testimonials.",
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
                Our Work
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Trusted by creators, brands, and businesses worldwide. See the quality and creativity we bring to every project.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="group hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
                <CardContent className="p-6 space-y-4">
                  {/* Placeholder for video thumbnail */}
                  <div className="w-full h-48 bg-gradient-subtle rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="text-muted-foreground">Video Preview</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="secondary">{item.category}</Badge>
                      <Badge variant="outline">{item.type}</Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-subtle border-primary/20 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Create Something <span className="bg-gradient-primary bg-clip-text text-transparent">Amazing</span>?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Let's bring your vision to life with professional video editing that stands out.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Work;
