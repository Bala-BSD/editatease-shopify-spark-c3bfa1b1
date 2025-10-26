import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const ComparisonSection = () => {
  const comparisons = [
    { criteria: "Consistent Quality", freelancer: false, agency: true },
    { criteria: "Dedicated Team", freelancer: false, agency: true },
    { criteria: "Scalability", freelancer: false, agency: true },
    { criteria: "Backup Resources", freelancer: false, agency: true },
    { criteria: "Project Management", freelancer: false, agency: true },
    { criteria: "Guaranteed Turnaround", freelancer: false, agency: true },
    { criteria: "Multiple Revisions", freelancer: false, agency: true },
    { criteria: "Industry Expertise", freelancer: false, agency: true },
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Video Editing Agency
              </span>{" "}
              vs Freelancer
            </h2>
            <p className="text-xl text-muted-foreground">
              Understanding the difference in reliability, quality, and scalability
            </p>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-primary">
                    <tr>
                      <th className="p-4 text-left text-primary-foreground font-semibold">
                        Criteria
                      </th>
                      <th className="p-4 text-center text-primary-foreground font-semibold">
                        Freelancer
                      </th>
                      <th className="p-4 text-center text-primary-foreground font-semibold">
                        Agency
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisons.map((row, index) => (
                      <tr
                        key={row.criteria}
                        className={index % 2 === 0 ? "bg-background" : "bg-card"}
                      >
                        <td className="p-4 font-medium">{row.criteria}</td>
                        <td className="p-4 text-center">
                          {row.freelancer ? (
                            <Check className="h-5 w-5 text-primary mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-muted-foreground mx-auto" />
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {row.agency ? (
                            <Check className="h-5 w-5 text-primary mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-muted-foreground mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 p-6 bg-secondary rounded-lg">
            <p className="text-center text-muted-foreground">
              <strong>Bottom Line:</strong> While freelancers can be cost-effective for simple
              projects, agencies provide the reliability, scalability, and professional
              infrastructure needed for consistent, high-quality results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
