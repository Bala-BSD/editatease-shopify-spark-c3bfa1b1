import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import PricingPreview from "@/components/home/PricingPreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <Hero />
        <ServicesPreview />
        <PricingPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
