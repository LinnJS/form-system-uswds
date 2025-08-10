import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const listVariants = cva("", {
  variants: {
    type: {
      unordered: "list-disc",
      ordered: "list-decimal",
      none: "list-none",
    },
    spacing: {
      tight: "space-y-1",
      normal: "space-y-2",
      loose: "space-y-4",
    },
    position: {
      inside: "list-inside",
      outside: "list-outside",
    },
  },
  defaultVariants: {
    type: "unordered",
    spacing: "normal",
    position: "outside",
  },
});

export interface ListProps
  extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement>,
    VariantProps<typeof listVariants> {
  as?: "ul" | "ol";
  children?: React.ReactNode;
}

const List = React.forwardRef<HTMLUListElement | HTMLOListElement, ListProps>(
  ({ className, type, spacing, position, as, children, ...props }, ref) => {
    const Component = as ?? (type === "ordered" ? "ol" : "ul");

    return React.createElement(
      Component,
      {
        ref,
        className: cn(
          listVariants({ type, spacing, position }),
          "ml-6",
          className
        ),
        ...props,
      },
      children
    );
  }
);

List.displayName = "List";

export interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  children?: React.ReactNode;
}

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({ className, children, ...props }, ref) => (
    <li ref={ref} className={cn("", className)} {...props}>
      {children}
    </li>
  )
);

ListItem.displayName = "ListItem";

// Convenience components
export const UnorderedList = React.forwardRef<
  HTMLUListElement,
  Omit<ListProps, "as" | "type">
>((props, ref) => <List ref={ref} as="ul" type="unordered" {...props} />);
UnorderedList.displayName = "UnorderedList";

export const OrderedList = React.forwardRef<
  HTMLOListElement,
  Omit<ListProps, "as" | "type">
>((props, ref) => <List ref={ref} as="ol" type="ordered" {...props} />);
OrderedList.displayName = "OrderedList";

// Description list components
export interface DescriptionListProps
  extends React.HTMLAttributes<HTMLDListElement> {
  children?: React.ReactNode;
  spacing?: "tight" | "normal" | "loose";
}

const DescriptionList = React.forwardRef<HTMLDListElement, DescriptionListProps>(
  ({ className, spacing = "normal", children, ...props }, ref) => {
    const spacingClasses = {
      tight: "space-y-2",
      normal: "space-y-4",
      loose: "space-y-6",
    };

    return (
      <dl
        ref={ref}
        className={cn(spacingClasses[spacing], className)}
        {...props}
      >
        {children}
      </dl>
    );
  }
);
DescriptionList.displayName = "DescriptionList";

export const DescriptionTerm = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <dt ref={ref} className={cn("font-semibold", className)} {...props} />
));
DescriptionTerm.displayName = "DescriptionTerm";

export const DescriptionDetails = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <dd ref={ref} className={cn("ml-0 text-gray-600", className)} {...props} />
));
DescriptionDetails.displayName = "DescriptionDetails";

export {
  List,
  ListItem,
  DescriptionList,
  listVariants,
};