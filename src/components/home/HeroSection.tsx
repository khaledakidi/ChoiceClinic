import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative h-[600px] md:h-[640px] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt="Choice Clinic Istanbul"
        className="w-full h-full object-cover brightness-[0.55] contrast-[1.05]"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/30 to-background/60" />
    </div>

    <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
      <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-8 tracking-tight">
        Advanced Care &<br />
        <span className="gold-gradient-text">Aesthetic Perfection</span>
      </h1>
      <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 font-light leading-relaxed">
        Experience life-changing cosmetic and dental procedures tailored for
        discerning patients.
      </p>
      <a
        href="#contact"
        className="inline-block gold-gradient-bg text-on-primary font-bold px-10 py-4 rounded-md tracking-[0.2em] uppercase text-xs hover:scale-105 transition-transform duration-500 shadow-2xl"
      >
        Schedule a Consultation
      </a>
    </div>
  </section>
);

export default HeroSection;
