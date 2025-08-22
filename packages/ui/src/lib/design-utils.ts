// Removed unused import - cn is exported from utils.ts separately

/**
 * Creates a USWDS component with consistent API and variant support
 * @param baseClasses - Base CSS classes for the component
 * @param variants - Optional variant configurations
 * @returns Component configuration object with base classes and className generator
 * @example
 * const button = createUSWDSComponent("usa-button", \{
 *   size: \{ small: "usa-button--small", large: "usa-button--large" \}
 * \})
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
          // Type guard to ensure key is valid
          if (key in variants) {
            const variantGroup = variants[key as keyof T];
            if (variantGroup && value in variantGroup) {
              const styles = variantGroup[value];
              if (styles) {
                classes.push(styles);
              }
            }
          }
        });
      }

      return classes.join(" ");
    },
  };
}

/** USWDS-compliant focus ring styles for keyboard navigation */
export const focusRing = "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";

/** USWDS-compliant disabled state styles */
export const disabledState = "disabled:pointer-events-none disabled:opacity-50";

/** Visually hidden but accessible to screen readers */
export const srOnly = "sr-only";

/** Reverses screen reader only styling */
export const notSrOnly = "not-sr-only";

/** USWDS form validation state styles */
export const validationStates = {
  error: "border-red-600 focus:ring-red-500",
  success: "border-green-600 focus:ring-green-500",
  warning: "border-yellow-500 focus:ring-yellow-500",
  default: "border-gray-300 focus:ring-blue-500",
};

/** USWDS typography scale mapping */
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

/** USWDS spacing scale based on 8px grid */
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

/** USWDS text color utilities */
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

/** USWDS background color utilities */
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
 * Formats class names following USWDS BEM naming convention
 * @param component - Component name (e.g., "button", "card")
 * @param element - Optional element name for BEM syntax
 * @returns Formatted USWDS class name
 * @example formatUSWDSClass("button", "icon") // "usa-button__icon"
 */
export function formatUSWDSClass(component: string, element?: string): string {
  if (element) {
    return `usa-${component}__${element}`;
  }
  return `usa-${component}`;
}

/**
 * Returns Tailwind classes for USWDS-compliant icon sizes
 * @param size - Icon size variant
 * @returns Tailwind size class
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
