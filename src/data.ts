import { Doctor, MedicalService, HospitalStat, GalleryItem, Facility } from "./types";
import doctor1Image from "./assets/doctors/doctor1.jpg";
import doctor2Image from "./assets/doctors/doctor2.jpg";

export const MOTTO_ENGLISH = "Advanced Healthcare, Compassionate Care";
export const MOTTO_TELUGU = "అధునాతన వైద్య సేవలు - ఆత్మీయమైన సంరక్షణ";

export const HOSPITAL_STATS: HospitalStat[] = [
  {
    id: "stat-1",
    value: 2,
    suffix: " Senior",
    label: "Super Specialists",
    teluguLabel: "సీనియర్ నిపుణులు",
    icon: "fa-user-md"
  },
  {
    id: "stat-2",
    value: 20,
    suffix: "+",
    label: "Medical Services",
    teluguLabel: "వైద్య సేవలు",
    icon: "fa-briefcase-medical"
  },
  {
    id: "stat-3",
    value: 24,
    suffix: "/7 Service",
    label: "Emergency & ICU Support",
    teluguLabel: "24/7 అత్యవసర సేవలు",
    icon: "fa-heart-pulse"
  },
  {
    id: "stat-4",
    value: 100,
    suffix: "% Approved",
    label: "Insurances Accepted",
    teluguLabel: "అన్ని ఇన్సూరెన్స్‌లు ఆమోదించబడును",
    icon: "fa-shield-halved"
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: "doc-1",
    name: "Dr Mahendra Giri. B",
    teluguName: "డాక్టర్ మహేంద్ర గిరి. బి",
    credentials: "M.B.B.S., M.S (Gen. Surg.), PDFC — Surgical Gastroenterology, SVIMS (Tirupathi)",
    title: "Laparoscopic and General Surgeon",
    teluguTitle: "లాపరోస్కోపిక్ మరియు జనరల్ సర్జన్",
    note: "Hon'ble Secretary, IMA Vizianagaram",
    avatarUrl: doctor1Image,
    specialties: [
      "Gastroscopy & Colonoscopy",
      "Laparoscopic Surgery",
      "GI Cancer Surgery",
      "Liver Cirrhosis / Hepatitis B & C",
      "Pancreatic Diseases",
      "ERCP & Endoscopy",
      "Variceal Banding",
      "Liver ICU"
    ]
  },
  {
    id: "doc-2",
    name: "Dr Prasanthi. B",
    teluguName: "డాక్టర్ ప్రశాంతి. బి",
    credentials: "M.B.B.S., D.R.M., D.G.O. (Kiel, Germany)",
    title: "Consultant Obstetrician & Gynaecologist, Laparoscopic Surgeon, Infertility Specialist",
    teluguTitle: "గైనకాలజిస్ట్, లాపరోస్కోపిక్ సర్జన్ మరియు వంధ్యత్వ నిపుణులు",
    note: "Specialised in Advanced Infertility (Germany)",
    avatarUrl: doctor2Image,
    specialties: [
      "Normal & Caesarean Delivery",
      "High-Risk Pregnancy Care",
      "Infertility Treatment (IUI)",
      "PCOD / Hormonal Issues",
      "Laparoscopic Hysterectomy",
      "Ovarian Cystectomy",
      "Cervical Cancer Screening (PAP)",
      "HPV Vaccination"
    ]
  }
];

