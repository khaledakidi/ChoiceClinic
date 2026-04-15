import { ShieldCheck, Building2, Globe, BadgeCheck, HeartPulse } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

const CertificationsSection = () => {
  const { t } = useI18n();

  const certs = [
    { icon: ShieldCheck, label: t("cert.jci") },
    { icon: Building2, label: t("cert.ministry") },
    { icon: Globe, label: t("cert.tursab") },
    { icon: BadgeCheck, label: t("cert.board") },
    { icon: HeartPulse, label: t("cert.aftercare") },
  ];

  return (
    <section className="py-16 px-6 md:px-24 bg-background">
      <div className="container mx-auto text-center">
        <p className="text-primary font-bold tracking-widest uppercase text-xs mb-8">{t("cert.title")}</p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {certs.map((c) => (
            <div key={c.label} className="flex items-center gap-3 text-muted-foreground">
              <c.icon className="w-6 h-6 text-primary/70" />
              <span className="text-sm font-medium">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
