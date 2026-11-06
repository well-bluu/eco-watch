import type { Resident } from "./types";

export const elijah: Resident = {
  id: "res-001",
  username: "elijahbes",
  firstName: "Elijah",
  lastName: "Bes",
  email: "elijahbes@gmail.com",
  phone: "0917 123 4567",
  dateOfBirth: "2001-04-12",
  gender: "Male",
  streetAddress: "24 A. Del Rosario St",
  barangayId: "subangdaku",
  sitioId: "marna",
  establishmentType: "Residential",
};

export const newResident: Resident = {
  id: "res-002",
  username: "mariasantos",
  firstName: "Maria",
  lastName: "Santos",
  email: "maria.santos@example.com",
  phone: "0918 765 4321",
  dateOfBirth: "1998-09-30",
  gender: "Female",
  streetAddress: "8 Plaridel St",
  barangayId: "centro",
  sitioId: "poblacion",
  establishmentType: "Residential",
};

export const residents = [elijah, newResident];

// Swap the resident here to see the new-user screens.
export const sampleSession = { resident: elijah };

export const SAMPLE_NOW = "2026-11-06T08:00:00+08:00";
