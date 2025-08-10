import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-4xl font-bold tracking-tight lg:text-5xl",
      h2: "text-3xl font-semibold tracking-tight",
      h3: "text-2xl font-semibold tracking-tight",
      h4: "text-xl font-semibold tracking-tight",
      h5: "text-lg font-semibold",
      h6: "text-base font-semibold",
      p: "text-base leading-7",
      lead: "text-xl text-gray-600",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-gray-600",
      blockquote: "border-l-4 border-gray-200 pl-4 italic",
      code: "relative rounded bg-gray-100 px-[0.3rem] py-[0.2rem] font-mono text-sm",
      pre: "overflow-x-auto rounded-lg bg-gray-900 p-4",
      kbd: "inline-flex items-center rounded border border-gray-200 bg-gray-100 px-1.5 py-0.5 font-mono text-xs",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    textColor: {
      default: "",
      primary: "text-blue-600",
      secondary: "text-gray-600",
      success: "text-green-600",
      warning: "text-yellow-600",
      danger: "text-red-600",
      muted: "text-gray-500",
    },
    weight: {
      thin: "font-thin",
      extralight: "font-extralight",
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
      black: "font-black",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
      "8xl": "text-8xl",
      "9xl": "text-9xl",
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
        className: cn(
          typographyVariants({ variant, align, textColor, weight, size }),
          className
        ),
        ...props,
      },
      children
    );
  }
);

Typography.displayName = "Typography";

function getComponentFromVariant(
  variant?: TypographyProps["variant"]
): React.ElementType {
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