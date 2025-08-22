"use client";

import * as React from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  // Base USWDS button class
  "usa-button",
  {
    variants: {
      variant: {
        primary: "",  // Default usa-button styling
        secondary: "usa-button--secondary",
        "accent-cool": "usa-button--accent-cool",
        "accent-warm": "usa-button--accent-warm",
        base: "usa-button--base",
        outline: "usa-button--outline",
        inverse: "usa-button--inverse",
        unstyled: "usa-button--unstyled",
      },
      size: {
        sm: "", // Default size
        md: "", // Default size
        lg: "usa-button--big", // Large/big button
      },
      fullWidth: {
        true: "width-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Loading state with spinner */
  loading?: boolean;
  /** Icon element to prepend */
  icon?: React.ReactNode;
  /** Icon element to append */
  iconEnd?: React.ReactNode;
  /** As child for composition */
  asChild?: boolean;
}

/**
 * Button component following USWDS design patterns
 * Provides accessible, styled buttons with multiple variants
 * @see https://designsystem.digital.gov/components/button/
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      loading = false,
      icon,
      iconEnd,
      disabled,
      children,
      type = "button",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const _Comp = asChild ? React.Fragment : "button";
    const _buttonProps = asChild ? {} : {
      ref,
      type,
      disabled: disabled ?? loading,
      "aria-disabled": disabled ?? loading,
      "aria-busy": loading,
      ...props,
    };

    const content = (
      <>
        {/* Loading spinner */}
        {loading && (
          <svg
            className="mr-2 size-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}

        {/* Icon prefix */}
        {icon && !loading && (
          <span className="mr-2 inline-flex items-center">{icon}</span>
        )}

        {/* Button text */}
        {children}

        {/* Icon suffix */}
        {iconEnd && (
          <span className="ml-2 inline-flex items-center">{iconEnd}</span>
        )}
      </>
    );

    // For now, asChild is not fully supported - just render as button
    // This can be enhanced later with proper slot implementation

    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          buttonVariants({ variant, size, fullWidth }),
          className
        )}
        disabled={disabled ?? loading}
        aria-disabled={disabled ?? loading}
        aria-busy={loading}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };