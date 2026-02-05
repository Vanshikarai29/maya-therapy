import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Therapy Earthy Palette
        cream: {
          DEFAULT: "#f5f0eb",
          dark: "#ede6dd",
        },
        sage: {
          DEFAULT: "#6b7f5e",
          light: "#8fa67f",
          dark: "#4a5c3e",
        },
        terracotta: "#c07a5a",
        "warm-brown": "#3d2e25",
        "warm-mid": "#6b5a4e",
        "card-bg": "#faf7f4",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', ...defaultTheme.fontFamily.sans],
        sans: ['"DM Sans"', ...defaultTheme.fontFamily.sans],
        display: ['"Cormorant Garamond"', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        arch: "60% 60% 40% 40%",
      },
      boxShadow: {
        soft: "0 10px 40px rgba(61, 46, 37, 0.1)",
        card: "0 4px 24px rgba(107, 127, 94, 0.12)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
