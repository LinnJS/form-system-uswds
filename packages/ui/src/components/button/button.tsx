"use client";

import * as React from "react";
import { uswdsClasses } from "../../lib/uswds-config";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The visual style variant of the button
   * Maps to USWDS usa-button--[variant]
   */
  variant?:
    | "default"
    | "secondary"
    | "accent-cool"
    | "accent-warm"
    | "base"
    | "outline"
    | "inverse"
    | "unstyled";
  /**
   * The size of the button
   * Maps to USWDS usa-button--big for "big"/"lg" size
   * "sm" maps to default for compatibility
   */
  size?: "default" | "sm" | "big" | "lg";
  /**
   * Whether the button should take full width of its container
   */
  fullWidth?: boolean;
}

/**
 * USWDS Button Component
 * A flexible button component that wraps USWDS button styles
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      fullWidth = false,
      type = "button",
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    // Build USWDS classes based on props
    const buttonClasses = cn(
      uswdsClasses.button.base,
      variant === "secondary" && uswdsClasses.button.secondary,
      variant === "accent-cool" && uswdsClasses.button.accentCool,
      variant === "accent-warm" && uswdsClasses.button.accentWarm,
      variant === "base" && uswdsClasses.button.baseStyle,
      variant === "outline" && uswdsClasses.button.outline,
      variant === "inverse" && uswdsClasses.button.inverse,
      variant === "unstyled" && uswdsClasses.button.unstyled,
      (size === "big" || size === "lg") && uswdsClasses.button.big,
      fullWidth && "width-full",
      disabled && "usa-button--disabled",
      className
    );

    return (
      <button
        ref={ref}
        type={type}
        className={buttonClasses}
        disabled={disabled}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
