/**
 * VA.gov-specific utilities and patterns
 * These enhance USWDS with patterns specific to VA.gov
 * @see https://design.va.gov/
 */

import { cn } from "./utils";

/**
 * VA.gov Alert Box styles
 * Used for important information callouts
 */
export const alertBoxStyles = {
  base: cn(
    "font-sans",
    "p-3",
    "mb-3",
    "border-l-2",
    "bg-va-bg-gray"
  ),
  info: cn("border-l-info", "bg-info-lightest"),
  warning: cn("border-l-warning", "bg-warning-lightest"),
  error: cn("border-l-error", "bg-error-lightest"),
  success: cn("border-l-success", "bg-success-lightest"),
};

/**
 * VA.gov Process List styles
 * Used for step-by-step instructions
 */
export const processListStyles = {
  container: cn("font-sans", "list-none", "p-0", "m-0"),
  item: cn(
    "relative",
    "pl-6",
    "pb-4",
    "border-l-2",
    "border-gray-30",
    "last:border-l-0"
  ),
  number: cn(
    "absolute",
    "left-neg-105", // -12px
    "top-0",
    "flex",
    "h-4", // 32px
    "w-4", // 32px
    "items-center",
    "justify-center",
    "rounded-full",
    "bg-primary",
    "text-white",
    "font-bold"
  ),
  title: cn("font-bold", "text-lg", "mb-1"),
  content: cn("text-gray-70"),
};

/**
 * VA.gov Additional Info (Expandable) styles
 * Used for progressive disclosure of additional content
 */
export const additionalInfoStyles = {
  trigger: cn(
    "font-sans",
    "flex",
    "w-full",
    "items-center",
    "justify-between",
    "py-2",
    "px-0",
    "text-left",
    "text-va-link-blue",
    "font-normal",
    "underline",
    "hover:text-va-link-blue-hover",
    "hover:bg-gray-5",
    "duration-fast transition-colors",
    "[&[data-state=open]>svg]:rotate-90"
  ),
  content: cn(
    "font-sans",
    "py-2",
    "px-3",
    "bg-gray-5",
    "border-l-2",
    "border-primary",
    "mt-1"
  ),
};

/**
 * VA.gov Form Progress styles
 * Shows progress through multi-step forms
 */
export const formProgressStyles = {
  container: cn(
    "font-sans",
    "mb-4",
    "border-b",
    "border-gray-30"
  ),
  list: cn("flex", "list-none", "p-0", "m-0"),
  item: cn(
    "flex-1",
    "text-center",
    "pb-2",
    "relative",
    "text-sm"
  ),
  itemActive: cn(
    "text-primary",
    "font-bold",
    "after:absolute",
    "after:bottom-0",
    "after:left-0",
    "after:right-0",
    "after:h-05", // 4px
    "after:bg-primary"
  ),
  itemComplete: cn("text-success", "font-semibold"),
  itemIncomplete: cn("text-gray-50"),
};

/**
 * VA.gov Breadcrumb styles
 */
export const breadcrumbStyles = {
  nav: cn("font-sans", "mb-3"),
  list: cn("flex", "flex-wrap", "items-center", "gap-1"),
  item: cn("flex", "items-center", "text-sm"),
  link: cn(
    "text-va-link-blue",
    "underline",
    "hover:text-va-link-blue-hover",
    "duration-fast transition-colors"
  ),
  separator: cn("mx-1", "text-gray-50"),
  current: cn("text-gray-70", "font-semibold"),
};

/**
 * VA.gov Loading Indicator styles
 */
export const loadingStyles = {
  spinner: cn(
    "inline-block",
    "h-4", // 32px
    "w-4", // 32px
    "animate-spin",
    "rounded-full",
    "border-05", // 2px
    "border-solid",
    "border-primary",
    "border-r-transparent"
  ),
  message: cn("font-sans", "text-gray-70", "ml-2"),
};

/**
 * VA.gov Card styles (enhanced from USWDS)
 */
