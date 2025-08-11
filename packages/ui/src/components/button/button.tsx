"use client";

import * as React from "react";
import { forwardRef } from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** USWDS variant classes */
  variant?:
    | "default"
    | "secondary"
    | "accent-cool"
    | "accent-warm"
    | "base"
    | "outline"
    | "inverse"
    | "unstyled";
  /** USWDS size modifier */
  size?: "big";
  /** Additional Tailwind utilities */
  twClass?: string;
  /** Loading state with spinner */
  loading?: boolean;
  /** Icon element to prepend */
  icon?: React.ReactNode;
  /** Icon element to append */
  iconEnd?: React.ReactNode;
}

/**
 * Direct USWDS Button with Tailwind Enhancement
 * Uses actual USWDS HTML structure with added Tailwind utilities
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size,
      twClass,
      loading = false,
      icon,
      iconEnd,
      disabled,
      children,
      type = "button",
      ...props
    },
    ref
  ) => {
    // Build USWDS classes
    const variantClasses = {
      default: "",
      secondary: "usa-button--secondary",
      "accent-cool": "usa-button--accent-cool",
      "accent-warm": "usa-button--accent-warm",
      base: "usa-button--base",
      outline: "usa-button--outline",
      inverse: "usa-button--inverse",
      unstyled: "usa-button--unstyled",
    };

    // Combine USWDS base class, variant, size, custom classes, and Tailwind utilities
    const buttonClasses = cn(
      "usa-button",
      variantClasses[variant],
      size === "big" && "usa-button--big",
      loading && "usa-button--disabled",
      twClass,
      className
    );

    return (
      <button
        ref={ref}
        type={type}
        className={buttonClasses}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {/* Loading spinner using USWDS patterns */}
        {loading && (
          <span className="usa-spinner usa-spinner--small margin-right-1" role="status">
            <span className="usa-sr-only">Loading</span>
          </span>
        )}

        {/* Icon prefix */}
        {icon && !loading && (
          <span className="margin-right-1 inline-flex align-middle">{icon}</span>
        )}

        {/* Button text */}
        <span>{children}</span>

        {/* Icon suffix */}
        {iconEnd && <span className="margin-left-1 inline-flex align-middle">{iconEnd}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

/**
 * Button Group using USWDS patterns
 */
export const ButtonGroup = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("usa-button-group", className)} {...props}>
        {children}
      </div>
    );
  }
);

ButtonGroup.displayName = "ButtonGroup";

export { Button };