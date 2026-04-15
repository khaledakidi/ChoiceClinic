import { Plane, Award, Smile, MessageSquare, Monitor, UserCheck } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

const TrustBadges = () => {
  const { t } = useI18n();

  const badges = [
    { icon: Plane, title: t("badge.transfer"), desc: t("badge.transferDesc") },
    { icon: Award, title: t("badge.quality"), desc: t("badge.qualityDesc") },
    { icon: Smile, title: t("badge.satisfaction"), desc: t("badge.satisfactionDesc") },
    { icon: MessageSquare, title: t("badge.communication"), desc: t("badge.communicationDesc") },
    { icon: Monitor, title: t("badge.technology"), desc: t("badge.technologyDesc") },
    { icon: UserCheck, title: t("badge.experience"), desc: t("badge.experienceDesc") },
  ];

  return (
    <section className="py-20 sm:py-32 px-6 md:px-24" style={{ background: "#1c1b1b" }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((b) => (
            <div key={b.title} className="tonal-card p-6 text-center rounded-lg">
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center" style={{ background: "rgba(233, 193, 118, 0.1)", border: "1px solid rgba(233, 193, 118, 0.2)" }}>
                <b.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-foreground">{b.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground font-light">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
