/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          navy: {
            DEFAULT: "#0F2137",
            dark: "#0A1727",
            light: "#18375E",
          },
          gold: {
            DEFAULT: "#937133",
            light: "#B08D4F",
            dark: "#7A5C28",
          },
          sand: {
            DEFAULT: "#DCD5C7",
            light: "#F7F5F0",
          },
          slate: {
            DEFAULT: "#7389A4",
            light: "#8FA3BC",
          },
          muted: "#666F7B",
          surface: "#F1F2F3",
          dark: "#111111",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      letterSpacing: {
        tag: "0.2em",    // 2.4px on 12px font ("WASHINGTON, DC · MARYLAND")
        brand: "0.16em", // 1.6px on 10px font ("EVERY HOME, A BLESSING")
      },
      maxWidth: {
        page: "1440px",
      },
    },
  },
  plugins: [],
};
