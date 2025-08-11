import { clsx } from "clsx";
import * as React from "react";
import { useFormField } from "./form";

export interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, required, children, ...props }, ref) => {
    const { error, formItemId } = useFormField();

    return (
      <label
        ref={ref}
        className={clsx(
          "mb-1 block text-sm font-medium",
          error ? "text-red-600" : "text-gray-700",
          className
        )}
        htmlFor={formItemId}
        {...props}
      >
        {children}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
    );
  }
);
FormLabel.displayName = "FormLabel";

export { FormLabel };
