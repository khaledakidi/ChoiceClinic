import ServicePage from "@/components/ServicePage";
import serviceBariatric from "@/assets/service-bariatric.jpg";

const BariatricPage = () => (
  <ServicePage
    title="Bariatric Surgery"
    subtitle="Transform your life with world-class weight loss surgery in Istanbul. Expert bariatric surgeons and all-inclusive care packages."
    heroImage={serviceBariatric}
    heroLabel="Life-Changing Results"
    heroHeadline={["Transform Your", "Body & Life"]}
    aboutTitle="Weight Management Procedures in Istanbul"
    aboutText={[
      "Choice Clinic connects you with Istanbul's most experienced bariatric surgeons, providing life-changing weight loss procedures in internationally accredited hospitals.",
      "Istanbul has become a leading destination for bariatric surgery, offering advanced minimally invasive techniques at a fraction of the cost compared to the UK and US.",
      "Our all-inclusive packages cover hospital stay, surgeon fees, transfers, accommodation, and dedicated aftercare support, so you can focus entirely on your transformation."
    ]}
    features={[
      { title: "Experienced Surgeons", desc: "Board-certified with thousands of successful procedures" },
      { title: "Modern Hospitals", desc: "JCI-accredited with latest laparoscopic technology" },
      { title: "Comprehensive Care", desc: "Nutritional guidance and long-term follow-up support" },
      { title: "All-Inclusive Packages", desc: "Hospital stay, transfers, hotel, and aftercare" },
    ]}
    procedures={[
      { title: "Gastric Sleeve", desc: "Laparoscopic sleeve gastrectomy reduces stomach size by 80%, promoting significant and sustained weight loss with minimal recovery time." },
      { title: "Gastric Balloon", desc: "Non-surgical weight loss solution where an intragastric balloon is placed endoscopically, promoting portion control and healthy habits." },
    ]}
  />
);

export default BariatricPage;
