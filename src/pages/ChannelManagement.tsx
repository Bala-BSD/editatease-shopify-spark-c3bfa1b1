import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChannelHero from "@/components/services/channel-management/ChannelHero";
import WhatIsChannelManagement from "@/components/services/channel-management/WhatIsChannelManagement";
import ChannelServices from "@/components/services/channel-management/ChannelServices";
import WhyChooseUs from "@/components/services/channel-management/WhyChooseUs";
import ProcessSection from "@/components/services/channel-management/ProcessSection";
import PlatformsSection from "@/components/services/channel-management/PlatformsSection";
import ImpactNumbers from "@/components/services/channel-management/ImpactNumbers";
import CaseStudies from "@/components/services/channel-management/CaseStudies";
import ChannelPricing from "@/components/services/channel-management/ChannelPricing";
import ToolsSection from "@/components/services/channel-management/ToolsSection";
import ComparisonTable from "@/components/services/channel-management/ComparisonTable";
import ChecklistSection from "@/components/services/channel-management/ChecklistSection";
import FAQSection from "@/components/services/channel-management/FAQSection";
import CTASection from "@/components/services/channel-management/CTASection";
import HelpChoosing from "@/components/services/channel-management/HelpChoosing";
import { Helmet } from "react-helmet";

const ChannelManagement = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>YouTube Channel Management Services | Edit at Ease – Strategy, SEO & Growth</title>
        <meta 
          name="description" 
          content="Full-service YouTube channel management: uploads, SEO, thumbnails, analytics, and growth strategies. Trusted by top creators with 100M+ views managed." 
        />
        <meta name="keywords" content="youtube channel management, video SEO services, channel growth strategy, youtube optimization, content calendar management, youtube analytics" />
        <link rel="canonical" href="https://editatease.com/services/channel-management" />
      </Helmet>
      
      <Navigation />
      
      <main>
        <ChannelHero />
        <WhatIsChannelManagement />
        <ChannelServices />
        <WhyChooseUs />
        <ProcessSection />
        <PlatformsSection />
        <ImpactNumbers />
        <CaseStudies />
        <ChannelPricing />
        <ToolsSection />
        <ComparisonTable />
        <ChecklistSection />
        <FAQSection />
        <CTASection />
        <HelpChoosing />
      </main>
      
      <Footer />
    </div>
  );
};

export default ChannelManagement;
