"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import * as React from "react";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-sans font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-blue-60v hover:bg-blue-warm-70v active:bg-blue-warm-80v text-white",
        secondary:
          "bg-gray-5 text-gray-90 hover:bg-gray-10 active:bg-gray-20 border-gray-30 border",
        outline: "border-blue-60v text-blue-60v hover:bg-blue-5 active:bg-blue-10 border-2",
        ghost: "text-blue-60v hover:bg-gray-5 active:bg-gray-10",
        danger: "bg-red-60v hover:bg-red-70v active:bg-red-80v text-white",
        success: "bg-green-cool-60v hover:bg-green-cool-70v active:bg-green-cool-80v text-white",
        warning: "bg-gold-30v text-gray-90 hover:bg-gold-40v active:bg-gold-50v",
        inverse: "text-blue-60v hover:bg-gray-5 active:bg-gray-10 bg-white",
        unstyled: "h-auto p-0 font-normal hover:underline focus:underline",
      },
      size: {
        sm: "h-8 rounded px-3 text-sm",
        md: "h-10 rounded-md px-4 text-base",
        lg: "h-12 rounded-md px-6 text-lg",
        xl: "h-14 rounded-lg px-8 text-xl",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Loading state - shows spinner and disables interaction */
  isLoading?: boolean;
  /** Icon to show before text */
  leftIcon?: React.ReactNode;
  /** Icon to show after text */
  rightIcon?: React.ReactNode;
  /** Analytics event name to emit on click */
  analyticsEvent?: string;
  /** Additional analytics metadata */
  analyticsMetadata?: Record<string, unknown>;
}

export const ButtonEnhanced = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      isLoading,
      leftIcon,
      rightIcon,
      children,
      disabled,
      onClick,
      analyticsEvent,
      analyticsMetadata,
      ...props
    },
    ref
  ) => {
    const handleClick = React.useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        // Emit analytics event if configured
        if (analyticsEvent && typeof window !== 'undefined' && (window as any).__USWDS_ANALYTICS_HANDLER__) {
          (window as any).__USWDS_ANALYTICS_HANDLER__({
            event: analyticsEvent,
            element: "button",
            metadata: {
              variant,
              size,
              ...analyticsMetadata,
            },
          });
        }
        onClick?.(e);
      },
      [onClick, analyticsEvent, analyticsMetadata, variant, size]
    );

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        disabled={disabled ?? isLoading}
        onClick={handleClick}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" aria-hidden="true" />
            <span className="sr-only">Loading</span>
          </>
        ) : (
          leftIcon && <span className="mr-2 inline-flex">{leftIcon}</span>
        )}
        {children}
        {!isLoading && rightIcon && <span className="ml-2 inline-flex">{rightIcon}</span>}
      </button>
    );
  }
);

ButtonEnhanced.displayName = "ButtonEnhanced";

export { buttonVariants };

// Type for analytics handler
declare global {
  interface Window {
    __USWDS_ANALYTICS_HANDLER__?: (event: {
      event: string;
      element: string;
      metadata?: Record<string, unknown>;
    }) => void;
  }
}
