import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import * as React from "react";

import { baseStyles, dialogStyles, focusStyles, overlayStyles } from "../../lib/component-utils";
import { cn } from "../../lib/utils";

/**
 * USWDS-styled modal dialog component
 * Implements accessible modal patterns following USWDS guidelines
 * Uses Radix UI for accessibility and USWDS design tokens for styling
 * @see https://designsystem.digital.gov/components/modal/
 */
const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

/** Semi-transparent overlay behind the dialog with USWDS styling */
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      overlayStyles,
      "data-[state=open]:animate-in",
      "data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0",
      "data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

/** Main dialog container with USWDS styling */
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        dialogStyles,
        "max-h-[85vh]",
        "w-[90vw]",
        "overflow-y-auto",
        "data-[state=open]:animate-in",
        "data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0",
        "data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95",
        "data-[state=open]:zoom-in-95",
        "data-[state=closed]:slide-out-to-left-1/2",
        "data-[state=closed]:slide-out-to-top-[48%]",
        "data-[state=open]:slide-in-from-left-1/2",
        "data-[state=open]:slide-in-from-top-[48%]",
        "duration-200",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close
        className={cn(
          "absolute",
          "right-2",
          "top-2",
          "rounded-sm",
          "p-1",
          "opacity-70",
          "transition-all",
          "hover:opacity-100",
          "hover:bg-gray-10",
          "data-[state=open]:bg-gray-10",
          "data-[state=open]:text-gray-60",
          "disabled:pointer-events-none",
          focusStyles
        )}
      >
        <X className="size-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

/** Dialog header section for title and description with USWDS spacing */
const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col",
      "space-y-105", // gap
      "text-center sm:text-left",
      "mb-3", // margin bottom
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

/** Dialog footer section for action buttons with USWDS spacing */
const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row",
      "sm:justify-end",
      "sm:space-x-2", // gap
      "space-y-2 space-y-reverse sm:space-y-0",
      "mt-4", // margin top
      "pt-3", // padding top
      "border-gray-30 border-t",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

/** Dialog title with USWDS typography */
const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "font-serif", // Use serif font for headings
      "font-bold", // 700 weight
      "text-xl", // 28px from USWDS
      "leading-3", // line height
      "text-gray-90",
      "tracking-tight",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

/** Dialog description text with USWDS typography */
const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(
      baseStyles,
      "text-base", // 17px from USWDS
      "text-gray-60",
      "leading-4", // line height
      className
    )}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
