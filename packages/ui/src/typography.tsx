import * as React from "react";
import { cn } from "./lib/utils";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

export const H1 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        className={cn(
          "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
          className
        )}
        {...props}
      >
        {children}
      </h1>
    );
  }
);
H1.displayName = "H1";

export const H2 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        className={cn(
          "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
          className
        )}
        {...props}
      >
        {children}
      </h2>
    );
  }
);
H2.displayName = "H2";

export const H3 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn(
          "scroll-m-20 text-2xl font-semibold tracking-tight",
          className
        )}
        {...props}
      >
        {children}
      </h3>
    );
  }
);
H3.displayName = "H3";

export const Paragraph = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);
Paragraph.displayName = "Paragraph";

export const Lead = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("text-muted-foreground text-xl", className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);
Lead.displayName = "Lead";

export const Text = React.forwardRef<HTMLSpanElement, TypographyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn("text-base", className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);
Text.displayName = "Text";