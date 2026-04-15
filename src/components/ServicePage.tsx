import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

interface BentoCard {
  title: string;
  desc: string;
  image?: string;
  span?: "large" | "normal";
}

interface Procedure {
  title: string;
  desc: string;
}

interface CaseStudy {
  image: string;
  label: string;
  title: string;
}

interface Surgeon {
  name: string;
  role: string;
  desc: string;
  image: string;
}

interface BeforeAfter {
  before: string;
  after: string;
  title: string;
  desc: string;
  stats?: { value: string; label: string }[];
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  heroLabel?: string;
  heroHeadline: [string, string];
  aboutTitle: string;
  aboutText: string[];
  features: { title: string; desc: string }[];
  procedures: Procedure[];
  bentoCards?: BentoCard[];
  caseStudies?: CaseStudy[];
  beforeAfter?: BeforeAfter[];
  surgeons?: Surgeon[];
  children?: ReactNode;
}

const ServicePage = ({
  title,
  subtitle,
  heroImage,
  heroLabel,
  heroHeadline,
  aboutTitle,
  aboutText,
  features,
  procedures,
  bentoCards,
  caseStudies,
  beforeAfter,
  surgeons,
}: ServicePageProps) => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[795px] flex items-center px-6 sm:px-8 md:px-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt={title} className="w-full h-full object-cover brightness-[0.4] contrast-[1.1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
      </div>
      <div className="relative z-10 max-w-4xl">
        {heroLabel && (
          <p className="text-primary font-sans uppercase tracking-[0.4em] text-xs mb-6">
            {heroLabel}
          </p>
        )}
        <h1 className="font-headline text-5xl md:text-8xl text-foreground leading-[1.1] mb-8 tracking-tighter">
          {heroHeadline[0]} <br />
          <span className="italic text-primary-container">{heroHeadline[1]}</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed mb-12 font-light">
          {subtitle}
        </p>
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          <a href="#consultation" className="gold-gradient-bg text-on-primary font-bold px-10 py-5 rounded-lg flex items-center gap-3 hover:scale-105 transition-transform duration-500 text-center">
            Schedule a Consultation
            <span className="text-lg">→</span>
          </a>
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="w-12 h-px" style={{ background: "rgba(78, 70, 57, 0.4)" }} />
            <span className="text-xs uppercase tracking-widest">The Pursuit of Excellence</span>
          </div>
        </div>
      </div>
    </section>

    {/* Bento Grid */}
    {bentoCards && bentoCards.length > 0 && (
      <section className="py-20 sm:py-32 px-6 md:px-24" style={{ background: "#0e0e0e" }}>
        <div className="mb-16">
          <p className="text-primary font-bold tracking-widest uppercase text-xs mb-4">Techniques & Expertise</p>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">{aboutTitle}</h2>
          <div className="w-24 h-1 gold-gradient-bg rounded" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          {bentoCards.map((card, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-lg p-8 flex flex-col justify-end transition-colors duration-500 ${
                card.span === "large" ? "md:col-span-8" : "md:col-span-4"
              }`}
              style={{ background: "#201f1f" }}
            >
              {card.image && (
                <>
                  <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-90" />
                </>
              )}
              <div className="relative z-10">
                <h3 className="font-headline text-xl sm:text-2xl mb-2 text-foreground">{card.title}</h3>
                <p className="text-muted-foreground text-sm max-w-md mb-4 font-light">{card.desc}</p>
                <span className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Explore →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    )}

    {/* About / Expertise */}
    <section className="py-20 sm:py-32 px-6 md:px-24" style={{ background: "#1c1b1b" }}>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <p className="text-primary font-bold tracking-widest uppercase text-xs mb-4">Clinical Excellence</p>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl text-foreground">{aboutTitle}</h2>
        </div>
        <p className="text-muted-foreground max-w-sm font-light leading-relaxed text-sm sm:text-base">
          {aboutText[0]}
        </p>
      </div>

      {aboutText.slice(1).length > 0 && (
        <div className="max-w-3xl mb-12 space-y-4">
          {aboutText.slice(1).map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <div key={f.title} className="tonal-card p-8 rounded-lg flex flex-col" style={{ border: "1px solid rgba(78, 70, 57, 0.05)" }}>
            <h4 className="font-bold uppercase tracking-widest text-xs sm:text-sm text-primary mb-3">{f.title}</h4>
            <p className="text-muted-foreground text-sm leading-relaxed font-light">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Results Gallery — Case Studies (grid with hover glass panels) */}
    {caseStudies && caseStudies.length > 0 && (
      <section className="py-20 sm:py-32 bg-background">
        <div className="text-center mb-20 px-6">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            {title} <span className="italic gold-gradient-text">Transformations</span>
          </h2>
          <p className="text-muted-foreground uppercase tracking-[0.3em] text-xs">Before & After Masterpieces</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(78, 70, 57, 0.1)" }}>
          {caseStudies.map((cs, i) => (
            <div key={i} className="relative aspect-square group bg-background overflow-hidden">
              <img src={cs.image} alt={cs.title} className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-1000" />
              <div
                className="absolute bottom-0 left-0 right-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                style={{ background: "rgba(19, 19, 19, 0.6)", backdropFilter: "blur(20px)" }}
              >
                <p className="text-primary text-xs uppercase tracking-widest mb-1">{cs.label}</p>
                <h4 className="font-headline text-xl text-foreground">{cs.title}</h4>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a href="#consultation" className="border border-outline/30 text-foreground px-12 py-4 hover:border-primary transition-colors duration-500 uppercase tracking-widest text-xs font-bold">
            View Full Gallery
          </a>
        </div>
      </section>
    )}

    {/* Results Gallery — Before/After (asymmetric layout, e.g. for hair) */}
    {beforeAfter && beforeAfter.length > 0 && (
      <section className="py-20 sm:py-32 bg-background">
        <div className="px-6 md:px-24 mb-16 text-center">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 italic">Our Results Gallery</h2>
          <div className="w-24 h-1 gold-gradient-bg mx-auto rounded" />
        </div>
        <div className="flex flex-col gap-24">
          {beforeAfter.map((ba, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center gap-12 px-6 md:px-24">
              <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src={ba.before} alt="Before" className="rounded-lg w-full h-80 object-cover grayscale opacity-60" />
                  <span className="text-center block text-[10px] tracking-widest uppercase text-muted-foreground">Before</span>
                </div>
                <div className="space-y-4 pt-12">
                  <img src={ba.after} alt="After" className="rounded-lg w-full h-80 object-cover" />
                  <span className="text-center block text-[10px] tracking-widest uppercase text-primary">After</span>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h4 className="text-2xl font-headline italic text-primary">{ba.title}</h4>
                <p className="text-muted-foreground leading-relaxed font-light">{ba.desc}</p>
                {ba.stats && ba.stats.length > 0 && (
                  <div className="flex gap-8 pt-6" style={{ borderTop: "1px solid rgba(78, 70, 57, 0.2)" }}>
                    {ba.stats.map((s, j) => (
                      <div key={j}>
                        <p className="gold-gradient-text font-bold text-xl">{s.value}</p>
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    )}

    {/* Meet Our Surgeons */}
    {surgeons && surgeons.length > 0 && (
      <section className="py-20 sm:py-32 px-6 md:px-24" style={{ background: "#1c1b1b" }}>
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl text-foreground mb-8">Meet Our Specialists</h2>
          <p className="text-muted-foreground font-light">
            World-renowned specialists who view every procedure through the dual lens of medical excellence and aesthetic harmony.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {surgeons.map((doc, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 items-center p-8 rounded-lg group" style={{ background: "#2a2a2a" }}>
              <div className="w-48 h-64 overflow-hidden rounded-lg flex-shrink-0" style={{ background: "#353534" }}>
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-headline text-foreground">{doc.name}</h3>
                <p className="text-primary font-medium uppercase tracking-widest text-xs">{doc.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">{doc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )}

    {/* Procedures */}
    <section id="procedures" className="py-20 sm:py-32 px-6 md:px-24 bg-background">
      <div className="text-center mb-16">
        <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 italic">{title} Procedures</h2>
        <div className="w-24 h-1 gold-gradient-bg mx-auto rounded" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {procedures.map((p) => (
          <div key={p.title} className="tonal-card p-8 rounded-lg group hover:border-outline-variant/20 transition-all duration-500" style={{ border: "1px solid transparent" }}>
            <h3 className="font-headline text-lg sm:text-xl mb-3 text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-light">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section id="consultation" className="py-24 sm:py-40 px-6 md:px-24 text-center relative overflow-hidden" style={{ background: "#0e0e0e" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-primary/50 to-transparent" />
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 text-foreground">
          Ready to <span className="italic gold-gradient-text">Get Started?</span>
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg mb-12 font-light">
          Private consultations are conducted under strict confidentiality. Our team will guide you through every step.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://wa.me/905000000000" target="_blank" rel="noopener noreferrer" className="gold-gradient-bg text-on-primary px-12 py-5 rounded-lg font-bold tracking-widest text-xs sm:text-sm uppercase shadow-2xl transition-all hover:shadow-primary/20 hover:scale-[1.02]">
            WhatsApp Us →
          </a>
          <Link to="/#contact" className="border border-outline/30 text-foreground px-12 py-5 rounded-lg font-bold tracking-widest uppercase text-xs sm:text-sm hover:bg-surface-container-high transition-colors">
            Contact Form
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default ServicePage;
