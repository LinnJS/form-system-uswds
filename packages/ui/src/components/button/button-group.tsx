"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Orientation of the button group */
  orientation?: "horizontal" | "vertical";
  /** Size of buttons in group */
  size?: "sm" | "md" | "lg";
}

/**
 * Button Group component for grouping related buttons
 * Following USWDS patterns for button groups
 */
const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, orientation = "horizontal", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="group"
        className={cn(
          "usa-button-group",
          "inline-flex",
          orientation === "vertical" ? "flex-col" : "flex-row",
          orientation === "horizontal" && "gap-05",
          orientation === "vertical" && "items-stretch gap-1",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ButtonGroup.displayName = "ButtonGroup";

export { ButtonGroup };
