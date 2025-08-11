import { clsx } from "clsx";
import * as React from "react";
import { useFormField } from "./form";

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, ...props }, ref) => {
    const { error, formItemId } = useFormField();

    return (
      <input
        ref={ref}
        id={formItemId}
        className={clsx(
          "block w-full rounded-md border px-3 py-2 shadow-sm",
          "focus:outline-none focus:ring-2",
          error
            ? "border-red-300 text-red-900 placeholder:text-red-300 focus:border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
          className
        )}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${formItemId}-message` : undefined}
        {...props}
      />
    );
  }
);
FormInput.displayName = "FormInput";

export interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ className, ...props }, ref) => {
    const { error, formItemId } = useFormField();

    return (
      <textarea
        ref={ref}
        id={formItemId}
        className={clsx(
          "block w-full rounded-md border px-3 py-2 shadow-sm",
          "focus:outline-none focus:ring-2",
          error
            ? "border-red-300 text-red-900 placeholder:text-red-300 focus:border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
          className
        )}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${formItemId}-message` : undefined}
        {...props}
      />
    );
  }
);
FormTextarea.displayName = "FormTextarea";

export interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const FormSelect = React.forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ className, children, ...props }, ref) => {
    const { error, formItemId } = useFormField();

    return (
      <select
        ref={ref}
        id={formItemId}
        className={clsx(
          "block w-full rounded-md border px-3 py-2 shadow-sm",
          "focus:outline-none focus:ring-2",
          error
            ? "border-red-300 text-red-900 focus:border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
          className
        )}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${formItemId}-message` : undefined}
        {...props}
      >
        {children}
      </select>
    );
  }
);
FormSelect.displayName = "FormSelect";

export { FormInput, FormSelect, FormTextarea };
