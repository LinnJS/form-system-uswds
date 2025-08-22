"use client";

import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { labelStyles } from "../../lib/component-utils";
import { cn } from "../../lib/utils";

const labelVariants = cva(labelStyles, {
  variants: {
    variant: {
      default: "",
      error: "text-error",
      required: "after:ml-05 after:text-error after:content-['*']",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {}

const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, LabelProps>(
  ({ className, variant, ...props }, ref) => (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(labelVariants({ variant }), className)}
      {...props}
    />
  )
);

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
