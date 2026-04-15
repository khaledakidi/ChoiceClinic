import { useState } from "react";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

const ContactSection = () => {
  const { t } = useI18n();
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", procedure: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi! I'm ${form.firstName} ${form.lastName}.%0A%0AProcedure: ${form.procedure}%0AEmail: ${form.email}%0APhone: ${form.phone}%0A%0A${form.message}`;
    window.open(`https://wa.me/905000000000?text=${text}`, "_blank");
  };

  const inputClass = "w-full px-4 py-3 rounded-lg text-sm text-foreground outline-none transition-all duration-300 ghost-border focus:border-primary" +
    " bg-surface-container-highest placeholder:text-muted-foreground";

  return (
    <section id="contact" className="py-20 sm:py-32 px-6 md:px-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-bold tracking-widest uppercase text-xs mb-4">{t("contact.subtitle")}</p>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-foreground">
            {t("contact.title1")} <span className="italic gold-gradient-text">{t("contact.title2")}</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto font-light">{t("contact.desc")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <div className="lg:col-span-2 space-y-6">
            <div className="tonal-card p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground text-sm">{t("contact.email")}</span>
              </div>
              <a href="mailto:info@choiceclinic.net" className="text-sm text-muted-foreground hover:text-primary transition-colors">info@choiceclinic.net</a>
            </div>
            <div className="tonal-card p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground text-sm">{t("contact.whatsapp")}</span>
              </div>
              <a href="https://wa.me/905000000000" className="text-sm text-muted-foreground hover:text-primary transition-colors">+90 500 000 00 00</a>
            </div>
            <div className="tonal-card p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground text-sm">{t("contact.location")}</span>
              </div>
              <p className="text-sm text-muted-foreground">Istanbul, Turkey</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-3 tonal-card p-8 rounded-lg space-y-5">
            <h3 className="font-headline text-lg text-foreground mb-2">{t("contact.formTitle")}</h3>
            <p className="text-sm text-muted-foreground mb-4 font-light">{t("contact.formDesc")}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className={inputClass} placeholder={t("contact.firstName")} value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} required />
              <input className={inputClass} placeholder={t("contact.lastName")} value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} required />
            </div>
            <input type="email" className={inputClass} placeholder={t("contact.email")} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            <input className={inputClass} placeholder={t("contact.phone")} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <select value={form.procedure} onChange={(e) => setForm({ ...form, procedure: e.target.value })} required className={inputClass + " cursor-pointer"}>
              <option value="">{t("contact.selectProcedure")}</option>
              <option value="Dental Treatment">{t("service.dental")}</option>
              <option value="Hair Transplant">{t("service.hair")}</option>
              <option value="Face Aesthetic">{t("service.face")}</option>
              <option value="Bariatric Surgery">{t("service.bariatric")}</option>
              <option value="Eye Surgery">{t("service.eye")}</option>
              <option value="Multiple Procedures">{t("contact.multiProcedures")}</option>
            </select>
            <textarea className={inputClass + " resize-vertical min-h-[5rem]"} placeholder={t("contact.message")} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} />
            <button type="submit" className="w-full gold-gradient-bg text-on-primary font-bold py-4 rounded-lg tracking-widest uppercase text-xs hover:brightness-110 transition-all duration-300">
              {t("contact.send")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
