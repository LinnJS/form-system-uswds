import type { Config } from "tailwindcss";
import sharedConfig from "@acme/tailwind-config";
import tailwindPreset from "./src/lib/tailwind-preset";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.stories.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}"
  ],
  presets: [
    sharedConfig,
    tailwindPreset // Add design system preset
  ],
  theme: {
    extend: {
      // Override with USWDS fonts
      fontFamily: {
        sans: ['"Source Sans Pro"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', '"Times New Roman"', 'serif'],
        mono: ['"Roboto Mono"', '"Courier New"', 'monospace'],
      },
      // Add container settings for shadcn components
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      // Animation presets for shadcn components
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;