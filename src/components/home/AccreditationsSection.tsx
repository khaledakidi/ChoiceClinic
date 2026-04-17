import { Link } from "react-router-dom";

/* ─── SVG badge representations for each accreditation ─── */

const JciLogo = () => (
  <svg viewBox="0 0 120 120" className="w-20 h-20">
    <circle cx="60" cy="60" r="56" fill="none" stroke="#c9a227" strokeWidth="3" />
    <circle cx="60" cy="60" r="48" fill="none" stroke="#c9a227" strokeWidth="1" strokeDasharray="4 3" />
    <text x="60" y="52" textAnchor="middle" fill="#c9a227" fontSize="22" fontWeight="800" fontFamily="serif">JCI</text>
    <text x="60" y="66" textAnchor="middle" fill="#c9a227" fontSize="7.5" fontWeight="600" fontFamily="sans-serif" letterSpacing="1">QUALITY</text>
    <text x="60" y="76" textAnchor="middle" fill="#c9a227" fontSize="7.5" fontWeight="600" fontFamily="sans-serif" letterSpacing="1">APPROVAL</text>
    <path d="M44 84 Q60 90 76 84" fill="none" stroke="#c9a227" strokeWidth="1.2" />
    <text x="60" y="96" textAnchor="middle" fill="#c9a22780" fontSize="6" fontFamily="sans-serif" letterSpacing="0.5">7TH EDITION · 2021</text>
  </svg>
);

const LeedLogo = () => (
  <svg viewBox="0 0 120 90" className="w-24 h-16">
    <rect x="2" y="2" width="116" height="86" rx="6" fill="none" stroke="#4a7c59" strokeWidth="2" />
    <rect x="8" y="8" width="104" height="74" rx="4" fill="#1a3a2a" />
    <text x="60" y="32" textAnchor="middle" fill="#a8d5b5" fontSize="9" fontWeight="700" fontFamily="sans-serif" letterSpacing="2">LEADERSHIP IN</text>
    <text x="60" y="52" textAnchor="middle" fill="#6dbf8a" fontSize="22" fontWeight="900" fontFamily="sans-serif" letterSpacing="2">LEED</text>
    <rect x="28" y="57" width="64" height="16" rx="3" fill="#4a7c59" />
    <text x="60" y="69" textAnchor="middle" fill="#fff" fontSize="9.5" fontWeight="800" fontFamily="sans-serif" letterSpacing="2">GOLD</text>
    <text x="60" y="82" textAnchor="middle" fill="#4a7c5980" fontSize="7" fontFamily="sans-serif">2020</text>
  </svg>
);

const TemosLogo = () => (
  <svg viewBox="0 0 120 120" className="w-20 h-20">
    <circle cx="60" cy="60" r="56" fill="#003366" />
    <circle cx="60" cy="60" r="50" fill="none" stroke="#ffffff30" strokeWidth="1" />
    <text x="60" y="42" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="600" fontFamily="sans-serif" letterSpacing="1.5">EXCELLENCE IN</text>
    <text x="60" y="56" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="600" fontFamily="sans-serif" letterSpacing="1.5">MEDICAL TOURISM</text>
    <text x="60" y="74" textAnchor="middle" fill="#fff" fontSize="19" fontWeight="900" fontFamily="serif" fontStyle="italic">Temos</text>
    <text x="60" y="86" textAnchor="middle" fill="#ffffff80" fontSize="6.5" fontFamily="sans-serif" letterSpacing="1.5">ACCREDITED PARTNER</text>
  </svg>
);

const TurqualityLogo = () => (
  <svg viewBox="0 0 140 60" className="w-28 h-12">
    <rect x="2" y="2" width="136" height="56" rx="4" fill="#003399" />
    <rect x="2" y="2" width="136" height="56" rx="4" fill="none" stroke="#003399" strokeWidth="1" />
    <text x="70" y="32" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">TURQUALITY</text>
    <text x="70" y="47" textAnchor="middle" fill="#ffffff70" fontSize="7.5" fontFamily="sans-serif" letterSpacing="2">BRANDING SUPPORT</text>
    <text x="122" y="30" textAnchor="start" fill="#fff" fontSize="10" fontFamily="sans-serif">®</text>
  </svg>
);

const EfqmLogo = () => (
  <svg viewBox="0 0 120 80" className="w-24 h-16">
    <rect x="2" y="2" width="116" height="76" rx="5" fill="#1a2a4a" />
    {/* Infinity / loop motif */}
    <path d="M30 40 C30 28 48 28 60 40 C72 52 90 52 90 40 C90 28 72 28 60 40 C48 52 30 52 30 40Z"
      fill="none" stroke="#4db8b0" strokeWidth="3.5" />
    <text x="60" y="68" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="900" fontFamily="sans-serif" letterSpacing="3">EFQM</text>
  </svg>
);

