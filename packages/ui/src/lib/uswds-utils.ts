/**
 * USWDS Utility Functions
 * Provides consistent API for USWDS components with shadcn/ui-like developer experience
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names with proper Tailwind CSS precedence
 * This is the standard cn utility used throughout the library
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * USWDS Component Factory
 * Creates consistent component APIs with USWDS styling
 */
export function createUSWDSComponent<T extends Record<string, Record<string, string>>>(
  baseClasses: string,
  variants?: T
) {
  return {
    base: baseClasses,
    variants,
    className: (props?: Record<string, string>) => {
      const classes = [baseClasses];

      if (variants && props) {
        Object.entries(props).forEach(([key, value]) => {
          if (!value) return;
          const variantGroup = variants[key as keyof T];
          if (variantGroup && value in variantGroup) {
            const styles = variantGroup[value];
            if (styles) {
              classes.push(styles);
            }
          }
        });
      }

      return classes.join(" ");
    },
  };
}

/**
 * USWDS Focus Ring Utility
 * Applies consistent focus styles across components
 */
export const focusRing = "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";

/**
 * USWDS Disabled State Utility
 * Applies consistent disabled styles
 */
export const disabledState = "disabled:pointer-events-none disabled:opacity-50";

/**
 * USWDS Screen Reader Only
 * Hides content visually but keeps it available to screen readers
 */
export const srOnly = "sr-only";

/**
 * USWDS Not Screen Reader Only
 * Shows content that was previously screen reader only
 */
export const notSrOnly = "not-sr-only";

/**
 * USWDS Validation States
 * Consistent validation styling for form elements
 */
export const validationStates = {
  error: "border-red-600 focus:ring-red-500",
  success: "border-green-600 focus:ring-green-500",
  warning: "border-yellow-500 focus:ring-yellow-500",
  default: "border-gray-300 focus:ring-blue-500",
};

/**
 * USWDS Typography Scale
 * Based on USWDS type scale
 */
export const typeScale = {
  "3xs": "text-[10px]",
  "2xs": "text-xs", // 12px
  xs: "text-sm", // 14px
  sm: "text-[15px]", // 15px
  base: "text-[17px]", // 17px USWDS body
  lg: "text-[22px]", // 22px
  xl: "text-[28px]", // 28px
  "2xl": "text-[32px]", // 32px
  "3xl": "text-[36px]", // 36px
  "4xl": "text-[40px]", // 40px
  "5xl": "text-[48px]", // 48px
  "6xl": "text-[56px]", // 56px
};

/**
 * USWDS Spacing Scale
 * Based on 8px grid system
 */
export const spacingScale = {
  "05": "0.25rem", // 4px
  1: "0.5rem", // 8px
  2: "1rem", // 16px
  3: "1.5rem", // 24px
  4: "2rem", // 32px
  5: "2.5rem", // 40px
  6: "3rem", // 48px
  7: "3.5rem", // 56px
  8: "4rem", // 64px
  9: "4.5rem", // 72px
  10: "5rem", // 80px
};

/**
 * USWDS Color Utilities
 * Quick access to common USWDS colors
 */
export const colors = {
  primary: "text-blue-600",
  primaryHover: "hover:text-blue-700",
  secondary: "text-red-600",
  secondaryHover: "hover:text-red-700",
  base: "text-gray-700",
  baseHover: "hover:text-gray-800",
  success: "text-green-600",
  warning: "text-yellow-600",
  error: "text-red-600",
  info: "text-cyan-600",
};

/**
 * USWDS Background Color Utilities
 */
export const bgColors = {
  primary: "bg-blue-600",
  primaryHover: "hover:bg-blue-700",
  secondary: "bg-red-600",
  secondaryHover: "hover:bg-red-700",
  base: "bg-gray-100",
  baseHover: "hover:bg-gray-200",
  success: "bg-green-600",
  warning: "bg-yellow-500",
  error: "bg-red-600",
  info: "bg-cyan-600",
};

/**
 * Format USWDS Classes
 * Ensures USWDS class prefixes are properly applied
 */
export function formatUSWDSClass(component: string, element?: string): string {
  if (element) {
    return `usa-${component}__${element}`;
  }
  return `usa-${component}`;
}

/**
 * Get USWDS Icon Size
 * Returns consistent icon sizing classes
 */
export function getIconSize(size: "sm" | "default" | "lg" | "xl" = "default"): string {
  const sizes = {
    sm: "size-4",
    default: "size-5",
    lg: "size-6",
    xl: "size-8",
  };
  return sizes[size];
}
