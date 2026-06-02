import React, { useState } from "react";
import {
  HOSPITAL_ADDRESS,
  CLINICAL_EMAIL,
  CLINICAL_PHONE,
  CLINICAL_WHATSAPP,
  MAP_EMBED_SRC,
  SOCIAL_LINKS,
} from "../data";
import { motion } from "motion/react";
import Reveal from "./Reveal";
import { useLanguage } from "../LanguageContext";

export default function Contact() {
  const { language, t } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    department: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) return;
    
    // Simulate server or firebase storage callback booking
    setFormSubmitted(true);
    setTimeout(() => {
      setFormState({ name: "", phone: "", department: "", message: "" });
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b-3 border-med-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title block */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-charcoal font-sans uppercase font-black tracking-widest text-xs px-3.5 py-1.5 bg-med-amber border-2 border-med-blue shadow-[2px_2px_0_0_#2D4A47] inline-block mb-4 rounded-none">
              {t("Reach Us Instantly", "మమ్మల్ని త్వరగా సంప్రదించండి")}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-med-blue tracking-tight uppercase">
              {t("Contact & Directions", "సంప్రదింపులు & చిరునామా")}
            </h2>
            <p className="font-telugu text-lg text-med-teal font-extrabold mt-2 uppercase">
              {t("Get Direct Access & OPD Assistance", "మమ్మల్ని సంప్రదించండి - చిరునామా వివరాలు")}
            </p>
            <div className="w-20 h-1.5 bg-med-blue mx-auto mt-4"></div>
            <p className="font-sans text-charcoal mt-5 leading-relaxed text-sm sm:text-base font-semibold">
              {t(
                "Need immediate answers model-wise, clinical booking, or route directions? Check our location details, chat with our helpline below, or let us call you back.",
                "తక్షణ సమాధానాలు, క్లినికల్ బుకింగ్ లేదా మార్గదర్శకాల అవసరమా? మా చిరునామా వివరాలను తనిఖీ చేయండి, క్రింది హెల్ప్‌లైన్‌తో చాట్ చేయండి లేదా మీ సమాచారాన్ని సమర్పించండి, మేమే కాల్ చేస్తాము."
              )}
            </p>
          </div>
        </Reveal>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column: Direct Contact & Appointment Callback Form */}
          <Reveal direction="left" className="h-full">
            <div className="bg-white rounded-none p-6 sm:p-8 md:p-10 border-3 border-med-blue shadow-[8px_8px_0_0_#2D4A47] flex flex-col justify-between h-full">
              
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-black text-med-blue tracking-tight uppercase mb-6">
                  {t("Emergency Touchpoints", "అత్యవసర విభాగం")}
                </h3>
                
                {/* Visual grid of contact points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {/* Phone */}
                  <a
                    href={`tel:${CLINICAL_PHONE}`}
                    className="p-4 rounded-none bg-off-white hover:bg-med-blue hover:text-white border-2 border-med-blue shadow-[3px_3px_0_0_#2D4A47] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_#2D4A47] transition-all group flex items-start gap-3"
                    aria-label="Call Hospital Phone Line"
                  >
                    <div className="w-10 h-10 border-2 border-med-blue bg-white flex items-center justify-center text-med-blue group-hover:bg-med-amber shrink-0">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono uppercase text-[#8B7355] group-hover:text-white block font-black">
                        {t("Call Clinical Help", "క్లినికల్ సహాయం")}
                      </span>
                      <span className="text-xs sm:text-sm font-sans font-black leading-tight">
                        {CLINICAL_PHONE}
                      </span>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${CLINICAL_WHATSAPP.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-none bg-off-white hover:bg-[#25D366] hover:text-white border-2 border-med-blue shadow-[3px_3px_0_0_#2D4A47] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_#2D4A47] transition-all group flex items-start gap-3"
                    aria-label="Chat on WhatsApp"
                  >
                    <div className="w-10 h-10 border-2 border-med-blue bg-white flex items-center justify-center text-[#25D366] group-hover:bg-white shrink-0">
                      <i className="fa-brands fa-whatsapp text-lg"></i>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono uppercase text-[#8B7355] group-hover:text-white block font-black">
                        {t("WhatsApp Chat", "వాట్సాప్ చాట్")}
                      </span>
                      <span className="text-xs sm:text-sm font-sans font-black leading-tight">
                        +91 {CLINICAL_PHONE}
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${CLINICAL_EMAIL}`}
                    className="p-4 rounded-none bg-off-white hover:bg-med-teal hover:text-white border-2 border-med-blue shadow-[3px_3px_0_0_#2D4A47] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_#2D4A47] transition-all group flex items-start gap-3 overflow-hidden"
                    aria-label="Email support desk"
                  >
                    <div className="w-10 h-10 border-2 border-med-blue bg-white flex items-center justify-center text-med-teal group-hover:bg-white shrink-0">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="min-w-0">
                      <span className="text-[9px] font-mono uppercase text-[#8B7355] group-hover:text-white block font-black">
                        {t("Email Support Desk", "ఇమెయిల్ సహాయం")}
                      </span>
                      <span className="text-xs font-sans font-black leading-tight block truncate">
                        {CLINICAL_EMAIL}
                      </span>
                    </div>
                  </a>

                  {/* Physical Address description */}
                  <div className="p-4 rounded-none bg-off-white border-2 border-med-blue shadow-[3px_3px_0_0_#2D4A47] flex items-start gap-3">
                    <div className="w-10 h-10 border-2 border-med-blue bg-white flex items-center justify-center text-med-amber shrink-0">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono uppercase text-[#8B7355] block font-black">
                        {t("Location Town", "ప్రాంతం")}
                      </span>
                      <span className="text-xs font-sans font-black leading-snug block text-charcoal">
                        {t("Cantonment, VZM", "కంటోన్మెంట్, విజయనగరం")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Substantive Physical Address Card */}
                <div className="px-5 py-4 rounded-none bg-off-white border-2 border-med-blue shadow-[4px_4px_0_0_#2D4A47] mb-8 flex items-start gap-3.5 animate-pulse-slow">
                  <i className="fa-solid fa-map-location-dot text-med-blue text-sm mt-1"></i>
                  <div>
                    <h4 className="font-sans text-xs font-black uppercase text-med-blue tracking-wider mb-1">
                      {t("Full Address landmark:", "పూర్తి చిరునామా & ల్యాండ్‌మార్క్:")}
                    </h4>
                    <p className="font-sans text-xs text-charcoal leading-relaxed font-bold">
                      {language === "en" ? HOSPITAL_ADDRESS : "ఆర్.సి.ఎమ్ క్యాథలిక్ చర్చి ఎదురుగా, కంటోన్మెంట్ రోడ్, కంటోన్మెంట్, విజయనగరం, ఆంధ్రప్రదేశ్ 535003"}
                    </p>
                  </div>
                </div>

                {/* Callback/Booking form */}
                <form id="callback-request-form" onSubmit={handleSubmit} className="space-y-4">
                  <h4 className="font-sans text-xs font-black uppercase text-charcoal tracking-wider">
                    {t("[x] Request a call back instantly", "[x] తక్షణ సహాయం కొరకు మీ వివరాలు పంపండి")}
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      className="w-full font-mono text-sm border-2 border-med-blue p-3 bg-off-white focus:outline-none focus:bg-white text-charcoal font-black rounded-none shadow-[2px_2px_0_0_#2D4A47] focus:shadow-none transition-all"
                      placeholder={t("Your Name *", "మీ పేరు *")}
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                    <input
                      type="tel"
                      className="w-full font-mono text-sm border-2 border-med-blue p-3 bg-off-white focus:outline-none focus:bg-white text-charcoal font-black rounded-none shadow-[2px_2px_0_0_#2D4A47] focus:shadow-none transition-all"
                      placeholder={t("Phone Number *", "ఫోన్ నంబర్ *")}
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <select
                      className="w-full font-mono text-sm border-2 border-med-blue p-3 bg-off-white focus:outline-none focus:bg-white text-charcoal font-black rounded-none shadow-[2px_2px_0_0_#2D4A47] focus:shadow-none transition-all cursor-pointer"
                      value={formState.department}
                      onChange={(e) => setFormState({ ...formState, department: e.target.value })}
                    >
                      <option value="">{t("Choose Department", "విభాగాన్ని ఎంచుకోండి")}</option>
                      <option value="Gastroenterology">Gastroenterology (జీర్ణకోశ వ్యాధులు)</option>
                      <option value="Gynaecology">{t("Gynaecology & Delivery (గైనకాలజీ / ప్రసవం)", "గైనకాలజీ & ప్రసవ చికిత్స")}</option>
                      <option value="Laparoscopic Surgery">{t("Laparoscopic Surgery (కీహోల్ సర్జరీ)", "లాపరోస్కోపిక్ సర్జరీ")}</option>
                      <option value="Other Diagnostics">{t("Diagnostics & General Medicine", "జనరల్ మెడిసిన్ & నిర్ధారణలు")}</option>
                    </select>

                    <button
                      type="submit"
                      disabled={formSubmitted}
                      className="w-full font-sans text-xs uppercase tracking-wider font-black bg-med-blue text-white py-3.5 border-2 border-med-blue hover:bg-med-teal hover:border-med-teal hover:text-white transition-all shadow-[3px_3px_0_0_#C8A97A] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_#C8A97A] rounded-none cursor-pointer"
                    >
                      {formSubmitted ? (
                        <span>
                          <i className="fa-solid fa-spinner animate-spin mr-2"></i> {t("Processing...", "పంపుతోంది...")}
                        </span>
                      ) : (
                        t("Request Callback", "కాల్ బ్యాక్ అడగండి")
                      )}
                    </button>
                  </div>
                </form>

                {/* Submit Feedback notification */}
                {formSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 border-2 border-med-teal bg-[#EBF2F0] text-charcoal text-xs font-bold leading-relaxed flex items-start gap-2.5 rounded-none"
                  >
                    <i className="fa-solid fa-circle-check text-base text-med-teal mt-0.5"></i>
                    <div>
                      <p className="font-extrabold uppercase tracking-wide">{t("Callback Requested Successfully!", "వివరాలు విజయవంతంగా సమర్పించబడ్డాయి!")}</p>
                      <p className="mt-0.5">{t(`Thank you, ${formState.name || "patient"}. Our clinical secretary desk will dial or message +91 ${formState.phone} shortly.`, `ధన్యవాదాలు, ${formState.name}. మా వైద్య సిబ్బంది త్వరలోనే ${formState.phone} కి కాంటాక్ట్ చేస్తారు.`)}</p>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Social Channels Row */}
              <div className="pt-8 mt-8 border-t-2 border-dashed border-med-blue/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <span className="font-sans text-[10px] font-black uppercase text-[#8B7355] tracking-widest block">
                    {t("Follow Mahendra Hospitals", "మహేంద్ర హాస్పిటల్స్ ని ఫాలో అవ్వండి")}
                  </span>
                  <span className="font-display text-xs uppercase font-black text-med-blue">
                    {t("Join Our Support Community", "మా సపోర్ట్ గ్రూప్ లో చేరండి")}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border-2 border-med-blue bg-white hover:bg-med-amber text-charcoal flex items-center justify-center transition-all shadow-[2px_2px_0_0_#2D4A47] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#2D4A47]"
                    aria-label="Facebook Page link"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border-2 border-med-blue bg-white hover:bg-med-amber text-charcoal flex items-center justify-center transition-all shadow-[2px_2px_0_0_#2D4A47] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#2D4A47]"
                    aria-label="Instagram handle link"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href={SOCIAL_LINKS.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border-2 border-med-blue bg-white hover:bg-med-amber text-charcoal flex items-center justify-center transition-all shadow-[2px_2px_0_0_#2D4A47] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#2D4A47]"
                    aria-label="YouTube Channel link"
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>

            </div>
          </Reveal>

          {/* Right Column: Google Maps Embed with fully structured border casing */}
          <Reveal direction="right" className="h-full">
            <div className="bg-white border-3 border-med-blue p-4 rounded-none h-full shadow-[8px_8px_0_0_#2D4A47] flex flex-col justify-between overflow-hidden">
              <div className="h-full min-h-[350px] lg:min-h-full rounded-none overflow-hidden relative border-2 border-med-blue">
                
                {/* Embedded Map iframe */}
                <iframe
                  id="google-maps-iframe"
                  src={MAP_EMBED_SRC}
                  className="absolute inset-0 w-full h-full border-0 rounded-none grayscale"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mahendra Hospitals Google Map Location"
                ></iframe>

                {/* Overlying Maps Quick Action Badge */}
                <div className="absolute top-4 left-4 bg-white border-2 border-med-blue shadow-[2px_2px_0_0_#2D4A47] px-3.5 py-2.5 rounded-none z-10">
                  <span className="font-sans text-[10px] uppercase font-black text-med-blue block">
                    <i className="fa-solid fa-map-pin text-[#E03131] mr-1"></i> {t("Landmark", "గుర్తు (ల్యాండ్‌మార్క్)")}
                  </span>
                  <span className="font-sans text-xs text-charcoal font-extrabold block mt-0.5">
                    {t("Opp. RCM Catholic Church", "ఆర్.సి.ఎమ్ క్యాథలిక్ చర్చి ఎదురుగా")}
                  </span>
                </div>

                {/* Direction overlay button at bottom */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <a
                    href="https://maps.app.goo.gl/ca7fc08d1773f29a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-med-blue border-2 border-med-blue hover:bg-med-teal hover:border-med-teal text-white font-sans font-black text-xs uppercase tracking-wider py-3.5 rounded-none flex items-center justify-center gap-2 shadow-[2px_2px_0_0_#C8A97A] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#C8A97A] transition-all"
                    aria-label="Open clinical direct route directions in Google Maps"
                  >
                    <i className="fa-solid fa-compass"></i>
                    <span>{t("Get Navigation Directions", "మార్గదర్శకాలు / గూగుల్ మ్యాప్")}</span>
                  </a>
                </div>

              </div>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
