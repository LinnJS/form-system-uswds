"use client";

import * as React from "react";
import { forwardRef } from "react";
import { cn } from "../../lib/utils";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Label text */
  label?: string;
  /** Hint text below label */
  hint?: string;
  /** Error message text */
  error?: string;
  /** Success message text */
  success?: string;
  /** Whether field is required */
  required?: boolean;
  /** Select state for validation feedback */
  state?: "error" | "success";
}

/**
 * Native select component following USWDS design patterns
 * @see https://designsystem.digital.gov/components/select/
 */
const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { className, label, hint, error, success, required, state, id, disabled, children, ...props },
    ref
  ) => {
    const generatedId = React.useId();
    const selectId = id ?? generatedId;
    const hintId = hint ? `${selectId}-hint` : undefined;
    const errorId = error ? `${selectId}-error` : undefined;
    const successId = success ? `${selectId}-success` : undefined;

    const hasError = state === "error" || !!error;
    const hasSuccess = state === "success" || !!success;

    const selectClasses = cn(
      "usa-select",
      {
        "usa-input--error": hasError,
        "usa-input--success": hasSuccess,
      },
      className
    );

    const selectElement = (
      <select
        ref={ref}
        id={selectId}
        className={selectClasses}
        aria-describedby={[hintId, errorId, successId].filter(Boolean).join(" ") || undefined}
        aria-invalid={hasError ? "true" : undefined}
        aria-required={required ? "true" : undefined}
        disabled={disabled}
        {...props}
      >
        {children}
      </select>
    );

    // If no label and no validation messages, return simple select
    if (!label && !hint && !error && !success) {
      return selectElement;
    }

    return (
      <div className="usa-form-group">
        {label && (
          <label htmlFor={selectId} className="usa-label">
            {label}
            {required && (
              <abbr title="required" className="usa-hint usa-hint--required">
                *
              </abbr>
            )}
          </label>
        )}

        {hint && (
          <div id={hintId} className="usa-hint">
            {hint}
          </div>
        )}

        {error && (
          <span id={errorId} className="usa-error-message" role="alert">
            {error}
          </span>
        )}

        {success && (
          <span id={successId} className="usa-success-message">
            {success}
          </span>
        )}

        {selectElement}
      </div>
    );
  }
);

Select.displayName = "Select";

export { Select };
