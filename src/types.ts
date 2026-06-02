/**
 * TypeScript Type Definitions for Mahendra Hospitals Portfolio
 */

export interface Doctor {
  id: string;
  name: string;
  teluguName?: string;
  credentials: string;
  title: string;
  teluguTitle?: string;
  avatarUrl: string;
  note?: string;
  specialties: string[];
}

export interface MedicalService {
  id: string;
  name: string;
  teluguName?: string;
  icon: string; // Font Awesome or custom SVG choice
  category: "Gastroenterology" | "Gynaecology & Surgery" | "General & Diagnostics" | "Support Services";
}

export interface HospitalStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  teluguLabel?: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
}

export interface Facility {
  id: string;
  name: string;
  teluguName?: string;
}
