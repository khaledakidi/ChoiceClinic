import { Link } from "react-router-dom";
import serviceDental from "@/assets/service-dental.jpg";
import serviceHair from "@/assets/service-hair.jpg";
import serviceFace from "@/assets/service-face.jpg";
import dentalGallery1 from "@/assets/stitch/dental-gallery1.jpg";
import dentalGallery2 from "@/assets/stitch/dental-gallery2.jpg";
import hairBefore from "@/assets/stitch/hair-before.jpg";
import hairAfter from "@/assets/stitch/hair-after.jpg";
import dentalDoc1 from "@/assets/stitch/dental-doc1.jpg";
import dentalDoc2 from "@/assets/stitch/dental-doc2.jpg";

interface ServiceCard {
  title: string;
  desc: string;
  path: string;
  mainImage: string;
  topImage: string;
  bottomImage: string;
}

const services: ServiceCard[] = [
  {
    title: "Dental Aesthetics",
    desc: "Smile Design, Porcelain Veneers, and advanced cosmetic dentistry.",
    path: "/dental",
    mainImage: serviceDental,
    topImage: dentalGallery1,
    bottomImage: dentalGallery2,
  },
  {
    title: "Hair Restoration",
    desc: "Natural-looking hair and beard transplants using cutting-edge techniques.",
    path: "/hair",
    mainImage: serviceHair,
    topImage: hairBefore,
    bottomImage: hairAfter,
  },
  {
    title: "Plastic Surgery",
    desc: "Facial and body contouring by board-certified expert surgeons.",
    path: "/face",
    mainImage: serviceFace,
    topImage: dentalDoc1,
    bottomImage: dentalDoc2,
  },
];

const ServicesSection = () => (
  <section
    id="services"
    className="py-16 sm:py-20 px-6 md:px-10 lg:px-16"
    style={{ background: "#131313" }}
  >
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {services.map((s) => (
          <Link
            key={s.path}
            to={s.path}
            className="group relative overflow-hidden rounded-lg flex flex-col transition-transform duration-500 hover:-translate-y-1"
            style={{
              background: "#1c1b1b",
              border: "1px solid rgba(78, 70, 57, 0.15)",
            }}
          >
            {/* Collage */}
            <div className="p-4">
              <div
                className="grid gap-2"
                style={{ gridTemplateColumns: "2fr 1fr", height: "280px" }}
              >
                <div className="overflow-hidden rounded-md">
                  <img
                    src={s.mainImage}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="grid grid-rows-2 gap-2">
                  <div className="overflow-hidden rounded-md">
                    <img
                      src={s.topImage}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="overflow-hidden rounded-md">
                    <img
                      src={s.bottomImage}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="px-6 pb-8 pt-2 text-center">
              <h3 className="font-sans text-sm sm:text-base font-bold uppercase tracking-[0.25em] text-foreground mb-3 group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light max-w-xs mx-auto">
                {s.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
