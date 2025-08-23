"use client";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { forwardRef } from "react";
import { cn } from "../../lib/utils";

const alertVariants = cva(
  [
    // Base alert styles
    "relative",
    "font-sans",
    "border-l-4",
    "rounded",
    "transition-all duration-200",
  ],
  {
    variants: {
      variant: {
        // Info alert (blue)
        info: [
          "bg-info-lighter",
          "border-info",
          "text-gray-90",
        ],
        // Warning alert (yellow)
        warning: [
          "bg-warning-lighter",
          "border-warning",
          "text-gray-90",
        ],
        // Error alert (red)
        error: [
          "bg-error-lighter",
          "border-error-dark",
          "text-gray-90",
        ],
        // Success alert (green)
        success: [
          "bg-success-lighter",
          "border-success",
          "text-gray-90",
        ],
        // Emergency alert (red, more prominent)
        emergency: [
          "bg-emergency",
          "border-emergency-dark",
          "text-white",
        ],
      },
      slim: {
        true: "",
        false: "",
      },
      noIcon: {
        true: "",
        false: "",
      },
    },
    defaultVariants: {
      variant: "info",
      slim: false,
      noIcon: false,
    },
  }
);

const siteAlertVariants = cva(
  [
    // Site alert base styles (full-width)
    "w-full",
    "font-sans",
  ],
  {
    variants: {
      variant: {
        // Info site alert
        info: [
          "bg-info-lighter",
          "text-gray-90",
        ],
        // Warning site alert
        warning: [
          "bg-warning-lighter",
          "text-gray-90",
        ],
        // Error/Emergency site alert
        error: [
          "bg-emergency",
          "text-white",
        ],
        // Success site alert
        success: [
          "bg-success-lighter",
          "text-gray-90",
        ],
        // Emergency site alert
        emergency: [
          "bg-emergency",
          "text-white",
        ],
      },
      slim: {
        true: "",
        false: "",
      },
    },
    defaultVariants: {
      variant: "info",
      slim: false,
    },
  }
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  /** Alert heading */
  heading?: string;
  /** Dismissible alert */
  dismissible?: boolean;
  /** Callback when dismissed */
  onDismiss?: () => void;
}

/**
 * USWDS Alert Component
 * Provides accessible alerts with multiple severity levels
 * @see https://designsystem.digital.gov/components/alert/
 */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant,
      slim,
      noIcon,
      heading,
      dismissible = false,
      onDismiss,
      children,
      ...props
    },
    ref
  ) => {
    const [visible, setVisible] = React.useState(true);

    const handleDismiss = () => {
      setVisible(false);
      onDismiss?.();
    };

    if (!visible) return null;

    // ARIA role based on variant
    const role = variant === "error" ? "alert" : variant === "success" ? "status" : "region";
    const ariaLive = variant === "error" || variant === "emergency" ? "assertive" : "polite";

    // Padding based on slim variant
    const padding = slim ? "p-2" : "p-3";

    // Icon for each variant (using simple Unicode for now, can be replaced with SVG icons)
    const icons = {
      info: "ℹ️",
      warning: "⚠️",
      error: "❌",
      success: "✅",
      emergency: "🚨",
    };

    return (
      <div
        ref={ref}
        className={cn(alertVariants({ variant, slim, noIcon }), padding, className)}
        role={role}
        aria-live={ariaLive}
        aria-atomic="true"
        {...props}
      >
        <div className="flex items-start gap-2">
          {/* Icon */}
          {!noIcon && (
            <span className="shrink-0 text-xl" aria-hidden="true">
              {icons[variant ?? "info"]}
            </span>
          )}
          
          {/* Content */}
          <div className="flex-1">
            {heading && (
              <h3 className="mb-1 font-serif text-lg font-bold">
                {heading}
              </h3>
            )}
            <div className="text-base">
              {children}
            </div>
          </div>

          {/* Dismiss button */}
          {dismissible && (
            <button
              type="button"
              className={cn(
                "shrink-0",
                "p-1",
                "rounded",
                "hover:bg-gray-20/20",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                variant === "emergency" ? "focus-visible:ring-white" : "focus-visible:ring-primary",
                "transition-colors duration-200"
              )}
              onClick={handleDismiss}
              aria-label="Close alert"
            >
              <svg 
                className="size-5"
                aria-hidden="true"
                focusable="false"
                role="img"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    );
  }
);

Alert.displayName = "Alert";

export interface SiteAlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof siteAlertVariants> {}

/**
 * Site Alert Component
 * Full-width alerts typically used at the top of pages
 * @see https://designsystem.digital.gov/components/site-alert/
 */
export const SiteAlert = forwardRef<HTMLDivElement, SiteAlertProps>(
  ({ className, variant, slim, children, ...props }, ref) => {
    // Padding based on slim variant
    const padding = slim ? "py-2 px-4" : "py-3 px-4";

    return (
      <section
        ref={ref}
        className={cn(siteAlertVariants({ variant, slim }), padding, className)}
        aria-label="Site alert"
        {...props}
      >
        <div className="container mx-auto max-w-screen-xl">
          <div className="flex items-start">
            <div className="flex-1 text-base">
              {children}
            </div>
          </div>
        </div>
      </section>
    );
  }
);

SiteAlert.displayName = "SiteAlert";

export { alertVariants, siteAlertVariants };
