"use client";

import * as React from "react";
import {
  Controller,
  type FieldPath,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";
import { cn } from "../../lib/utils";
import { Input, type InputProps } from "./input";
import { Textarea } from "./textarea";

interface FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends UseControllerProps<TFieldValues, TName> {
  /** Input component props */
  inputProps?: Omit<InputProps, "name" | "value" | "onChange" | "onBlur" | "ref"> & {
    rows?: number;
  };
  /** Field type */
  type?:
    | "text"
    | "email"
    | "password"
    | "tel"
    | "url"
    | "number"
    | "date"
    | "textarea"
    | "select"
    | "checkbox"
    | "radio";
  /** Select options */
  options?: Array<{ value: string; label: string }>;
  /** Checkbox/Radio options */
  choices?: Array<{ value: string; label: string; hint?: string }>;
  /** Additional Tailwind utilities for wrapper */
  wrapperClass?: string;
}

/**
 * USWDS Form Field with react-hook-form Integration
 * Provides maximum accessibility with WCAG 2.1 AA compliance
 */
export function FormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  control,
  name,
  rules,
  defaultValue,
  inputProps = {},
  type = "text",
  options,
  choices,
  wrapperClass,
}: FormFieldProps<TFieldValues, TName>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error, invalid }, formState: { isSubmitting } }) => {
        const fieldId = `field-${name}`;
        const errorMessage = error?.message;
        const hasError = invalid || !!errorMessage;

        // Common props for all input types
        const commonProps = {
          ...inputProps,
          ...field,
          id: fieldId,
          state: hasError ? "error" as const : undefined,
          error: errorMessage,
          disabled: isSubmitting || inputProps.disabled,
          "aria-invalid": hasError ? true : undefined,
        };

        // Render textarea
        if (type === "textarea") {
          return (
            <Textarea
              id={fieldId}
              state={hasError ? "error" : undefined}
              error={errorMessage}
              disabled={isSubmitting || inputProps.disabled}
              aria-invalid={hasError ? "true" : undefined}
              label={inputProps.label}
              hint={inputProps.hint}
              required={inputProps.required}
              className={inputProps.className}
              rows={inputProps.rows ?? 5}
              {...field}
            />
          );
        }

        // Render select
        if (type === "select" && options) {
          return (
            <div
              className={cn("usa-form-group", hasError && "usa-form-group--error", wrapperClass)}
            >
              {inputProps.label && (
                <label className="usa-label" htmlFor={fieldId}>
                  {inputProps.label}
                  {inputProps.required && (
                    <abbr title="required" className="usa-hint usa-hint--required">
                      *
                    </abbr>
                  )}
                </label>
              )}
              {inputProps.hint && (
                <span className="usa-hint" id={`${fieldId}-hint`}>
                  {inputProps.hint}
                </span>
              )}
              {errorMessage && (
                <span className="usa-error-message" id={`${fieldId}-error`} role="alert">
                  <span className="usa-sr-only">Error:</span> {errorMessage}
                </span>
              )}
              <select
                {...field}
                id={fieldId}
                className={cn(
                  "usa-select",
                  hasError && "usa-input--error",

                  inputProps.className
                )}
                aria-describedby={
                  [inputProps.hint && `${fieldId}-hint`, errorMessage && `${fieldId}-error`]
                    .filter(Boolean)
                    .join(" ") || undefined
                }
                disabled={isSubmitting || inputProps.disabled}
              >
                <option value="">- Select -</option>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          );
        }

        // Render checkbox group
        if (type === "checkbox" && choices) {
          return (
            <fieldset className={cn("usa-fieldset", wrapperClass)}>
              {inputProps.label && (
                <legend className="usa-legend">
                  {inputProps.label}
                  {inputProps.required && (
                    <abbr title="required" className="usa-hint usa-hint--required">
                      *
                    </abbr>
                  )}
                </legend>
              )}
              {inputProps.hint && (
                <span className="usa-hint" id={`${fieldId}-hint`}>
                  {inputProps.hint}
                </span>
              )}
              {errorMessage && (
                <span className="usa-error-message" id={`${fieldId}-error`} role="alert">
                  <span className="usa-sr-only">Error:</span> {errorMessage}
                </span>
              )}
              {choices.map((choice, index) => {
                const choiceId = `${fieldId}-${index}`;
                const fieldValue = typeof field.value === 'string' || Array.isArray(field.value) ? field.value : '';
                const isChecked = Array.isArray(fieldValue)
                  ? fieldValue.includes(choice.value)
                  : fieldValue === choice.value;

                return (
                  <div key={choice.value} className="usa-checkbox">
                    <input
                      id={choiceId}
                      className="usa-checkbox__input"
                      type="checkbox"
                      name={field.name}
                      value={choice.value}
                      checked={isChecked}
                      onChange={(e) => {
                        const currentValue = typeof field.value === 'string' || Array.isArray(field.value) ? field.value : '';
                        const newValue = e.target.checked
                          ? Array.isArray(currentValue)
                            ? [...currentValue, choice.value]
                            : [choice.value]
                          : Array.isArray(currentValue)
                            ? currentValue.filter((v) => v !== choice.value)
                            : [];
                        field.onChange(newValue);
                      }}
                      onBlur={field.onBlur}
                      disabled={isSubmitting || inputProps.disabled}
                      aria-describedby={choice.hint ? `${choiceId}-hint` : undefined}
                    />
                    <label className="usa-checkbox__label" htmlFor={choiceId}>
                      {choice.label}
                    </label>
                    {choice.hint && (
                      <span
                        className="usa-hint usa-checkbox__label-description"
                        id={`${choiceId}-hint`}
                      >
                        {choice.hint}
                      </span>
                    )}
                  </div>
                );
              })}
            </fieldset>
          );
        }

        // Render radio group
        if (type === "radio" && choices) {
          return (
            <fieldset className={cn("usa-fieldset", wrapperClass)}>
              {inputProps.label && (
                <legend className="usa-legend">
                  {inputProps.label}
                  {inputProps.required && (
                    <abbr title="required" className="usa-hint usa-hint--required">
                      *
                    </abbr>
                  )}
                </legend>
              )}
              {inputProps.hint && (
                <span className="usa-hint" id={`${fieldId}-hint`}>
                  {inputProps.hint}
                </span>
              )}
              {errorMessage && (
                <span className="usa-error-message" id={`${fieldId}-error`} role="alert">
                  <span className="usa-sr-only">Error:</span> {errorMessage}
                </span>
              )}
              {choices.map((choice, index) => {
                const choiceId = `${fieldId}-${index}`;
                return (
                  <div key={choice.value} className="usa-radio">
                    <input
                      id={choiceId}
                      className="usa-radio__input"
                      type="radio"
                      name={field.name}
                      value={choice.value}
                      checked={field.value === choice.value}
                      onChange={() => field.onChange(choice.value)}
                      onBlur={field.onBlur}
                      disabled={isSubmitting || inputProps.disabled}
                      aria-describedby={choice.hint ? `${choiceId}-hint` : undefined}
                    />
                    <label className="usa-radio__label" htmlFor={choiceId}>
                      {choice.label}
                    </label>
                    {choice.hint && (
                      <span
                        className="usa-hint usa-radio__label-description"
                        id={`${choiceId}-hint`}
                      >
                        {choice.hint}
                      </span>
                    )}
                  </div>
                );
              })}
            </fieldset>
          );
        }

        // Render standard input
        return <Input {...commonProps} type={type} />;
      }}
    />
  );
}

/**
 * USWDS Fieldset wrapper
 */
export const Fieldset = React.forwardRef<
  HTMLFieldSetElement,
  React.FieldsetHTMLAttributes<HTMLFieldSetElement> & { legend?: string; hint?: string }
>(({ className, legend, hint, children, ...props }, ref) => {
  const fieldsetId = React.useId();
  return (
    <fieldset ref={ref} className={cn("usa-fieldset", className)} {...props}>
      {legend && <legend className="usa-legend">{legend}</legend>}
      {hint && (
        <span className="usa-hint" id={`${fieldsetId}-hint`}>
          {hint}
        </span>
      )}
      {children}
    </fieldset>
  );
});

Fieldset.displayName = "Fieldset";

/**
 * USWDS Form wrapper with proper semantics
 */
export const Form = React.forwardRef<HTMLFormElement, React.FormHTMLAttributes<HTMLFormElement>>(
  ({ className, ...props }, ref) => {
    return <form ref={ref} className={cn("usa-form", className)} {...props} />;
  }
);

Form.displayName = "Form";
