import { Star } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

const testimonials = [
  {
    text: "The entire experience exceeded every expectation. From the moment I landed in Istanbul to my follow-up calls back home, the team at Choice Clinic was exceptional.",
    name: "Sarah M.",
    detail: "All-on-6 Implants · London, UK",
  },
  {
    text: "I was nervous about travelling abroad for surgery. Choice Clinic made every step crystal clear. My rhinoplasty results are beyond what I dreamed possible.",
    name: "James T.",
    detail: "Rhinoplasty · New York, USA",
  },
  {
    text: "Hair transplant in Istanbul was the best decision I ever made. Choice Clinic handled absolutely everything. I just showed up and was taken care of completely.",
    name: "Michael R.",
    detail: "FUE Hair Transplant · Manchester, UK",
  },
];

const TestimonialsSection = () => {
  const { t } = useI18n();

  return (
    <section className="py-20 sm:py-32 px-6 md:px-24" style={{ background: "#1c1b1b" }}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-bold tracking-widest uppercase text-xs mb-4">{t("testimonials.subtitle")}</p>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-foreground">
            {t("testimonials.title1")} <span className="italic gold-gradient-text">{t("testimonials.title2")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div key={i} className="tonal-card p-8 rounded-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic font-light">"{item.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(233, 193, 118, 0.1)", border: "1px solid rgba(233, 193, 118, 0.2)" }}>
                  <span className="text-sm font-bold text-primary">{item.name[0]}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
