/**
 * USWDS Design Tokens
 * Based on U.S. Web Design System v3
 * https://designsystem.digital.gov/design-tokens/
 */

// USWDS Color Tokens
export const colors = {
  // Primary colors (blue family)
  primary: {
    lighter: "#d9e8f6",
    light: "#73b3e7",
    base: "#005ea2",
    dark: "#1a4480",
    darker: "#162e51",
  },

  // Secondary colors (red family)
  secondary: {
    lighter: "#f2e4e1",
    light: "#f2938c",
    base: "#d83933",
    dark: "#b50909",
    darker: "#8b0a03",
  },

  // Accent colors
  accent: {
    cool: {
      lighter: "#e1f3f8",
      light: "#97d4ea",
      base: "#00bde3",
      dark: "#28a0cb",
      darker: "#07648d",
    },
    warm: {
      lighter: "#fef2e4",
      light: "#fad980",
      base: "#ffbe2e",
      dark: "#e5a000",
      darker: "#936f38",
    },
  },

  // Base colors
  base: {
    lightest: "#f0f0f0",
    lighter: "#dfe1e2",
    light: "#a9aeb1",
    base: "#71767a",
    dark: "#565c65",
    darker: "#3d4551",
    darkest: "#1b1b1b",
  },

  // System colors
  info: {
    lighter: "#e7f6f8",
    light: "#99deea",
    base: "#00bde3",
    dark: "#009ec1",
    darker: "#2e6276",
  },

  success: {
    lighter: "#ecf3ec",
    light: "#70e17b",
    base: "#00a91c",
    dark: "#008817",
    darker: "#216e1f",
  },

  warning: {
    lighter: "#fef9e9",
    light: "#fee685",
    base: "#ffbe2e",
    dark: "#e5a000",
    darker: "#936f38",
  },

  error: {
    lighter: "#f4e3db",
    light: "#f39268",
    base: "#d54309",
    dark: "#b50909",
    darker: "#6f3331",
  },

  // Emergency
  emergency: "#9c3d10",
  emergencyDark: "#332d29",
};

// USWDS Spacing Tokens (based on 8px grid)
export const spacing = {
  "05": "4px", // 0.5 spacing units
  1: "8px", // 1 spacing unit
  2: "16px", // 2 spacing units
  3: "24px", // 3 spacing units
  4: "32px", // 4 spacing units
  5: "40px", // 5 spacing units
  6: "48px", // 6 spacing units
  7: "56px", // 7 spacing units
  8: "64px", // 8 spacing units
  9: "72px", // 9 spacing units
  10: "80px", // 10 spacing units
  15: "120px", // 15 spacing units
  card: "32px", // Card spacing
  "card-lg": "48px", // Large card spacing
  mobile: "24px", // Mobile spacing
  desktop: "32px", // Desktop spacing
};

// USWDS Typography Tokens
export const typography = {
  fontFamily: {
    sans: '"Source Sans Pro", "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif',
    serif: '"Merriweather", Georgia, Cambria, "Times New Roman", Times, serif',
    mono: '"Roboto Mono", "Bitstream Vera Sans Mono", "Consolas", "Courier", monospace',
    ui: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },

  fontSize: {
    "3xs": "10px", // 10px
    "2xs": "12px", // 12px
    xs: "14px", // 14px
    sm: "15px", // 15px
    base: "17px", // 17px (USWDS body)
    md: "17px", // 17px
    lg: "22px", // 22px
    xl: "28px", // 28px
    "2xl": "32px", // 32px
    "3xl": "36px", // 36px
    "4xl": "40px", // 40px
    "5xl": "48px", // 48px
    "6xl": "56px", // 56px
  },

  lineHeight: {
    1: "1",
    2: "1.15",
    3: "1.35",
    4: "1.5",
    5: "1.62",
    6: "1.75",
  },

  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  measure: {
    1: "44ex",
    2: "60ex",
    3: "64ex",
    4: "68ex",
    5: "72ex",
    6: "88ex",
  },
};

// USWDS Radius Tokens
export const radius = {
  0: "0",
  sm: "2px",
  md: "4px",
  lg: "8px",
  pill: "99rem",
};

// USWDS Shadow Tokens
export const shadow = {
  none: "none",
  1: "0 1px 4px 0 rgba(0, 0, 0, 0.1)",
  2: "0 4px 8px 0 rgba(0, 0, 0, 0.1)",
  3: "0 8px 16px 0 rgba(0, 0, 0, 0.1)",
  4: "0 12px 24px 0 rgba(0, 0, 0, 0.1)",
  5: "0 16px 32px 0 rgba(0, 0, 0, 0.1)",
};

// USWDS Z-index Tokens
export const zIndex = {
  auto: "auto",
  bottom: -100,
  100: 100,
  200: 200,
  300: 300,
  400: 400,
  500: 500,
  top: 99999,
};

// USWDS Breakpoints
export const breakpoints = {
  "mobile-lg": "480px",
  tablet: "640px",
  desktop: "1024px",
  "desktop-lg": "1200px",
  widescreen: "1400px",
};

// USWDS Opacity Tokens
export const opacity = {
  0: "0",
  10: "0.1",
  20: "0.2",
  30: "0.3",
  40: "0.4",
  50: "0.5",
  60: "0.6",
  70: "0.7",
  80: "0.8",
  90: "0.9",
  100: "1",
};

// Export all tokens as a single object
export const uswdsTokens = {
  colors,
  spacing,
  typography,
  radius,
  shadow,
  zIndex,
  breakpoints,
  opacity,
};

export default uswdsTokens;
