import type { Barangay } from "./types";

export const barangays: Barangay[] = [
  {
    id: "subangdaku",
    name: "Subangdaku",
    sitios: [
      { id: "marna", name: "Marna" },
      { id: "sudlonon", name: "Sudlonon" },
      { id: "tabay", name: "Tabay" },
    ],
  },
  {
    id: "alang-alang",
    name: "Alang-Alang",
    sitios: [
      { id: "lapu-lapu", name: "Lapu-Lapu" },
      { id: "riverside", name: "Riverside" },
    ],
  },
  {
    id: "banilad",
    name: "Banilad",
    sitios: [
      { id: "kalubihan", name: "Kalubihan" },
      { id: "mahayahay", name: "Mahayahay" },
    ],
  },
  {
    id: "centro",
    name: "Centro",
    sitios: [{ id: "poblacion", name: "Poblacion" }],
  },
  {
    id: "looc",
    name: "Looc",
    sitios: [
      { id: "baybayon", name: "Baybayon" },
      { id: "ibabao", name: "Ibabao" },
    ],
  },
];

export const getBarangay = (id: string) => barangays.find((b) => b.id === id);
export const getSitio = (barangayId: string, sitioId: string) =>
  getBarangay(barangayId)?.sitios.find((s) => s.id === sitioId);
