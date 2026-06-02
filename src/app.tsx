import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import Header from "./components/Header";
import Doctors from "./components/Doctors";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Reveal from "./components/Reveal";
import { useLanguage } from "./LanguageContext";
import {
  MOTTO_ENGLISH,
  MOTTO_TELUGU,
  HOSPITAL_STATS,
  IN_FLIGHT_FACILITIES,
  HOSPITAL_ADDRESS,
  CLINICAL_PHONE,
  CLINICAL_WHATSAPP,
} from "./data";

// Extracted Stats Ticker Counter in Neo-Brutalist Layout
function StatTicker({ value, suffix, label, telugu, icon }: { key?: string; value: number; suffix: string; label: string; telugu?: string; icon: string }) {
  const { language, t } = useLanguage();
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (end === 0) return;
    
    const totalDuration = 1800; // ms
    const incrementTime = Math.max(Math.floor(totalDuration / end), 12);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="bg-white border-2 border-med-blue p-5 rounded-none shadow-[4px_4px_0_0_#2D4A47] hover:shadow-[5px_5px_0_0_#2D4A47] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-start gap-4">
      <div className="w-10 h-10 border-2 border-med-blue bg-off-white flex items-center justify-center text-med-blue shrink-0">
        <i className={`fa-solid ${icon} text-sm`}></i>
      </div>
      <div>
        <div className="font-sans text-2xl sm:text-3xl font-black text-med-blue select-none">
          <span>{count}</span>
          <span className="text-med-teal font-mono">{t(suffix, suffix === " Senior" ? " సీనియర్" : suffix)}</span>
        </div>
        <p className="font-sans text-xs uppercase font-extrabold text-[#2D4A47] mt-1 tracking-tight leading-none">
          {t(label, telugu || label)}
        </p>
        {telugu && language === "en" && (
          <p className="font-telugu text-xs text-slate-500 font-bold leading-normal mt-1.5">
            {telugu}
          </p>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const { language, t } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for back-to-top status
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between overflow-x-hidden bg-white text-charcoal antialiased">
      
      {/* 1. STICKY HEADER */}
      <Header />

      <main className="flex-1">

        {/* 2. HERO SECTION */}
        <section
          id="home"
          className="relative pt-28 sm:pt-36 pb-20 md:pb-24 bg-off-white border-b-3 border-med-blue overflow-hidden"
        >
          {/* Subtle grid backdrop for neo-brutalist pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="brutalist-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#2D4A47" strokeWidth="1.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#brutalist-grid)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column Content */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <Reveal delay={0.1}>
                  <div className="flex flex-col items-center lg:items-start gap-4">
                    {/* Multi-layered Vector SVG Brand Identity Logo */}
                    <div className="w-full max-w-lg lg:max-w-xl pb-2">
                      <svg
                        viewBox="0 0 540 120"
                        className="w-full h-auto drop-shadow-sm select-none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* 3D shadow layer for logo box */}
                        <rect x="14" y="24" width="76" height="76" fill="#2D4A47" />
                        {/* Front identity box */}
                        <rect x="8" y="18" width="76" height="76" fill="#C8A97A" stroke="#2D4A47" strokeWidth="4" />
                        {/* Plus sign "+" inside container */}
                        <path d="M46 34V78M26 56H66" stroke="#2D4A47" strokeWidth="12" strokeLinecap="square" />
                        <circle cx="46" cy="56" r="4" fill="#F7F3ED" />
                        
                        {/* Serif premium typography "Mahendra" */}
                        <text
                          x="100"
                          y="58"
                          fontFamily="'Playfair Display', Georgia, serif"
                          fontWeight="900"
                          fontSize="38"
                          fill="#2D4A47"
                          letterSpacing="-0.5"
                        >
                          Mahendra <tspan fill="#3E6B65">Hospitals</tspan>
                        </text>
                        
                        {/* Subtitle location element "VIZIANAGARAM" */}
                        <text
                          x="102"
                          y="82"
                          fontFamily="'Space Grotesk', sans-serif"
                          fontWeight="900"
                          fontSize="13"
                          fill="#8B7355"
                          letterSpacing="6"
                        >
                          VIZIANAGARAM
                        </text>

                        {/* Traditional regional subtitle in elegant Telugu */}
                        <text
                          x="102"
                          y="102"
                          fontFamily="'Noto Sans Telugu', 'Inter', sans-serif"
                          fontWeight="800"
                          fontSize="12"
                          fill="#3E6B65"
                        >
                          అధునాతన శస్త్రచికిత్స మరియు కాన్పుల వైద్యాలయం
                        </text>
                      </svg>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.2}>
                  <p className="font-sans text-sm sm:text-base text-charcoal max-w-2xl mx-auto lg:mx-0 leading-relaxed font-semibold">
                    {t(
                      "Opposite RCM Catholic Church in Cantonment, Vizianagaram. Specialising in Surgical Gastroenterology, advanced laparoscopic surgery, 3D gynaecology, normal/C-section delivery, and 24-hour critical care.",
                      "కంటోన్మెంట్ లోని RCM క్యాథలిక్ చర్చి ఎదురుగా, విజయనగరం. సర్జికల్ గ్యాస్ట్రోఎంటరాలజీ, సరికొత్త లాపరోస్కోపిక్ శస్త్రచికిత్స, 3D గైనకాలజీ, సుఖ ప్రసవం/సిజేరియన్ మరియు 24 గంటల అత్యవసర వైద్య సేవలు మా ప్రత్యేకత."
                    )}
                  </p>
                </Reveal>

                {/* Main CTAs */}
                <Reveal delay={0.3}>
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                    <a
                      id="hero-cta-whatsapp"
                      href={`https://wa.me/${CLINICAL_WHATSAPP.replace("+", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-med-amber text-charcoal font-sans font-black text-xs uppercase tracking-wider px-8 py-4 border-2 border-med-blue shadow-[4px_4px_0_0_#2D4A47] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0_0_#2D4A47] transition-all flex items-center justify-center gap-2.5 rounded-none cursor-pointer"
                    >
                      <i className="fa-brands fa-whatsapp text-lg"></i>
                      <span>{t("Book Appointment via WhatsApp", "వాట్సాప్ ద్వారా అపాయింట్‌మెంట్ బుక్ చేసుకోండి")}</span>
                    </a>
                    
                    <a
                      id="hero-cta-tel"
                      href={`tel:${CLINICAL_PHONE}`}
                      className="w-full sm:w-auto bg-white text-med-blue font-sans font-black text-xs uppercase tracking-wider px-8 py-4 border-2 border-med-blue shadow-[4px_4px_0_0_#2D4A47] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0_0_#2D4A47] transition-all flex items-center justify-center gap-2 rounded-none cursor-pointer"
                    >
                      <i className="fa-solid fa-phone-volume"></i>
                      <span>{t("Call Now: ", "ఇప్పుడే కాల్ చేయండి: ")} {CLINICAL_PHONE}</span>
                    </a>
                  </div>
                </Reveal>
              </div>

              {/* Right Column: Brutalist Duty block panel */}
              <div className="lg:col-span-5 hidden lg:block">
                <Reveal direction="left" delay={0.2}>
                  <div className="relative w-full bg-white border-3 border-med-blue p-6 shadow-[8px_8px_0_0_#2D4A47]">
                    
                    <div className="border-b-2 border-dashed border-med-blue/30 pb-4 mb-4 flex items-center justify-between">
                      <span className="font-mono text-xs font-black uppercase text-[#8B7355]">{t("[x] DUTY CONTROL", "[x] డ్యూటీ కంట్రోల్")}</span>
                      <span className="font-mono text-[10px] bg-med-teal text-white border border-med-teal px-2 py-0.5 font-black uppercase">{t("LIVE", "లైవ్")}</span>
                    </div>

                    <div className="space-y-4">
                      {/* Emergency alert banner block */}
                      <div className="border-2 border-med-blue bg-off-white p-3 flex gap-3">
                        <div className="w-8 h-8 bg-med-amber border border-med-blue shrink-0 flex items-center justify-center font-black text-sm">!</div>
                        <div>
                          <h4 className="font-sans text-xs font-black uppercase text-med-blue">{t("24/7 Trauma Admissions", "24/7 అత్యవసర సర్జికల్ చేరికలు")}</h4>
                          <p className="font-sans text-[11px] text-charcoal font-semibold mt-0.5 leading-tight">{t("We remain open around the clock for labor room deliveries and surgical gut crises.", "కాన్పులు మరియు అత్యవసర సర్జరీల కోసం మా ఆసుపత్రి 24 గంటలు తెరిచి ఉంటుంది.")}</p>
                        </div>
                      </div>

                      {/* Clinical Timings schedule */}
                      <div className="border-2 border-med-blue bg-white p-3 space-y-1.5">
                        <h4 className="font-sans text-xs font-black uppercase text-med-teal tracking-wide">{t("Daily OP Timings", "రోజువారీ ఓపి వేళలు")}</h4>
                        <div className="flex items-center justify-between text-xs font-bold text-charcoal">
                          <span>{t("Morning Shift:", "ఉదయం షిఫ్ట్:")}</span>
                          <span className="font-mono">10:00 AM - 02:00 PM</span>
                        </div>
                        <div className="flex items-center justify-between text-xs font-bold text-charcoal">
                          <span>{t("Evening Shift:", "సాయంత్రం షిఫ్ట్:")}</span>
                          <span className="font-mono">05:00 PM - 08:30 PM</span>
                        </div>
                      </div>
                      
                      {/* Compass/Location info block */}
                      <div className="border-2 border-med-blue bg-[#F8F9FA] p-3 flex items-start gap-3">
                        <div className="w-8 h-8 text-med-teal flex items-center justify-center shrink-0">
                          <i className="fa-solid fa-map-pin text-sm"></i>
                        </div>
                        <div>
                          <h4 className="font-sans text-xs font-black uppercase text-charcoal">{t("Opposite RCM Church", "RCM చర్చి ఎదురుగా")}</h4>
                          <p className="font-sans text-[11px] text-slate-500 font-bold mt-0.5 leading-snug">{t("Easily reachable location in Cantonment, Vizianagaram, AP.", "కంటోన్మెంట్, విజయనగరంలో సులభంగా చేరుకోగల ప్రదేశం.")}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t-2 border-dashed border-med-blue/30 text-center">
                      <p className="font-sans text-[10px] uppercase font-black text-charcoal tracking-wide">
                        🇮🇳 Vizianagaram's Premier Gastro & Child Birth Center
                      </p>
                    </div>

                  </div>
                </Reveal>
              </div>

            </div>

            {/* Bottom Row Trust Badges Grid */}
            <div className="mt-16 pt-8 border-t-2 border-med-blue/20">
              <Reveal delay={0.4}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  {[
                    { text: t("24/7 EMERGENCY HELP", "24/7 అత్యవసర సహాయం"), icon: "fa-lock-open", sub: t("Admissions Open", "అడ్మిషన్లు ఓపెన్") },
                    { text: t("ADVANCED ICU SETUP", "అధునాతన ఐసీయూ నిరంతర పర్యవేక్షణ"), icon: "fa-bed-pulse", sub: t("Patient Care Ready", "వ్యవస్థ సిద్ధంగా ఉంది") },
                    { text: t("VENTILATOR SHIELD", "వెంటిలేటర్ సదుపాయం"), icon: "fa-mask-ventilator", sub: t("Fully Equipped", "అన్ని సదుపాయాలతో") },
                    { text: t("INSURANCE SUPPORT", "ఇన్సూరెన్స్ సదుపాయం"), icon: "fa-file-invoice-dollar", sub: t("Arogyasri Welcomed", "ఆరోగ్యశ్రీ లభించును") },
                  ].map((badge, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-none bg-white border-2 border-med-blue shadow-[3px_3px_0_0_#2D4A47] flex flex-col justify-between items-center"
                    >
                      <div className="text-med-teal text-base mb-1.5">
                        <i className={`fa-solid ${badge.icon}`}></i>
                      </div>
                      <span className="font-sans text-xs font-black text-med-blue block uppercase tracking-tight">
                        {badge.text}
                      </span>
                      <span className="font-mono text-[9px] text-[#8B7355] uppercase font-bold mt-1">
                        {badge.sub}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

          </div>
        </section>

        {/* 3. ABOUT THE HOSPITAL */}
        <section id="about" className="py-20 bg-white border-b-3 border-med-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column Text details */}
              <div className="lg:col-span-6 space-y-6">
                <Reveal direction="right">
                  <span className="text-charcoal font-sans uppercase font-black tracking-widest text-xs px-3.5 py-1.5 bg-med-amber border-2 border-med-blue shadow-[2px_2px_0_0_#2D4A47] inline-block mb-4 rounded-none">
                    {t("Who We Are", "మా గురించి")}
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl font-black text-med-blue tracking-tight leading-tight uppercase">
                    {t("Providing Safe Clinical Healthcare opposite RCM Church", "RCM చర్చి ఎదురుగా సురక్షితమైన వైద్య సేవలు")}
                  </h2>
                  <p className="font-telugu text-lg text-med-teal font-extrabold mt-2 uppercase">
                    విజయనగరం ప్రజలకు విశ్వసనీయమైన చికిత్సాలయం
                  </p>
                  <div className="w-20 h-1.5 bg-med-blue mt-4"></div>
                </Reveal>

                <Reveal delay={0.1}>
                  <p className="font-sans text-sm sm:text-base text-charcoal leading-relaxed font-semibold">
                    {t(
                      "Mahendra Hospitals is a premier multispeciality health port designed to offer exceptional surgical gastroenterology, advanced gynaecology keyhole operations, obstetrics deliveries, and diagnostic therapeutics at highly ethical standards.",
                      "మహేంద్ర హాస్పిటల్స్ విజయనగరంలో అత్యుత్తమ చికిత్సనందించే ఒక ప్రత్యేక మల్టీస్పెషాలిటీ కేంద్రం. సర్జికల్ గ్యాస్ట్రోఎంటరాలజీ, కీహోల్ సర్జరీలు, ప్రసవాలు మరియు రోగ నిర్ధారణ పరీక్షలు నైతిక విలువలతో కూడిన వైద్య ప్రమాణాలతో ఇక్కడ లభించును."
                    )}
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 font-semibold">
                    {t(
                      "Conveniently positioned on RCM Church Road in Cantonment, Vizianagaram, our medical setups are manned by highly trained care professionals who place your healing first. We house modern ventilator chambers, computerized ultrasound centers, sterile diagnostic endoscopy towers, and full-spectrum general physician labs.",
                      "విజయనగరం కంటోన్మెంట్ లోని RCM చర్చి రోడ్డులో ఉన్న మా వైద్యాలయంలో అత్యంత నైపుణ్యం గల సిబ్బంది రోగుల సంరక్షణకు ప్రాధాన్యత ఇస్తారు. మా వద్ద ఆధునిక వెంటిలేటర్లు, కంప్యూటరైజ్డ్ అల్ట్రాసౌండ్ స్కానింగ్, స్టెరైల్ ఎండోస్కోపీ టవర్లు మరియు అధునాతన ల్యాబ్ సౌకర్యాలు అందుబాటులో కలవు."
                    )}
                  </p>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="p-5 rounded-none bg-off-white border-2 border-med-blue shadow-[4px_4px_0_0_#2D4A47] space-y-1">
                    <span className="font-sans text-[10px] font-black text-med-blue block uppercase tracking-wider">
                      {t("📍 Our Physical Address Landmark:", "📍 మా చిరునామా మరియు ల్యాండ్‌మార్క్:")}
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-charcoal font-bold leading-relaxed">
                      {HOSPITAL_ADDRESS}
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* Right Column Grid containing the stats counter ticker animated on scroll */}
              <div className="lg:col-span-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {HOSPITAL_STATS.map((stat) => (
                    <StatTicker
                      key={stat.id}
                      value={stat.value}
                      suffix={stat.suffix}
                      label={stat.label}
                      telugu={stat.teluguLabel}
                      icon={stat.icon}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. DOCTORS SECTION */}
        <Doctors />

        {/* 5. OUR SERVICES */}
        <Services />

        {/* 6. FACILITIES / PROCEDURES (Advanced Highlight Section) */}
        <section id="facilities" className="py-20 bg-white border-b-3 border-med-blue relative overflow-hidden">
          {/* Subtle medical cross pattern backdrop */}
          <div className="absolute top-10 right-10 opacity-5 pointer-events-none text-med-teal hidden sm:block">
            <i className="fa-solid fa-square-plus text-[160px]"></i>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Title block */}
            <Reveal>
              <div className="text-center max-w-3xl mx-auto mb-14">
                <span className="text-charcoal font-sans uppercase font-black tracking-widest text-xs px-3.5 py-1.5 bg-med-amber border-2 border-med-blue shadow-[2px_2px_0_0_#2D4A47] inline-block mb-4 rounded-none">
                  {t("Super Speciality Excellence", "సూపర్ స్పెషాలిటీ సేవలు")}
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-med-blue tracking-tight uppercase">
                  {t("Advanced Surgical & Endoscopic Procedures", "అధునాతన శస్త్రచికిత్సలు మరియు ఎండోస్కోపీ సేవలు")}
                </h2>
                <p className="font-telugu text-lg text-med-teal font-extrabold mt-2 uppercase">
                  అధునాతన ఆసుపత్రి సౌకర్యాలు మరియు అత్యాధునిక శస్త్రచికిత్సలు
                </p>
                <div className="w-20 h-1.5 bg-med-blue mx-auto mt-4"></div>
                <p className="font-sans text-charcoal mt-5 leading-relaxed text-sm sm:text-base font-semibold">
                  {t(
                    "We are pioneer specialists in Vizianagaram representing the highest standard of procedural gastroenterology, endoscopic cancer palliation, and complete high-risk life support ICU.",
                    "సర్జికల్ గ్యాస్ట్రోఎంటరాలజీ, క్యాన్సర్ నివారణ సేవలు మరియు వెంటిలేటర్ ఐసీయూ సదుపాయములతో విజయనగరంలో అత్యున్నత ప్రమాణాలు గల చికిత్సను అందిస్తున్నాము."
                  )}
                </p>
              </div>
            </Reveal>

            {/* Procedures 2-column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-5xl mx-auto mb-14">
              {(() => {
                const facilityTranslations: { [key: string]: string } = {
                  "Video Gastroscopy, Colonoscopy & ERCP": "వీడియో గ్యాస్ట్రోస్కోపీ, కోలనోస్కోపీ & ERCP",
                  "Variceal Banding & Glue Injection": "వరిసియల్ బ్యాండింగ్ & గ్లూ ఇంజెక్షన్",
                  "Foreign Body Removal & Endoscopic Polypectomy": "ఫారిన్ బాడీ రిమూవల్ & ఎండోస్కోపిక్ పాలిపెక్టోమీ",
                  "Dilatation of Oesophageal Strictures & Achalasia Cardia": "అన్నవాహిక కుంచించుకుపోవడం & అచలాసియా కార్డియా చికిత్స",
                  "Endoscopic Therapy for Chronic Pancreatitis": "దీర్ఘకాలిక క్లోమగ్రంధి వాపుకు ఎండోస్కోపిక్ చికిత్స",
                  "Endoscopic Cystgastrostomy & Cystduodenostomy": "ఎండోస్కోపిక్ సిస్ట్‌గాస్ట్రోస్టోమీ & సిస్ట్‌డుయోడెనోస్టోమీ",
                  "Percutaneous Endoscopic Gastrostomy (PEG)": "పెర్క్యుటేనియస్ ఎండోస్కోపిక్ గ్యాస్ట్రోస్టోమీ (PEG)",
                  "Palliation of GI & Pancreatobiliary Cancers": "గ్యాస్ట్రో & పిత్తాశయ క్యాన్సర్ నివారణ సేవలు",
                  "Metallic Stenting (SEMS) & Liver Biopsy": "మెటాలిక్ స్టెంటింగ్ (SEMS) & లివర్ బయాప్సీ",
                  "Super Speciality ICU for Liver & Pancreatic Diseases": "కాలేయ & క్లోమ గ్రంధి వ్యాధుల కోసం సూపర్ స్పెషాలిటీ ICU",
                  "Ventilator Support": "వెంటిలేటర్ సపోర్ట్",
                  "24hr Pharmacy, Lab & Ambulance Services": "24 గంటల ఫార్మసీ, ల్యాబ్ & అంబులెన్స్ సేవలు"
                };
                return IN_FLIGHT_FACILITIES.map((facility, index) => (
                  <Reveal key={facility.id} delay={index * 0.04} direction={index % 2 === 0 ? "right" : "left"}>
                    <div className="flex items-start gap-3.5 p-3.5 bg-white hover:bg-off-white border-b-2 border-med-blue/20 transition-colors">
                      <div className="w-6 h-6 border-2 border-med-blue bg-med-amber flex items-center justify-center shrink-0 mt-0.5 text-xs text-charcoal font-black">
                        ✓
                      </div>
                      <span className="font-sans text-xs sm:text-sm font-black text-charcoal leading-snug">
                        {t(facility.name, facilityTranslations[facility.name] || facility.name)}
                      </span>
                    </div>
                  </Reveal>
                ));
              })()}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-14 p-6 sm:p-8 border-3 border-med-blue bg-white text-center max-w-3xl mx-auto shadow-[6px_6px_0_0_#2D4A47] rounded-none">
                <p className="font-sans text-xs uppercase tracking-widest font-black text-med-teal mb-2">
                  {t("Need Help Planning a Procedure?", "వైద్య ప్రణాళికలో సహాయం కావాలా?")}
                </p>
                <p className="font-sans text-xs sm:text-sm text-charcoal font-semibold max-w-2xl mx-auto leading-relaxed mb-6">
                  {t(
                    "Schedule direct counseling with Dr Mahendra Giri B or Dr Prasanthi B regarding medical timelines, laparoscopic procedures, C-section planning, or endoscopic evaluations.",
                    "వైద్య సమయం, లాపరోస్కోపిక్ సర్జరీలు, సిజేరియన్ కాన్పులు లేదా ఎండోస్కోపీ చికిత్సల కొరకు నేరుగా డాక్టర్ మహేంద్ర గిరి లేదా డాక్టర్ ప్రశాంతి గారి సంప్రదింపులను పొందండి."
                  )}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={`https://wa.me/${CLINICAL_WHATSAPP.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-med-amber text-charcoal border-2 border-med-blue font-sans font-black text-xs uppercase tracking-wider px-6 py-3 shadow-[2px_2px_0_0_#2D4A47] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#2D4A47] transition-all rounded-none cursor-pointer"
                  >
                    {t("Discuss on WhatsApp", "వాట్సాప్‌లో సంప్రదించండి")}
                  </a>
                  <a
                    href="#contact"
                    className="bg-white border-2 border-med-blue text-med-blue font-sans font-black text-xs uppercase tracking-wider px-6 py-3 shadow-[2px_2px_0_0_#2D4A47] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#2D4A47] transition-all rounded-none cursor-pointer"
                  >
                    {t("Request Call Back Center", "కాల్ బ్యాక్ కొరకు అభ్యర్థించండి")}
                  </a>
                </div>
              </div>
            </Reveal>

          </div>
        </section>

        {/* 7. PHOTO GALLERY */}
        <Gallery />

        {/* 8. CONTACT & LOCATION */}
        <Contact />

      </main>

      {/* 9. FLOATING ACTION WHATSAPP HELP BUTTON (Square Brutalist) */}
      <a
        id="floating-whatsapp-fab"
        href={`https://wa.me/${CLINICAL_WHATSAPP.replace("+", "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white w-14 h-14 border-3 border-med-blue flex items-center justify-center text-3xl shadow-[4px_4px_0_0_#2D4A47] transition-all hover:-translate-y-1 hover:translate-x-[-1px] rounded-none cursor-pointer"
        aria-label="Chat with Mahendra Hospitals Secretary Desk on WhatsApp"
        title="Chat with us"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

      {/* BACK TO TOP FLOATER BUTTON (Square Brutalist) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-7 z-30 bg-med-blue text-white w-11 h-11 border-2 border-med-blue flex items-center justify-center shadow-[3px_3px_0_0_#2D4A47] transition-all hover:-translate-y-1 focus:outline-none rounded-none cursor-pointer"
          aria-label="Scroll back to top of healthcare portfolio"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}

      {/* 10. BRUTALIST HIGH-CONTRAST LIGHT FOOTER */}
      <footer id="footer-block" className="bg-white text-charcoal py-16 border-t-3 border-med-blue relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            
            {/* Bio info */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 border-2 border-med-blue bg-med-amber flex items-center justify-center text-charcoal font-black text-xl">
                  +
                </div>
                <span className="font-display text-2xl font-black text-med-blue tracking-tight uppercase">
                  Mahendra <span className="text-med-teal">Hospitals</span>
                </span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed max-w-sm font-semibold">
                {t(
                  "Vizianagaram's trusted clinical center of excellence. Caring for families with dedicated diagnostic, laparoscopic, and maternity support.",
                  "విజయనగరంలో అత్యంత విశ్వసనీయమైన చికిత్సాలయం. అంకితభావంతో కూడిన రోగ నిర్ధారణ, లాపరోస్కోపిక్ మరియు ప్రసూతి సేవల ద్వారా వైద్య సేవలు అందిస్తున్నాము."
                )}
              </p>
              <p className="font-sans text-xs text-[#8B7355] font-black uppercase tracking-tight block">
                {t('"Caring for Vizianagaram since day one"', '"మొదటి రోజు నుండి విజయనగరం సేవలో సంరక్షణతో"')}
              </p>
            </div>

            {/* Quick Nav Links inside Footer */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="font-sans text-xs uppercase font-black tracking-widest text-med-teal mb-4">
                {t("Hospital Highlights", "ఆసుపత్రి లింకులు")}
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm font-bold">
                <li>
                  <a href="#home" className="text-charcoal hover:text-med-teal transition-colors">
                    {t("Clinical Home", "హోమ్ పేజీ")}
                  </a>
                </li>
                <li>
                  <a href="#doctors" className="text-charcoal hover:text-med-teal transition-colors">
                    {t("Meet Our Specialists", "వైద్యులను సంప్రదించండి")}
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-charcoal hover:text-med-teal transition-colors">
                    {t("Core Services Grid", "వైద్య సేవలు")}
                  </a>
                </li>
                <li>
                  <a href="#facilities" className="text-charcoal hover:text-med-teal transition-colors">
                    {t("Advanced Highlights", "అధునాతన సేవలు")}
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Legal and Timings */}
            <div className="md:col-span-4 space-y-3 text-xs sm:text-sm font-bold">
              <h4 className="font-sans text-xs uppercase font-black tracking-widest text-med-teal mb-4">
                {t("Schedule & Timings", "వేళలు మరియు పని సమయాలు")}
              </h4>
              <p className="leading-relaxed text-[#2D4A47] font-semibold h-auto font-black">
                {t("Op-clinic Timings: ", "ఓపి క్లినిక్ వేళలు: ")} <br />
                <span className="text-med-blue font-black font-mono">10:00 AM - 2:00 PM</span> & <span className="text-med-blue font-black font-mono">5:00 PM - 8:30 PM</span>
              </p>
              <p className="leading-relaxed text-[#8B7355] mt-2 font-black uppercase text-xs">
                {t("Inpatient & Emergency labor center open", "ఇన్‌పేషెంట్ & అత్యవసర గైనకాలజీ ప్రసవాల విభాగం")} <span className="text-med-blue">{t("24 hours / 365 Days", "24 గంటలు / 365 రోజులు అందుబాటులో ఉండును")}</span>.
              </p>
            </div>

          </div>

          {/* Copyright signature bars and divider */}
          <div className="pt-8 border-t-2 border-dashed border-med-blue/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold">
            <p className="text-center sm:text-left select-none text-slate-500">
              © 2026 Mahendra Hospitals. {t("All rights reserved. Vizianagaram, AP.", "అన్ని హక్కులు ప్రత్యేకించబడినవి. విజయనగరం, ఆంధ్ర ప్రదేశ్.")}
            </p>
            <div className="flex gap-4">
              <a href="#home" className="text-[#2D4A47] hover:text-[#C8A97A] transition-colors uppercase tracking-wide">
                {t("Back to Top", "పైకి వెళ్ళండి")}
              </a>
              <span className="text-[#2D4A47]/40">|</span>
              <a href="#contact" className="text-[#2D4A47] hover:text-[#C8A97A] transition-colors uppercase tracking-wide">
                {t("Support Desk", "సహాయక విభాగం")}
              </a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
