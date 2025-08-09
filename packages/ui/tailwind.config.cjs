const sharedConfig = require("@repo/tailwind-config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [sharedConfig],
};