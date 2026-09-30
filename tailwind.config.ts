import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1c1815",
          50: "#f5f4f3",
          900: "#1c1815",
          950: "#100d0b",
        },
        cream: {
          DEFAULT: "#f6f1e7",
          soft: "#efe8d8",
          card: "#fffdf8",
        },
        gold: {
          DEFAULT: "#b6924f",
          light: "#d9b876",
          dark: "#8f7231",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      backgroundImage: {
        "gold-diagonal":
          "linear-gradient(135deg, transparent 45%, rgba(201,162,75,0.35) 50%, transparent 55%)",
      },
    },
  },
  plugins: [],
};

export default config;
