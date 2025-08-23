import { cn } from "./utils";
import { designClasses } from "./design-tokens";

/**
 * USWDS Component Styling Utilities
 * Provides consistent styling for all shadcn/ui components with USWDS design tokens
 */

/**
 * Base styles applied to all interactive components
 * Includes USWDS font family and base text sizing
 * Source Sans Pro is the primary font for USWDS
 */
export const baseStyles = cn(
  "font-sans", // Uses Source Sans Pro from USWDS
  "text-base", // 17px base font size from USWDS
  "leading-4" // 1.5 line height
);

/**
 * Heading styles with USWDS serif font
 * Merriweather is used for headings in some USWDS contexts
 */
export const headingStyles = cn(
  "font-serif", // Uses Merriweather from USWDS
  "font-bold",
  "leading-3" // 1.35 line height for headings
);

/**
 * Monospace styles for code elements
 * Roboto Mono is the USWDS monospace font
 */
export const monoStyles = cn(
  "font-mono", // Uses Roboto Mono from USWDS
  "text-sm"
);

/**
 * Focus styles consistent with USWDS
 * Provides accessible focus indicators
 */
export const focusStyles = cn(
  "focus-visible:outline-none",
  "focus-visible:ring-2",
  "focus-visible:ring-primary",
  "focus-visible:ring-offset-2",
  "focus-visible:ring-offset-white"
);

/**
 * Disabled styles consistent with USWDS
 */
export const disabledStyles = cn(
  "disabled:cursor-not-allowed",
  "disabled:opacity-50",
  "disabled:bg-gray-10",
  "disabled:text-gray-60"
);

/**
 * Input/Form field base styles
 */
export const inputStyles = cn(
  baseStyles,
  focusStyles,
  "block",
  "w-full",
  "rounded", // 4px border radius
  "border-2",
  "border-gray-60",
  "bg-white",
  "px-2", // 16px padding
  "py-1", // 8px padding
  "text-gray-90",
  "shadow-1",
  "placeholder:text-gray-50",
  "hover:border-gray-70",
  disabledStyles
);

/**
 * Button base styles with USWDS design
 */
export const buttonStyles = cn(
  baseStyles,
  focusStyles,
  "inline-flex",
  "items-center",
  "justify-center",
  "rounded",
  "font-bold",
  "duration-fast transition-colors",
  "whitespace-nowrap",
  disabledStyles
);

/**
 * Card/Container styles
 */
export const cardStyles = cn(
  baseStyles,
  "rounded-lg", // 8px border radius for cards
  "border",
  "border-gray-30",
  "bg-white",
  "shadow-2"
);

/**
 * Label styles
 */
export const labelStyles = cn(
  baseStyles,
  "block",
  "font-bold",
  "text-gray-90",
  "mb-05" // 4px margin bottom
);

/**
 * Helper text/description styles
 */
export const helperTextStyles = cn(
  "text-sm", // 15px from USWDS
  "text-gray-60",
  "mt-05"
);

/**
 * Error message styles
 */
export const errorStyles = cn(
  "text-sm",
  "text-error",
  "font-bold",
  "mt-05"
);

/**
 * Success message styles
 */
export const successStyles = cn(
  "text-sm",
  "text-success",
  "font-bold",
  "mt-05"
);

/**
 * Dialog/Modal overlay styles
 */
export const overlayStyles = cn(
  "fixed",
  "inset-0",
  "z-overlay",
  "bg-gray-90/80",
  "backdrop-blur-sm"
);

/**
 * Dialog/Modal content styles
 */
export const dialogStyles = cn(
  baseStyles,
  cardStyles,
  "fixed",
  "left-1/2",
  "top-1/2",
  "z-modal",
  "w-full",
  "max-w-lg",
  "-translate-x-1/2",
  "-translate-y-1/2",
  "p-4", // 32px padding
  "shadow-4"
);

/**
 * Tab styles
 */
export const tabStyles = cn(
  baseStyles,
  focusStyles,
  "inline-flex",
  "items-center",
  "justify-center",
  "whitespace-nowrap",
  "rounded-t",
  "px-3", // 24px padding
  "py-2", // 16px padding
  "font-semibold",
  "duration-base transition-all",
  "border-b-1",
  "border-transparent",
  "hover:text-primary",
  "data-[state=active]:border-primary",
  "data-[state=active]:text-primary",
  disabledStyles
);

/**
 * Accordion styles
 */
export const accordionStyles = {
  trigger: cn(
    baseStyles,
    focusStyles,
    "flex",
    "flex-1",
    "items-center",
    "justify-between",
    "py-2",
    "px-3",
    "font-bold",
    "text-left",
    "duration-base transition-all",
    "hover:bg-gray-5",
    "[&[data-state=open]>svg]:rotate-180"
  ),
  content: cn(
    baseStyles,
    "px-3",
    "pb-3",
    "pt-0"
  )
};

/**
 * Creates variant styles for components
 * @param variants - Object mapping variant names to their styles
 * @param variant - The selected variant
 * @returns Combined class string
 */
export function createVariant<T extends string>(
  variants: Record<T, string>,
  variant: T
): string {
  return variants[variant] || "";
}

/**
 * Apply USWDS component classes with proper BEM structure
 * @param component - Component name from uswdsClasses
 * @param modifiers - BEM modifiers to apply
 * @returns Combined class string
 */
export function applyComponent(
  component: keyof typeof designClasses,
  modifiers?: string[]
): string {
  const componentClasses = designClasses[component];
  if (typeof componentClasses === "string") {
    return componentClasses;
  }
  
  // Type guard to check if the component has a base property
  if (componentClasses && typeof componentClasses === "object" && "base" in componentClasses) {
    const base = componentClasses.base ?? "";
    const additionalClasses = modifiers
      ?.map(mod => {
        // Type guard to ensure mod is a valid key
        if (mod in componentClasses) {
          const key = mod as keyof typeof componentClasses;
          return componentClasses[key];
        }
        return null;
      })
      .filter(Boolean)
      .join(" ") ?? "";
    
    return cn(base, additionalClasses);
  }
  
  return "";
}