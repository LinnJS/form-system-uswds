"use client";

import * as React from "react";
import { cn } from "../../lib/utils";
import { uswdsClasses } from "../../lib/uswds-config";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The visual variant of the card
   * Maps to USWDS card modifiers
   */
  variant?: "default" | "flag" | "header-first" | "media-right";
  /**
   * Whether the media should be exdent (extend beyond card boundaries)
   * Maps to USWDS usa-card__media--exdent
   */
  exdent?: boolean;
  /**
   * Whether the media should be inset
   * Maps to USWDS usa-card__media--inset
   */
  inset?: boolean;
}

/**
 * USWDS Card Component
 * A flexible container for grouping related content
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const cardClasses = cn(
      uswdsClasses.card.base,
      variant === "flag" && uswdsClasses.card.flag,
      variant === "header-first" && uswdsClasses.card.headerFirst,
      variant === "media-right" && uswdsClasses.card.mediaRight,
      className
    );

    return (
      <div ref={ref} className={cardClasses} {...props}>
        <div className={uswdsClasses.card.container}>
          {children}
        </div>
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
      className={cn(uswdsClasses.card.header, className)}
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
      className={cn(uswdsClasses.card.heading, className)}
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
  <p ref={ref} className={cn("usa-card__subhead", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

/**
 * USWDS Card Media Container
 */
interface CardMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  exdent?: boolean;
  inset?: boolean;
}

const CardMedia = React.forwardRef<HTMLDivElement, CardMediaProps>(
  ({ className, exdent = false, inset = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        uswdsClasses.card.media,
        exdent && uswdsClasses.card.exdent,
        inset && uswdsClasses.card.inset,
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
interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  alt?: string;
}

const CardImage = React.forwardRef<HTMLImageElement, CardImageProps>(
  ({ className, alt = "", ...props }, ref) => (
    <img
      ref={ref}
      className={cn(uswdsClasses.card.img, className)}
      alt={alt}
      {...props}
    />
  )
);
CardImage.displayName = "CardImage";

/**
 * USWDS Card Body/Content
 */
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn(uswdsClasses.card.body, className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

/**
 * USWDS Card Footer
 */
const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn(uswdsClasses.card.footer, className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";

/**
 * USWDS Card Group
 * Container for multiple cards
 */
const CardGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn(uswdsClasses.card.group, className)} {...props} />
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
  CardTitle
};
