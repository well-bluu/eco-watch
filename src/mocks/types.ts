export type Photo = string | number;

export type EstablishmentType = "Residential" | "Business";

export const REPORT_STATUSES = [
  "Submitted",
  "Verified",
  "Dispatched",
  "Resolved",
] as const;
export type ReportStatus = (typeof REPORT_STATUSES)[number];

export type ComplaintCategoryId =
  | "garbage-disposal"
  | "waste-water-discharge"
  | "foul-odor"
  | "tree-cutting"
  | "animal-carcass"
  | "sand-soil-extraction"
  | "pig-pen-animal-raising"
  | "air-pollution-dust"
  | "dirty-vacant-lot"
  | "unauthorized-public-postings"
  | "animal-excreta";

export interface ComplaintCategory {
  id: ComplaintCategoryId;
  label: string;
  officialName: string;
  detail?: string;
}

export interface Sitio {
  id: string;
  name: string;
}

export interface Barangay {
  id: string;
  name: string;
  sitios: Sitio[];
}

export interface Resident {
  id: string;
  username: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: "Male" | "Female" | "Prefer not to say";
  streetAddress: string;
  barangayId: string;
  sitioId: string;
  establishmentType: EstablishmentType;
  businessName?: string; // Business accounts only
  designation?: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Report {
  id: string;
  residentId: string;
  category: ComplaintCategoryId;
  title: string; // max 200
  description: string; // max 2,000
  establishmentType: EstablishmentType;
  barangayId: string;
  sitioId: string;
  coordinates: Coordinates;
  landmark?: string; // max 250
  photos: Photo[];
  status: ReportStatus;
  submittedAt: string;
}

// Content mocks: the API does not store these yet

export interface NewsStory {
  id: string;
  headline: string;
  lang: "en" | "ceb"; // so screen readers pronounce Cebuano right
  source: string;
  publishedAt: string;
  photo: Photo;
}

export interface Service {
  id: string;
  name: string;
  handles: string;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export interface AppNotification {
  id: string;
  reportId: string;
  status: ReportStatus;
  title: string;
  message: string;
  createdAt: string;
  read: boolean;
}
