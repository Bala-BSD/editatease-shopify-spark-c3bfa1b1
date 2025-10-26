import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import ServicesTable from "@/components/home/ServicesTable";
import WhyProfessional from "@/components/home/WhyProfessional";
import TrendsSection from "@/components/home/TrendsSection";
import ProcessSection from "@/components/home/ProcessSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import PricingPreview from "@/components/home/PricingPreview";
import PortfolioSection from "@/components/home/PortfolioSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ToolsSection from "@/components/home/ToolsSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import ChecklistSection from "@/components/home/ChecklistSection";
import FAQSection from "@/components/home/FAQSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import DeliverySection from "@/components/home/DeliverySection";
import AwardsSection from "@/components/home/AwardsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <Hero />
        <ServicesPreview />
        <WhatWeDoSection />
        <ServicesTable />
        <WhyProfessional />
        <TrendsSection />
        <ProcessSection />
        <IndustriesSection />
        <PricingPreview />
        <PortfolioSection />
        <TestimonialsSection />
        <ToolsSection />
        <ComparisonSection />
        <ChecklistSection />
        <FAQSection />
        <CaseStudiesSection />
        <WhyChooseUsSection />
        <DeliverySection />
        <AwardsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
