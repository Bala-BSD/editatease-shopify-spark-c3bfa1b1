import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LongFormHero from "@/components/services/long-form/LongFormHero";
import QuickLinks from "@/components/services/long-form/QuickLinks";
import WhatIsLongForm from "@/components/services/long-form/WhatIsLongForm";
import LongFormServices from "@/components/services/long-form/LongFormServices";
import WhyChooseUs from "@/components/services/long-form/WhyChooseUs";
import TrendsSection from "@/components/home/TrendsSection";
import ProcessSection from "@/components/home/ProcessSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import WorkInNumbers from "@/components/services/long-form/WorkInNumbers";
import PortfolioSection from "@/components/home/PortfolioSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ToolsSection from "@/components/home/ToolsSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import ChecklistSection from "@/components/home/ChecklistSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import WhoIsThisFor from "@/components/services/long-form/WhoIsThisFor";
import FAQSection from "@/components/home/FAQSection";
import LongFormPricing from "@/components/services/long-form/LongFormPricing";
import HelpChoosing from "@/components/services/long-form/HelpChoosing";

const LongFormVideoEditing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <LongFormHero />
        <QuickLinks />
        <WhatIsLongForm />
        <LongFormServices />
        <WhyChooseUs />
        <TrendsSection />
        <ProcessSection />
        <IndustriesSection />
        <WorkInNumbers />
        <PortfolioSection />
        <TestimonialsSection />
        <ToolsSection />
        <ComparisonSection />
        <ChecklistSection />
        <CaseStudiesSection />
        <WhoIsThisFor />
        <FAQSection />
        <LongFormPricing />
        <HelpChoosing />
      </main>
      <Footer />
    </div>
  );
};

export default LongFormVideoEditing;
