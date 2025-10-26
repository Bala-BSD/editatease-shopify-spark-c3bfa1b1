import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle, Mail, Phone } from "lucide-react";

const HelpChoosing = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Need Help <span className="bg-gradient-primary bg-clip-text text-transparent">Choosing a Plan?</span>
          </h2>
          
          <p className="text-center text-lg text-muted-foreground mb-12">
            Talk to our channel strategy team and we'll help you find the perfect plan.
          </p>
          
          <Card className="p-8 bg-gradient-subtle border-primary/20">
            <div className="grid md:grid-cols-3 gap-6">
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">WhatsApp Chat</h3>
                <p className="text-sm text-muted-foreground">Instant responses</p>
              </a>
              
              <a 
                href="mailto:hello@editatease.com"
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Email Us</h3>
                <p className="text-sm text-muted-foreground">hello@editatease.com</p>
              </a>
              
              <Link to="/contact" className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Call Us</h3>
                <p className="text-sm text-muted-foreground">1800-123-EDIT</p>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HelpChoosing;
