import { DOCTORS } from "../data";
import { motion } from "motion/react";
import Reveal from "./Reveal";
import { useLanguage } from "../LanguageContext";

export default function Doctors() {
  const { language, t } = useLanguage();

  const specialtyTranslations: { [key: string]: string } = {
    "Gastroscopy & Colonoscopy": "గ్యాస్ట్రోస్కోపీ & కోలనోస్కోపీ",
    "Laparoscopic Surgery": "లాపరోస్కోపిక్ సర్జరీ",
    "GI Cancer Surgery": "గ్యాస్ట్రో క్యాన్సర్ శస్త్రచికిత్స",
    "Liver Cirrhosis / Hepatitis B & C": "లివర్ సిరోసిస్ / హెపటైటిస్ బి & సి",
    "Pancreatic Diseases": "క్లోమ గ్రంధి వ్యాధులు",
    "ERCP & Endoscopy": "ERCP & ఎండోస్కోపీ",
    "Variceal Banding": "వరిసియల్ బ్యాండింగ్",
    "Liver ICU": "కాలేయ ఐసీయూ సేవలు",
    "Normal & Caesarean Delivery": "సుఖ ప్రసవం & సిజేరియన్ కాన్పులు",
    "High-Risk Pregnancy Care": "హై-రిస్క్ గర్భధారణ పర్యవేక్షణ",
    "Infertility Treatment (IUI)": "వంధ్యత్వ నివారణ చికిత్స (IUI)",
    "PCOD / Hormonal Issues": "పి.సి.ఓ.డి / హార్మోన్ల సమస్యలు",
    "Laparoscopic Hysterectomy": "లాపరోస్కోపిక్ గర్భాశయ తొలగింపు",
    "Ovarian Cystectomy": "అండాశయ కణితి శస్త్రచికిత్స",
    "Cervical Cancer Screening (PAP)": "గర్భాశయ క్యాన్సర్ స్క్రీనింగ్ (PAP)",
    "HPV Vaccination": "హెచ్.పి.వి (HPV) వ్యాక్సినేషన్"
  };

  const credentialTranslations: { [key: string]: string } = {
    "MBBS (SVIMS), MS (General Surgery), MCh (Surgical Gastroenterology), Fellow in Advanced GI Endoscopy (Germany)": "MBBS (SVIMS), MS (జనరల్ సర్జరీ), MCh (సర్జికల్ గ్యాస్ట్రోఎంటరాలజీ), ఫెలో ఇన్ అడ్వాన్స్డ్ జిఐ ఎండోస్కోపీ (జర్మనీ)",
    "MBBS, DNB (Obstetrics and Gynaecology)": "MBBS, DNB (ప్రసూతి మరియు గైనకాలజీ)"
  };

  return (
    <section id="doctors" className="py-20 bg-off-white border-b-3 border-med-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-charcoal font-sans uppercase font-black tracking-widest text-xs px-3.5 py-1.5 bg-med-amber border-2 border-med-blue shadow-[2px_2px_0_0_#2D4A47] inline-block mb-4 rounded-none">
              {t("Expert Healthcare Team", "నిపుణులైన వైద్య బృందం")}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-med-blue tracking-tight uppercase">
              {t("Meet Our Medical Specialists", "మా వైద్య నిపుణులను కలవండి")}
            </h2>
            <p className="font-telugu text-lg text-med-teal font-extrabold mt-2 uppercase">
              {t("Expert Clinical Mentorship & Patient Care", "అత్యున్నత అర్హతలు మరియు అపార అనుభవం గల వైద్యులు")}
            </p>
            <div className="w-20 h-1.5 bg-med-blue mx-auto mt-4"></div>
            <p className="font-sans text-charcoal mt-5 leading-relaxed text-sm sm:text-base font-semibold">
              {t(
                "With academic training from India's premier institutes like SVIMS and advanced sub-speciality fellowships from Germany, Mahendra Hospitals brings world-class medical expertise right to the heart of Vizianagaram.",
                "భారతదేశపు అగ్రగామి వైద్య సంస్థలైన SVIMS వంటి వాటిలో శిక్షణ పొంది, జర్మనీ దేశంలో సూపర్ స్పెషాలిటీ ఫెలోషిప్ పొందిన వైద్యులు మహేంద్ర హాస్పిటల్స్ ద్వారా విజయనగరం ప్రజలకు అందుబాటులో కలరు."
              )}
            </p>
          </div>
        </Reveal>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {DOCTORS.map((doctor, index) => (
            <Reveal key={doctor.id} delay={index * 0.15}>
              <motion.article
                id={`doctor-card-${doctor.id}`}
                whileHover={{ y: -4 }}
                className="bg-white border-3 border-med-blue rounded-none overflow-hidden shadow-[6px_6px_0_0_#2D4A47] hover:shadow-[10px_10px_0_0_#2D4A47] transition-all duration-200 flex flex-col md:flex-row h-full"
              >
                
                {/* Doctor Avatar Column */}
                <div className="w-full md:w-2/5 relative min-h-[300px] md:min-h-full bg-off-white border-b-3 md:border-b-0 md:border-r-3 border-med-blue overflow-hidden">
                  <img
                    src={doctor.avatarUrl}
                    alt={t(doctor.name, doctor.teluguName || doctor.name)}
                    className="absolute inset-0 w-full h-full object-cover grayscale font-mono hover:grayscale-0 transition-all duration-300"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Hon'ble / Subtitle Tag */}
                  {doctor.note && (
                    <div className="absolute bottom-4 left-4 right-4 bg-med-amber border-2 border-med-blue px-3 py-1.5 shadow-[2px_2px_0_0_#2D4A47] rounded-none">
                      <span className="font-sans text-[11px] font-black text-charcoal block uppercase tracking-wider">
                        <i className="fa-solid fa-medal text-charcoal mr-1"></i>
                        {t(doctor.note, doctor.id === "1" ? "కన్సల్టెంట్ గ్యాస్ట్రోఎంటరాలజిస్ట్" : "కన్సల్టెంట్ అబ్‌స్టెట్రిషియన్ & గైనకాలజిస్ట్")}
                      </span>
                    </div>
                  )}
                </div>

                {/* Doctor Details Column */}
                <div className="w-full md:w-3/5 p-6 sm:p-8 flex flex-col justify-between bg-white">
                  <div>
                    {/* Header Details */}
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-black text-med-blue tracking-tight uppercase">
                        {t(doctor.name, doctor.teluguName || doctor.name)}
                      </h3>
                      {doctor.teluguName && language === "en" && (
                        <p className="font-telugu text-[15px] text-med-teal font-black mt-0.5">
                          {doctor.teluguName}
                        </p>
                      )}
                      
                      <p className="font-sans text-[10px] font-black text-[#8B7355] uppercase tracking-widest mt-2">
                        {t(doctor.title, doctor.teluguTitle || doctor.title)}
                      </p>
                      {doctor.teluguTitle && language === "en" && (
                        <p className="font-telugu text-xs text-charcoal/80 font-bold">
                          {doctor.teluguTitle}
                        </p>
                      )}
                      
                      <div className="text-xs font-mono text-charcoal bg-off-white px-3 py-2 mt-4 border-2 border-med-blue tracking-wide">
                        <span className="font-black text-med-blue uppercase">{t("Credentials:", "విద్యార్హతలు:")}</span> {t(doctor.credentials, credentialTranslations[doctor.credentials] || doctor.credentials)}
                      </div>
                    </div>

                    {/* Specialties Section */}
                    <div className="mt-6">
                      <h4 className="font-sans text-[10px] uppercase tracking-widest text-[#8B7355] font-black mb-3">
                        {t("Clinical Core Specialties", "క్లినికల్ స్పెషాలిటీలు")}
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-2">
                        {doctor.specialties.map((spec, sIdx) => (
                          <li
                            key={sIdx}
                            className="flex items-start gap-1.5 text-xs text-charcoal font-bold font-mono"
                          >
                            <span className="text-med-teal text-[10px] mt-0.5">
                              [x]
                            </span>
                            <span className="leading-tight">{t(spec, specialtyTranslations[spec] || spec)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Consultation Booking Quick CTA */}
                  <div className="mt-8 pt-6 border-t-2 border-dashed border-med-blue/30 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-black uppercase text-med-teal">
                      {t("Daily OPD clinic", "రోజువారీ ఓపిడి ప్రాక్టీస్")}
                    </span>
                    <a
                      href="https://wa.me/+918977111311"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-sans font-black uppercase tracking-wider bg-med-amber text-charcoal px-4 py-2 border-2 border-med-blue shadow-[2px_2px_0_0_#2D4A47] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#2D4A47] transition-all"
                      aria-label={`Book Consultation with ${doctor.name}`}
                    >
                      <span>{t("Consult Now", "సంప్రదించండి")}</span>
                      <i className="fa-solid fa-arrow-right text-[9px] font-black"></i>
                    </a>
                  </div>

                </div>

              </motion.article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