export const SERVICES: MedicalService[] = [
  {
    id: "s-1",
    name: "Surgical Gastroenterology",
    teluguName: "సర్జికల్ గ్యాస్ట్రోఎంటరాలజీ",
    icon: "fa-stethoscope",
    category: "Gastroenterology"
  },
  {
    id: "s-2",
    name: "General Surgery",
    teluguName: "జనరల్ సర్జరీ",
    icon: "fa-hand-holding-medical",
    category: "Gynaecology & Surgery"
  },
  {
    id: "s-3",
    name: "Gastro & Liver Care",
    teluguName: "గ్యాస్ట్రో & కాలేయ సంరక్షణ",
    icon: "fa-shield-virus",
    category: "Gastroenterology"
  },
  {
    id: "s-4",
    name: "Gall Bladder & Pancreas",
    teluguName: "పిత్తాశయ & క్లోమ గ్రంధి చికిత్స",
    icon: "fa-dna",
    category: "Gastroenterology"
  },
  {
    id: "s-5",
    name: "Laparoscopic Surgery",
    teluguName: "లాపరోస్కోపిక్ సర్జరీ",
    icon: "fa-microscope",
    category: "Gynaecology & Surgery"
  },
  {
    id: "s-6",
    name: "Gynaecology",
    teluguName: "గైనకాలజీ (స్త్రీల వైద్యం)",
    icon: "fa-child-dress",
    category: "Gynaecology & Surgery"
  },
  {
    id: "s-7",
    name: "Obstetrics",
    teluguName: "ప్రసూతి శాస్త్రం",
    icon: "fa-baby",
    category: "Gynaecology & Surgery"
  },
  {
    id: "s-8",
    name: "Normal & C-Section Delivery",
    teluguName: "సుఖ ప్రసవం & సిజేరియన్",
    icon: "fa-person-breastfeeding",
    category: "Gynaecology & Surgery"
  },
  {
    id: "s-9",
    name: "Endoscopic Procedures",
    teluguName: "ఎండోస్కోపిక్ పరీక్షలు",
    icon: "fa-eye",
    category: "Gastroenterology"
  },
  {
    id: "s-10",
    name: "Infertility Services (IUI)",
    teluguName: "వంధ్యత్వ నివారణ సేవలు",
    icon: "fa-seedling",
    category: "Gynaecology & Surgery"
  },
  {
    id: "s-11",
    name: "General Physician",
    teluguName: "జనరల్ ఫిజీషియన్ సేవలు",
    icon: "fa-house-medical-check",
    category: "General & Diagnostics"
  },
  {
    id: "s-13",
    name: "Paediatrics",
    teluguName: "పిల్లల వైద్యం",
    icon: "fa-baby-carriage",
    category: "General & Diagnostics"
  },
  {
    id: "s-14",
    name: "Pulmonology",
    teluguName: "ఊపిరితిత్తుల వైద్యం",
    icon: "fa-lungs",
    category: "General & Diagnostics"
  },
  {
    id: "s-15",
    name: "Orthopaedics",
    teluguName: "కీళ్ళు & ఎముకల వైద్యం",
    icon: "fa-bone",
    category: "General & Diagnostics"
  },
  {
    id: "s-16",
    name: "Neurology",
    teluguName: "నరాల బలహీనత వైద్యం",
    icon: "fa-circle-nodes",
    category: "General & Diagnostics"
  },
  {
    id: "s-17",
    name: "Cardiology",
    teluguName: "గుండె జబ్బుల చికిత్స",
    icon: "fa-heart-pulse",
    category: "General & Diagnostics"
  },
  {
    id: "s-18",
    name: "Oncology Support",
    teluguName: "క్యాన్సర్ సహాయక సేవలు",
    icon: "fa-ribbon",
    category: "General & Diagnostics"
  },
  {
    id: "s-19",
    name: "Ultrasound Scan",
    teluguName: "అల్ట్రాసౌండ్ స్కానింగ్",
    icon: "fa-wave-square",
    category: "General & Diagnostics"
  },
  {
    id: "s-20",
    name: "24hr Laboratory",
    teluguName: "24 గంటల లాబొరేటరీ",
    icon: "fa-flask-vial",
    category: "Support Services"
  },
  {
    id: "s-21",
    name: "Casualty & Trauma",
    teluguName: "అత్యవసర విభాగం (కాజువాలిటీ)",
    icon: "fa-truck-medical",
    category: "Support Services"
  },
  {
    id: "s-22",
    name: "Trauma & Critical Care",
    teluguName: "తీవ్రమైన అత్యవసర సంరక్షణ",
    icon: "fa-hospital-user",
    category: "Support Services"
  }
];

