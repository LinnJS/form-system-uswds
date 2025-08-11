"use client";

import * as React from "react";
import { forwardRef } from "react";
import { cn } from "../../lib/utils";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Alert type/severity */
  variant?: "info" | "warning" | "error" | "success" | "emergency";
  /** Slim variant */
  slim?: boolean;
  /** No icon variant */
  noIcon?: boolean;
  /** Alert heading */
  heading?: string;
  /** Additional Tailwind utilities */
  twClass?: string;
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
      variant = "info",
      slim = false,
      noIcon = false,
      heading,
      twClass,
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

    const variantClasses = {
      info: "usa-alert--info",
      warning: "usa-alert--warning",
      error: "usa-alert--error",
      success: "usa-alert--success",
      emergency: "usa-alert--emergency",
    };

    const alertClasses = cn(
      "usa-alert",
      variantClasses[variant],
      slim && "usa-alert--slim",
      noIcon && "usa-alert--no-icon",
      twClass,
      className
    );

    // ARIA role based on variant
    const role = variant === "error" ? "alert" : variant === "success" ? "status" : "region";
    const ariaLive = variant === "error" || variant === "emergency" ? "assertive" : "polite";

    return (
      <div
        ref={ref}
        className={alertClasses}
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

/**
 * Site Alert Component (full-width alerts)
 */
export const SiteAlert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "info", slim = false, twClass, children, ...props }, ref) => {
    const variantClasses = {
      info: "usa-site-alert--info",
      warning: "usa-site-alert--info",
      error: "usa-site-alert--emergency",
      success: "usa-site-alert--info",
      emergency: "usa-site-alert--emergency",
    };

    const siteAlertClasses = cn(
      "usa-site-alert",
      variantClasses[variant],
      slim && "usa-site-alert--slim",
      twClass,
      className
    );

    return (
      <section ref={ref} className={siteAlertClasses} aria-label="Site alert" {...props}>
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