import type { Config } from "tailwindcss";
import { designTokens } from "./design-tokens";

/**
 * Tailwind CSS preset for USWDS design tokens with VA.gov enhancements
 * Maps USWDS colors, typography, spacing, and other design tokens to Tailwind utilities
 * @see https://designsystem.digital.gov/design-tokens/
 * @see https://design.va.gov/
 */
const tailwindPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {

        // Primary colors (Blue family)
        primary: designTokens.colors.primary.DEFAULT,
        "primary-lightest": designTokens.colors.primary.lightest,
        "primary-lighter": designTokens.colors.primary.lighter,
        "primary-light": designTokens.colors.primary.light,
        "primary-vivid": designTokens.colors.primary.vivid,
        "primary-dark": designTokens.colors.primary.dark,
        "primary-darker": designTokens.colors.primary.darker,
        "primary-darkest": designTokens.colors.primary.darkest,

        // Secondary colors (Red family)
        secondary: designTokens.colors.secondary.DEFAULT,
        "secondary-lightest": designTokens.colors.secondary.lightest,
        "secondary-lighter": designTokens.colors.secondary.lighter,
        "secondary-light": designTokens.colors.secondary.light,
        "secondary-vivid": designTokens.colors.secondary.vivid,
        "secondary-dark": designTokens.colors.secondary.dark,
        "secondary-darker": designTokens.colors.secondary.darker,
        "secondary-darkest": designTokens.colors.secondary.darkest,

        // Accent cool colors (Cyan family)
        "accent-cool": designTokens.colors.accent.cool.DEFAULT,
        "accent-cool-lightest": designTokens.colors.accent.cool.lightest,
        "accent-cool-lighter": designTokens.colors.accent.cool.lighter,
        "accent-cool-light": designTokens.colors.accent.cool.light,
        "accent-cool-dark": designTokens.colors.accent.cool.dark,
        "accent-cool-darker": designTokens.colors.accent.cool.darker,

        // Accent warm colors (Orange family)
        "accent-warm": designTokens.colors.accent.warm.DEFAULT,
        "accent-warm-lightest": designTokens.colors.accent.warm.lightest,
        "accent-warm-lighter": designTokens.colors.accent.warm.lighter,
        "accent-warm-light": designTokens.colors.accent.warm.light,
        "accent-warm-dark": designTokens.colors.accent.warm.dark,
        "accent-warm-darker": designTokens.colors.accent.warm.darker,

        // State colors
        info: designTokens.colors.info.DEFAULT,
        "info-lightest": designTokens.colors.info.lightest,
        "info-lighter": designTokens.colors.info.lighter,
        "info-light": designTokens.colors.info.light,
        "info-dark": designTokens.colors.info.dark,
        "info-darker": designTokens.colors.info.darker,
        "info-darkest": designTokens.colors.info.darkest,

        success: designTokens.colors.success.DEFAULT,
        "success-lightest": designTokens.colors.success.lightest,
        "success-lighter": designTokens.colors.success.lighter,
        "success-light": designTokens.colors.success.light,
        "success-dark": designTokens.colors.success.dark,
        "success-darker": designTokens.colors.success.darker,
        "success-darkest": designTokens.colors.success.darkest,

        warning: designTokens.colors.warning.DEFAULT,
        "warning-lightest": designTokens.colors.warning.lightest,
        "warning-lighter": designTokens.colors.warning.lighter,
        "warning-light": designTokens.colors.warning.light,
        "warning-dark": designTokens.colors.warning.dark,
        "warning-darker": designTokens.colors.warning.darker,
        "warning-darkest": designTokens.colors.warning.darkest,

        error: designTokens.colors.error.DEFAULT,
        "error-lightest": designTokens.colors.error.lightest,
        "error-lighter": designTokens.colors.error.lighter,
        "error-light": designTokens.colors.error.light,
        "error-dark": designTokens.colors.error.dark,
        "error-darker": designTokens.colors.error.darker,
        "error-darkest": designTokens.colors.error.darkest,

        emergency: designTokens.colors.emergency.DEFAULT,
        "emergency-dark": designTokens.colors.emergency.dark,

        // Gray scale
        white: designTokens.colors.base.white,
        black: designTokens.colors.base.black,
        "gray-5": designTokens.colors.base.lightest,
        "gray-10": designTokens.colors.base.lighter,
        "gray-30": designTokens.colors.base.light,
        "gray-50": designTokens.colors.base.DEFAULT,
        "gray-60": designTokens.colors.base.dark,
        "gray-70": designTokens.colors.base.darker,
        "gray-90": designTokens.colors.base.darkest,

        // Disabled state colors
        disabled: designTokens.colors.disabled.DEFAULT,
        "disabled-light": designTokens.colors.disabled.light,
        "disabled-dark": designTokens.colors.disabled.dark,

        // VA.gov specific colors (keeping va- prefix for clarity)
        "va-link-blue": designTokens.colors.va.linkBlue,
        "va-link-blue-hover": designTokens.colors.va.linkBlueHover,
        "va-bg-gray": designTokens.colors.va.backgroundGray,
        "va-border-gray": designTokens.colors.va.borderGray,
        "va-disabled-gray": designTokens.colors.va.disabledGray,
        "va-gibill": designTokens.colors.va.gibillAccent,
        "va-vads-green": designTokens.colors.va.vadsGreen,
        "va-vads-green-light": designTokens.colors.va.vadsGreenLight,
      },

      fontFamily: {
        "uswds-sans": designTokens.fonts.sans,
        "uswds-serif": designTokens.fonts.serif,
        "uswds-mono": designTokens.fonts.mono,
      },

      fontSize: {
        // USWDS font sizes as primary sizes
        "3xs": designTokens.typography.size["3xs"],
        "2xs": designTokens.typography.size["2xs"],
        xs: designTokens.typography.size.xs,
        sm: designTokens.typography.size.sm,
        md: designTokens.typography.size.md,
        base: designTokens.typography.size.base,
        lg: designTokens.typography.size.lg,
        xl: designTokens.typography.size.xl,
        "2xl": designTokens.typography.size["2xl"],
        "3xl": designTokens.typography.size["3xl"],
        "4xl": designTokens.typography.size["4xl"],
        "5xl": designTokens.typography.size["5xl"],
        "6xl": designTokens.typography.size["6xl"],
        
        // Display sizes
        display: designTokens.typography.size.display,
        "display-lg": designTokens.typography.size["display-lg"],
        "display-xl": designTokens.typography.size["display-xl"],
      },

      spacing: {
        // USWDS spacing units (no prefix needed - these ARE our spacing units)
        // Fractional units
        "05": designTokens.spacing["05"],
        "1px": designTokens.spacing["1px"],
        "2px": designTokens.spacing["2px"],
        
        // Standard units (keeping numeric keys)
        "1": designTokens.spacing[1],
        "105": designTokens.spacing[105],
        "2": designTokens.spacing[2],
        "205": designTokens.spacing[205],
        "3": designTokens.spacing[3],
        "4": designTokens.spacing[4],
        "5": designTokens.spacing[5],
        "6": designTokens.spacing[6],
        "7": designTokens.spacing[7],
        "8": designTokens.spacing[8],
        "9": designTokens.spacing[9],
        "10": designTokens.spacing[10],
        "15": designTokens.spacing[15],
        
        // Negative spacing
        "neg-05": designTokens.spacing["neg-05"],
        "neg-1": designTokens.spacing["neg-1"],
        "neg-105": designTokens.spacing["neg-105"],
        "neg-2": designTokens.spacing["neg-2"],
        "neg-205": designTokens.spacing["neg-205"],
        "neg-3": designTokens.spacing["neg-3"],
      },

      lineHeight: {
        // USWDS line heights
        "1": designTokens.typography.lineHeight[1],
        "2": designTokens.typography.lineHeight[2],
        "3": designTokens.typography.lineHeight[3],
        "4": designTokens.typography.lineHeight[4],
        "5": designTokens.typography.lineHeight[5],
        "6": designTokens.typography.lineHeight[6],
      },

      fontWeight: {
        // USWDS font weights
        thin: String(designTokens.typography.weight.thin),
        light: String(designTokens.typography.weight.light),
        normal: String(designTokens.typography.weight.normal),
        medium: String(designTokens.typography.weight.medium),
        semibold: String(designTokens.typography.weight.semibold),
        bold: String(designTokens.typography.weight.bold),
        heavy: String(designTokens.typography.weight.heavy),
        black: String(designTokens.typography.weight.black),
      },
      
      letterSpacing: {
        // USWDS letter spacing
        tighter: designTokens.typography.letterSpacing.tighter,
        tight: designTokens.typography.letterSpacing.tight,
        normal: designTokens.typography.letterSpacing.normal,
        wide: designTokens.typography.letterSpacing.wide,
        wider: designTokens.typography.letterSpacing.wider,
        widest: designTokens.typography.letterSpacing.widest,
      },

      borderRadius: {
        // USWDS border radius
        none: designTokens.radius.none,
        sm: designTokens.radius.sm,
        DEFAULT: designTokens.radius.DEFAULT,
        md: designTokens.radius.md,
        lg: designTokens.radius.lg,
        xl: designTokens.radius.xl,
        pill: designTokens.radius.pill,
      },
      
      borderWidth: {
        // USWDS border widths
        "0": designTokens.borderWidth.none,
        "05": designTokens.borderWidth["05"],
        "1": designTokens.borderWidth["1"],
        "105": designTokens.borderWidth["105"],
        "2": designTokens.borderWidth["2"],
        "205": designTokens.borderWidth["205"],
        "3": designTokens.borderWidth["3"],
      },

      boxShadow: {
        // USWDS shadows
        none: designTokens.shadow.none,
        "1": designTokens.shadow[1],
        "2": designTokens.shadow[2],
        "3": designTokens.shadow[3],
        "4": designTokens.shadow[4],
        "5": designTokens.shadow[5],
        focus: designTokens.shadow.focus,
        "focus-inset": designTokens.shadow.focusInset,
      },
      
      opacity: {
        // USWDS opacity scale
        "0": designTokens.opacity[0],
        "10": designTokens.opacity[10],
        "20": designTokens.opacity[20],
        "30": designTokens.opacity[30],
        "40": designTokens.opacity[40],
        "50": designTokens.opacity[50],
        "60": designTokens.opacity[60],
        "70": designTokens.opacity[70],
        "80": designTokens.opacity[80],
        "90": designTokens.opacity[90],
        "100": designTokens.opacity[100],
      },

      zIndex: {
        // USWDS z-index scale
        deep: String(designTokens.zIndex.deep),
        DEFAULT: String(designTokens.zIndex.default),
        bottom: String(designTokens.zIndex.bottom),
        dropdown: String(designTokens.zIndex.dropdown),
        sticky: String(designTokens.zIndex.sticky),
        overlay: String(designTokens.zIndex.overlay),
        modal: String(designTokens.zIndex.modal),
        popover: String(designTokens.zIndex.popover),
        tooltip: String(designTokens.zIndex.tooltip),
        notification: String(designTokens.zIndex.notification),
        top: String(designTokens.zIndex.top),
      },
      
      transitionDuration: {
        // USWDS transitions
        fast: "150ms",
        base: "250ms",
        slow: "350ms",
        // VA-specific (keeping prefix for clarity)
        "va-fast": "100ms",
        "va-slow": "500ms",
      },
      
      transitionTimingFunction: {
        DEFAULT: "ease-in-out",
      },
      
      maxWidth: {
        // USWDS measure widths
        narrow: designTokens.typography.measure.narrow,
        base: designTokens.typography.measure.base,
        wide: designTokens.typography.measure.wide,
        // Container widths
        mobile: designTokens.container.mobile,
        "mobile-lg": designTokens.container.mobileLg,
        tablet: designTokens.container.tablet,
        desktop: designTokens.container.desktop,
        widescreen: designTokens.container.widescreen,
      },

      screens: {
        // USWDS breakpoints
        mobile: `${designTokens.breakpoints.mobile}px`,
        "mobile-lg": `${designTokens.breakpoints.mobileLg}px`,
        tablet: `${designTokens.breakpoints.tablet}px`,
        desktop: `${designTokens.breakpoints.desktop}px`,
        "desktop-lg": `${designTokens.breakpoints.desktopLg}px`,
        widescreen: `${designTokens.breakpoints.widescreen}px`,
      },
      
      backgroundImage: {
        "va-gradient-blue": "linear-gradient(to bottom, #005ea2, #003875)",
        "va-gradient-gray": "linear-gradient(to bottom, #f1f1f1, #dfe1e2)",
      },
    },
  },
};

export default tailwindPreset;
