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
            How Short-Form <span className="bg-gradient-primary bg-clip-text text-transparent">Differs from Long-Form</span>
          </h2>
        </div>
        
        <Card className="max-w-5xl mx-auto overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-gradient-primary/10">
                <TableHead className="font-bold">Aspect</TableHead>
                <TableHead className="font-bold">Short-Form Editing</TableHead>
                <TableHead className="font-bold">Long-Form Editing</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-semibold">Goal</TableCell>
                <TableCell>Quick engagement & conversion</TableCell>
                <TableCell>Storytelling & retention</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Length</TableCell>
                <TableCell>15s–60s</TableCell>
                <TableCell>8–90 mins</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Pacing</TableCell>
                <TableCell>Fast cuts, strong hooks</TableCell>
                <TableCell>Rhythmic, immersive flow</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Output</TableCell>
                <TableCell>Social media & ads</TableCell>
                <TableCell>Podcasts, YouTube, corporate</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Turnaround</TableCell>
                <TableCell>2–4 days</TableCell>
                <TableCell>7–10 days</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
        
        <div className="text-center mt-12">
          <Link to="/services/long-form-video-editing">
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              See Long-Form Editing
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
