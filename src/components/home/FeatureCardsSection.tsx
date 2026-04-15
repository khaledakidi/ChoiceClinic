import { ShieldCheck, HeartHandshake, HandHeart } from "lucide-react";
import dentalDoc1 from "@/assets/stitch/dental-doc1.jpg";
import dentalGallery3 from "@/assets/stitch/dental-gallery3.jpg";
import hairHero from "@/assets/stitch/hair-hero.jpg";

interface FeatureCard {
  icon: typeof ShieldCheck;
  title: string;
  desc: string;
  image: string;
}

const features: FeatureCard[] = [
  {
    icon: ShieldCheck,
    title: "Expert Specialists",
    desc: "Our team of top specialists, team members, and nurses work with dedication to ensure the highest standard of patient care.",
    image: dentalDoc1,
  },
  {
    icon: HeartHandshake,
    title: "Accredited Facility",
    desc: "We operate as a partner of leading surgical clinics and certified surgery centres, meeting international standards.",
    image: dentalGallery3,
  },
  {
    icon: HandHeart,
    title: "Personalized Aftercare",
    desc: "Luxury room choices on our wards, personalized to ensure a smooth and comfortable recovery.",
    image: hairHero,
  },
];

const FeatureCardsSection = () => (
  <section
    id="specialists"
    className="px-6 md:px-10 lg:px-16 pb-20 sm:pb-28"
    style={{ background: "#131313" }}
  >
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-lg overflow-hidden transition-transform duration-500 hover:-translate-y-1"
            style={{
              background: "#1c1b1b",
              border: "1px solid rgba(78, 70, 57, 0.15)",
            }}
          >
            {/* Icon */}
            <div className="pt-8 pb-4 flex justify-center">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(233, 193, 118, 0.08)",
                  border: "1px solid rgba(233, 193, 118, 0.3)",
                }}
              >
                <f.icon
                  className="w-6 h-6 text-primary"
                  strokeWidth={1.5}
                />
              </div>
            </div>

            {/* Image */}
            <div className="px-6 pb-5">
              <div className="overflow-hidden rounded-md h-44">
                <img
                  src={f.image}
                  alt={f.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="px-6 pb-8 text-center">
              <h3 className="font-headline text-xl sm:text-2xl gold-gradient-text mb-3">
                {f.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light max-w-xs mx-auto">
                {f.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureCardsSection;
