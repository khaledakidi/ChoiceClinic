import { useI18n } from "@/contexts/I18nContext";

const StatsSection = () => {
  const { t } = useI18n();

  const stats = [
    { value: "500+", label: t("stats.patients") },
    { value: "70%", label: t("stats.savings") },
    { value: "5", label: t("stats.specialities") },
    { value: "24/7", label: t("stats.support") },
  ];

  return (
    <section className="py-16" style={{ background: "rgba(233, 193, 118, 0.03)", borderTop: "1px solid rgba(233, 193, 118, 0.1)", borderBottom: "1px solid rgba(233, 193, 118, 0.1)" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-headline gold-gradient-text">{s.value}</div>
              <div className="mt-2 text-xs text-muted-foreground uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
