import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import * as React from "react";

import { baseStyles, disabledStyles, focusStyles } from "../../lib/component-utils";
import { cn } from "../../lib/utils";

/**
 * USWDS-styled radio button group component
 * Implements USWDS radio button specifications
 * Uses Radix UI for accessibility and USWDS design tokens for styling
 * @see https://designsystem.digital.gov/components/radio-buttons/
 */
const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn(
        "grid",
        "gap-2", // gap between items
        baseStyles,
        className
      )}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

/** Individual radio button within a radio group with USWDS styling */
const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        // Base radio styles
        "aspect-square size-5",
        "rounded-full",
        "border-2",
        "bg-white",
        "font-sans", // USWDS Source Sans Pro
        
        // Default border - darker for visibility
        "border-gray-70",

        // Interactive states
        "transition-all duration-200",
        "hover:border-primary",

        // Checked state - keep dark border for visibility
        "data-[state=checked]:border-gray-70",
        "data-[state=checked]:text-primary",

        // Focus and disabled states from utilities
        focusStyles,
        disabledStyles,

        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="fill-primary text-primary size-2.5" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
