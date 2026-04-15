import ServicePage from "@/components/ServicePage";
import serviceEye from "@/assets/service-eye.jpg";

const EyePage = () => (
  <ServicePage
    title="Eye Surgery"
    subtitle="Regain crystal-clear vision with advanced eye surgery performed by internationally trained ophthalmologists."
    heroImage={serviceEye}
    heroLabel="Precision Vision Care"
    heroHeadline={["See the World", "Clearly Again"]}
    aboutTitle="Advanced Eye Surgery in Istanbul"
    aboutText={[
      "Choice Clinic offers a comprehensive range of eye surgery procedures performed by board-certified ophthalmologists with decades of experience.",
      "Our state-of-the-art facilities in Istanbul are equipped with cutting-edge laser technology, including the latest excimer and femtosecond laser systems, ensuring precise and safe outcomes.",
      "Patients benefit from quick recovery times, significant cost savings compared to Western Europe and the US, and a dedicated international coordinator who manages every detail of your visit."
    ]}
    features={[
      { title: "Cutting-Edge Laser", desc: "Latest excimer and femtosecond laser platforms" },
      { title: "Expert Surgeons", desc: "Internationally trained with thousands of procedures" },
      { title: "Quick Recovery", desc: "Most patients return to normal within 24-48 hours" },
      { title: "Accredited Facilities", desc: "JCI-accredited with world-class safety standards" },
    ]}
    procedures={[
      { title: "LASIK Eye Surgery", desc: "The gold standard in vision correction. A precise laser reshapes the cornea to correct myopia, hyperopia, and astigmatism with rapid recovery." },
      { title: "PRK / TransPRK", desc: "Surface-based laser vision correction ideal for patients with thinner corneas. No-touch TransPRK offers blade-free treatment." },
      { title: "Smart Lens (Trifocal)", desc: "Premium intraocular lens implant that corrects near, intermediate, and distance vision simultaneously, eliminating dependency on glasses." },
      { title: "ICL (Implantable Lens)", desc: "A reversible, implantable contact lens placed inside the eye for patients with high prescriptions who aren't suitable for LASIK." },
    ]}
  />
);

export default EyePage;
