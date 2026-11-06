import type { Report } from "./types";

export const reports: Report[] = [
  {
    id: "rep-1004",
    residentId: "res-001",
    category: "garbage-disposal",
    title: "Waste beside the creek",
    description:
      "Household waste left beside the creek. It has been growing for about a week.",
    establishmentType: "Residential",
    barangayId: "subangdaku",
    sitioId: "marna",
    coordinates: { lat: 10.3343, lng: 123.9263 },
    landmark: "Behind the chapel",
    photos: [require("../../assets/images/mock/creek-waste.jpg")],
    status: "Submitted",
    submittedAt: "2026-11-05T09:20:00+08:00",
  },
  {
    id: "rep-1003",
    residentId: "res-001",
    category: "air-pollution-dust",
    title: "Smoke emission",
    description: "Thick smoke from a burning pile every evening.",
    establishmentType: "Residential",
    barangayId: "alang-alang",
    sitioId: "riverside",
    coordinates: { lat: 10.3392, lng: 123.9481 },
    photos: [require("../../assets/images/mock/smoke.jpg")],
    status: "Dispatched",
    submittedAt: "2026-11-03T18:05:00+08:00",
  },
  {
    id: "rep-1002",
    residentId: "res-001",
    category: "waste-water-discharge",
    title: "Grey water into the canal",
    description: "A pipe from the laundry shop drains straight into the canal.",
    establishmentType: "Business",
    barangayId: "banilad",
    sitioId: "kalubihan",
    coordinates: { lat: 10.3427, lng: 123.9172 },
    photos: [require("../../assets/images/mock/canal.jpg")],
    status: "Verified",
    submittedAt: "2026-10-30T14:40:00+08:00",
  },
  {
    id: "rep-1001",
    residentId: "res-001",
    category: "dirty-vacant-lot",
    title: "Overgrown lot with rubbish",
    description: "Vacant lot full of rubbish and standing water.",
    establishmentType: "Residential",
    barangayId: "looc",
    sitioId: "baybayon",
    coordinates: { lat: 10.3186, lng: 123.9447 },
    landmark: "Beside the basketball court",
    photos: [require("../../assets/images/mock/vacant-lot.jpg")],
    status: "Resolved",
    submittedAt: "2026-10-12T08:15:00+08:00",
  },
];

export const getReportsFor = (residentId: string) =>
  reports.filter((r) => r.residentId === residentId);

export const getReport = (id: string) => reports.find((r) => r.id === id);
