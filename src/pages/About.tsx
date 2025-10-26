import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Built by Editors",
      description: "Our team consists of professional video editors with years of experience in the industry.",
    },
    {
      icon: Award,
      title: "Quality First",
      description: "We never compromise on quality. Every frame is meticulously crafted to perfection.",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "We understand deadlines matter. That's why we guarantee 48-hour delivery on all projects.",
    },
    {
      icon: Heart,
      title: "Human Touch",
      description: "No AI shortcuts. Every video is edited by skilled human editors who care about your content.",
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
                About Edit At Ease
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We're a team of passionate video editors dedicated to helping creators and brands tell their stories through high-quality video content.
            </p>
          </div>

          {/* Story Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <Card>
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Edit At Ease was founded by professional video editors who understood the challenges creators face: tight deadlines, inconsistent quality from freelancers, and the overwhelming time commitment required for video editing.
                  </p>
                  <p>
                    We built Edit At Ease to solve these problems. Our mission is simple: provide affordable, fast, and high-quality video editing services that allow creators to focus on what they do best—creating content.
                  </p>
                  <p>
                    Today, we've edited over 50,000 videos for more than 1,000 happy creators and brands worldwide. Every project receives the same level of care and attention, whether it's a simple YouTube video or a complex commercial production.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values Grid */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Core Values</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <Card key={value.title} className="hover:border-primary/50 transition-all">
                  <CardContent className="p-6 space-y-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mx-auto">
                      <value.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <Card className="bg-gradient-subtle border-primary/20">
            <CardContent className="p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    50k+
                  </div>
                  <div className="text-muted-foreground">Videos Edited</div>
                </div>
                <div>
                  <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    1,000+
                  </div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
                <div>
                  <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    48hrs
                  </div>
                  <div className="text-muted-foreground">Average Turnaround</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