const logos: Record<string, JSX.Element> = {
  JCI: <JciLogo />,
  LEED: <LeedLogo />,
  TEMOS: <TemosLogo />,
  "TURQUALITY®": <TurqualityLogo />,
  EFQM: <EfqmLogo />,
};

/* ─── Accreditation data ─── */

const accreditations = [
  {
    abbr: "JCI",
    name: "Joint Commission International",
    detail: "Quality Certificate · 7th Edition · May 2021",
    desc: "JCI is a prestigious accreditation organization prioritizing patient and employee safety on an international platform. Choice Clinic successfully adhered to the 7th edition JCI standards and was awarded its Quality Certificate at the very first audit in May 2021.",
  },
  {
    abbr: "LEED",
    name: "LEED Gold Green Building Certification",
    detail: "Gold Certification · 2020",
    desc: "The LEED Green Building Certification is the most widely adopted green building rating system in Turkey and worldwide. Choice Clinic achieved LEED Gold Certification (2020) through its unwavering commitment to environmental sustainability from day one.",
  },
  {
    abbr: "TEMOS",
    name: "Excellence in Medical Tourism",
    detail: "German Accreditation · Accredited Partner",
    desc: "TEMOS is a German accreditation body focused on improving the quality of services for domestic and international patients. Choice Clinic has been awarded both the Quality in Medical Care and the Excellence in Medical Tourism certificates.",
  },
  {
    abbr: "TURQUALITY®",
    name: "Turquality Branding Support Program",
    detail: "State-Supported · International Branding",
    desc: "TURQUALITY® is the first and only state-supported branding program in Turkey, designed to promote Turkish brands with global competitive advantage. Following independent audits, Choice Clinic has successfully joined the Turquality Branding Support Program.",
  },
  {
    abbr: "EFQM",
    name: "European Foundation for Quality Management",
    detail: "European Quality Framework Certificate",
    desc: "EFQM is an innovative non-profit organization that drives institutional excellence through data-driven insights, benchmarking, and global development networks. Following independent audits, Choice Clinic has been awarded the EFQM certificate.",
  },
];

/* ─── Section component ─── */

const AccreditationsSection = () => (
  <section
    id="accreditations"
    className="px-6 md:px-10 lg:px-16 py-20 sm:py-28"
    style={{ background: "#0e0e0e" }}
  >
    <div className="max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary mb-4">
          Certified Excellence
        </p>
        <h2 className="font-headline italic text-3xl sm:text-4xl gold-gradient-text">
          International Accreditations &amp; Awards
        </h2>
        <p className="mt-4 text-sm text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
          Choice Clinic holds some of the most respected international certifications in healthcare quality, medical tourism, and sustainable design.
        </p>
      </div>

      {/* Accreditation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {accreditations.map((a) => (
          <div
            key={a.abbr}
            className="rounded-lg p-7 flex flex-col gap-3 transition-transform duration-500 hover:-translate-y-1"
            style={{
              background: "#1c1b1b",
              border: "1px solid rgba(233, 193, 118, 0.15)",
            }}
          >
            {/* Logo */}
            <div className="flex items-center justify-center h-24 mb-1">
              {logos[a.abbr]}
            </div>

            {/* Divider */}
            <div className="w-full h-px mb-1" style={{ background: "rgba(233, 193, 118, 0.12)" }} />

            {/* Name */}
            <h3 className="font-headline text-base sm:text-lg text-foreground leading-snug">
              {a.name}
            </h3>

            {/* Detail line */}
            <p className="text-xs text-primary/80 font-medium tracking-wide">
              {a.detail}
            </p>

            {/* Description */}
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              {a.desc}
            </p>
          </div>
        ))}
      </div>

      {/* "First in Turkey" callout */}
      <div
        className="rounded-lg px-8 py-7 text-center mb-8"
        style={{
          background: "rgba(233, 193, 118, 0.05)",
          border: "1px solid rgba(233, 193, 118, 0.25)",
        }}
      >
        <p className="font-headline italic text-lg sm:text-xl gold-gradient-text leading-snug">
          "The first clinic in Turkey to successfully obtain both JCI and TEMOS accreditations internationally."
        </p>
      </div>

      {/* CTA to full Awards page */}
      <div className="text-center">
        <Link
          to="/awards"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary hover:text-primary/80 transition-colors duration-300"
        >
          View Full Accreditations Page
          <span className="text-base">→</span>
        </Link>
      </div>
    </div>
  </section>
);

export default AccreditationsSection;
