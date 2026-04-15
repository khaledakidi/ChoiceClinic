import ServicePage from "@/components/ServicePage";
import dentalHero from "@/assets/stitch/dental-hero.jpg";
import dentalVeneers from "@/assets/stitch/dental-veneers.jpg";
import dentalOrthodontics from "@/assets/stitch/dental-orthodontics.jpg";
import dentalImplants from "@/assets/stitch/dental-implants.jpg";
import dentalDoc1 from "@/assets/stitch/dental-doc1.jpg";
import dentalDoc2 from "@/assets/stitch/dental-doc2.jpg";
import dentalGallery1 from "@/assets/stitch/dental-gallery1.jpg";
import dentalGallery2 from "@/assets/stitch/dental-gallery2.jpg";
import dentalGallery3 from "@/assets/stitch/dental-gallery3.jpg";

const DentalPage = () => (
  <ServicePage
    title="Dental Treatment"
    subtitle="Custom-sculpted restorations and precision implantology in Istanbul. We treat dental care as a surgical art form — restoring function and crafting the perfect smile."
    heroImage={dentalHero}
    heroLabel="Precision Restored · Aesthetic Excellence"
    heroHeadline={["The Art of the", "Perfect Smile"]}
    aboutTitle="Signature Dental Services"
    aboutText={[
      "Our specialists combine decades of surgical experience with a refined aesthetic eye to deliver results that are as functional as they are beautiful.",
      "Choice Clinic partners with JCI-accredited dental facilities in Istanbul using the latest digital dentistry technology including 3D scanning, CAD/CAM design, and guided implant surgery.",
      "We exclusively use premium European implant brands including Straumann and Nobel Biocare, ensuring the highest standards of biocompatibility and longevity.",
    ]}
    features={[
      { title: "Premium Brands", desc: "Straumann, Nobel Biocare, and other top European implant brands for lasting results." },
      { title: "Digital Dentistry", desc: "3D scanning, CAD/CAM design, and guided implant surgery for precision." },
      { title: "70% Savings", desc: "Compared to UK and US dental costs, with no compromise on quality." },
      { title: "International Warranty", desc: "All treatments backed by comprehensive international warranties." },
    ]}
    bentoCards={[
      { title: "Porcelain Veneers", desc: "Custom-sculpted ceramic shells designed to recreate the natural look of teeth while providing strength and resilience.", image: dentalVeneers, span: "large" },
      { title: "Invisible Orthodontics", desc: "Precision alignment for a flawless smile without visible braces.", image: dentalOrthodontics, span: "normal" },
      { title: "Precision Implants", desc: "Structural excellence with premium titanium components and guided surgical placement.", image: dentalImplants, span: "normal" },
    ]}
    caseStudies={[
      { image: dentalGallery1, label: "Laser Whitening", title: "Case Study #042" },
      { image: dentalGallery2, label: "Cosmetic Bonding", title: "Case Study #118" },
      { image: dentalGallery3, label: "Full Reconstruction", title: "Case Study #089" },
    ]}
    surgeons={[
      {
        name: "Dr. Albert Flores",
        role: "Chief of Prosthodontics",
        desc: "Specializing in full-mouth reconstruction and advanced veneer techniques with over 20 years of international expertise.",
        image: dentalDoc1,
      },
      {
        name: "Dr. Theresa Webb",
        role: "Aesthetic Specialist",
        desc: "Renowned for her meticulous approach to cosmetic bonding and minimally invasive smile enhancements.",
        image: dentalDoc2,
      },
    ]}
    procedures={[
      { title: "All-on-4 Implants", desc: "Full arch restoration with just 4 strategically placed implants. Immediate function and natural aesthetics." },
      { title: "All-on-6 Implants", desc: "Enhanced stability with 6 implants for maximum durability and a natural-looking full arch restoration." },
      { title: "Dental Veneers", desc: "Ultra-thin porcelain shells for a perfect Hollywood Smile. Minimal preparation, maximum transformation." },
      { title: "Dental Crowns", desc: "Premium zirconia and porcelain crowns for damaged teeth. Natural appearance and long-lasting durability." },
      { title: "Dental Implants", desc: "Single or multiple implant placements using premium European brands with guided surgery for precision." },
      { title: "Hollywood Smile", desc: "Complete smile makeover combining veneers, whitening, and gum contouring for a red-carpet smile." },
    ]}
  />
);

export default DentalPage;
