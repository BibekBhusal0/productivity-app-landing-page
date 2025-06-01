import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px",
        disabledOpacity: 0.45,
        fontSize: {
          tiny: "0.75rem", // 12px
          small: "0.875rem", // 14px
          medium: "0.9375rem", // 15px
          large: "1.125rem", // 18px
        },
        lineHeight: {
          tiny: "1rem",
          small: "1.25rem",
          medium: "1.5rem",
          large: "1.75rem",
        },
        radius: {
          small: "6px",
          medium: "8px",
          large: "12px",
        },
        borderWidth: {
          small: "1px",
          medium: "1px",
          large: "2px",
        },
      },
      themes: {
        light: {
          colors: {
            primary: {
              50: "#eef6ff",
              100: "#d9ebff",
              200: "#bcdaff",
              300: "#8dc2ff",
              400: "#589eff",
              500: "#3b82f6",
              600: "#2563eb",
              700: "#1d4ed8",
              800: "#1e40af",
              900: "#1e3a8a",
              DEFAULT: "#2563eb",
              foreground: "#ffffff",
            },
            background: {
              DEFAULT: "#FFFFFF",
            },
            content1: {
              DEFAULT: "#FFFFFF",
              foreground: "#111827",
            },
            content2: {
              DEFAULT: "#F9FAFB",
              foreground: "#1F2937",
            },
          },
        },
        dark: {
          colors: {
            primary: {
              50: "#eef6ff",
              100: "#d9ebff",
              200: "#bcdaff",
              300: "#8dc2ff",
              400: "#589eff",
              500: "#3b82f6",
              600: "#2563eb",
              700: "#1d4ed8",
              800: "#1e40af",
              900: "#1e3a8a",
              DEFAULT: "#3b82f6",
              foreground: "#ffffff",
            },
            background: {
              DEFAULT: "#0F172A",
            },
            content1: {
              DEFAULT: "#1E293B",
              foreground: "#F1F5F9",
            },
            content2: {
              DEFAULT: "#334155",
              foreground: "#F8FAFC",
            },
            foreground: {
              DEFAULT: "#F1F5F9",
            },
          },
        },
      },
    }),
  ],
};
