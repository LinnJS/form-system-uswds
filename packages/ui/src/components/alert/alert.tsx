"use client";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { forwardRef } from "react";
import { cn } from "../../lib/utils";

const alertVariants = cva(["usa-alert", "font-sans"], {
  variants: {
    variant: {
      info: "usa-alert--info",
      warning: "usa-alert--warning",
      error: "usa-alert--error",
      success: "usa-alert--success",
      emergency: "usa-alert--emergency",
    },
    slim: {
      true: "usa-alert--slim",
    },
    noIcon: {
      true: "usa-alert--no-icon",
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

const siteAlertVariants = cva(["usa-site-alert", "font-sans"], {
  variants: {
    variant: {
      info: "usa-site-alert--info",
      warning: "usa-site-alert--info",
      error: "usa-site-alert--emergency",
      success: "usa-site-alert--info",
      emergency: "usa-site-alert--emergency",
    },
    slim: {
      true: "usa-site-alert--slim",
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

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
 * Direct USWDS Alert Component
 * Implements full USWDS alert HTML structure with proper ARIA
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

    return (
      <div
        ref={ref}
        className={cn(alertVariants({ variant, slim, noIcon }), className)}
        role={role}
        aria-live={ariaLive}
        aria-atomic="true"
        {...props}
      >
        <div className="usa-alert__body">
          {heading && <h3 className="usa-alert__heading">{heading}</h3>}
          <div className="usa-alert__text">{children}</div>
          {dismissible && (
            <button
              type="button"
              className="usa-button usa-button--unstyled position-absolute padding-1 right-1 top-1"
              onClick={handleDismiss}
              aria-label="Close alert"
            >
              <svg className="usa-icon" aria-hidden="true" focusable="false" role="img">
                <use xlinkHref="#close"></use>
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
 * Site Alert Component (full-width alerts)
 */
export const SiteAlert = forwardRef<HTMLDivElement, SiteAlertProps>(
  ({ className, variant, slim, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(siteAlertVariants({ variant, slim }), className)}
        aria-label="Site alert"
        {...props}
      >
        <div className="usa-alert">
          <div className="usa-alert__body">
            <div className="usa-alert__text">{children}</div>
          </div>
        </div>
      </section>
    );
  }
);

SiteAlert.displayName = "SiteAlert";

export { alertVariants, siteAlertVariants };
