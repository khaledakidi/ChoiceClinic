import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";
import BrandLogo from "@/components/BrandLogo";

const Footer = () => {
  const { t } = useI18n();

  const services = [
    { name: t("service.dental"), path: "/dental" },
    { name: t("service.hair"), path: "/hair" },
    { name: t("service.face"), path: "/face" },
    { name: t("service.bariatric"), path: "/bariatric" },
    { name: t("service.eye"), path: "/eye" },
  ];

  return (
    <footer style={{ background: "#0e0e0e", borderTop: "1px solid rgba(78, 70, 57, 0.15)" }}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <BrandLogo className="h-12 w-auto object-contain mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed font-light">{t("footer.desc")}</p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">{t("nav.operations")}</h4>
            <ul className="space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.path}>
                  <Link to={s.path} className="text-muted-foreground hover:text-primary transition-colors duration-300">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">{t("nav.contact")}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+905000000000" className="flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors duration-300">
                  <Phone className="w-4 h-4 flex-shrink-0" /> +90 500 000 00 00
                </a>
              </li>
              <li>
                <a href="mailto:info@choiceclinic.net" className="flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors duration-300">
                  <Mail className="w-4 h-4 flex-shrink-0" /> info@choiceclinic.net
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0" /> Istanbul, Turkey
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">{t("footer.getInTouch")}</h4>
            <a
              href="https://wa.me/905000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gold-gradient-bg text-on-primary font-bold px-6 py-3 rounded-lg tracking-widest uppercase text-xs hover:brightness-110 transition-all duration-300"
            >
              {t("footer.whatsappUs")}
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 text-center text-xs text-muted-foreground" style={{ borderTop: "1px solid rgba(78, 70, 57, 0.15)" }}>
          © {new Date().getFullYear()} Choice Clinic. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
