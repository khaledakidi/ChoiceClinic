import ServicePage from "@/components/ServicePage";
import serviceFace from "@/assets/service-face.jpg";
import dentalDoc1 from "@/assets/stitch/dental-doc1.jpg";
import dentalDoc2 from "@/assets/stitch/dental-doc2.jpg";
import dentalGallery1 from "@/assets/stitch/dental-gallery1.jpg";
import dentalGallery2 from "@/assets/stitch/dental-gallery2.jpg";
import dentalGallery3 from "@/assets/stitch/dental-gallery3.jpg";

const FacePage = () => (
  <ServicePage
    title="Face Aesthetic"
    subtitle="Where medical precision meets the refined eye of an artist. Discover a bespoke journey toward your most confident self through sophisticated surgical techniques."
    heroImage={serviceFace}
    heroLabel="Aesthetic Excellence"
    heroHeadline={["Artistry in", "Transformation"]}
    aboutTitle="Rhinoplasty, Facelifts, and Body Contouring"
    aboutText={[
      "Each procedure is a unique collaboration. We specialize in enhancing your natural features through subtle, sophisticated surgical techniques that prioritize harmony and balance.",
      "Istanbul has become one of the world's leading destinations for facial aesthetic surgery, combining internationally trained, board-certified surgeons with modern hospital infrastructure at a fraction of the cost.",
      "With Choice Clinic, your experience extends beyond the operating room. We coordinate your entire trip including flights, premium hotel accommodation, private airport transfers, and a dedicated patient coordinator.",
    ]}
    features={[
      { title: "Board-Certified", desc: "Internationally trained specialists in facial surgery with decades of combined experience." },
      { title: "Natural Results", desc: "Harmonious outcomes tailored to your unique anatomy and aesthetic vision." },
      { title: "Absolute Privacy", desc: "Private entrances and secure digital portals for complete discretion." },
      { title: "Aftercare Elite", desc: "24/7 dedicated support team throughout your recovery period." },
    ]}
    bentoCards={[
      { title: "Facial Harmony", desc: "We believe surgery is not about changing who you are, but revealing the most refined version of yourself.", image: serviceFace, span: "large" },
      { title: "Sculpted Form", desc: "Advanced body contouring and liposuction techniques for lasting transformation.", span: "normal" },
      { title: "Refined Contours", desc: "Blepharoplasty, otoplasty, and brow lifts for subtle yet impactful rejuvenation.", span: "normal" },
    ]}
    caseStudies={[
      { image: dentalGallery1, label: "Rhinoplasty", title: "Case Study #031" },
      { image: dentalGallery2, label: "Facelift", title: "Case Study #074" },
      { image: dentalGallery3, label: "Blepharoplasty", title: "Case Study #112" },
    ]}
    surgeons={[
      {
        name: "Dr. Mehmet Kaya",
        role: "Rhinoplasty Specialist",
        desc: "One of Turkey's most sought-after rhinoplasty surgeons with over 10,000 successful nasal surgeries and a reputation for natural, balanced results.",
        image: dentalDoc1,
      },
      {
        name: "Dr. Aylin Demir",
        role: "Facial Rejuvenation Expert",
        desc: "Board-certified plastic surgeon specializing in facelifts, blepharoplasty, and non-surgical rejuvenation with a meticulous artistic approach.",
        image: dentalDoc2,
      },
    ]}
    procedures={[
      { title: "Rhinoplasty", desc: "Reshape and refine the nose for improved aesthetics and function. Customised approach for natural-looking results." },
      { title: "Facelift", desc: "Restore youthful contours by tightening facial muscles and removing excess skin for a rejuvenated appearance." },
      { title: "Blepharoplasty", desc: "Eyelid surgery to correct drooping lids, remove under-eye bags, and create a refreshed, youthful look." },
      { title: "Otoplasty", desc: "Ear reshaping surgery to correct prominent ears and achieve a balanced, proportional profile." },
    ]}
  />
);

export default FacePage;
