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
      // Base select styles
      "font-sans",
      "block w-full",
      "rounded",
      "border-2",
      "px-2 py-1",
      "text-gray-90",
      "bg-white",
      "shadow-1",
      "appearance-none",
      "bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23565c65%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.5rem] bg-[position:right_0.5rem_center] bg-no-repeat pr-10",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      "disabled:bg-gray-10 disabled:cursor-not-allowed disabled:opacity-50",
      "transition-all duration-200",
      // State-based styles
      hasError ? [
        "border-error-dark",
        "focus-visible:ring-error",
      ] : hasSuccess ? [
        "border-success",
        "focus-visible:ring-success",
      ] : [
        "border-gray-60",
        "hover:border-gray-70",
        "focus-visible:ring-primary",
      ],
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
      <div className="font-sans">
        {label && (
          <label htmlFor={selectId} className="text-gray-90 mb-05 block font-bold">
            {label}
            {required && (
              <abbr title="required" className="text-error ml-05 no-underline">
                *
              </abbr>
            )}
          </label>
        )}

        {hint && (
          <div id={hintId} className="text-gray-60 mb-05 text-sm">
            {hint}
          </div>
        )}

        {error && (
          <span id={errorId} className="text-error mt-05 block text-sm font-bold" role="alert">
            {error}
          </span>
        )}

        {success && (
          <span id={successId} className="text-success mt-05 block text-sm font-bold">
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
