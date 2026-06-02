import { useState, useEffect } from "react";
import { GALLERY_ITEMS } from "../data";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "./Reveal";
import { useLanguage } from "../LanguageContext";

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null);

  const captionTranslations: { [key: string]: string } = {
    "Mahendra Hospitals Exterior Archway": "మహేంద్ర హాస్పిటల్స్ వెలుపలి ద్వారం",
    "State-of-the-art Consultation Wing": "అత్యాధునిక సంప్రదింపుల విభాగం",
    "Advanced Endoscopy and ERCP Operating Theatre": "అధునాతన ఎండోస్కోపీ & ERCP ఆపరేషన్ థియేటర్",
    "Clean, Spacious In-Patient Ward Rooms": "పరిశుభ్రమైన, విశాలమైన ఇన్‌పేషెంట్ వార్డు గదులు",
    "Ultrasound Diagnostic Scan Centre": "అల్ట్రాసౌండ్ స్కానింగ్ కేంద్రం",
    "Hon'ble Dr. Mahendra Giri counseling patients": "కుటుంబ సభ్యులకు చికిత్స గురించి వివరిస్తున్న డాక్టర్ మహేంద్ర గిరి",
    "Super Specialty ICU and Cardiac Patient Monitoring": "సూపర్ స్పెషాలిటీ ICU & కార్డియాక్ మానిటరింగ్ సేవలు",
    "Fully Equipped 24-hour Emergency Critical Care Trauma Desk": "24 గంటల అత్యవసర వైద్య సేవల డెస్క్",
    "Experienced clinical paramedical team on duty": "అనుభవజ్ఞులైన హాస్పిటల్ నర్సింగ్ & పారామెడికల్ సిబ్బంది"
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIdx === null) return;
      if (e.key === "Escape") {
        setSelectedImageIdx(null);
      } else if (e.key === "ArrowRight") {
        setSelectedImageIdx((prev) => (prev !== null ? (prev + 1) % GALLERY_ITEMS.length : null));
      } else if (e.key === "ArrowLeft") {
        setSelectedImageIdx((prev) => (prev !== null ? (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : null));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIdx]);

  return (
    <section id="gallery" className="py-20 bg-off-white border-b-3 border-med-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-charcoal font-sans uppercase font-black tracking-widest text-xs px-3.5 py-1.5 bg-med-amber border-2 border-med-blue shadow-[2px_2px_0_0_#2D4A47] inline-block mb-4 rounded-none">
              {t("Hospital Tour", "ఆసుపత్రి పర్యటన")}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-med-blue tracking-tight uppercase">
              {t("Our Hospital Gallery", "మా హాస్పిటల్ గ్యాలరీ")}
            </h2>
            <p className="font-telugu text-lg text-med-teal font-extrabold mt-2 uppercase">
              {t("Hospital Tour & Infrastructures", "ఆసుపత్రి పరిసరాల ఫోటోలు")}
            </p>
            <div className="w-20 h-1.5 bg-med-blue mx-auto mt-4"></div>
            <p className="font-sans text-charcoal mt-5 leading-relaxed text-sm sm:text-base font-semibold">
              {t(
                "A visual glimpse into Mahendra Hospitals' advanced infrastructure, diagnostics units, sterile operating theatres, patient recovery wards, and general clinical ecosystem.",
                "మహేంద్ర హాస్పిటల్స్ ఆధునిక మౌలిక సదుపాయాలు, రోగ నిర్ధారణ విభాగాలు, క్రిమిరహిత ఆపరేషన్ థియేటర్లు, వార్డులు మరియు జనరల్ క్లినికల్ వ్యవస్థ యొక్క ఒక దృశ్య చిత్రం."
              )}
            </p>
          </div>
        </Reveal>

        {/* Gallery Masonry/CSS Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08}>
              <button
                onClick={() => setSelectedImageIdx(index)}
                className="w-full relative rounded-none overflow-hidden aspect-[4/3] group shadow-[4px_4px_0_0_#2D4A47] hover:shadow-[6px_6px_0_0_#2D4A47] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all duration-150 border-3 border-med-blue bg-white focus:outline-none cursor-pointer"
                aria-label={`View clinical photo: ${item.caption}`}
              >
                {/* Real image of Mahendra Hospital */}
                <img
                  src={item.url}
                  alt={t(item.caption, captionTranslations[item.caption] || item.caption)}
                  className="w-full h-full object-cover grayscale font-mono hover:grayscale-0 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Overlying gradient cover & flat color tint on hover */}
                <div className="absolute inset-0 bg-med-blue/30 opacity-40 group-hover:opacity-80 transition-all duration-200"></div>

                {/* Search glass micro-indicator */}
                <div className="absolute top-4 right-4 bg-med-amber border-2 border-med-blue shadow-[2px_2px_0_0_#2D4A47] p-2 rounded-none opacity-0 group-hover:opacity-100 transition-all duration-200 text-charcoal">
                  <i className="fa-solid fa-magnifying-glass-plus text-xs"></i>
                </div>

                {/* Info and caption */}
                <div className="absolute bottom-4 left-4 right-4 bg-white border-2 border-med-blue p-3 shadow-[2px_2px_0_0_#2D4A47]">
                  <span className="text-[9px] uppercase font-mono font-black text-med-teal block tracking-wider">
                    {t("Vizianagaram", "విజయనగరం")}
                  </span>
                  <h3 className="font-sans text-xs sm:text-sm font-black text-charcoal mt-1 leading-snug">
                    {t(item.caption, captionTranslations[item.caption] || item.caption)}
                  </h3>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {/* CSS/JS Lightbox Modal Overlay */}
        <AnimatePresence>
          {selectedImageIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImageIdx(null)}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 backdrop-blur-sm"
              style={{ contentVisibility: "auto" }}
            >
              {/* Close Button UI */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImageIdx(null);
                }}
                className="absolute top-5 right-5 w-12 h-12 rounded-none border-2 border-white bg-black/60 hover:bg-white hover:text-black text-white flex items-center justify-center transition-colors text-xl focus:outline-none cursor-pointer z-50"
                aria-label="Close lightbox"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>

              {/* Prev Image Control */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImageIdx((prev) => (prev !== null ? (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : null));
                }}
                className="absolute left-4 w-12 h-12 rounded-none border-2 border-white bg-black/60 hover:bg-white hover:text-black text-white hidden sm:flex items-center justify-center transition-all focus:outline-none cursor-pointer z-50"
                aria-label="Previous clinic image"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>

              {/* Central Active Large Image Container */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-5xl w-full flex flex-col items-center"
              >
                <div className="relative rounded-none overflow-hidden bg-zinc-900 shadow-2xl border-3 border-white">
                  <img
                    src={GALLERY_ITEMS[selectedImageIdx].url}
                    alt={t(GALLERY_ITEMS[selectedImageIdx].caption, captionTranslations[GALLERY_ITEMS[selectedImageIdx].caption] || GALLERY_ITEMS[selectedImageIdx].caption)}
                    className="max-h-[70vh] sm:max-h-[75vh] w-auto object-contain block mx-auto py-1"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay Index indicator */}
                  <span className="absolute top-4 left-4 bg-black border-2 border-white text-xs font-mono text-white px-3 py-1 rounded-none">
                    {selectedImageIdx + 1} / {GALLERY_ITEMS.length}
                  </span>
                </div>
                
                {/* Lightbox Caption */}
                <p className="text-white font-sans text-center mt-5 font-bold uppercase tracking-wide max-w-2xl text-xs sm:text-sm leading-relaxed">
                  {t(GALLERY_ITEMS[selectedImageIdx].caption, captionTranslations[GALLERY_ITEMS[selectedImageIdx].caption] || GALLERY_ITEMS[selectedImageIdx].caption)}
                </p>
                <p className="text-gray-400 font-mono text-xs text-center mt-2 uppercase tracking-tight">
                  {t(
                    "Left/Right Arrows ← & → to navigate, Esc to exit.",
                    "మార్చడానికి బాణం గుర్తులు (← & →) ఉపయోగించండి, క్లోజ్ చేయడానికి Esc నొక్కండి."
                  )}
                </p>
              </motion.div>

              {/* Next Image Control */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImageIdx((prev) => (prev !== null ? (prev + 1) % GALLERY_ITEMS.length : null));
                }}
                className="absolute right-4 w-12 h-12 rounded-none border-2 border-white bg-black/60 hover:bg-white hover:text-black text-white hidden sm:flex items-center justify-center transition-all focus:outline-none cursor-pointer z-50"
                aria-label="Next clinic image"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
