"use client";

import * as React from "react";
import { cn } from "../../lib/utils";
import { inputStyles, errorStyles, successStyles, helperTextStyles } from "../../lib/component-utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Textarea state for validation feedback */
  state?: "error" | "success";
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
  /** Character count for textarea */
  characterCount?: boolean;
  /** Maximum character length */
  maxLength?: number;
}

/**
 * Textarea component following USWDS design patterns
 * Provides multi-line text input with validation states
 * @see https://designsystem.digital.gov/components/text-input/
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      state,
      hint,
      error,
      success,
      label,
      required,
      characterCount,
      maxLength,
      id,
      disabled,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const textareaId = id ?? generatedId;
    const hintId = hint ? `${textareaId}-hint` : undefined;
    const errorId = error ? `${textareaId}-error` : undefined;
    const successId = success ? `${textareaId}-success` : undefined;
    
    const [currentLength, setCurrentLength] = React.useState(
      value ? String(value).length : 0
    );

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (characterCount) {
        setCurrentLength(e.target.value.length);
      }
      onChange?.(e);
    };

    const hasError = state === "error" || !!error;
    const hasSuccess = state === "success" || !!success;

    const textareaClasses = cn(
      inputStyles,
      "min-h-[120px]",
      {
        "border-error": hasError,
        "border-success": hasSuccess,
        "opacity-50 cursor-not-allowed": disabled,
      },
      className
    );

    const textareaElement = (
      <textarea
        ref={ref}
        id={textareaId}
        className={textareaClasses}
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

    // If no label and no validation messages, return simple textarea
    if (!label && !hint && !error && !success && !characterCount) {
      return textareaElement;
    }

    return (
      <div className="usa-form-group">
        {label && (
          <label htmlFor={textareaId} className="usa-label">
            {label}
            {required && (
              <abbr title="required" className="usa-hint usa-hint--required">
                *
              </abbr>
            )}
          </label>
        )}
        
        {hint && (
          <div id={hintId} className={helperTextStyles}>
            {hint}
          </div>
        )}
        
        {error && (
          <span id={errorId} className={errorStyles} role="alert">
            {error}
          </span>
        )}
        
        {success && (
          <span id={successId} className={successStyles}>
            {success}
          </span>
        )}

        {textareaElement}

        {characterCount && maxLength && (
          <span 
            className={cn(
              "usa-character-count__message",
              currentLength > maxLength && "usa-character-count__message--invalid"
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

Textarea.displayName = "Textarea";

export { Textarea };