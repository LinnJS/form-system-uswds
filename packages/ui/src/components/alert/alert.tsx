"use client";

import React, { forwardRef } from "react";
import { uswdsClasses } from "../../lib/uswds-config";
import { cn } from "../../lib/utils";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The type of alert
   * Maps to USWDS usa-alert--[variant]
   */
  variant?: "info" | "success" | "warning" | "error" | "emergency";
  /**
   * Whether to use the slim variant
   * Maps to USWDS usa-alert--slim
   */
  slim?: boolean;
  /**
   * Whether to hide the icon
   * Maps to USWDS usa-alert--no-icon
   */
  noIcon?: boolean;
  /**
   * Optional heading for the alert
   */
  heading?: string;
  /**
   * Heading level to use for semantic HTML
   */
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /**
   * Whether this is a validation alert
   * Maps to USWDS usa-alert--validation
   */
  validation?: boolean;
}

/**
 * USWDS Alert Component
 * Displays important information to users
 */
const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant = "info",
      slim = false,
      noIcon = false,
      heading,
      headingLevel = "h4",
      validation = false,
      children,
      ...props
    },
    ref
  ) => {
    const HeadingTag = headingLevel;

    // Build USWDS classes
    const alertClasses = cn(
      uswdsClasses.alert.base,
      variant === "info" && uswdsClasses.alert.info,
      variant === "success" && uswdsClasses.alert.success,
      variant === "warning" && uswdsClasses.alert.warning,
      variant === "error" && uswdsClasses.alert.error,
      variant === "emergency" && uswdsClasses.alert.emergency,
      slim && uswdsClasses.alert.slim,
      noIcon && uswdsClasses.alert.noIcon,
      validation && "usa-alert--validation",
      className
    );

    // Determine ARIA attributes based on variant
    const isUrgent = variant === "error" || variant === "emergency";

    return (
      <div
        ref={ref}
        className={alertClasses}
        role={isUrgent ? "alert" : "region"}
        aria-live={isUrgent ? "assertive" : "polite"}
        aria-atomic="true"
        {...props}
      >
        <div className={uswdsClasses.alert.body}>
          {heading && <HeadingTag className={uswdsClasses.alert.heading}>{heading}</HeadingTag>}
          <p className={uswdsClasses.alert.text}>{children}</p>
        </div>
      </div>
    );
  }
);

Alert.displayName = "Alert";

export { Alert };
