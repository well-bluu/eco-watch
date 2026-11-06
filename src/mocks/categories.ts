import type { ComplaintCategory } from "./types";

export const complaintCategories: ComplaintCategory[] = [
  {
    id: "garbage-disposal",
    label: "Garbage disposal",
    officialName: "GARBAGE DISPOSAL",
  },
  {
    id: "waste-water-discharge",
    label: "Waste water discharge",
    officialName: "WASTE WATER DISCHARGE",
  },
  { id: "foul-odor", label: "Foul odor", officialName: "FOUL ODOR" },
  { id: "tree-cutting", label: "Tree cutting", officialName: "TREE CUTTING" },
  {
    id: "animal-carcass",
    label: "Animal carcass",
    officialName: "ANIMAL CARCASS",
  },
  {
    id: "sand-soil-extraction",
    label: "Sand / soil extraction",
    officialName: "SAND / SOIL EXTRACTION",
  },
  {
    id: "pig-pen-animal-raising",
    label: "Pig pen / animal raising",
    officialName: "PIG PEN / ANIMAL RAISING",
  },
  {
    id: "air-pollution-dust",
    label: "Air pollution / dust problems",
    officialName: "AIR POLLUTION / DUST PROBLEMS",
  },
  {
    id: "dirty-vacant-lot",
    label: "Dirty vacant lot",
    officialName: "DIRTY VACANT LOT",
  },
  {
    id: "unauthorized-public-postings",
    label: "Unauthorized public postings",
    officialName:
      "UNAUTHORIZED PUBLIC POSTINGS (E.G. SIGNBOARDS, ADVERTISEMENT POSTERS, ETC.)",
    detail: "E.g. signboards, advertisement posters",
  },
  {
    id: "animal-excreta",
    label: "Animal excreta",
    officialName: "ANIMAL EXCRETA",
  },
];

export const getCategory = (id: ComplaintCategory["id"]) =>
  complaintCategories.find((c) => c.id === id);
