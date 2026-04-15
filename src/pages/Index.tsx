import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import QuickBookingSection from "@/components/home/QuickBookingSection";
import FeatureCardsSection from "@/components/home/FeatureCardsSection";

const Index = () => (
  <Layout>
    <HeroSection />
    <ServicesSection />
    <QuickBookingSection />
    <FeatureCardsSection />
  </Layout>
);

export default Index;
