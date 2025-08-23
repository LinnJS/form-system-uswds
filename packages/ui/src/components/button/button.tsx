"use client";

import * as React from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  // Base button styles matching USWDS
  [
    "inline-flex items-center justify-center",
    "font-sans font-bold",
    "rounded", // 4px border radius
    "transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "whitespace-nowrap",
  ],
  {
    variants: {
      variant: {
        // Primary button (default)
        primary: [
          "bg-primary text-white",
          "hover:bg-primary-dark",
          "active:bg-primary-darker",
          "focus-visible:ring-primary",
        ],
        // Secondary button
        secondary: [
          "bg-secondary text-white",
          "hover:bg-secondary-dark",
          "active:bg-secondary-darker",
          "focus-visible:ring-secondary",
        ],
        // Accent cool button
        "accent-cool": [
          "bg-accent-cool text-white",
          "hover:bg-accent-cool-dark",
          "active:bg-accent-cool-darker",
          "focus-visible:ring-accent-cool",
        ],
        // Accent warm button
        "accent-warm": [
          "bg-accent-warm text-gray-90",
          "hover:bg-accent-warm-dark hover:text-white",
          "active:bg-accent-warm-darker active:text-white",
          "focus-visible:ring-accent-warm",
        ],
        // Base button (gray)
        base: [
          "bg-gray-50 text-white",
          "hover:bg-gray-60",
          "active:bg-gray-70",
          "focus-visible:ring-gray-60",
        ],
        // Outline button
        outline: [
          "text-primary bg-transparent",
          "border-primary border-2",
          "hover:bg-primary hover:text-white",
          "active:bg-primary-dark active:text-white",
          "focus-visible:ring-primary",
        ],
        // Outline inverse (for dark backgrounds)
        "outline-inverse": [
          "bg-transparent text-white",
          "border-2 border-white",
          "hover:text-primary hover:bg-white",
          "active:bg-gray-5 active:text-primary",
          "focus-visible:ring-white",
        ],
        // Unstyled button (minimal styling)
        unstyled: [
          "text-primary bg-transparent",
          "hover:underline",
          "focus-visible:ring-primary",
          "p-0",
        ],
      },
      size: {
        // Small size
        sm: "px-2 py-1 text-sm", // 12px padding horizontal, 8px vertical
        // Medium size (default)
        md: "py-105 px-3 text-base", // 16px padding horizontal, 12px vertical
        // Large/big button
        lg: "px-4 py-2 text-lg", // 24px padding horizontal, 16px vertical
      },
      fullWidth: {
        true: "w-full",
        false: "",
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
      asChild: _asChild = false,
      ...props
    },
    ref
  ) => {
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