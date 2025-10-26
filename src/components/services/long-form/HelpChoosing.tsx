import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle, Mail, Phone } from "lucide-react";

const HelpChoosing = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/50 backdrop-blur border-primary/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Help{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Choosing a Plan?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10">
                Tell us your goals, audience, and timeline—we'll suggest the right approach and a clear calendar.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </a>
                <a href="mailto:hello@editatease.com">
                  <Button size="lg" variant="outline">
                    <Mail className="h-5 w-5 mr-2" />
                    Email Us
                  </Button>
                </a>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    <Phone className="h-5 w-5 mr-2" />
                    Book a Call
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HelpChoosing;
