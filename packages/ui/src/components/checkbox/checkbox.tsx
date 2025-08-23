import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Minus } from "lucide-react";
import * as React from "react";

import { disabledStyles, focusStyles } from "../../lib/component-utils";
import { cn } from "../../lib/utils";

/**
 * USWDS-styled checkbox component
 * Implements USWDS checkbox specifications with accessible interactions
 * Uses Radix UI for accessibility and USWDS design tokens for styling
 * @see https://designsystem.digital.gov/components/checkbox/
 */
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, checked, ...props }, ref) => {
  // Determine which icon to show
  const isIndeterminate = checked === "indeterminate";
  
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      checked={checked}
      className={cn(
        // Base checkbox styles
        "peer size-5 shrink-0",
        "rounded-sm", // USWDS small border radius
        "bg-white",
        "font-sans", // USWDS Source Sans Pro
        
        // Border - always visible with darker color for contrast
        "border-2",
        "border-gray-70", // Always dark border for visibility
        
        // Interactive states
        "transition-all duration-200",
        "hover:border-primary",

        // Checked state - background changes to blue, border stays dark
        "data-[state=checked]:bg-primary",
        "data-[state=checked]:text-white",
        "data-[state=checked]:border-gray-70", // Keep same dark border when checked

        // Indeterminate state - background changes to blue, border stays dark
        "data-[state=indeterminate]:bg-primary",
        "data-[state=indeterminate]:text-white",
        "data-[state=indeterminate]:border-gray-70", // Keep same dark border

        // Focus and disabled states from utilities
        focusStyles,
        disabledStyles,

        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn(
          "flex items-center justify-center text-current",
          "data-[state=checked]:animate-in data-[state=checked]:fade-in-0",
          "data-[state=unchecked]:animate-out data-[state=unchecked]:fade-out-0"
        )}
        forceMount
      >
        {isIndeterminate ? (
          <Minus className="size-3.5" strokeWidth={3} />
        ) : (
          <Check className="size-3.5" strokeWidth={3} />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
