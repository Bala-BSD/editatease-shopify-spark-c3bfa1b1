import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQsSection = () => {
  const faqs = [
    {
      question: "What's included in your editing services?",
      answer: "Complete editing — cuts, transitions, captions, sound design, and color grading.",
    },
    {
      question: "How fast is your delivery?",
      answer: "2–4 days for short edits; 5–10 days for long-form projects.",
    },
    {
      question: "Can you maintain my brand identity?",
      answer: "Yes — we follow brand kits and create visual consistency across videos.",
    },
    {
      question: "Do you offer revisions?",
      answer: "Two structured feedback rounds are included.",
    },
    {
      question: "Do you support retainer-based work?",
      answer: "Absolutely. Monthly retainers unlock discounted pricing and faster turnaround.",
    },
  ];

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            FAQs about <span className="bg-gradient-primary bg-clip-text text-transparent">Video Editing Services</span>
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
