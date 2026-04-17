import Layout from "@/components/Layout";

/* ─── SVG badge representations ─── */

const JciLogo = () => (
  <svg viewBox="0 0 140 140" className="w-28 h-28 mx-auto">
    <circle cx="70" cy="70" r="66" fill="none" stroke="#c9a227" strokeWidth="3.5" />
    <circle cx="70" cy="70" r="56" fill="none" stroke="#c9a227" strokeWidth="1" strokeDasharray="5 3" />
    <circle cx="70" cy="70" r="48" fill="rgba(201,162,39,0.06)" />
    <text x="70" y="60" textAnchor="middle" fill="#c9a227" fontSize="28" fontWeight="800" fontFamily="serif">JCI</text>
    <text x="70" y="76" textAnchor="middle" fill="#c9a227" fontSize="9" fontWeight="600" fontFamily="sans-serif" letterSpacing="1.5">QUALITY</text>
    <text x="70" y="88" textAnchor="middle" fill="#c9a227" fontSize="9" fontWeight="600" fontFamily="sans-serif" letterSpacing="1.5">APPROVAL</text>
    <path d="M50 98 Q70 106 90 98" fill="none" stroke="#c9a227" strokeWidth="1.5" />
    <text x="70" y="112" textAnchor="middle" fill="#c9a22780" fontSize="7.5" fontFamily="sans-serif" letterSpacing="0.5">7TH EDITION · 2021</text>
  </svg>
);

const LeedLogo = () => (
  <svg viewBox="0 0 160 110" className="w-36 h-24 mx-auto">
    <rect x="2" y="2" width="156" height="106" rx="8" fill="none" stroke="#4a7c59" strokeWidth="2.5" />
    <rect x="8" y="8" width="144" height="94" rx="5" fill="#1a3a2a" />
    <text x="80" y="36" textAnchor="middle" fill="#a8d5b5" fontSize="10" fontWeight="700" fontFamily="sans-serif" letterSpacing="2.5">LEADERSHIP IN</text>
    <text x="80" y="62" textAnchor="middle" fill="#6dbf8a" fontSize="28" fontWeight="900" fontFamily="sans-serif" letterSpacing="3">LEED</text>
    <rect x="32" y="68" width="96" height="22" rx="4" fill="#4a7c59" />
    <text x="80" y="83" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="800" fontFamily="sans-serif" letterSpacing="3">GOLD</text>
    <text x="80" y="100" textAnchor="middle" fill="#4a7c5990" fontSize="8.5" fontFamily="sans-serif">2020</text>
  </svg>
);

const TemosLogo = () => (
  <svg viewBox="0 0 140 140" className="w-28 h-28 mx-auto">
    <circle cx="70" cy="70" r="66" fill="#003366" />
    <circle cx="70" cy="70" r="60" fill="none" stroke="#ffffff20" strokeWidth="1" />
    <text x="70" y="48" textAnchor="middle" fill="#fff" fontSize="9.5" fontWeight="600" fontFamily="sans-serif" letterSpacing="1.5">EXCELLENCE IN</text>
    <text x="70" y="63" textAnchor="middle" fill="#fff" fontSize="9.5" fontWeight="600" fontFamily="sans-serif" letterSpacing="1.5">MEDICAL TOURISM</text>
    <text x="70" y="88" textAnchor="middle" fill="#fff" fontSize="24" fontWeight="900" fontFamily="serif" fontStyle="italic">Temos</text>
    <text x="70" y="103" textAnchor="middle" fill="#ffffff70" fontSize="8" fontFamily="sans-serif" letterSpacing="1.5">ACCREDITED PARTNER</text>
  </svg>
);

const TurqualityLogo = () => (
  <svg viewBox="0 0 180 76" className="w-40 h-16 mx-auto">
    <rect x="2" y="2" width="176" height="72" rx="6" fill="#003399" />
    <text x="90" y="38" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="900" fontFamily="sans-serif" letterSpacing="1.5">TURQUALITY</text>
    <text x="90" y="57" textAnchor="middle" fill="#ffffff60" fontSize="9" fontFamily="sans-serif" letterSpacing="2.5">BRANDING SUPPORT</text>
    <text x="155" y="35" textAnchor="start" fill="#fff" fontSize="12" fontFamily="sans-serif">®</text>
  </svg>
);

const EfqmLogo = () => (
  <svg viewBox="0 0 150 100" className="w-36 h-20 mx-auto">
    <rect x="2" y="2" width="146" height="96" rx="7" fill="#1a2a4a" />
    <path d="M35 50 C35 34 58 34 75 50 C92 66 115 66 115 50 C115 34 92 34 75 50 C58 66 35 66 35 50Z"
      fill="none" stroke="#4db8b0" strokeWidth="4" />
    <text x="75" y="86" textAnchor="middle" fill="#fff" fontSize="17" fontWeight="900" fontFamily="sans-serif" letterSpacing="4">EFQM</text>
  </svg>
);

/* ─── Accreditation data ─── */

