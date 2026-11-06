const { colors, fonts, fontSize, borderRadius } = require("./src/theme/tokens");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    colors,
    fontSize,
    borderRadius,
    fontFamily: Object.fromEntries(
      Object.entries(fonts).map(([key, family]) => [key, [family]]),
    ),
    fontWeight: {},
    boxShadow: {},
    dropShadow: {},
    blur: {},
    extend: {},
  },
  plugins: [],
};
