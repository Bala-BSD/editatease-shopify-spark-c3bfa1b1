import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Download } from "lucide-react";

const DownloadPDF = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <Card className="max-w-3xl mx-auto bg-gradient-subtle border-primary/20">
          <div className="p-12 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mx-auto">
              <BookOpen className="h-10 w-10 text-primary-foreground" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              Download the Complete <span className="bg-gradient-primary bg-clip-text text-transparent">Glossary PDF</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Get our 100+ term glossary in an easy-to-read, printable PDF.
              Perfect for creators, editors, and brands building in-house video teams.
            </p>
            
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
              <Download className="mr-2 h-5 w-5" />
              Download Free Glossary
            </Button>
            
            <p className="text-sm text-muted-foreground">
              No signup required • Instant download
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DownloadPDF;
