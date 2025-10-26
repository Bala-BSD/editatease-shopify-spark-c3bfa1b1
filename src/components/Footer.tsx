import { Link } from "react-router-dom";
import { Youtube, Instagram, Linkedin, Facebook, Twitter, Mail, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Long-Form Video Editing", path: "/services/long-form-video-editing" },
        { name: "Short-Form Video Editing", path: "/services/short-form-video-editing" },
        { name: "Channel Management", path: "/services/channel-management" },
        { name: "Video Editing Process", path: "/how-it-works" },
      ],
    },
    {
      title: "Verticals",
      links: [
        { name: "Real Estate Editing", path: "/verticals/real-estate-editing" },
        { name: "Color Grading Services", path: "/verticals/color-grading-services" },
        { name: "Corporate Video Editing", path: "/verticals/corporate-video-editing" },
        { name: "VFX & Motion Graphics", path: "/verticals/vfx-motion-graphics" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Work", path: "/work" },
        { name: "Pricing", path: "/pricing" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Academy", path: "/academy" },
        { name: "FAQs", path: "/faqs" },
        { name: "Testimonials", path: "/testimonials" },
        { name: "Careers", path: "/careers" },
      ],
    },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Edit At Ease
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Edit at Ease is a full-service video editing agency that helps creators, brands, and businesses craft stories that connect.
              From cinematic long-form documentaries to short-form Reels, YouTube Shorts, podcasts, and marketing campaigns, our editors combine storytelling, design, and AI-powered precision to deliver results.
              We manage every step—editing, color grading, sound design, and channel optimization—so your content performs on every platform.
              Partner with a creative-first video editing agency that understands both speed and substance.
            </p>
            
            <div className="flex gap-3 mt-6">
              <a
                href="https://youtube.com/@editatease"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all group"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://instagram.com/editatease"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all group"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://linkedin.com/company/editatease"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://facebook.com/editatease"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all group"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://twitter.com/editatease"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all group"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:hello@editatease.com"
                className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all group"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="tel:+911800123EDIT"
                className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all group"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://wa.me/911800123EDIT"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all group"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Edit At Ease. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              to="/terms-and-conditions"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/privacy-policy"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
