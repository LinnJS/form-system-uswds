"use client";

import React, { createContext, forwardRef, useContext, useId, useState } from "react";
import { uswdsClasses } from "../../lib/uswds-config";
import { cn } from "../../lib/utils";

interface AccordionContextValue {
  expandedItems: Set<string>;
  toggleItem: (id: string) => void;
  multiselectable?: boolean;
  bordered?: boolean;
}

const AccordionContext = createContext<AccordionContextValue | undefined>(undefined);

const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion");
  }
  return context;
};

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Whether multiple accordion items can be expanded at once
   * Maps to USWDS usa-accordion--multiselectable
   */
  multiselectable?: boolean;
  /**
   * Whether the accordion has borders
   * Maps to USWDS usa-accordion--bordered
   */
  bordered?: boolean;
  /**
   * Array of item IDs that should be expanded by default
   */
  defaultExpanded?: string[];
}

/**
 * USWDS Accordion Component
 * Wraps the USWDS accordion with React functionality
 */
const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      className,
      bordered = false,
      multiselectable = false,
      defaultExpanded = [],
      children,
      ...props
    },
    ref
  ) => {
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(defaultExpanded));

    const toggleItem = (id: string) => {
      setExpandedItems((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          if (!multiselectable) {
            next.clear();
          }
          next.add(id);
        }
        return next;
      });
    };

    // Build USWDS classes
    const accordionClasses = cn(
      uswdsClasses.accordion.base,
      bordered && uswdsClasses.accordion.bordered,
      multiselectable && uswdsClasses.accordion.multiselectable,
      className
    );

    return (
      <AccordionContext.Provider value={{ expandedItems, toggleItem, multiselectable, bordered }}>
        <div
          ref={ref}
          className={accordionClasses}
          data-allow-multiple={multiselectable || undefined}
          {...props}
        >
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);

Accordion.displayName = "Accordion";

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Unique ID for the accordion item
   */
  id?: string;
}

/**
 * USWDS Accordion Item
 * Container for accordion button and content
 */
const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, id: providedId, children, ...props }, ref) => {
    const generatedId = useId();
    const id = providedId ?? generatedId;

    return (
      <div ref={ref} className={className} {...props}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(
              child as React.ReactElement<AccordionButtonProps | AccordionContentProps>,
              {
                "data-accordion-id": id,
              }
            );
          }
          return child;
        })}
      </div>
    );
  }
);

AccordionItem.displayName = "AccordionItem";

export interface AccordionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  "data-accordion-id"?: string;
}

/**
 * USWDS Accordion Button
 * Toggles the accordion content
 */
const AccordionButton = forwardRef<HTMLButtonElement, AccordionButtonProps>(
  ({ className, children, "data-accordion-id": accordionId, ...props }, ref) => {
    const { expandedItems, toggleItem } = useAccordion();
    const id = accordionId ?? "";
    const isExpanded = expandedItems.has(id);

    return (
      <h2 className={uswdsClasses.accordion.heading}>
        <button
          ref={ref}
          type="button"
          className={cn(uswdsClasses.accordion.button, className)}
          aria-expanded={isExpanded}
          aria-controls={`accordion-${id}`}
          onClick={() => toggleItem(id)}
          {...props}
        >
          {children}
        </button>
      </h2>
    );
  }
);

AccordionButton.displayName = "AccordionButton";

export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  "data-accordion-id"?: string;
}

/**
 * USWDS Accordion Content
 * The collapsible content area
 */
const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, "data-accordion-id": accordionId, ...props }, ref) => {
    const { expandedItems } = useAccordion();
    const id = accordionId ?? "";
    const isExpanded = expandedItems.has(id);

    return (
      <div
        ref={ref}
        id={`accordion-${id}`}
        className={cn(uswdsClasses.accordion.content, className)}
        hidden={!isExpanded}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionButton, AccordionContent, AccordionItem };