const awards = [
  {
    abbr: "JCI",
    logo: <JciLogo />,
    name: "Joint Commission International",
    detail: "Quality Certificate · 7th Edition · First Audit May 2021",
    body: `JCI (Joint Commission International) is a prestigious accreditation organization operating on an international platform, prioritizing patient and employee safety above all else.

Choice Clinic successfully adhered to the rigorous 7th edition standards of JCI Accreditation and was awarded its Quality Certificate during the very first audit in May 2021 — a remarkable achievement that demonstrates our clinic's unwavering commitment to the highest standards of care from day one.`,
  },
  {
    abbr: "LEED",
    logo: <LeedLogo />,
    name: "LEED Gold Green Building Certification",
    detail: "Gold Certification · 2020",
    body: `The LEED (Leadership in Energy and Environmental Design) Green Building Certification is the most widely adopted and internationally recognized green building rating system in both Turkey and worldwide.

From the very beginning of the Choice Clinic project, protecting the environment and preserving nature has been a core principle embedded in every architectural and operational decision. This commitment culminated in the achievement of the prestigious LEED Gold Certification in 2020.`,
  },
  {
    abbr: "TEMOS",
    logo: <TemosLogo />,
    name: "TEMOS — Excellence in Medical Tourism",
    detail: "German Accreditation · Accredited Partner",
    body: `TEMOS is a German-based accreditation organization dedicated to improving the quality of services provided to both domestic and international patients by healthcare institutions worldwide.

Following comprehensive on-site inspections, Choice Clinic was awarded two prestigious TEMOS certificates: Quality in Medical Care and Excellence in Medical Tourism — placing us among an elite group of globally recognized medical facilities.`,
  },
  {
    abbr: "TURQUALITY®",
    logo: <TurqualityLogo />,
    name: "Turquality Branding Support Program",
    detail: "State-Supported · International Branding",
    body: `TURQUALITY® is the first and only state-supported branding program in Turkey, specifically designed to establish and promote the image of Turkish brands internationally. The program supports companies with competitive products that have strong global branding potential.

Following rigorous independent audits, Choice Clinic has successfully joined the prestigious Turquality Branding Support Program — a recognition that underscores our clinic's standing as a world-class medical tourism destination representing Turkey on the international stage.`,
  },
  {
    abbr: "EFQM",
    logo: <EfqmLogo />,
    name: "European Foundation for Quality Management",
    detail: "European Quality Framework Certificate",
    body: `EFQM (European Foundation for Quality Management) is an innovative, non-profit organization that combines data-driven insights, structured learning within a proven quality model, and global development and networking opportunities for the benefit of institutions and individuals worldwide.

Following thorough independent audits, Choice Clinic has been awarded the EFQM certificate — a testament to our systematic approach to quality management and our culture of continuous improvement.`,
  },
];

const AwardsPage = () => (
  <Layout>
    {/* Hero */}
    <section
      className="pt-24 pb-16 px-6 md:px-10 lg:px-16 text-center"
      style={{ background: "#0e0e0e", borderBottom: "1px solid rgba(233,193,118,0.1)" }}
    >
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary mb-4">
        Certified Excellence
      </p>
      <h1 className="font-headline italic text-4xl sm:text-5xl gold-gradient-text mb-5">
        Accreditations &amp; Awards
      </h1>
      <p className="text-sm text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
        Choice Clinic proudly holds five internationally recognised accreditations spanning healthcare quality,
        medical tourism excellence, sustainable architecture, and European quality management standards.
      </p>

      {/* "First in Turkey" banner */}
      <div
        className="mt-10 max-w-2xl mx-auto rounded-lg px-8 py-5"
        style={{
          background: "rgba(233, 193, 118, 0.07)",
          border: "1px solid rgba(233, 193, 118, 0.3)",
        }}
      >
        <p className="font-headline italic text-base sm:text-lg gold-gradient-text">
          "The first clinic in Turkey to successfully obtain both JCI and TEMOS accreditations internationally."
        </p>
      </div>
    </section>

    {/* Award cards */}
    <section
      className="px-6 md:px-10 lg:px-16 py-20"
      style={{ background: "#131313" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {awards.map((a, i) => (
          <div
            key={a.abbr}
            className="rounded-lg overflow-hidden"
            style={{
              background: "#1c1b1b",
              border: "1px solid rgba(233, 193, 118, 0.15)",
            }}
          >
            <div className={`flex flex-col md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              {/* Logo panel */}
              <div
                className="md:w-56 flex-shrink-0 flex items-center justify-center py-10 px-8"
                style={{
                  background: "rgba(233, 193, 118, 0.04)",
                  borderRight: i % 2 === 0 ? "1px solid rgba(233,193,118,0.1)" : "none",
                  borderLeft: i % 2 === 1 ? "1px solid rgba(233,193,118,0.1)" : "none",
                }}
              >
                {a.logo}
              </div>

              {/* Content panel */}
              <div className="flex-1 p-8 md:p-10">
                {/* Badge */}
                <span
                  className="inline-block px-3 py-1 rounded text-xs font-bold tracking-widest uppercase mb-4"
                  style={{
                    background: "rgba(233, 193, 118, 0.08)",
                    border: "1px solid rgba(233, 193, 118, 0.25)",
                    color: "#e9c176",
                  }}
                >
                  {a.abbr}
                </span>

                <h2 className="font-headline text-xl sm:text-2xl text-foreground mb-2 leading-snug">
                  {a.name}
                </h2>

                <p className="text-xs text-primary/80 font-medium tracking-wide mb-4">
                  {a.detail}
                </p>

                <div
                  className="w-10 h-px mb-5"
                  style={{ background: "rgba(233, 193, 118, 0.3)" }}
                />

                {a.body.split("\n\n").map((para, j) => (
                  <p key={j} className="text-sm text-muted-foreground font-light leading-relaxed mb-4 last:mb-0">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default AwardsPage;
