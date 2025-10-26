import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Download } from "lucide-react";

const ChecklistSection = () => {
  const checklist = [
    "Upload high-quality clips",
    "Share music preferences or trends",
    "Mention CTAs (Follow, Shop, Subscribe)",
    "Provide logo, brand fonts, tagline",
    "Add timestamps for must-keep moments",
  ];

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Short-Form Editing</span> Checklist
          </h2>
          
          <Card className="p-8 max-w-3xl mx-auto">
            <ul className="space-y-4 mb-8">
              {checklist.map((item) => (
                <li key={item} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="text-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                <Download className="mr-2 h-5 w-5" />
                Download Prep Checklist (PDF)
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChecklistSection;
