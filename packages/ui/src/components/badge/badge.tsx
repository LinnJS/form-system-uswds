"use client";

import React, { forwardRef } from "react";
import { cn } from "../../lib/utils";
import { uswdsClasses } from "../../lib/uswds-config";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Whether to use the big variant
   * Maps to USWDS usa-tag--big
   */
  big?: boolean;
}

/**
 * USWDS Tag Component
 * Small status indicators or labels
 */
const Tag = forwardRef<HTMLSpanElement, TagProps>(
  ({ className, big = false, children, ...props }, ref) => {
    const tagClasses = cn(
      uswdsClasses.badge.base,
      big && uswdsClasses.badge.big,
      className
    );

    return (
      <span ref={ref} className={tagClasses} {...props}>
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
        className={cn(uswdsClasses.badge.identifier, className)}
        {...props}
      >
        <section className="usa-identifier__section usa-identifier__section--masthead">
          <div className="usa-identifier__container">
            <div className="usa-identifier__identity">
              {logo && <div className="usa-identifier__logo">{logo}</div>}
              <div className="usa-identifier__identity-text">
                {parentAgency && <p className="usa-identifier__identity-domain">{parentAgency}</p>}
                <p className="usa-identifier__identity-disclaimer">
                  An official website of the <span>{agency}</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        {requiredLinks.length > 0 && (
          <nav className="usa-identifier__section usa-identifier__section--required-links">
            <div className="usa-identifier__container">
              <ul className="usa-identifier__required-links-list">
                {requiredLinks.map((link, index) => (
                  <li key={index} className="usa-identifier__required-links-item">
                    <a href={link.href} className="usa-identifier__required-link">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        )}
        {children && (
          <section className="usa-identifier__section usa-identifier__section--usagov">
            <div className="usa-identifier__container">{children}</div>
          </section>
        )}
      </div>
    );
  }
);

Identifier.displayName = "Identifier";

export { Badge, Identifier, Tag };
