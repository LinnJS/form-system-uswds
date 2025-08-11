/**
 * Shared Tailwind CSS Configuration
 *
 * This configuration provides a consistent design system across the monorepo.
 * It includes custom color palettes and font configurations that can be used
 * throughout all applications.
 *
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        /**
         * Primary Color Palette - Blue
         * Based on Tailwind's blue scale, used for primary actions,
         * links, and important UI elements.
         *
         * Usage examples:
         * - bg-primary-500: Primary button backgrounds
         * - text-primary-600: Links and primary text
         * - border-primary-300: Focus states and borders
         */
        primary: {
          50: "#eff6ff", // Lightest blue for subtle backgrounds
          100: "#dbeafe", // Very light blue for hover states
          200: "#bfdbfe", // Light blue for selected states
          300: "#93c5fd", // Medium-light blue for borders
          400: "#60a5fa", // Medium blue for icons
          500: "#3b82f6", // Base primary blue (default)
          600: "#2563eb", // Darker blue for hover states
          700: "#1d4ed8", // Dark blue for pressed states
          800: "#1e40af", // Very dark blue for text
          900: "#1e3a8a", // Darkest blue for high contrast
          950: "#172554", // Near-black blue for dark mode
        },
        /**
         * Secondary Color Palette - Pink
         * Based on Tailwind's pink scale, used for secondary actions,
         * accents, and complementary UI elements.
         *
         * Usage examples:
         * - bg-secondary-500: Secondary button backgrounds
         * - text-secondary-600: Accent text and highlights
         * - border-secondary-300: Decorative borders
         */
        secondary: {
          50: "#fdf2f8", // Lightest pink for subtle backgrounds
          100: "#fce7f3", // Very light pink for hover states
          200: "#fbcfe8", // Light pink for selected states
          300: "#f9a8d4", // Medium-light pink for borders
          400: "#f472b6", // Medium pink for icons
          500: "#ec4899", // Base secondary pink (default)
          600: "#db2777", // Darker pink for hover states
          700: "#be185d", // Dark pink for pressed states
          800: "#9d174d", // Very dark pink for text
          900: "#831843", // Darkest pink for high contrast
          950: "#500724", // Near-black pink for dark mode
        },
      },
      /**
       * Font Family Configuration
       * Uses Geist fonts from Vercel for a modern, clean typography system.
       * Falls back to system fonts for optimal performance.
       */
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
