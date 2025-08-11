"use client";

import * as React from "react";
import { forwardRef } from "react";
import { cn } from "../../lib/utils";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  /** USWDS input state classes */
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
  /** Additional Tailwind utilities */
  twClass?: string;
  /** Character count for input */
  characterCount?: boolean;
  /** Maximum character length */
  maxLength?: number;
}

/**
 * Direct USWDS Form Input with Enhanced Accessibility
 * Uses actual USWDS HTML structure with form integration support
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
      twClass,
      characterCount,
      maxLength,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || React.useId();
    const hintId = hint ? `${inputId}-hint` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;
    const successId = success ? `${inputId}-success` : undefined;
    const [charCount, setCharCount] = React.useState(0);

    // Build aria-describedby
    const ariaDescribedBy = [hintId, errorId, successId].filter(Boolean).join(" ") || undefined;

    // Input classes
    const inputClasses = cn(
      "usa-input",
      state === "error" && "usa-input--error",
      state === "success" && "usa-input--success",
      characterCount && "usa-character-count__field",
      twClass,
      className
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (characterCount) {
        setCharCount(e.target.value.length);
      }
      props.onChange?.(e);
    };

    return (
      <div className={cn("usa-form-group", state === "error" && "usa-form-group--error")}>
        {/* Label */}
        {label && (
          <label className="usa-label" htmlFor={inputId}>
            {label}
            {required && (
              <abbr title="required" className="usa-hint usa-hint--required">
                *
              </abbr>
            )}
          </label>
        )}

        {/* Hint text */}
        {hint && (
          <span className="usa-hint" id={hintId}>
            {hint}
          </span>
        )}

        {/* Error message */}
        {error && (
          <span className="usa-error-message" id={errorId} role="alert">
            <span className="usa-sr-only">Error:</span> {error}
          </span>
        )}

        {/* Success message */}
        {success && (
          <span className="usa-success-message" id={successId} role="status">
            <span className="usa-sr-only">Success:</span> {success}
          </span>
        )}

        {/* Input with optional prefix/suffix */}
        {prefix || suffix ? (
          <div className="usa-input-group">
            {prefix && <div className="usa-input-prefix">{prefix}</div>}
            <input
              ref={ref}
              id={inputId}
              className={inputClasses}
              aria-describedby={ariaDescribedBy}
              aria-invalid={state === "error" ? "true" : undefined}
              aria-required={required ? "true" : undefined}
              maxLength={maxLength}
              onChange={handleChange}
              {...props}
            />
            {suffix && <div className="usa-input-suffix">{suffix}</div>}
          </div>
        ) : (
          <input
            ref={ref}
            id={inputId}
            className={inputClasses}
            aria-describedby={ariaDescribedBy}
            aria-invalid={state === "error" ? "true" : undefined}
            aria-required={required ? "true" : undefined}
            maxLength={maxLength}
            onChange={handleChange}
            {...props}
          />
        )}

        {/* Character count */}
        {characterCount && maxLength && (
          <span
            className={cn(
              "usa-character-count__message",
              charCount > maxLength && "usa-character-count__message--invalid"
            )}
            aria-live="polite"
          >
            {maxLength - charCount} characters remaining
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

/**
 * Textarea with USWDS styling
 */
export const Textarea = forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement> & Omit<InputProps, "prefix" | "suffix">>(
  ({ className, state, hint, error, success, label, required, twClass, characterCount, maxLength, id, ...props }, ref) => {
    const textareaId = id || React.useId();
    const hintId = hint ? `${textareaId}-hint` : undefined;
    const errorId = error ? `${textareaId}-error` : undefined;
    const successId = success ? `${textareaId}-success` : undefined;
    const [charCount, setCharCount] = React.useState(0);

    const ariaDescribedBy = [hintId, errorId, successId].filter(Boolean).join(" ") || undefined;

    const textareaClasses = cn(
      "usa-textarea",
      state === "error" && "usa-input--error",
      state === "success" && "usa-input--success",
      characterCount && "usa-character-count__field",
      twClass,
      className
    );

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (characterCount) {
        setCharCount(e.target.value.length);
      }
      props.onChange?.(e);
    };

    return (
      <div className={cn("usa-form-group", state === "error" && "usa-form-group--error")}>
        {label && (
          <label className="usa-label" htmlFor={textareaId}>
            {label}
            {required && (
              <abbr title="required" className="usa-hint usa-hint--required">
                *
              </abbr>
            )}
          </label>
        )}
        {hint && (
          <span className="usa-hint" id={hintId}>
            {hint}
          </span>
        )}
        {error && (
          <span className="usa-error-message" id={errorId} role="alert">
            <span className="usa-sr-only">Error:</span> {error}
          </span>
        )}
        {success && (
          <span className="usa-success-message" id={successId} role="status">
            <span className="usa-sr-only">Success:</span> {success}
          </span>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={textareaClasses}
          aria-describedby={ariaDescribedBy}
          aria-invalid={state === "error" ? "true" : undefined}
          aria-required={required ? "true" : undefined}
          maxLength={maxLength}
          onChange={handleChange}
          {...props}
        />
        {characterCount && maxLength && (
          <span
            className={cn(
              "usa-character-count__message",
              charCount > maxLength && "usa-character-count__message--invalid"
            )}
            aria-live="polite"
          >
            {maxLength - charCount} characters remaining
          </span>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Input };