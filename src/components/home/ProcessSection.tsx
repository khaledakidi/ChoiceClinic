import { useI18n } from "@/contexts/I18nContext";

const ProcessSection = () => {
  const { t } = useI18n();

  const steps = [
    { num: "01", title: t("process.step1.title"), desc: t("process.step1.desc") },
    { num: "02", title: t("process.step2.title"), desc: t("process.step2.desc") },
    { num: "03", title: t("process.step3.title"), desc: t("process.step3.desc") },
    { num: "04", title: t("process.step4.title"), desc: t("process.step4.desc") },
    { num: "05", title: t("process.step5.title"), desc: t("process.step5.desc") },
  ];

  return (
    <section className="py-20 sm:py-32 px-6 md:px-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-bold tracking-widest uppercase text-xs mb-4">{t("process.subtitle")}</p>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-foreground">
            {t("process.title1")} <span className="italic gold-gradient-text">{t("process.title2")}</span>
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-px hidden sm:block" style={{ background: "rgba(233, 193, 118, 0.2)" }} />
          <div className="space-y-10">
            {steps.map((s) => (
              <div key={s.num} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(233, 193, 118, 0.1)", border: "1px solid rgba(233, 193, 118, 0.3)" }}>
                  <span className="text-sm font-bold text-primary">{s.num}</span>
                </div>
                <div>
                  <h3 className="font-headline text-lg text-foreground">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed font-light">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
