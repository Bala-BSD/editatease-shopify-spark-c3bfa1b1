import { Card, CardContent } from "@/components/ui/card";

const EssentialTools = () => {
  const industryStandards = [
    "Adobe Premiere Pro",
    "DaVinci Resolve",
    "Final Cut Pro",
    "Avid Media Composer",
  ];

  const creatorTools = [
    "CapCut Pro",
    "Descript",
    "Canva Video",
    "Runway ML",
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Essential <span className="bg-gradient-primary bg-clip-text text-transparent">Tools and Software</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Industry Standards</h3>
              <div className="grid grid-cols-2 gap-4">
                {industryStandards.map((tool) => (
                  <Card
                    key={tool}
                    className="hover:border-primary/50 transition-all hover:scale-105 duration-300 cursor-pointer"
                  >
                    <CardContent className="p-6 text-center">
                      <p className="font-semibold">{tool}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Creator Tools</h3>
              <div className="grid grid-cols-2 gap-4">
                {creatorTools.map((tool) => (
                  <Card
                    key={tool}
                    className="hover:border-primary/50 transition-all hover:scale-105 duration-300 cursor-pointer"
                  >
                    <CardContent className="p-6 text-center">
                      <p className="font-semibold">{tool}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EssentialTools;
