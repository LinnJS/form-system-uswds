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
          "right-uswds-2",
          "top-uswds-2",
          "rounded-uswds-sm",
          "p-uswds-1",
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
      "space-y-uswds-105", // 12px gap
      "text-center sm:text-left",
      "mb-uswds-3", // 24px margin bottom
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
      "sm:space-x-uswds-2", // 16px gap
      "space-y-uswds-2 space-y-reverse sm:space-y-0",
      "mt-uswds-4", // 32px margin top
      "pt-uswds-3", // 24px padding top
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
      baseStyles,
      "font-uswds-bold", // 700 weight
      "text-xl", // 28px from USWDS
      "leading-uswds-3", // 1.35 line height
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
      "leading-uswds-4", // 1.5 line height
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
