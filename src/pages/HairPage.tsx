import ServicePage from "@/components/ServicePage";
import hairHero from "@/assets/stitch/hair-hero.jpg";
import hairFue from "@/assets/stitch/hair-fue.jpg";
import hairFut from "@/assets/stitch/hair-fut.jpg";
import hairBefore from "@/assets/stitch/hair-before.jpg";
import hairAfter from "@/assets/stitch/hair-after.jpg";
import hairDoc1 from "@/assets/stitch/hair-doc1.jpg";
import hairDoc2 from "@/assets/stitch/hair-doc2.jpg";

const HairPage = () => (
  <ServicePage
    title="Hair Transplant"
    subtitle="At Choice Clinic, we treat hair restoration as a surgical art form. Our bespoke approach combines advanced technology with an editorial eye for natural hairlines."
    heroImage={hairHero}
    heroLabel="Precision Restored"
    heroHeadline={["Regain Your", "Confidence"]}
    aboutTitle="Advanced FUE & FUT Techniques"
    aboutText={[
      "The pinnacle of hair restoration technology. We utilize microscopic precision to ensure every follicle is placed with intent, matching your natural growth pattern.",
      "Istanbul performs more hair transplant procedures than any other city in the world. Choice Clinic partners with the top hair transplant clinics and surgeons to ensure every patient receives exceptional care and natural, permanent results.",
      "From the moment you reach out, a dedicated coordinator guides you through every step. Our all-inclusive packages cover your procedure, hotel accommodation, VIP transfers, medication, and comprehensive aftercare.",
    ]}
    features={[
      { title: "Expert Surgeons", desc: "Top hair transplant specialists with thousands of successful procedures and ISHRS fellowship." },
      { title: "Latest Technology", desc: "Micro-motor FUE and Choi implanter pen techniques for natural, scarless results." },
      { title: "All-Inclusive", desc: "Hotel, VIP transfers, medication, and comprehensive aftercare included in every package." },
      { title: "Natural Results", desc: "Undetectable hairlines tailored to your unique facial structure and growth patterns." },
    ]}
    bentoCards={[
      { title: "Follicular Unit Extraction", desc: "Minimally invasive, scarless technique for individual graft transplantation. Perfect for shorter styles.", image: hairFue, span: "large" },
      { title: "FUT Method", desc: "The 'Gold Standard' for high-density requirements. Ideal for maximum coverage in a single session.", image: hairFut, span: "normal" },
      { title: "DHI Technique", desc: "Direct Hair Implantation using the Choi pen for simultaneous channel opening and follicle placement.", span: "normal" },
    ]}
    beforeAfter={[
      {
        before: hairBefore,
        after: hairAfter,
        title: "Case Study: Frontal Density",
        desc: "A focus on recreating a natural, age-appropriate recession line while maximizing graft survival. 2,500 Grafts FUE.",
        stats: [
          { value: "2.5k", label: "Grafts" },
          { value: "FUE", label: "Technique" },
          { value: "6 mo", label: "Recovery" },
        ],
      },
    ]}
    surgeons={[
      {
        name: "Dr. Julian Vane",
        role: "Chief Surgeon / ISHRS Fellow",
        desc: "Pioneer in microscopic graft placement with over 15 years of surgical excellence in Harley Street and Zurich.",
        image: hairDoc1,
      },
      {
        name: "Dr. Elena Ross",
        role: "Aesthetic Director / FUT Specialist",
        desc: "Specializing in female hair restoration and high-density megasessions with an emphasis on artistic framing.",
        image: hairDoc2,
      },
    ]}
    procedures={[
      { title: "FUE Hair Transplant", desc: "Follicular Unit Extraction for natural, scarless results. Individual follicles harvested and implanted with precision, up to 5,000 grafts in a single session." },
      { title: "DHI Hair Transplant", desc: "Direct Hair Implantation using the Choi pen allows simultaneous channel opening and follicle placement, delivering maximum density and precision." },
      { title: "Beard Transplant", desc: "Achieve a fuller, more defined beard with natural-looking follicle transplantation tailored to your facial features." },
      { title: "Eyebrow Transplant", desc: "Restore or reshape sparse eyebrows with precise follicular transplantation for a natural, permanent result." },
    ]}
  />
);

export default HairPage;
