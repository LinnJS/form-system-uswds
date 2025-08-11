/**
 * USWDS Tailwind Preset
 * This preset configures Tailwind to use USWDS design tokens
 */

import type { Config } from "tailwindcss";
import { uswdsConfig } from "./uswds-config";

const uswdsTailwindPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        // Map USWDS colors to Tailwind
        "uswds-primary": uswdsConfig.colors.primary,
        "uswds-secondary": uswdsConfig.colors.secondary,
        "uswds-base": uswdsConfig.colors.base,
        "uswds-info": uswdsConfig.colors.info,
        "uswds-success": uswdsConfig.colors.success,
        "uswds-warning": uswdsConfig.colors.warning,
        "uswds-error": uswdsConfig.colors.error,
        "uswds-disabled": uswdsConfig.colors.disabled,

        // Semantic color mappings
        primary: uswdsConfig.colors.primary.DEFAULT,
        "primary-dark": uswdsConfig.colors.primary.dark,
        "primary-darker": uswdsConfig.colors.primary.darker,
        "primary-light": uswdsConfig.colors.primary.light,
        "primary-lighter": uswdsConfig.colors.primary.lighter,

        secondary: uswdsConfig.colors.secondary.DEFAULT,
        "secondary-dark": uswdsConfig.colors.secondary.dark,
        "secondary-darker": uswdsConfig.colors.secondary.darker,
        "secondary-light": uswdsConfig.colors.secondary.light,
        "secondary-lighter": uswdsConfig.colors.secondary.lighter,

        info: uswdsConfig.colors.info.DEFAULT,
        "info-dark": uswdsConfig.colors.info.dark,
        "info-darker": uswdsConfig.colors.info.darker,
        "info-light": uswdsConfig.colors.info.light,
        "info-lighter": uswdsConfig.colors.info.lighter,

        success: uswdsConfig.colors.success.DEFAULT,
        "success-dark": uswdsConfig.colors.success.dark,
        "success-darker": uswdsConfig.colors.success.darker,
        "success-light": uswdsConfig.colors.success.light,
        "success-lighter": uswdsConfig.colors.success.lighter,

        warning: uswdsConfig.colors.warning.DEFAULT,
        "warning-dark": uswdsConfig.colors.warning.dark,
        "warning-darker": uswdsConfig.colors.warning.darker,
        "warning-light": uswdsConfig.colors.warning.light,
        "warning-lighter": uswdsConfig.colors.warning.lighter,

        error: uswdsConfig.colors.error.DEFAULT,
        "error-dark": uswdsConfig.colors.error.dark,
        "error-darker": uswdsConfig.colors.error.darker,
        "error-light": uswdsConfig.colors.error.light,
        "error-lighter": uswdsConfig.colors.error.lighter,

        // Base/gray colors
        "gray-5": uswdsConfig.colors.base.lightest,
        "gray-10": uswdsConfig.colors.base.lighter,
        "gray-30": uswdsConfig.colors.base.light,
        "gray-50": uswdsConfig.colors.base.DEFAULT,
        "gray-60": uswdsConfig.colors.base.dark,
        "gray-70": uswdsConfig.colors.base.darker,
        "gray-90": uswdsConfig.colors.base.darkest,
      },

      fontFamily: {
        "uswds-sans": uswdsConfig.fonts.sans,
        "uswds-serif": uswdsConfig.fonts.serif,
        "uswds-mono": uswdsConfig.fonts.mono,
      },

      fontSize: {
        "3xs": uswdsConfig.typography.size["3xs"],
        "2xs": uswdsConfig.typography.size["2xs"],
        xs: uswdsConfig.typography.size.xs,
        sm: uswdsConfig.typography.size.sm,
        base: uswdsConfig.typography.size.base,
        lg: uswdsConfig.typography.size.lg,
        xl: uswdsConfig.typography.size.xl,
        "2xl": uswdsConfig.typography.size["2xl"],
        "3xl": uswdsConfig.typography.size["3xl"],
        "4xl": uswdsConfig.typography.size["4xl"],
        "5xl": uswdsConfig.typography.size["5xl"],
        "6xl": uswdsConfig.typography.size["6xl"],
      },

      spacing: {
        "uswds-05": uswdsConfig.spacing["05"],
        "uswds-1": uswdsConfig.spacing[1],
        "uswds-105": uswdsConfig.spacing[105],
        "uswds-2": uswdsConfig.spacing[2],
        "uswds-205": uswdsConfig.spacing[205],
        "uswds-3": uswdsConfig.spacing[3],
        "uswds-4": uswdsConfig.spacing[4],
        "uswds-5": uswdsConfig.spacing[5],
        "uswds-6": uswdsConfig.spacing[6],
        "uswds-7": uswdsConfig.spacing[7],
        "uswds-8": uswdsConfig.spacing[8],
        "uswds-9": uswdsConfig.spacing[9],
        "uswds-10": uswdsConfig.spacing[10],
        "uswds-15": uswdsConfig.spacing[15],
      },

      lineHeight: {
        "uswds-1": uswdsConfig.typography.lineHeight[1],
        "uswds-2": uswdsConfig.typography.lineHeight[2],
        "uswds-3": uswdsConfig.typography.lineHeight[3],
        "uswds-4": uswdsConfig.typography.lineHeight[4],
        "uswds-5": uswdsConfig.typography.lineHeight[5],
        "uswds-6": uswdsConfig.typography.lineHeight[6],
      },

      fontWeight: {
        "uswds-light": String(uswdsConfig.typography.weight.light),
        "uswds-normal": String(uswdsConfig.typography.weight.normal),
        "uswds-medium": String(uswdsConfig.typography.weight.medium),
        "uswds-semibold": String(uswdsConfig.typography.weight.semibold),
        "uswds-bold": String(uswdsConfig.typography.weight.bold),
      },

      borderRadius: {
        "uswds-none": uswdsConfig.radius.none,
        "uswds-sm": uswdsConfig.radius.sm,
        uswds: uswdsConfig.radius.DEFAULT,
        "uswds-md": uswdsConfig.radius.md,
        "uswds-lg": uswdsConfig.radius.lg,
        "uswds-pill": uswdsConfig.radius.pill,
      },

      boxShadow: {
        "uswds-none": uswdsConfig.shadow.none,
        "uswds-1": uswdsConfig.shadow[1],
        "uswds-2": uswdsConfig.shadow[2],
        "uswds-3": uswdsConfig.shadow[3],
        "uswds-4": uswdsConfig.shadow[4],
        "uswds-5": uswdsConfig.shadow[5],
      },

      zIndex: {
        "uswds-deep": String(uswdsConfig.zIndex.deep),
        "uswds-default": String(uswdsConfig.zIndex.default),
        "uswds-dropdown": String(uswdsConfig.zIndex.dropdown),
        "uswds-sticky": String(uswdsConfig.zIndex.sticky),
        "uswds-overlay": String(uswdsConfig.zIndex.overlay),
        "uswds-modal": String(uswdsConfig.zIndex.modal),
        "uswds-popover": String(uswdsConfig.zIndex.popover),
        "uswds-tooltip": String(uswdsConfig.zIndex.tooltip),
        "uswds-top": String(uswdsConfig.zIndex.top),
      },

      screens: {
        mobile: `${uswdsConfig.breakpoints.mobile}px`,
        "mobile-lg": `${uswdsConfig.breakpoints.mobileLg}px`,
        tablet: `${uswdsConfig.breakpoints.tablet}px`,
        desktop: `${uswdsConfig.breakpoints.desktop}px`,
        "desktop-lg": `${uswdsConfig.breakpoints.desktopLg}px`,
        widescreen: `${uswdsConfig.breakpoints.widescreen}px`,
      },
    },
  },
};

export default uswdsTailwindPreset;
