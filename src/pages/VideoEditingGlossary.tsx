import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlossaryHero from "@/components/glossary/GlossaryHero";
import AlphabeticalNav from "@/components/glossary/AlphabeticalNav";
import FeaturedConcepts from "@/components/glossary/FeaturedConcepts";
import GlossaryTerms from "@/components/glossary/GlossaryTerms";
import TimelineGuide from "@/components/glossary/TimelineGuide";
import EditingTechniques from "@/components/glossary/EditingTechniques";
import EssentialTools from "@/components/glossary/EssentialTools";
import EditingWorkflow from "@/components/glossary/EditingWorkflow";
import LearnWithUs from "@/components/glossary/LearnWithUs";
import GlossaryFAQs from "@/components/glossary/GlossaryFAQs";
import DownloadPDF from "@/components/glossary/DownloadPDF";
import ExploreResources from "@/components/glossary/ExploreResources";

const VideoEditingGlossary = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Video Editing Glossary | Edit at Ease — Learn Every Video Term & Technique</title>
        <meta 
          name="description" 
          content="Browse our comprehensive glossary of video editing terms, techniques, and tools. Learn every piece of video editing jargon explained simply by Edit at Ease." 
        />
        <meta name="keywords" content="video editing glossary, video editing terms, video editing techniques, glossary of video terms, video editing definitions" />
        <link rel="canonical" href="https://editatease.com/academy/video-editing-glossary" />
      </Helmet>

      <Navigation />
      
      <main>
        <GlossaryHero />
        <AlphabeticalNav />
        <FeaturedConcepts />
        <GlossaryTerms />
        <TimelineGuide />
        <EditingTechniques />
        <EssentialTools />
        <EditingWorkflow />
        <LearnWithUs />
        <GlossaryFAQs />
        <DownloadPDF />
        <ExploreResources />
      </main>

      <Footer />
    </div>
  );
};

export default VideoEditingGlossary;
