import * as React from "react";
import { clsx } from "clsx";
import { useFormField } from "./form";

export interface FormMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const FormMessage = React.forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;

    if (!body) {
      return null;
    }

    return (
      <p
        ref={ref}
        id={formMessageId}
        className={clsx("text-sm", error ? "mt-1 text-red-600" : "text-gray-500", className)}
        {...props}
      >
        {body}
      </p>
    );
  }
);
FormMessage.displayName = "FormMessage";

const FormDescription = React.forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField();

    return (
      <p
        ref={ref}
        id={formDescriptionId}
        className={clsx("text-sm text-gray-500", className)}
        {...props}
      />
    );
  }
);
FormDescription.displayName = "FormDescription";

export { FormMessage, FormDescription };