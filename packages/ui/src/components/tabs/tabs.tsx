import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";

import { baseStyles, focusStyles, tabStyles } from "../../lib/component-utils";
import { cn } from "../../lib/utils";

/**
 * USWDS-styled tabs component
 * Implements tabbed interface for organizing content
 * Uses Radix UI for accessibility and USWDS design tokens for styling
 * @see https://designsystem.digital.gov/components/
 */
const Tabs = TabsPrimitive.Root;

/** Container for tab triggers with USWDS styling */
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex",
      "items-center",
      "border-b-2",
      "border-gray-30",
      "bg-white",
      baseStyles,
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

/** Individual tab button with USWDS styling */
const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      tabStyles,
      "relative",
      "mb-[-2px]", // Overlap the border
      "data-[state=active]:bg-white",
      "data-[state=active]:border-b-2",
      "data-[state=active]:border-primary",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

/** Content panel for each tab with USWDS styling */
const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      baseStyles,
      "mt-3", // margin top
      "p-3", // padding
      "bg-white",
      "rounded-b-md", // Rounded bottom corners
      focusStyles,
      "data-[state=active]:animate-in",
      "data-[state=active]:fade-in-0",
      "data-[state=inactive]:animate-out",
      "data-[state=inactive]:fade-out-0",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsContent, TabsList, TabsTrigger };
