import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/utils";

const headingVariants = cva("font-uswds-bold font-serif tracking-tight", {
  variants: {
    level: {
      1: "text-4xl lg:text-5xl",
      2: "text-3xl lg:text-4xl",
      3: "text-2xl lg:text-3xl",
      4: "text-xl lg:text-2xl",
      5: "text-lg",
      6: "text-base",
    },
    textColor: {
      default: "",
      primary: "text-blue-600",
      secondary: "text-gray-600",
      success: "text-green-600",
      warning: "text-yellow-600",
      danger: "text-red-600",
    },
  },
  defaultVariants: {
    level: 1,
    textColor: "default",
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: React.ReactNode;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 1, textColor, as, children, ...props }, ref) => {
    const Component = as ?? (`h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6");

    return React.createElement(
      Component,
      {
        ref,
        className: cn(headingVariants({ level, textColor }), className),
        ...props,
      },
      children
    );
  }
);

Heading.displayName = "Heading";

// Convenience components for each heading level
export const H1 = React.forwardRef<HTMLHeadingElement, Omit<HeadingProps, "level" | "as">>(
  (props, ref) => <Heading ref={ref} level={1} as="h1" {...props} />
);
H1.displayName = "H1";

export const H2 = React.forwardRef<HTMLHeadingElement, Omit<HeadingProps, "level" | "as">>(
  (props, ref) => <Heading ref={ref} level={2} as="h2" {...props} />
);
H2.displayName = "H2";

export const H3 = React.forwardRef<HTMLHeadingElement, Omit<HeadingProps, "level" | "as">>(
  (props, ref) => <Heading ref={ref} level={3} as="h3" {...props} />
);
H3.displayName = "H3";

export const H4 = React.forwardRef<HTMLHeadingElement, Omit<HeadingProps, "level" | "as">>(
  (props, ref) => <Heading ref={ref} level={4} as="h4" {...props} />
);
H4.displayName = "H4";

export const H5 = React.forwardRef<HTMLHeadingElement, Omit<HeadingProps, "level" | "as">>(
  (props, ref) => <Heading ref={ref} level={5} as="h5" {...props} />
);
H5.displayName = "H5";

export const H6 = React.forwardRef<HTMLHeadingElement, Omit<HeadingProps, "level" | "as">>(
  (props, ref) => <Heading ref={ref} level={6} as="h6" {...props} />
);
H6.displayName = "H6";

export { Heading, headingVariants };
