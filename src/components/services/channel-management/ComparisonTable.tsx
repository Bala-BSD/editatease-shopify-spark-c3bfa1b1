import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ComparisonTable = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How Channel Management <span className="bg-gradient-primary bg-clip-text text-transparent">Differs from Editing Alone</span>
          </h2>
        </div>
        
        <Card className="max-w-5xl mx-auto overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-gradient-primary/10">
                <TableHead className="font-bold">Aspect</TableHead>
                <TableHead className="font-bold">Editing Service</TableHead>
                <TableHead className="font-bold">Full Channel Management</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-semibold">Focus</TableCell>
                <TableCell>Individual videos</TableCell>
                <TableCell>Long-term growth & consistency</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Responsibility</TableCell>
                <TableCell>Cut & deliver</TableCell>
                <TableCell>Upload, optimize, analyze</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Output</TableCell>
                <TableCell>Single deliverable</TableCell>
                <TableCell>Holistic channel ecosystem</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Team</TableCell>
                <TableCell>Editor only</TableCell>
                <TableCell>Strategist + SEO + Design + Manager</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Success Metric</TableCell>
                <TableCell>Delivery</TableCell>
                <TableCell>Subscribers & Revenue Growth</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
        
        <div className="text-center mt-12">
          <Link to="/services/long-form-video-editing">
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              Compare Editing Plans
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
