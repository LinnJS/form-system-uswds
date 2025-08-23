import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as React from "react";

import { disabledStyles, focusStyles } from "../../lib/component-utils";
import { cn } from "../../lib/utils";

/**
 * USWDS-styled toggle switch component
 * Provides an accessible on/off toggle following USWDS patterns
 * Uses Radix UI for accessibility and USWDS design tokens for styling
 * @see https://designsystem.digital.gov/components/
 */
const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      // Base switch styles
      "peer inline-flex h-6 w-11",
      "shrink-0 cursor-pointer",
      "items-center",
      "rounded-full", // Full rounded (pill shape)
      "border-2 border-transparent",
      "font-sans", // USWDS Source Sans Pro

      // State-based colors
      "data-[state=checked]:bg-uswds-primary",
      "data-[state=unchecked]:bg-gray-50",

      // Interactive states
      "transition-colors duration-200",
      "hover:data-[state=unchecked]:bg-gray-60",
      "hover:data-[state=checked]:bg-primary-dark",

      // Focus and disabled states from utilities
      focusStyles,
      disabledStyles,

      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none",
        "block size-5",
        "rounded-full",
        "bg-white",
        "shadow-2", // Slightly more prominent shadow
        "ring-0",
        "transition-transform duration-200",
        "data-[state=checked]:translate-x-5",
        "data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
