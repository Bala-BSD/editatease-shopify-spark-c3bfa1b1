import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Video, Zap, BarChart3 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CoreSolutions = () => {
  const services = [
    {
      icon: Video,
      service: "Long-Form Editing",
      covers: "Podcasts, webinars, documentaries, corporate films. Storytelling, pacing, and continuity.",
      link: "/services/long-form-video-editing",
    },
    {
      icon: Zap,
      service: "Short-Form Editing",
      covers: "Reels, Shorts, TikToks, snippets for performance marketing.",
      link: "/services/short-form-video-editing",
    },
    {
      icon: BarChart3,
      service: "Channel Management",
      covers: "Uploads, SEO, thumbnails, analytics, and strategy.",
      link: "/services/channel-management",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Core <span className="bg-gradient-primary bg-clip-text text-transparent">Video Editing Solutions</span>
          </h2>
        </div>
        
        <Card className="max-w-6xl mx-auto overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-gradient-primary/10">
                <TableHead className="font-bold">Service</TableHead>
                <TableHead className="font-bold">What It Covers</TableHead>
                <TableHead className="font-bold text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service) => (
                <TableRow key={service.service}>
                  <TableCell className="font-semibold">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <service.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      {service.service}
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{service.covers}</TableCell>
                  <TableCell className="text-center">
                    <Link to={service.link}>
                      <Button variant="outline" size="sm" className="border-primary/50 hover:bg-primary/10">
                        Explore
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </section>
  );
};

export default CoreSolutions;
