import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const QuickLinks = () => {
  const links = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Portfolio", href: "/work" },
    { label: "Pricing", href: "#pricing" },
    { label: "Tools", href: "#tools" },
    { label: "Industries", href: "#industries" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <section className="py-8 bg-card border-y border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-2 text-sm">
          <span className="text-muted-foreground font-medium">Jump to:</span>
          <div className="flex flex-wrap gap-4">
            {links.map((link) => (
              link.href.startsWith('#') ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
