"use client";

import * as React from "react";
import { forwardRef } from "react";
import { cn } from "../../lib/utils";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  /** Input state for validation feedback */
  state?: "error" | "success";
  /** Input prefix content */
  prefix?: React.ReactNode;
  /** Input suffix content */
  suffix?: React.ReactNode;
  /** Hint text below label */
  hint?: string;
  /** Error message text */
  error?: string;
  /** Success message text */
  success?: string;
  /** Label text */
  label?: string;
  /** Whether field is required */
  required?: boolean;
  /** Character count for input */
  characterCount?: boolean;
  /** Maximum character length */
  maxLength?: number;
}

/**
 * Input component following USWDS design patterns
 * Provides comprehensive form field with label, hints, validation states
 * @see https://designsystem.digital.gov/components/text-input/
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      state,
      prefix,
      suffix,
      hint,
      error,
      success,
      label,
      required,
      characterCount,
      maxLength,
      id,
      type = "text",
      disabled,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;
    const hintId = hint ? `${inputId}-hint` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;
    const successId = success ? `${inputId}-success` : undefined;

    const [currentLength, setCurrentLength] = React.useState(value ? String(value).length : 0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (characterCount) {
        setCurrentLength(e.target.value.length);
      }
      onChange?.(e);
    };

    const hasError = state === "error" || !!error;
    const hasSuccess = state === "success" || !!success;

    const inputClasses = cn(
      "usa-input",
      {
        "usa-input--error": hasError,
        "usa-input--success": hasSuccess,
      },
      className
    );

    const inputElement = (
      <input
        ref={ref}
        id={inputId}
        type={type}
        className={inputClasses}
        aria-describedby={[hintId, errorId, successId].filter(Boolean).join(" ") || undefined}
        aria-invalid={hasError ? "true" : undefined}
        aria-required={required ? "true" : undefined}
        disabled={disabled}
        value={value}
        onChange={handleChange}
        maxLength={maxLength}
        {...props}
      />
    );

    // If no label and no validation messages, return simple input
    if (!label && !hint && !error && !success && !prefix && !suffix && !characterCount) {
      return inputElement;
    }

    return (
      <div className="usa-form-group">
        {label && (
          <label htmlFor={inputId} className="usa-label">
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

        {prefix || suffix ? (
          <div className="usa-input-group">
            {prefix && (
              <div className="usa-input-prefix" aria-hidden="true">
                {prefix}
              </div>
            )}
            {inputElement}
            {suffix && (
              <div className="usa-input-suffix" aria-hidden="true">
                {suffix}
              </div>
            )}
          </div>
        ) : (
          inputElement
        )}

        {characterCount && maxLength && (
          <span
            className={cn(
              "mt-05 block text-sm",
              currentLength > maxLength ? "text-error font-bold" : "text-gray-60"
            )}
            aria-live="polite"
          >
            {maxLength - currentLength} characters remaining
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
