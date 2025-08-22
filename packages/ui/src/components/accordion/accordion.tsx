"use client";

import * as React from "react";
import { forwardRef, useId, useState } from "react";
import { cn } from "../../lib/utils";

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Allow multiple sections open at once */
  multiselectable?: boolean;
  /** Add borders to accordion */
  bordered?: boolean;
  /** Items to be expanded by default */
  defaultExpanded?: string[];
}

export interface AccordionItemProps extends React.HTMLAttributes<HTMLElement> {
  /** Heading text */
  heading: string;
  /** Unique ID for this item */
  itemId?: string;
  /** Heading level (h2-h6) */
  headingLevel?: 2 | 3 | 4 | 5 | 6;
  /** Whether item is expanded by default */
  defaultExpanded?: boolean;
}

/**
 * Direct USWDS Accordion Component
 * Implements full USWDS accordion HTML structure with ARIA attributes
 */
export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      className,
      multiselectable = false,
      bordered = false,
      defaultExpanded = [],
      children,
      ...props
    },
    ref
  ) => {
    const accordionClasses = cn(
      "usa-accordion",
      "font-sans",
      bordered && "usa-accordion--bordered",
      className
    );

    // Track expanded items
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(defaultExpanded));

    const toggleItem = (itemId: string) => {
      setExpandedItems((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(itemId)) {
          newSet.delete(itemId);
        } else {
          if (!multiselectable) {
            newSet.clear();
          }
          newSet.add(itemId);
        }
        return newSet;
      });
    };

    // Clone children with expanded state
    const enhancedChildren = React.Children.map(children, (child) => {
      if (
        React.isValidElement<AccordionItemProps & { expanded?: boolean; onToggle?: () => void }>(
          child
        ) &&
        child.type === AccordionItem
      ) {
        const itemId = child.props.itemId ?? child.props.heading;
        return React.cloneElement(child, {
          expanded: expandedItems.has(itemId),
          onToggle: () => toggleItem(itemId),
        });
      }
      return child;
    });

    return (
      <div
        ref={ref}
        className={accordionClasses}
        data-allow-multiple={multiselectable || undefined}
        {...props}
      >
        {enhancedChildren}
      </div>
    );
  }
);

Accordion.displayName = "Accordion";

/**
 * Direct USWDS Accordion Item
 * Uses proper heading elements and ARIA attributes
 */
export const AccordionItem = forwardRef<
  HTMLButtonElement,
  AccordionItemProps & { expanded?: boolean; onToggle?: () => void }
>(
  (
    {
      className,
      heading,
      itemId,
      headingLevel = 2,
      defaultExpanded = false,
      expanded: controlledExpanded,
      onToggle,
      children,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const id = itemId ?? generatedId;
    const contentId = `${id}-content`;
    const buttonId = `${id}-button`;

    // Use local state if not controlled
    const [localExpanded, setLocalExpanded] = useState(defaultExpanded);
    const isExpanded = controlledExpanded ?? localExpanded;

    const handleToggle = () => {
      if (onToggle) {
        onToggle();
      } else {
        setLocalExpanded(!localExpanded);
      }
    };

    const HeadingTag = `h${headingLevel}`;

    return (
      <>
        {React.createElement(
          HeadingTag,
          { className: "usa-accordion__heading" },
          <button
            ref={ref}
            type="button"
            className={cn("usa-accordion__button", className)}
            aria-expanded={isExpanded}
            aria-controls={contentId}
            id={buttonId}
            onClick={handleToggle}
            {...props}
          >
            {heading}
          </button>
        )}
        <div
          id={contentId}
          className="usa-accordion__content usa-prose"
          hidden={!isExpanded}
          aria-labelledby={buttonId}
        >
          {children}
        </div>
      </>
    );
  }
);

AccordionItem.displayName = "AccordionItem";
