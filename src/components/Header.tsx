import React, { useState, useEffect } from "react";
import { CLINICAL_PHONE } from "../data";
import { useLanguage } from "../LanguageContext";
import logo from "../assets/logo.svg";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("Home", "హోమ్"), href: "#home" },
    { name: t("Doctors", "వైద్యులు"), href: "#doctors" },
    { name: t("Services", "సేవలు"), href: "#services" },
    { name: t("Facilities", "సౌకర్యాలు"), href: "#facilities" },
    { name: t("Gallery", "గ్యాలరీ"), href: "#gallery" },
    { name: t("Contact", "సంప్రదించండి"), href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 90;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white border-b-3 border-med-blue py-3 shadow-[0_4px_0_0_rgba(45,74,71,0.08)]"
          : "bg-off-white border-b-2 border-med-blue/30 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with safe image loading & brutalist typographic fallback */}
          <a
            id="logo-brand"
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Mahendra Hospitals Home"
          >
            {!logoError ? (
              <div className="flex items-center gap-2">
                <img
                  src={logo}
                  alt="Mahendra Hospitals Logo"
                  onError={() => setLogoError(true)}
                  className="h-12 w-auto object-contain select-none"
                  referrerPolicy="no-referrer"
                />
                <span className="font-sans text-sm sm:text-base font-black text-med-blue tracking-tight hidden sm:block">
                  Mahendra Hospitals
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 border-2 border-med-blue bg-med-amber flex items-center justify-center font-bold text-med-blue shadow-[2px_2px_0_1px_#2D4A47] text-lg rounded-none transition-transform group-hover:rotate-12">
                  <i className="fa-solid fa-plus-square text-lg"></i>
                </div>
                <div>
                  <span className="font-serif text-lg sm:text-xl font-black text-med-blue tracking-tight block">
                    Mahendra <span className="text-med-teal">Hospitals</span>
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-med-teal font-sans block -mt-1 font-extrabold">
                    Vizianagaram
                  </span>
                </div>
              </div>
            )}
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-sans text-xs uppercase font-extrabold text-charcoal hover:text-med-amber hover:bg-med-blue/5 px-3 py-2 transition-all tracking-wider border-b-2 border-transparent hover:border-med-blue"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Phone Badge / Actions */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <button
              onClick={() => setLanguage(language === "en" ? "te" : "en")}
              className="flex items-center gap-1.5 bg-[#F7F3ED] text-[#2D4A47] hover:bg-[#C8A97A] hover:text-white font-sans font-black text-xs uppercase tracking-wider px-3.5 py-2 border-2 border-med-blue shadow-[3px_3px_0_0_#2D4A47] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_#2D4A47] transition-all cursor-pointer transition-colors"
              title={t("Translate to Telugu", "ఇంగ్లీష్ లోనికి మార్చండి")}
              aria-label="Toggle Language"
            >
              <i className="fa-solid fa-language text-sm"></i>
              <span className="font-sans font-black tracking-wider">
                {language === "en" ? "తెలుగు" : "EN"}
              </span>
            </button>

            <a
              id="header-phone-badge"
              href={`tel:${CLINICAL_PHONE}`}
              className="hidden sm:flex items-center gap-2 bg-med-amber text-charcoal font-sans font-black text-xs uppercase tracking-wider px-4 py-2 border-2 border-med-blue shadow-[3px_3px_0_0_#2D4A47] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_#2D4A47] transition-all"
              aria-label="Call Hospital Emergency"
            >
              <i className="fa-solid fa-phone-flip text-xs"></i>
              <span>📞 {CLINICAL_PHONE}</span>
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 border-2 border-med-blue bg-white text-med-blue hover:bg-med-blue hover:text-white transition-colors"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMobileMenuOpen}
            >
              <i className={`fa-solid ${isMobileMenuOpen ? "fa-xmark" : "fa-bars"} text-lg`}></i>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        id="mobile-nav-drawer"
        className={`lg:hidden fixed left-0 w-full bg-white border-b-3 border-med-blue transition-all duration-200 ease-in-out origin-top ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-4 overflow-hidden pointer-events-none"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2 bg-[#F7F3ED]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block font-sans text-xs uppercase font-extrabold text-charcoal hover:bg-white hover:text-med-blue border-2 border-transparent hover:border-med-blue px-4 py-3 rounded-none transition-all shadow-none"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={`tel:${CLINICAL_PHONE}`}
              className="flex items-center justify-center gap-2.5 bg-med-amber text-charcoal font-sans font-black text-xs uppercase tracking-wider py-3 border-2 border-med-blue shadow-[4px_4px_0_0_#2D4A47]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fa-solid fa-phone"></i>
              <span>{t("Call Emergency", "అత్యవసర కాల్")}: {CLINICAL_PHONE}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
