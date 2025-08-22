"use client";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { designClasses } from "../../lib/design-tokens";
import { cn } from "../../lib/utils";

const cardVariants = cva([designClasses.card.base, "font-sans"], {
  variants: {
    variant: {
      default: "",
      flag: designClasses.card.flag,
      "header-first": designClasses.card.headerFirst,
      "media-right": designClasses.card.mediaRight,
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const cardMediaVariants = cva(designClasses.card.media, {
  variants: {
    exdent: {
      true: designClasses.card.exdent,
    },
    inset: {
      true: designClasses.card.inset,
    },
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

/**
 * USWDS Card Component
 * A flexible container for grouping related content
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(cardVariants({ variant }), className)} {...props}>
        <div className={designClasses.card.container}>{children}</div>
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
    <div ref={ref} className={cn(designClasses.card.header, className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

/**
 * USWDS Card Title/Heading
 */
const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn(designClasses.card.heading, className)} {...props} />
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
  <p ref={ref} className={cn("usa-card__subhead", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

/**
 * USWDS Card Content/Body
 */
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn(designClasses.card.body, className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

/**
 * USWDS Card Footer
 */
const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn(designClasses.card.footer, className)} {...props} />
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
    <div ref={ref} className={cn(cardMediaVariants({ exdent, inset }), className)} {...props} />
  )
);
CardMedia.displayName = "CardMedia";

/**
 * USWDS Card Image
 */
const CardImage = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>(
  ({ className, alt = "", ...props }, ref) => (
    <img ref={ref} className={cn(designClasses.card.img, className)} alt={alt} {...props} />
  )
);
CardImage.displayName = "CardImage";

/**
 * USWDS Card Group Container
 */
const CardGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn(designClasses.card.group, className)} {...props} />
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
