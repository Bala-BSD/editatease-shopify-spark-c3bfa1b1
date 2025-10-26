import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import WhatAreServices from "@/components/services/WhatAreServices";
import CoreSolutions from "@/components/services/CoreSolutions";
import WhoWeWorkWith from "@/components/services/WhoWeWorkWith";
import EditingProcess from "@/components/services/EditingProcess";
import WhyChooseServices from "@/components/services/WhyChooseServices";
import IndustriesServed from "@/components/services/IndustriesServed";
import WorkPortfolio from "@/components/services/WorkPortfolio";
import PricingPackages from "@/components/services/PricingPackages";
import TechStack from "@/components/services/TechStack";
import ServicesOverview from "@/components/services/ServicesOverview";
import CaseStudiesSection from "@/components/services/CaseStudiesSection";
import TestimonialsSection from "@/components/services/TestimonialsSection";
import FAQsSection from "@/components/services/FAQsSection";
import FinalCTA from "@/components/services/FinalCTA";
import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Video Editing Services | Edit at Ease – Professional Video Editors for Brands & Creators</title>
        <meta 
          name="description" 
          content="Professional video editing services for creators, brands, and businesses. From short-form to long-form, Edit at Ease delivers polished videos that perform." 
        />
        <meta name="keywords" content="video editing services, professional video editing, video editing agency, video post-production services, YouTube video editing, corporate video editing, online video editing" />
        <link rel="canonical" href="https://editatease.com/services" />
      </Helmet>
      
      <Navigation />
      
      <main>
        <ServicesHero />
        <WhatAreServices />
        <CoreSolutions />
        <WhoWeWorkWith />
        <EditingProcess />
        <WhyChooseServices />
        <IndustriesServed />
        <WorkPortfolio />
        <PricingPackages />
        <TechStack />
        <ServicesOverview />
        <CaseStudiesSection />
        <TestimonialsSection />
        <FAQsSection />
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