export const IN_FLIGHT_FACILITIES: Facility[] = [
  { id: "fac-1", name: "Video Gastroscopy, Colonoscopy & ERCP" },
  { id: "fac-2", name: "Variceal Banding & Glue Injection" },
  { id: "fac-3", name: "Foreign Body Removal & Endoscopic Polypectomy" },
  { id: "fac-4", name: "Dilatation of Oesophageal Strictures & Achalasia Cardia" },
  { id: "fac-5", name: "Endoscopic Therapy for Chronic Pancreatitis" },
  { id: "fac-6", name: "Endoscopic Cystgastrostomy & Cystduodenostomy" },
  { id: "fac-7", name: "Percutaneous Endoscopic Gastrostomy (PEG)" },
  { id: "fac-8", name: "Palliation of GI & Pancreatobiliary Cancers" },
  { id: "fac-9", name: "Metallic Stenting (SEMS) & Liver Biopsy" },
  { id: "fac-10", name: "Super Speciality ICU for Liver & Pancreatic Diseases" },
  { id: "fac-11", name: "Ventilator Support" },
  { id: "fac-12", name: "24hr Pharmacy, Lab & Ambulance Services" }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "img-1",
    url: "https://nfc.dgtechsoln.com/wp-content/uploads/2025/05/mahendra-hospiAL-1-e1748176129822.jpeg",
    caption: "Mahendra Hospitals Exterior Archway"
  },
  {
    id: "img-2",
    url: "https://nfc.dgtechsoln.com/wp-content/uploads/2025/05/mahendra-hospiAL-2.jpeg",
    caption: "State-of-the-art Consultation Wing"
  },
  {
    id: "img-3",
    url: "https://nfc.dgtechsoln.com/wp-content/uploads/2025/05/mahendra-hospiAL-3.jpeg",
    caption: "Advanced Endoscopy and ERCP Operating Theatre"
  },
  {
    id: "img-4",
    url: "https://nfc.dgtechsoln.com/wp-content/uploads/2025/05/mahendra-hospiAL-4.jpeg",
    caption: "Clean, Spacious In-Patient Ward Rooms"
  },
  {
    id: "img-5",
    url: "https://nfc.dgtechsoln.com/wp-content/uploads/2025/05/mahendra-hospiAL-5.jpeg",
    caption: "Ultrasound Diagnostic Scan Centre"
  },
  {
    id: "img-6",
    url: "https://nfc.dgtechsoln.com/wp-content/uploads/2025/05/mahendra-hospiAL-6.jpeg",
    caption: "Hon'ble Dr. Mahendra Giri counseling patients"
  },
  {
    id: "img-7",
    url: "https://nfc.dgtechsoln.com/wp-content/uploads/2025/05/mahendra-hospiAL-8.jpeg",
    caption: "Super Specialty ICU and Cardiac Patient Monitoring"
  },
  {
    id: "img-8",
    url: "https://nfc.dgtechsoln.com/wp-content/uploads/2025/05/mahendra-hospiAL-9.jpeg",
    caption: "Fully Equipped 24-hour Emergency Critical Care Trauma Desk"
  },
  {
    id: "img-9",
    url: "https://nfc.dgtechsoln.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-25-at-6.46.04-PM.jpeg",
    caption: "Experienced clinical paramedical team on duty"
  }
];

export const HOSPITAL_ADDRESS = "RCM Church Rd, Boggula Dibba Area, Cantonment, Vizianagaram, Andhra Pradesh 535003";
export const CLINICAL_EMAIL = "mahendrahospitals23@gmail.com";
export const CLINICAL_PHONE = "8977111311";
export const CLINICAL_WHATSAPP = "+918977111311";
export const MAP_EMBED_SRC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3792.1027149298434!2d83.3914119!3d18.113047299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3be5fe9225f6c5%3A0xca7fc08d1773f29a!2sMahendra%20hospitals!5e0!3m2!1sen!2sin!4v1748173736689!5m2!1sen!2sin";

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/profile.php?id=100095406288449",
  instagram: "https://www.instagram.com/mahendra_hospitals",
  youtube: "https://youtube.com/@mahendrahospitals"
};
