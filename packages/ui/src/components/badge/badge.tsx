"use client";

import { cva, type VariantProps } from "class-variance-authority";
import React, { forwardRef } from "react";
import { cn } from "../../lib/utils";

const tagVariants = cva(
  [
    // Base tag styles
    "inline-flex items-center",
    "font-sans font-bold",
    "rounded-sm",
    "text-white",
    "transition-all duration-200",
    "whitespace-nowrap",
  ],
  {
    variants: {
      variant: {
        // Default gray (dark gray for contrast)
        default: [
          "bg-gray-60",  // Darker gray matching USWDS base-dark
          "text-white",
        ],
        // Info (blue)
        info: [
          "bg-info",
          "text-white",
        ],
        // Warning (yellow)
        warning: [
          "bg-warning",
          "text-gray-90",
        ],
        // Error (red)
        error: [
          "bg-error",
          "text-white",
        ],
        // Success (green)
        success: [
          "bg-success",
          "text-white",
        ],
        // Emergency (dark red)
        emergency: [
          "bg-emergency-dark",
          "text-white",
        ],
      },
      size: {
        // Default size
        default: "py-05 px-1 text-xs", // 8px horizontal, 4px vertical, 12px font
        // Big size
        big: "px-2 py-1 text-sm", // 16px horizontal, 8px vertical, 14px font
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {
  /**
   * Whether to use the big variant
   * @deprecated Use size="big" instead
   */
  big?: boolean;
}

/**
 * USWDS Tag Component
 * Small status indicators or labels for drawing attention to content
 * @see https://designsystem.digital.gov/components/tag/
 */
const Tag = forwardRef<HTMLSpanElement, TagProps>(
  ({ className, variant, size, big, children, ...props }, ref) => {
    // Support legacy "big" prop
    const actualSize = big ? "big" : size;

    return (
      <span
        ref={ref}
        className={cn(tagVariants({ variant, size: actualSize }), className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Tag.displayName = "Tag";

/**
 * Badge is an alias for Tag for compatibility
 */
const Badge = Tag;
Badge.displayName = "Badge";

/**
 * USWDS Identifier Component
 * Used for official government identifiers and logos
 * @see https://designsystem.digital.gov/components/identifier/
 */
export interface IdentifierProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The agency or organization name
   */
  agency?: string;
  /**
   * The parent organization (if applicable)
   */
  parentAgency?: string;
  /**
   * Logo URL or element
   */
  logo?: React.ReactNode;
  /**
   * Additional required links
   */
  requiredLinks?: Array<{
    href: string;
    text: string;
  }>;
}

const Identifier = forwardRef<HTMLDivElement, IdentifierProps>(
  (
    {
      className,
      agency = "Agency Name",
      parentAgency,
      logo,
      requiredLinks = [],
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div 
        ref={ref} 
        className={cn(
          "bg-gray-10 font-sans",
          className
        )} 
        {...props}
      >
        <section className="border-gray-30 border-b py-2">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2">
              {logo && <div className="shrink-0">{logo}</div>}
              <div className="text-gray-70 text-sm">
                {parentAgency && <p className="font-bold">{parentAgency}</p>}
                <p>
                  An official website of the <span className="font-bold">{agency}</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        {requiredLinks.length > 0 && (
          <nav className="border-gray-30 border-b py-2">
            <div className="container mx-auto px-4">
              <ul className="flex flex-wrap gap-4 text-sm">
                {requiredLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-primary focus-visible:ring-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        )}
        {children && (
          <section className="py-2">
            <div className="container mx-auto px-4">{children}</div>
          </section>
        )}
      </div>
    );
  }
);

Identifier.displayName = "Identifier";

export { Badge, Identifier, Tag, tagVariants };
