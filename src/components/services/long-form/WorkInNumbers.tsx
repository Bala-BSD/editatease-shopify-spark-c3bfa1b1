import { Card, CardContent } from "@/components/ui/card";

const WorkInNumbers = () => {
  const stats = [
    {
      number: "1,500+",
      label: "Long-form videos delivered",
    },
    {
      number: "+48%",
      label: "Average watch-time lift after re-editing",
    },
    {
      number: "100+",
      label: "Active creators & brands retained",
    },
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Our Work in{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Numbers
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {stats.map((stat) => (
              <Card key={stat.label} className="bg-card/50 backdrop-blur border-primary/20">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Results vary by niche, storytelling strength, and upload cadence—but the north star is retention.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkInNumbers;
