import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "ar" | "tr";

type Translations = Record<string, Record<Lang, string>>;

const translations: Translations = {
  // Navbar
  "nav.home": { en: "Home", ar: "الرئيسية", tr: "Ana Sayfa" },
  "nav.operations": { en: "Operations", ar: "العمليات", tr: "Operasyonlar" },
  "nav.contact": { en: "Contact", ar: "اتصل بنا", tr: "İletişim" },
  "nav.freeConsultation": { en: "Free Consultation", ar: "استشارة مجانية", tr: "Ücretsiz Danışma" },

  // Services
  "service.dental": { en: "Dental Treatment", ar: "علاج الأسنان", tr: "Diş Tedavisi" },
  "service.hair": { en: "Hair Transplant", ar: "زراعة الشعر", tr: "Saç Ekimi" },
  "service.face": { en: "Face Aesthetic", ar: "تجميل الوجه", tr: "Yüz Estetiği" },
  "service.bariatric": { en: "Bariatric Surgery", ar: "جراحة السمنة", tr: "Obezite Cerrahisi" },
  "service.eye": { en: "Eye Surgery", ar: "جراحة العيون", tr: "Göz Cerrahisi" },

  // Hero
  "hero.title1": { en: "Why Do Patients from", ar: "لماذا يختار المرضى من", tr: "Neden 40'tan Fazla Ülkeden" },
  "hero.highlight": { en: "40+ Countries", ar: "أكثر من 40 دولة", tr: "Hastalar" },
  "hero.title2": { en: "Choose Choice Clinic?", ar: "عيادة تشويس؟", tr: "Choice Clinic'i Tercih Ediyor?" },
  "hero.subtitle": {
    en: "World-class medical care in Istanbul. We handle everything from your first inquiry to your safe return home — dental, hair restoration, plastic surgery, and more.",
    ar: "رعاية طبية عالمية المستوى في إسطنبول. نتولى كل شيء من استفسارك الأول حتى عودتك الآمنة — الأسنان، زراعة الشعر، الجراحة التجميلية، والمزيد.",
    tr: "İstanbul'da dünya standartlarında tıbbi bakım. İlk başvurunuzdan güvenli dönüşünüze kadar her şeyi biz hallederiz — diş, saç ekimi, plastik cerrahi ve daha fazlası.",
  },
  "hero.cta": { en: "Get Free Consultation", ar: "احصل على استشارة مجانية", tr: "Ücretsiz Danışma Al" },
  "hero.treatments": { en: "Our Treatments →", ar: "علاجاتنا ←", tr: "Tedavilerimiz →" },

  // Trust Badges
  "badge.transfer": { en: "Transfer", ar: "النقل", tr: "Transfer" },
  "badge.transferDesc": { en: "Airport & hotel included", ar: "المطار والفندق متضمنان", tr: "Havalimanı ve otel dahil" },
  "badge.quality": { en: "Quality", ar: "الجودة", tr: "Kalite" },
  "badge.qualityDesc": { en: "JCI accredited facilities", ar: "مرافق معتمدة من JCI", tr: "JCI akrediteli tesisler" },
  "badge.satisfaction": { en: "Satisfaction", ar: "الرضا", tr: "Memnuniyet" },
  "badge.satisfactionDesc": { en: "500+ happy patients", ar: "أكثر من 500 مريض سعيد", tr: "500+ mutlu hasta" },
  "badge.communication": { en: "Communication", ar: "التواصل", tr: "İletişim" },
  "badge.communicationDesc": { en: "Multi language translators", ar: "مترجمون متعددو اللغات", tr: "Çok dilli tercümanlar" },
  "badge.technology": { en: "Technology", ar: "التكنولوجيا", tr: "Teknoloji" },
  "badge.technologyDesc": { en: "State-of-the-art equipment", ar: "أحدث المعدات", tr: "Son teknoloji ekipmanlar" },
  "badge.experience": { en: "Experience", ar: "الخبرة", tr: "Deneyim" },
  "badge.experienceDesc": { en: "Trusted specialists", ar: "أطباء موثوقون", tr: "Güvenilir uzmanlar" },

  // Certifications
  "cert.title": { en: "Our Certifications & Accreditations", ar: "شهاداتنا واعتماداتنا", tr: "Sertifikalarımız ve Akreditasyonlarımız" },
  "cert.jci": { en: "JCI Accredited", ar: "معتمد من JCI", tr: "JCI Akrediteli" },
  "cert.ministry": { en: "Health Ministry", ar: "وزارة الصحة", tr: "Sağlık Bakanlığı" },
  "cert.tursab": { en: "TURSAB", ar: "TURSAB", tr: "TURSAB" },
  "cert.board": { en: "Board-Certified", ar: "معتمد من المجلس", tr: "Kurul Sertifikalı" },
  "cert.aftercare": { en: "Aftercare Guarantee", ar: "ضمان الرعاية اللاحقة", tr: "Bakım Sonrası Garantisi" },

  // Services section
  "services.subtitle": { en: "Our Treatments", ar: "علاجاتنا", tr: "Tedavilerimiz" },
  "services.title1": { en: "Premium", ar: "خدمات طبية", tr: "Premium" },
  "services.title2": { en: "Medical Services", ar: "متميزة", tr: "Tıbbi Hizmetler" },
  "services.desc": {
    en: "Comprehensive healthcare coordinated entirely for international patients.",
    ar: "رعاية صحية شاملة منسقة بالكامل للمرضى الدوليين.",
    tr: "Uluslararası hastalar için tamamen koordine edilmiş kapsamlı sağlık hizmeti.",
  },
  "services.learnMore": { en: "Learn More", ar: "اعرف المزيد", tr: "Daha Fazla" },

  // Stats
  "stats.patients": { en: "Patients Served", ar: "مرضى تم خدمتهم", tr: "Tedavi Edilen Hasta" },
  "stats.savings": { en: "Average Savings", ar: "متوسط التوفير", tr: "Ortalama Tasarruf" },
  "stats.specialities": { en: "Specialities", ar: "تخصصات", tr: "Uzmanlık Alanı" },
  "stats.support": { en: "Patient Support", ar: "دعم المرضى", tr: "Hasta Desteği" },

  // Process
  "process.subtitle": { en: "How It Works", ar: "كيف يعمل", tr: "Nasıl Çalışır" },
  "process.title1": { en: "Your Journey,", ar: "رحلتك،", tr: "Yolculuğunuz," },
  "process.title2": { en: "Step by Step", ar: "خطوة بخطوة", tr: "Adım Adım" },
  "process.step1.title": { en: "Consultation", ar: "الاستشارة", tr: "Danışma" },
  "process.step1.desc": {
    en: "Tell us what you need. We assess your case and match you with the right specialist.",
    ar: "أخبرنا بما تحتاجه. نقيم حالتك ونطابقك مع المتخصص المناسب.",
    tr: "Bize ihtiyacınızı söyleyin. Durumunuzu değerlendirir ve sizi doğru uzmanla eşleştiririz.",
  },
  "process.step2.title": { en: "Custom Plan", ar: "خطة مخصصة", tr: "Özel Plan" },
  "process.step2.desc": {
    en: "Receive a personalised treatment plan with transparent pricing — no surprises.",
    ar: "احصل على خطة علاج مخصصة بأسعار شفافة — بدون مفاجآت.",
    tr: "Şeffaf fiyatlandırma ile kişiselleştirilmiş tedavi planı alın — sürpriz yok.",
  },
  "process.step3.title": { en: "We Arrange All", ar: "نرتب كل شيء", tr: "Her Şeyi Biz Ayarlarız" },
  "process.step3.desc": {
    en: "Flights, hotel, airport transfer, clinic appointments — all organised for you.",
    ar: "الرحلات الجوية، الفندق، النقل من المطار، مواعيد العيادة — كل شيء منظم لك.",
    tr: "Uçuşlar, otel, havalimanı transferi, klinik randevuları — hepsi sizin için organize edilir.",
  },
  "process.step4.title": { en: "Treatment", ar: "العلاج", tr: "Tedavi" },
  "process.step4.desc": {
    en: "Your procedure is carried out by expert specialists in a premium Istanbul facility.",
    ar: "يتم تنفيذ إجراءك من قبل متخصصين خبراء في منشأة متميزة في إسطنبول.",
    tr: "İşleminiz İstanbul'daki premium bir tesiste uzman hekimler tarafından gerçekleştirilir.",
  },
  "process.step5.title": { en: "Aftercare", ar: "الرعاية اللاحقة", tr: "Bakım Sonrası" },
  "process.step5.desc": {
    en: "30-day follow-up support after you return home. We're with you every step.",
    ar: "دعم متابعة لمدة 30 يومًا بعد عودتك إلى المنزل. نحن معك في كل خطوة.",
    tr: "Eve döndükten sonra 30 günlük takip desteği. Her adımda yanınızdayız.",
  },

  // Testimonials
  "testimonials.subtitle": { en: "Patient Stories", ar: "قصص المرضى", tr: "Hasta Hikayeleri" },
  "testimonials.title1": { en: "Real People,", ar: "أشخاص حقيقيون،", tr: "Gerçek İnsanlar," },
  "testimonials.title2": { en: "Real Results", ar: "نتائج حقيقية", tr: "Gerçek Sonuçlar" },

  // Contact
  "contact.subtitle": { en: "Get In Touch", ar: "تواصل معنا", tr: "İletişime Geçin" },
  "contact.title1": { en: "Start Your", ar: "ابدأ", tr: "Yolculuğunuza" },
  "contact.title2": { en: "Journey Today", ar: "رحلتك اليوم", tr: "Bugün Başlayın" },
  "contact.desc": {
    en: "Talk to our team for free — no obligation, just clarity on what's possible for you.",
    ar: "تحدث مع فريقنا مجانًا — بدون التزام، فقط وضوح حول ما هو ممكن لك.",
    tr: "Ekibimizle ücretsiz konuşun — zorunluluk yok, sadece sizin için mümkün olanlar hakkında netlik.",
  },
  "contact.email": { en: "Email", ar: "البريد الإلكتروني", tr: "E-posta" },
  "contact.whatsapp": { en: "WhatsApp", ar: "واتساب", tr: "WhatsApp" },
  "contact.location": { en: "Location", ar: "الموقع", tr: "Konum" },
  "contact.formTitle": { en: "Get a Free Consultation", ar: "احصل على استشارة مجانية", tr: "Ücretsiz Danışma Alın" },
  "contact.formDesc": { en: "No fees, no obligation — just expert guidance.", ar: "بدون رسوم، بدون التزام — فقط إرشاد متخصص.", tr: "Ücret yok, zorunluluk yok — sadece uzman rehberlik." },
  "contact.firstName": { en: "First Name", ar: "الاسم الأول", tr: "Ad" },
  "contact.lastName": { en: "Last Name", ar: "اسم العائلة", tr: "Soyad" },
  "contact.phone": { en: "Phone", ar: "الهاتف", tr: "Telefon" },
  "contact.selectProcedure": { en: "Select a procedure...", ar: "اختر إجراءً...", tr: "Bir prosedür seçin..." },
  "contact.multiProcedures": { en: "Multiple Procedures", ar: "إجراءات متعددة", tr: "Birden Fazla Prosedür" },
  "contact.message": { en: "Message", ar: "الرسالة", tr: "Mesaj" },
  "contact.send": { en: "Send via WhatsApp →", ar: "إرسال عبر واتساب ←", tr: "WhatsApp ile Gönder →" },

  // Footer
  "footer.desc": {
    en: "World-class medical care in Istanbul. Dental, hair restoration, plastic surgery, and more.",
    ar: "رعاية طبية عالمية المستوى في إسطنبول. أسنان، زراعة شعر، جراحة تجميلية، والمزيد.",
    tr: "İstanbul'da dünya standartlarında tıbbi bakım. Diş, saç ekimi, plastik cerrahi ve daha fazlası.",
  },
  "footer.getInTouch": { en: "Get in Touch", ar: "تواصل معنا", tr: "İletişime Geçin" },
  "footer.whatsappUs": { en: "WhatsApp Us →", ar: "راسلنا على واتساب ←", tr: "WhatsApp ile Yazın →" },
  "footer.rights": { en: "All rights reserved.", ar: "جميع الحقوق محفوظة.", tr: "Tüm hakları saklıdır." },

  // Theme
  "theme.light": { en: "Light", ar: "فاتح", tr: "Açık" },
  "theme.dark": { en: "Dark", ar: "داكن", tr: "Koyu" },
};

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const I18nContext = createContext<I18nContextType>({
  lang: "en",
  setLang: () => {},
  t: (key) => key,
  dir: "ltr",
});

export const useI18n = () => useContext(I18nContext);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");

  const t = (key: string): string => {
    return translations[key]?.[lang] || translations[key]?.en || key;
  };

  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <I18nContext.Provider value={{ lang, setLang, t, dir }}>
      <div dir={dir}>{children}</div>
    </I18nContext.Provider>
  );
};
