import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { useI18n, Lang } from "@/contexts/I18nContext";
import { useTheme } from "@/contexts/ThemeContext";
import BrandLogo from "@/components/BrandLogo";

const langNames: Record<Lang, string> = { en: "English", ar: "العربية", tr: "Türkçe" };
const langFlags: Record<Lang, string> = { en: "🇬🇧", ar: "🇸🇦", tr: "🇹🇷" };

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const { t, lang, setLang } = useI18n();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services", type: "anchor" as const },
    { label: "Specialists", href: "#specialists", type: "anchor" as const },
    { label: "Before & After", href: "#gallery", type: "anchor" as const },
    { label: "Awards", href: "/awards", type: "route" as const },
    { label: "Contact", href: "#contact", type: "anchor" as const },
  ];

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: "#141414",
        borderBottom: "1px solid rgba(78, 70, 57, 0.2)",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.6)",
      }}
    >
      {/* Top utility bar */}
      <div
        className="border-b"
        style={{ borderColor: "rgba(78, 70, 57, 0.15)" }}
      >
        <div className="container mx-auto flex items-center justify-between py-2 px-4 text-xs">
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="tel:+905000000000"
              className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span className="hidden sm:inline">+90 500 000 00 00</span>
              <span className="sm:hidden">Call</span>
            </a>
            <a
              href="mailto:info@choiceclinic.net"
              className="hidden sm:flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>info@choiceclinic.net</span>
            </a>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-muted-foreground hover:text-primary transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground transition-all duration-300"
              >
                <span className="text-sm">{langFlags[lang]}</span>
                <span className="text-xs font-semibold uppercase">{lang}</span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-300 ${
                    langOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {langOpen && (
                <div
                  className="absolute top-full right-0 mt-2 w-44 rounded-lg shadow-2xl z-[60] overflow-hidden animate-fade-in"
                  style={{
                    background: "#2a2a2a",
                    border: "1px solid rgba(78, 70, 57, 0.2)",
                  }}
                >
                  <div className="p-1.5">
                    {(["en", "ar", "tr"] as Lang[]).map((l) => (
                      <button
                        key={l}
                        onClick={() => {
                          setLang(l);
                          setLangOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-300 ${
                          l === lang
                            ? "text-primary font-semibold"
                            : "text-foreground hover:text-primary"
                        }`}
                        style={
                          l === lang
                            ? { background: "rgba(233, 193, 118, 0.1)" }
                            : {}
                        }
                      >
                        <span className="text-base">{langFlags[l]}</span>
                        <span>{langNames[l]}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Centered logo */}
      <div className="container mx-auto flex flex-col items-center justify-center pt-7 pb-5 px-4">
        <Link to="/" className="flex-shrink-0">
          <BrandLogo className="h-20 sm:h-24 w-auto object-contain" />
        </Link>
      </div>

      {/* Horizontal nav */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(78, 70, 57, 0.2)" }}
      >
        <div className="container mx-auto flex items-center justify-center py-4 px-4 relative">
          {/* Mobile toggle (absolute positioned) */}
          <button
            className="lg:hidden absolute right-4 p-2 rounded-lg text-foreground hover:text-primary transition-colors duration-300"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10 xl:gap-14">
            {navLinks.map((link) =>
              link.type === "route" ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-xs font-bold uppercase tracking-[0.28em] text-foreground/85 hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-[0.28em] text-foreground/85 hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden animate-fade-in"
          style={{
            background: "#1c1b1b",
            borderTop: "1px solid rgba(78, 70, 57, 0.15)",
          }}
        >
          <div className="container mx-auto px-4 py-6 space-y-1">
            {navLinks.map((link) =>
              link.type === "route" ? (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-[0.2em] text-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-[0.2em] text-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              )
            )}

            <div className="pt-2 px-4 space-y-2">
              <Link
                to="/dental"
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                — Dental Treatment
              </Link>
              <Link
                to="/hair"
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                — Hair Transplant
              </Link>
              <Link
                to="/face"
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                — Face Aesthetic
              </Link>
              <Link
                to="/bariatric"
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                — Bariatric Surgery
              </Link>
              <Link
                to="/eye"
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                — Eye Surgery
              </Link>
            </div>

            <div className="pt-4 px-4">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full gold-gradient-bg text-on-primary font-bold py-4 rounded-lg tracking-widest uppercase text-xs text-center hover:brightness-110 transition-all duration-300"
              >
                {t("nav.freeConsultation")}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