export const govCardStyles = {
  base: cn(
    "font-sans",
    "rounded",
    "border",
    "border-va-border-gray",
    "bg-white",
    "shadow-2",
    "duration-fast transition-shadow",
    "hover:shadow-3"
  ),
  highlighted: cn(
    "border-l-2",
    "border-l-primary",
    "pl-3"
  ),
  clickable: cn(
    "cursor-pointer",
    "hover:bg-gray-5"
  ),
};

/**
 * VA.gov Table styles
 */
export const tableStyles = {
  container: cn("w-full", "overflow-x-auto"),
  table: cn(
    "font-sans",
    "w-full",
    "border-collapse",
    "bg-white"
  ),
  thead: cn("bg-gray-5", "border-b-1", "border-gray-30"),
  th: cn(
    "px-2",
    "py-105", // 12px
    "text-left",
    "font-bold",
    "text-gray-90"
  ),
  tbody: cn("divide-y", "divide-gray-30"),
  tr: cn("hover:bg-gray-5", "duration-fast transition-colors"),
  td: cn("px-2", "py-2", "text-gray-70"),
};

/**
 * VA.gov Tag/Pill styles (for status indicators)
 */
export const tagStyles = {
  base: cn(
    "inline-flex",
    "items-center",
    "px-105", // 12px
    "py-05", // 4px
    "rounded-pill",
    "font-sans",
    "font-semibold",
    "text-2xs", // 12px
    "uppercase",
    "tracking-wider"
  ),
  // Status variants
  pending: cn("bg-warning-lighter", "text-warning-darker"),
  inProgress: cn("bg-info-lighter", "text-info-darker"),
  complete: cn("bg-success-lighter", "text-success-darker"),
  error: cn("bg-error-lighter", "text-error-darker"),
  draft: cn("bg-gray-10", "text-gray-70"),
};

/**
 * VA.gov Action Link styles
 * Used for primary actions that aren't buttons
 */
export const actionLinkStyles = cn(
  "font-sans",
  "inline-flex",
  "items-center",
  "gap-1",
  "text-va-link-blue",
  "font-bold",
  "underline",
  "hover:text-va-link-blue-hover",
  "duration-fast transition-colors",
  "group"
);

/**
 * VA.gov Notification styles
 */
export const notificationStyles = {
  container: cn(
    "font-sans",
    "fixed",
    "top-4",
    "right-4",
    "z-notification",
    "max-w-sm"
  ),
  item: cn(
    "mb-2",
    "rounded",
    "border",
    "bg-white",
    "p-3",
    "shadow-3",
    "animate-in",
    "slide-in-from-right"
  ),
  success: cn("border-success", "border-l-2"),
  error: cn("border-error", "border-l-2"),
  info: cn("border-info", "border-l-2"),
  warning: cn("border-warning", "border-l-2"),
};

/**
 * VA.gov helpers for common patterns
 */
export const govHelpers = {
  /**
   * Apply VA.gov phone number formatting
   */
  phoneNumber: (phone: string) => {
    const cleaned = phone.replace(/\D/g, "");
    const match = /^(\d{3})(\d{3})(\d{4})$/.exec(cleaned);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
    return phone;
  },

  /**
   * Format date in VA.gov style
   */
  formatDate: (date: Date | string) => {
    const d = typeof date === "string" ? new Date(date) : date;
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  },

  /**
   * Format time in VA.gov style
   */
  formatTime: (date: Date | string) => {
    const d = typeof date === "string" ? new Date(date) : date;
    return d.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
    });
  },

  /**
   * Create screen reader only text
   */
  srOnly: cn("sr-only"),

  /**
   * Create visually hidden but accessible content
   */
  visuallyHidden: cn(
    "absolute",
    "w-1px",
    "h-1px",
    "p-0",
    "m-neg-05",
    "overflow-hidden",
    "whitespace-nowrap",
    "border-0"
  ),
};

export default {
  alertBoxStyles,
  processListStyles,
  additionalInfoStyles,
  formProgressStyles,
  breadcrumbStyles,
  loadingStyles,
  govCardStyles,
  tableStyles,
  tagStyles,
  actionLinkStyles,
  notificationStyles,
  govHelpers,
};