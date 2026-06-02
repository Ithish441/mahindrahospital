import { useState } from "react";
import { SERVICES } from "../data";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "./Reveal";
import { useLanguage } from "../LanguageContext";

type CategoryFilter = "All" | "Gastroenterology" | "Gynaecology & Surgery" | "General & Diagnostics" | "Support Services";

export default function Services() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");

  const categories: CategoryFilter[] = [
    "All",
    "Gastroenterology",
    "Gynaecology & Surgery",
    "General & Diagnostics",
    "Support Services"
  ];

  const categoryTranslations: { [key in CategoryFilter]: string } = {
    "All": "అన్ని విభాగాలు",
    "Gastroenterology": "గ్యాస్ట్రోఎంటరాలజీ",
    "Gynaecology & Surgery": "గైనకాలజీ & సర్జరీ",
    "General & Diagnostics": "జనరల్ & రోగ నిర్ధారణ",
    "Support Services": "సహాయక సేవలు"
  };

  const filteredServices = activeCategory === "All"
    ? SERVICES
    : SERVICES.filter(service => service.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-white border-b-3 border-med-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title block */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-charcoal font-sans uppercase font-black tracking-widest text-xs px-3.5 py-1.5 bg-med-amber border-2 border-med-blue shadow-[2px_2px_0_0_#2D4A47] inline-block mb-4 rounded-none">
              {t("Comprehensive Care", "సమగ్ర సంరక్షణ")}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-med-blue tracking-tight uppercase">
              {t("Medical Services & Departments", "వైద్య सేవలు & విభాగాలు")}
            </h2>
            <p className="font-telugu text-lg text-med-teal font-extrabold mt-2 uppercase">
              {t("24/7 Outpatient, Inpatient, and Trauma Services", "అన్ని రకాల వైద్య సేవలు అందుబాటులో కలవు")}
            </p>
            <div className="w-20 h-1.5 bg-med-blue mx-auto mt-4"></div>
            <p className="font-sans text-charcoal mt-5 leading-relaxed text-sm sm:text-base font-semibold">
              {t(
                "Mahendra Hospitals provides comprehensive outpatient, inpatient, and 24-hour critical care services. Our core focus spans digestive health, women's wellness, advanced childbirth, and multispeciality diagnostics.",
                "మహేంద్ర హాస్పిటల్స్ ద్వారా అవుట్ పేషెంట్, ఇన్‌పేషెంట్ మరియు 24 గంటల అత్యవసర వైద్య సేవలు అందుబాటులో కలవు. గ్యాస్ట్రో, కాలేయం, మహిళా వైద్యం, సుఖ ప్రసవం మరియు మల్టీస్పెషాలిటీ నిర్ధారణలు మా ప్రత్యేక లక్షణాలు."
              )}
            </p>
          </div>
        </Reveal>

        {/* Filter Tabs */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2.5 rounded-none font-sans text-xs uppercase font-extrabold tracking-wider border-2 transition-all whitespace-nowrap focus:outline-none cursor-pointer ${
                  activeCategory === cat
                    ? "bg-med-blue border-med-blue text-white shadow-none"
                    : "bg-white border-med-blue text-charcoal shadow-[2px_2px_0_0_#2D4A47] hover:bg-off-white hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#2D4A47]"
                }`}
              >
                {t(cat === "All" ? "All Departments" : cat, categoryTranslations[cat])}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Services Grid */}
        <motion.div
          id="services-grid"
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.15, ease: "easeInOut" }}
                key={service.id}
                id={`service-card-${service.id}`}
                className="group bg-white rounded-none p-5 border-2 border-med-blue shadow-[4px_4px_0_0_#2D4A47] hover:shadow-[6px_6px_0_0_#2D4A47] hover:translate-x-[-1px] hover:translate-y-[-1px] flex items-start gap-4 transition-all duration-150"
              >
                {/* Icon Wrapper */}
                <div className="w-11 h-11 border-2 border-med-blue bg-off-white flex items-center justify-center text-med-blue group-hover:bg-med-teal group-hover:text-white transition-all shrink-0">
                  <i className={`fa-solid ${service.icon} text-lg`}></i>
                </div>

                {/* Content */}
                <div className="space-y-1">
                  <span className="text-[9px] font-mono font-black text-med-teal tracking-wider uppercase block">
                    {t(service.category, categoryTranslations[service.category as CategoryFilter] || service.category)}
                  </span>
                  <h3 className="font-sans text-sm sm:text-base font-black text-charcoal hover:text-med-teal transition-colors duration-150 leading-tight">
                    {t(service.name, service.teluguName || service.name)}
                  </h3>
                  {service.teluguName && language === "en" && (
                    <p className="font-telugu text-xs text-[#8B7355] font-bold leading-tight">
                      {service.teluguName}
                    </p>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Insurance Badge Note */}
        <Reveal delay={0.2}>
          <div className="mt-14 bg-white border-3 border-med-blue rounded-none p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 shadow-[6px_6px_0_0_#C8A97A]">
            <div className="w-16 h-16 border-2 border-med-blue bg-med-amber flex items-center justify-center text-charcoal shrink-0 font-bold text-2xl">
              <i className="fa-solid fa-house-chimney-medical"></i>
            </div>
            <div className="text-center md:text-left flex-1 space-y-1">
              <h4 className="font-sans text-base sm:text-lg font-black uppercase text-med-blue tracking-tight">
                {t("All Major Insurances and Arogyasri Handled", "అన్ని ప్రముఖ ఇన్సూరెన్స్‌లు మరియు ఆరోగ్యశ్రీ సదుపాయం కలదు")}
              </h4>
              <p className="font-sans text-xs sm:text-sm text-charcoal leading-relaxed font-semibold">
                {t(
                  "We accept cashless procedures and reimbursement plans with central, state government schemes, corporate tie-ups, and individual medical covers. Please meet our Desk Coordinator for guidance.",
                  "కేంద్ర, రాష్ట్ర ప్రభుత్వ పథకాలు, వివిధ కార్పొరేట్ సంస్థల టై అప్‌లతో కూడిన క్యాష్ లెస్ సదుపాయాలు మరియు రీఇంబర్స్మెంట్ ప్లాన్‌లను మేము అంగీకరిస్తాము. సహాయం కొరకు మా డెస్క్ కోఆర్డిเนటర్‌ను సంప్రదించండి."
                )}
              </p>
            </div>
            <a
              href="#contact"
              className="px-6 py-3 bg-med-blue text-white border-2 border-med-blue hover:bg-med-teal hover:border-med-teal font-sans font-black text-xs uppercase tracking-wider rounded-none shadow-[2px_2px_0_0_#C8A97A] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#C8A97A] transition-all shrink-0"
            >
              {t("Verify Eligibility", "అర్హతను సరిచూసుకోండి")}
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
