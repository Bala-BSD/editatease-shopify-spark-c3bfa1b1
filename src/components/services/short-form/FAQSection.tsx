import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What counts as short-form content?",
      answer: "Anything 15s–90s optimized for Reels, Shorts, TikTok.",
    },
    {
      question: "Can you match trending music and captions?",
      answer: "Yes. We access licensed libraries and trend templates.",
    },
    {
      question: "What's your average turnaround time?",
      answer: "2–4 days depending on footage length and complexity.",
    },
    {
      question: "Can you add CTAs or branded overlays?",
      answer: "Absolutely. We integrate CTAs and motion graphics per platform.",
    },
    {
      question: "Do you offer bulk editing plans?",
      answer: "Yes. Retainers with 10–15 videos/month at better rates.",
    },
    {
      question: "What platforms do you optimize for?",
      answer: "Instagram Reels, YouTube Shorts, TikTok, Facebook Reels, and LinkedIn video.",
    },
    {
      question: "Do you provide captions?",
      answer: "Yes, we provide auto-generated captions with custom styling to match your brand.",
    },
    {
      question: "Can you work with smartphone footage?",
      answer: "Absolutely. We can enhance and stabilize mobile footage to create professional-looking content.",
    },
    {
      question: "What's included in revisions?",
      answer: "You can request changes to cuts, timing, text, colors, and music. Major conceptual changes may require additional fees.",
    },
    {
      question: "Do you sign NDAs?",
      answer: "Yes, we're happy to sign NDAs for confidential or pre-launch content.",
    },
  ];

  return (
    <section id="faqs" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-primary bg-clip-text text-transparent">FAQs</span>
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

export default FAQSection;
