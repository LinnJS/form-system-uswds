import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const textVariants = cva("", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
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
    textColor: {
      default: "",
      primary: "text-blue-600",
      secondary: "text-gray-600",
      success: "text-green-600",
      warning: "text-yellow-600",
      danger: "text-red-600",
      muted: "text-gray-500",
      white: "text-white",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    leading: {
      none: "leading-none",
      tight: "leading-tight",
      snug: "leading-snug",
      normal: "leading-normal",
      relaxed: "leading-relaxed",
      loose: "leading-loose",
    },
    decoration: {
      none: "",
      underline: "underline",
      "line-through": "line-through",
      overline: "overline",
    },
    transform: {
      none: "",
      uppercase: "uppercase",
      lowercase: "lowercase",
      capitalize: "capitalize",
    },
  },
  defaultVariants: {
    size: "base",
    weight: "normal",
    textColor: "default",
    align: "left",
    leading: "normal",
    decoration: "none",
    transform: "none",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div" | "label" | "small" | "mark" | "del" | "ins" | "sub" | "sup" | "strong" | "em" | "b" | "i" | "u" | "s";
  children?: React.ReactNode;
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      className,
      size,
      weight,
      textColor,
      align,
      leading,
      decoration,
      transform,
      as = "p",
      children,
      ...props
    },
    ref
  ) => {
    const Component = as;

    return React.createElement(
      Component,
      {
        ref,
        className: cn(
          textVariants({
            size,
            weight,
            textColor,
            align,
            leading,
            decoration,
            transform,
          }),
          className
        ),
        ...props,
      },
      children
    );
  }
);

Text.displayName = "Text";

// Convenience components for common text elements
export const Paragraph = React.forwardRef<
  HTMLParagraphElement,
  Omit<TextProps, "as">
>((props, ref) => <Text ref={ref} as="p" leading="relaxed" {...props} />);
Paragraph.displayName = "Paragraph";

export const Lead = React.forwardRef<HTMLParagraphElement, Omit<TextProps, "as">>(
  (props, ref) => (
    <Text
      ref={ref}
      as="p"
      size="xl"
      textColor="secondary"
      leading="relaxed"
      {...props}
    />
  )
);
Lead.displayName = "Lead";

export const Small = React.forwardRef<HTMLElement, Omit<TextProps, "as" | "size">>(
  (props, ref) => <Text ref={ref} as="small" size="sm" {...props} />
);
Small.displayName = "Small";

export const Strong = React.forwardRef<HTMLElement, Omit<TextProps, "as" | "weight">>(
  (props, ref) => <Text ref={ref} as="strong" weight="bold" {...props} />
);
Strong.displayName = "Strong";

export const Emphasis = React.forwardRef<HTMLElement, Omit<TextProps, "as">>(
  (props, ref) => <Text ref={ref} as="em" {...props} />
);
Emphasis.displayName = "Emphasis";

export const Blockquote = React.forwardRef<
  HTMLQuoteElement,
  React.HTMLAttributes<HTMLQuoteElement> & { cite?: string }
>(({ className, children, cite, ...props }, ref) => (
  <blockquote
    ref={ref}
    className={cn(
      "border-l-4 border-gray-200 pl-4 italic text-gray-700",
      className
    )}
    cite={cite}
    {...props}
  >
    {children}
  </blockquote>
));
Blockquote.displayName = "Blockquote";

export const InlineCode = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <code
    ref={ref}
    className={cn(
      "relative rounded bg-gray-100 px-[0.3rem] py-[0.2rem] font-mono text-sm",
      className
    )}
    {...props}
  />
));
InlineCode.displayName = "InlineCode";

export const Pre = React.forwardRef<
  HTMLPreElement,
  React.HTMLAttributes<HTMLPreElement>
>(({ className, ...props }, ref) => (
  <pre
    ref={ref}
    className={cn(
      "overflow-x-auto rounded-lg bg-gray-900 p-4 text-gray-100",
      className
    )}
    {...props}
  />
));
Pre.displayName = "Pre";

export const Kbd = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <kbd
      ref={ref}
      className={cn(
        "inline-flex items-center rounded border border-gray-200 bg-gray-100 px-1.5 py-0.5 font-mono text-xs",
        className
      )}
      {...props}
    />
  )
);
Kbd.displayName = "Kbd";

export { Text, textVariants };