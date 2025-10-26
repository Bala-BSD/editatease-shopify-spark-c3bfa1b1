import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ShortFormHero from "@/components/services/short-form/ShortFormHero";
import WhatIsShortForm from "@/components/services/short-form/WhatIsShortForm";
import ShortFormServices from "@/components/services/short-form/ShortFormServices";
import WhyChooseUs from "@/components/services/short-form/WhyChooseUs";
import ProcessSection from "@/components/services/short-form/ProcessSection";
import IndustriesSection from "@/components/services/short-form/IndustriesSection";
import WorkInNumbers from "@/components/services/short-form/WorkInNumbers";
import PortfolioSection from "@/components/services/short-form/PortfolioSection";
import ShortFormPricing from "@/components/services/short-form/ShortFormPricing";
import ToolsSection from "@/components/services/short-form/ToolsSection";
import ComparisonTable from "@/components/services/short-form/ComparisonTable";
import ChecklistSection from "@/components/services/short-form/ChecklistSection";
import CaseStudies from "@/components/services/short-form/CaseStudies";
import FAQSection from "@/components/services/short-form/FAQSection";
import CTASection from "@/components/services/short-form/CTASection";
import HelpChoosing from "@/components/services/short-form/HelpChoosing";
import { Helmet } from "react-helmet";

const ShortFormVideoEditing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Short-Form Video Editing Services | Edit at Ease – Reels, Shorts & TikTok Experts</title>
        <meta 
          name="description" 
          content="Get professional short-form video editing for Reels, Shorts, and TikToks. Fast, viral-ready edits with transparent pricing and free trial." 
        />
        <meta name="keywords" content="short-form video editing services, reels editing agency, tiktok editing service, youtube shorts editor, social media video editing, short video editing packages" />
        <link rel="canonical" href="https://editatease.com/services/short-form-video-editing" />
      </Helmet>
      
      <Navigation />
      
      <main>
        <ShortFormHero />
        <WhatIsShortForm />
        <ShortFormServices />
        <WhyChooseUs />
        <ProcessSection />
        <IndustriesSection />
        <WorkInNumbers />
        <PortfolioSection />
        <ShortFormPricing />
        <ToolsSection />
        <ComparisonTable />
        <ChecklistSection />
        <CaseStudies />
        <FAQSection />
        <CTASection />
        <HelpChoosing />
      </main>
      
      <Footer />
    </div>
  );
};

export default ShortFormVideoEditing;
