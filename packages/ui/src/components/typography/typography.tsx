import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "usa-display",
      h2: "usa-heading usa-heading--xl",
      h3: "usa-heading usa-heading--lg",
      h4: "usa-heading",
      h5: "usa-heading",
      h6: "usa-heading",
      p: "usa-prose",
      lead: "usa-intro",
      large: "usa-font-lead",
      small: "usa-hint",
      muted: "usa-hint",
      blockquote: "usa-prose",
      code: "usa-code",
      pre: "usa-code",
      kbd: "usa-code",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    textColor: {
      default: "",
      primary: "text-primary",
      secondary: "text-secondary",
      success: "text-success",
      warning: "text-warning",
      danger: "text-error",
      muted: "text-base",
    },
    weight: {
      thin: "text-thin",
      extralight: "text-light",
      light: "text-light",
      normal: "text-normal",
      medium: "text-medium",
      semibold: "text-semibold",
      bold: "text-bold",
      extrabold: "text-heavy",
      black: "text-black",
    },
    size: {
      xs: "",
      sm: "",
      base: "",
      lg: "",
      xl: "",
      "2xl": "",
      "3xl": "",
      "4xl": "",
      "5xl": "",
      "6xl": "",
      "7xl": "",
      "8xl": "",
      "9xl": "",
    },
  },
  defaultVariants: {
    variant: "p",
    align: "left",
    textColor: "default",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
  children?: React.ReactNode;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, align, textColor, weight, size, as, children, ...props }, ref) => {
    const Component = as ?? getComponentFromVariant(variant);

    return React.createElement(
      Component,
      {
        ref,
        className: cn(typographyVariants({ variant, align, textColor, weight, size }), className),
        ...props,
      },
      children
    );
  }
);

Typography.displayName = "Typography";

function getComponentFromVariant(variant?: TypographyProps["variant"]): React.ElementType {
  switch (variant) {
    case "h1":
      return "h1";
    case "h2":
      return "h2";
    case "h3":
      return "h3";
    case "h4":
      return "h4";
    case "h5":
      return "h5";
    case "h6":
      return "h6";
    case "blockquote":
      return "blockquote";
    case "code":
      return "code";
    case "pre":
      return "pre";
    case "kbd":
      return "kbd";
    default:
      return "p";
  }
}

export { Typography, typographyVariants };
