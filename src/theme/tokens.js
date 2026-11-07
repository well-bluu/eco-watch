const colors = {
  transparent: "transparent",
  white: "#FFFFFF",

  // Brand
  navy: "#1E2F6F", // buttons, links, progress, camera button
  "navy-deep": "#0F1A4A", // big navy moments
  gold: "#F0B429", // accent: highlights on navy, unread dot, map pins

  // Text and neutrals
  ink: "#17191A", // headings and body text
  "text-secondary": "#6A6E70", // supporting text (5.2:1 on white)
  "text-on-navy-muted": "#C9D2F0",
  line: "#E7E6E2", // dividers (not field borders: too faint)
  border: "#8F8A80", // field borders (3.4:1 on white)
  subtle: "#F6F5F1", // panels, grouped screens
  camera: "#0C100E", // camera screen ground
  "map-ground": "#EBEFEA",

  // Tints
  "tint-gold": "#FDEFC8", // Submitted, Verified
  "tint-blue": "#E2E8F8",
  "tint-sand": "#ECE9E1", // Dispatched
  "tint-forest": "#E2F1DF", // Resolved
  "tint-red": "#FBE9E6", // error backgrounds

  // Meaning
  forest: "#064734", // Resolved
  danger: "#B42318", // errors and log out only

  glass: "rgba(255, 255, 255, 0.72)",
  "glass-edge": "rgba(255, 255, 255, 0.9)",
  "glass-dark": "rgba(255, 255, 255, 0.16)", // glass on navy
};
const fonts = {
  sans: "PlusJakartaSans_400Regular",
  medium: "PlusJakartaSans_500Medium",
  semibold: "PlusJakartaSans_600SemiBold",
  bold: "PlusJakartaSans_700Bold",
  extrabold: "PlusJakartaSans_800ExtraBold",
};

const fontSize = {
  hero: ["40px", { lineHeight: "44px", letterSpacing: "-1px" }], // onboarding, launch
  statement: ["30px", { lineHeight: "36px", letterSpacing: "-0.6px" }], // screen titles
  display: ["26px", { lineHeight: "32px", letterSpacing: "-0.4px" }], // status sentences
  title: ["24px", { lineHeight: "30px", letterSpacing: "-0.3px" }], // section titles
  heading: ["20px", { lineHeight: "26px" }], // lead headlines
  row: ["16px", { lineHeight: "22px" }], // rows, card titles, buttons
  input: ["16px"], // field values
  body: ["15px", { lineHeight: "22px" }], // body text, links
  label: ["14px", { lineHeight: "19px" }], // field labels
  small: ["13px", { lineHeight: "18px" }], // supporting detail
  chip: ["12px", { lineHeight: "16px" }], // status pills
  tab: ["11px", { lineHeight: "14px" }], // tab bar labels
};

const borderRadius = {
  none: "0px",
  sm: "2px", // progress segments
  field: "16px", // fields, small photos
  thumb: "20px", // thumbnails, glass captions, lists
  tile: "24px", // tiles, cards
  panel: "28px", // large panels
  full: "9999px", // buttons, pills, tab bar
};

module.exports = { colors, fonts, fontSize, borderRadius };
