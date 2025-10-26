import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const GlossaryFAQs = () => {
  const faqs = [
    {
      question: "What is the difference between color correction and color grading?",
      answer: "Color correction fixes accuracy and ensures proper white balance and exposure. Color grading adds emotion and style by applying creative looks to achieve a specific mood or aesthetic.",
    },
    {
      question: "What's the best format to export my video in?",
      answer: "MP4 (H.264) is best for most platforms like YouTube, Instagram, and social media. Use ProRes for high-end production and archival purposes.",
    },
    {
      question: "What's the ideal frame rate for YouTube?",
      answer: "24fps for cinematic content, 30fps for standard videos, and 60fps for gaming or high-motion content.",
    },
    {
      question: "What's a proxy file?",
      answer: "A proxy file is a low-resolution copy of your original footage used for smoother editing performance, especially with 4K or high-resolution videos.",
    },
    {
      question: "What's the difference between raw footage and final render?",
      answer: "Raw footage is the unprocessed video straight from the camera. A final render is the finished export after all editing, effects, color grading, and audio mixing are complete.",
    },
    {
      question: "What is B-roll and why is it important?",
      answer: "B-roll is supplementary footage that supports the main narrative (A-roll). It adds visual interest, provides context, covers cuts, and helps maintain viewer engagement.",
    },
    {
      question: "How do I choose the right aspect ratio?",
      answer: "Use 16:9 for YouTube and horizontal videos, 9:16 for Instagram Reels, TikTok, and YouTube Shorts, 1:1 for Instagram feed posts, and 4:5 for Instagram feed optimization.",
    },
    {
      question: "What is the difference between a cut and a transition?",
      answer: "A cut is an instant change from one shot to another with no effect. A transition uses effects like dissolves, wipes, or fades to smoothly move between shots.",
    },
  ];

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            FAQs on <span className="bg-gradient-primary bg-clip-text text-transparent">Video Editing Basics</span>
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

export default GlossaryFAQs;
