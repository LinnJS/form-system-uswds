import type { Config } from "tailwindcss";
import sharedConfig from "@acme/tailwind-config";
import uswdsTailwindPreset from "./src/lib/uswds-tailwind-preset";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.stories.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}"
  ],
  presets: [
    sharedConfig,
    uswdsTailwindPreset // Add USWDS preset
  ],
  theme: {
    extend: {
      // Override with USWDS fonts
      fontFamily: {
        sans: ['"Source Sans Pro"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', '"Times New Roman"', 'serif'],
        mono: ['"Roboto Mono"', '"Courier New"', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;