import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What does full channel management include?",
      answer: "Everything post-production: uploading, SEO, thumbnails, scheduling, analytics, and optimization.",
    },
    {
      question: "Do I still own the channel?",
      answer: "Absolutely. You retain full ownership; we just manage operations.",
    },
    {
      question: "Can you help with monetization setup?",
      answer: "Yes, we assist with AdSense and sponsorship partnership integration.",
    },
    {
      question: "How soon can we see growth?",
      answer: "Most clients see traction within 6–8 weeks of consistent uploads and optimized titles.",
    },
    {
      question: "Do you offer multi-language channel support?",
      answer: "Yes. We manage regional and bilingual channels globally.",
    },
    {
      question: "What's included in the analytics reports?",
      answer: "CTR analysis, watch time patterns, audience retention graphs, traffic sources, and demographic insights with actionable recommendations.",
    },
    {
      question: "Can you manage multiple channels?",
      answer: "Yes, we offer multi-channel management packages with dedicated coordinators.",
    },
    {
      question: "Do you handle community management?",
      answer: "Yes, we can respond to comments, moderate discussions, and engage with your audience as part of growth plans.",
    },
    {
      question: "What if I want to cancel?",
      answer: "No long-term contracts. You can cancel with 30 days notice, and we'll provide a full handover of all assets and data.",
    },
    {
      question: "Do you sign NDAs for confidential content?",
      answer: "Absolutely. We regularly work with pre-launch content and confidential projects under NDA.",
    },
  ];

  return (
    <section id="faqs" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            FAQs on <span className="bg-gradient-primary bg-clip-text text-transparent">Channel Management</span>
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
