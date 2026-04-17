import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import QuickBookingSection from "@/components/home/QuickBookingSection";
import FeatureCardsSection from "@/components/home/FeatureCardsSection";
import AccreditationsSection from "@/components/home/AccreditationsSection";

const Index = () => (
  <Layout>
    <HeroSection />
    <StatsSection />
    <ServicesSection />
    <QuickBookingSection />
    <FeatureCardsSection />
    <AccreditationsSection />
  </Layout>
);

export default Index;
