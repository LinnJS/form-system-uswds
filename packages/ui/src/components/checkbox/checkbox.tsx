import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
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
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      // Base checkbox styles
      "peer size-5 shrink-0",
      "rounded-uswds-sm", // USWDS small border radius (2px)
      "border-gray-60 border-2",
      "bg-white",
      "font-sans", // USWDS Source Sans Pro

      // Interactive states
      "transition-colors duration-200",
      "hover:border-primary-light",

      // Checked state
      "data-[state=checked]:bg-uswds-primary",
      "data-[state=checked]:border-uswds-primary",
      "data-[state=checked]:text-white",

      // Indeterminate state
      "data-[state=indeterminate]:bg-uswds-primary",
      "data-[state=indeterminate]:border-uswds-primary",
      "data-[state=indeterminate]:text-white",

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
        "data-[state=checked]:animate-in",
        "data-[state=checked]:fade-in-0",
        "data-[state=checked]:zoom-in-95",
        "data-[state=indeterminate]:animate-in",
        "data-[state=indeterminate]:fade-in-0",
        "data-[state=indeterminate]:zoom-in-95"
      )}
    >
      <Check className="size-3.5 font-bold" strokeWidth={3} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
