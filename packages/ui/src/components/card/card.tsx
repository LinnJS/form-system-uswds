"use client";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/utils";

const cardVariants = cva(
  [
    // Base card styles
    "font-sans",
    "bg-white",
    "border",
    "border-gray-30",
    "rounded-lg",
    "shadow-2",
    "transition-all duration-200",
    "hover:shadow-3",
  ],
  {
    variants: {
      variant: {
        // Default vertical card
        default: "flex flex-col",
        // Flag layout (horizontal)
        flag: "flex flex-row",
        // Header before media
        "header-first": "flex flex-col",
        // Media on right side
        "media-right": "flex flex-row-reverse",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const cardMediaVariants = cva(
  [
    // Base media styles
    "overflow-hidden",
  ],
  {
    variants: {
      exdent: {
        // Media extends beyond card borders
        true: "-mx-4 -mt-4",
        false: "",
      },
      inset: {
        // Media indented within card
        true: "m-4",
        false: "",
      },
    },
    defaultVariants: {
      exdent: false,
      inset: false,
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

/**
 * USWDS Card Component
 * A flexible container for grouping related content
 * @see https://designsystem.digital.gov/components/card/
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(cardVariants({ variant }), className)} {...props}>
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

/**
 * USWDS Card Header
 */
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div 
      ref={ref} 
      className={cn(
        "px-4 pb-2 pt-4",
        className
      )} 
      {...props} 
    />
  )
);
CardHeader.displayName = "CardHeader";

/**
 * USWDS Card Title/Heading
 */
const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 
      ref={ref} 
      className={cn(
        "text-gray-90 font-serif text-xl font-bold",
        "leading-tight",
        className
      )} 
      {...props} 
    />
  )
);
CardTitle.displayName = "CardTitle";

/**
 * USWDS Card Description (subheading)
 */
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p 
    ref={ref} 
    className={cn(
      "text-gray-70 text-sm",
      "mt-1",
      className
    )} 
    {...props} 
  />
));
CardDescription.displayName = "CardDescription";

/**
 * USWDS Card Content/Body
 */
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div 
      ref={ref} 
      className={cn(
        "px-4 py-2",
        "text-gray-90",
        "flex-1",
        className
      )} 
      {...props} 
    />
  )
);
CardContent.displayName = "CardContent";

/**
 * USWDS Card Footer
 */
const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div 
      ref={ref} 
      className={cn(
        "px-4 pb-4 pt-2",
        "text-sm",
        className
      )} 
      {...props} 
    />
  )
);
CardFooter.displayName = "CardFooter";

export interface CardMediaProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardMediaVariants> {}

/**
 * USWDS Card Media Container
 */
const CardMedia = React.forwardRef<HTMLDivElement, CardMediaProps>(
  ({ className, exdent, inset, ...props }, ref) => (
    <div 
      ref={ref} 
      className={cn(
        cardMediaVariants({ exdent, inset }),
        className
      )} 
      {...props} 
    />
  )
);
CardMedia.displayName = "CardMedia";

/**
 * USWDS Card Image
 */
const CardImage = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>(
  ({ className, alt = "", ...props }, ref) => (
    <img 
      ref={ref} 
      className={cn(
        "h-auto w-full",
        "object-cover",
        className
      )} 
      alt={alt} 
      {...props} 
    />
  )
);
CardImage.displayName = "CardImage";

/**
 * USWDS Card Group Container
 */
const CardGroup = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  ({ className, ...props }, ref) => (
    <ul 
      ref={ref} 
      className={cn(
        "grid gap-4",
        "sm:grid-cols-2",
        "lg:grid-cols-3",
        "list-none p-0",
        className
      )} 
      {...props} 
    />
  )
);
CardGroup.displayName = "CardGroup";

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardGroup,
  CardHeader,
  CardImage,
  CardMedia,
  cardMediaVariants,
  CardTitle,
  cardVariants,
};
