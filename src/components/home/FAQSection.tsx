import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What's your typical turnaround time?",
      answer: "We guarantee 48-hour turnaround for Simple and Complex plans. Ultimate plan members receive priority 24-hour turnaround. Rush delivery is available for an additional fee.",
    },
    {
      question: "How many revisions are included?",
      answer: "Simple plan includes 1 revision round, Complex includes 2 rounds, and Ultimate members get unlimited revisions. Each revision round covers all feedback provided.",
    },
    {
      question: "What video formats do you work with?",
      answer: "We accept all major video formats including MP4, MOV, AVI, MXF, ProRes, and more. We can also work with footage from any camera brand or smartphone.",
    },
    {
      question: "Do you handle audio editing too?",
      answer: "Yes! We include professional audio editing in all packages: noise reduction, music sync, sound effects, voiceover mixing, and more.",
    },
    {
      question: "Can you match my brand's style guide?",
      answer: "Absolutely. We'll review your brand guidelines and create a custom editing template that matches your colors, fonts, transitions, and overall aesthetic.",
    },
    {
      question: "How do I share footage with you?",
      answer: "We use secure cloud transfer services like Frame.io, Google Drive, Dropbox, or WeTransfer. We'll provide a dedicated upload link for your project.",
    },
    {
      question: "What if I need edits after final delivery?",
      answer: "Small tweaks within 7 days are free. Major changes after final approval can be handled as a new project or revision add-on.",
    },
    {
      question: "Do you sign NDAs?",
      answer: "Yes, we're happy to sign NDAs and confidentiality agreements before starting any project. Your content security is our priority.",
    },
    {
      question: "Can I cancel my Ultimate plan anytime?",
      answer: "Yes, Ultimate subscriptions are month-to-month with no long-term commitment. Cancel anytime with 30 days notice.",
    },
    {
      question: "What's included in color grading?",
      answer: "Professional color grading includes color correction, cinematic LUTs, mood enhancement, skin tone balancing, and consistency across all clips using DaVinci Resolve.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Video Editing{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                FAQs
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Got questions? We've got answers.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 hover:border-primary/50 transition-all"
              >
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
