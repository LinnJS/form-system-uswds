"use client";

import * as React from "react";
import { forwardRef, useId, useState } from "react";
import { cn } from "../../lib/utils";
import { ChevronDown } from "lucide-react";

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
 * USWDS Accordion Component
 * Provides expandable/collapsible content sections
 * @see https://designsystem.digital.gov/components/accordion/
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
      "font-sans",
      "divide-gray-30 divide-y",
      bordered && [
        "border",
        "border-gray-30",
        "rounded",
      ],
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
 * USWDS Accordion Item
 * Individual expandable section within an accordion
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

    const HeadingTag = `h${headingLevel}` as keyof React.JSX.IntrinsicElements;

    return (
      <>
        <HeadingTag className="m-0 font-serif">
          <button
            ref={ref}
            type="button"
            className={cn(
              // Base button styles
              "flex w-full items-center justify-between",
              "px-3 py-2",
              "text-gray-90 text-left font-bold",
              "bg-gray-5",
              // Hover state
              "hover:bg-gray-10",
              // Focus state
              "focus-visible:outline-none",
              "focus-visible:ring-2",
              "focus-visible:ring-primary",
              "focus-visible:ring-offset-2",
              // Active state
              "active:bg-gray-20",
              // Transition
              "transition-all duration-200",
              className
            )}
            aria-expanded={isExpanded}
            aria-controls={contentId}
            id={buttonId}
            onClick={handleToggle}
            {...props}
          >
            <span>{heading}</span>
            <ChevronDown
              className={cn(
                "size-5 shrink-0 transition-transform duration-200",
                isExpanded && "rotate-180"
              )}
              aria-hidden="true"
            />
          </button>
        </HeadingTag>
        <div
          id={contentId}
          className={cn(
            "overflow-hidden transition-all duration-200",
            isExpanded ? "max-h-screen" : "max-h-0",
            isExpanded && "text-gray-90 p-3"
          )}
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
