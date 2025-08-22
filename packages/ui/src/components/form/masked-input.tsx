"use client";

import * as React from "react";
import { cn } from "../../lib/utils";
import { Input } from "./input";

export type MaskType = "ssn" | "phone" | "zip" | "zip+4" | "date" | "ein" | "custom";

export interface MaskConfig {
  pattern: string;
  placeholder?: string;
  blocks?: number[];
  delimiter?: string;
  numericOnly?: boolean;
  uppercase?: boolean;
  lowercase?: boolean;
}

const MASK_CONFIGS: Record<Exclude<MaskType, "custom">, MaskConfig> = {
  ssn: {
    pattern: "XXX-XX-XXXX",
    placeholder: "___-__-____",
    blocks: [3, 2, 4],
    delimiter: "-",
    numericOnly: true,
  },
  phone: {
    pattern: "(XXX) XXX-XXXX",
    placeholder: "(___) ___-____",
    blocks: [3, 3, 4],
    delimiter: " ",
    numericOnly: true,
  },
  zip: {
    pattern: "XXXXX",
    placeholder: "_____",
    blocks: [5],
    delimiter: "",
    numericOnly: true,
  },
  "zip+4": {
    pattern: "XXXXX-XXXX",
    placeholder: "_____-____",
    blocks: [5, 4],
    delimiter: "-",
    numericOnly: true,
  },
  date: {
    pattern: "MM/DD/YYYY",
    placeholder: "MM/DD/YYYY",
    blocks: [2, 2, 4],
    delimiter: "/",
    numericOnly: true,
  },
  ein: {
    pattern: "XX-XXXXXXX",
    placeholder: "__-_______",
    blocks: [2, 7],
    delimiter: "-",
    numericOnly: true,
  },
};

export interface MaskedInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
  /** Type of mask to apply */
  maskType: MaskType;
  /** Custom mask configuration (when maskType is "custom") */
  customMask?: MaskConfig;
  /** Show mask placeholder when focused */
  showMaskOnFocus?: boolean;
  /** Show mask placeholder when hovering */
  showMaskOnHover?: boolean;
  /** Keep mask characters in value */
  keepMaskChars?: boolean;
  /** Callback with unmasked value */
  onValueChange?: (value: string, maskedValue: string) => void;
  /** Label for the input */
  label?: string;
  /** Hint text */
  hint?: string;
  /** Error message */
  error?: string;
  /** Show formatted preview below input */
  showPreview?: boolean;
  /** Analytics event name */
  analyticsEvent?: string;
}

export const MaskedInput = React.forwardRef<HTMLInputElement, MaskedInputProps>(
  (
    {
      className,
      maskType,
      customMask,
      showMaskOnFocus = true,
      showMaskOnHover = false,
      keepMaskChars: _keepMaskChars = false,
      onValueChange,
      label,
      hint,
      error,
      showPreview = false,
      analyticsEvent,
      value: controlledValue,
      defaultValue,
      onBlur,
      onFocus,
      ...props
    },
    ref
  ) => {
    const config = maskType === "custom" ? customMask! : MASK_CONFIGS[maskType];
    const [_value, setValue] = React.useState(controlledValue ?? defaultValue ?? "");
    const [maskedValue, setMaskedValue] = React.useState("");
    const [isFocused, setIsFocused] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useImperativeHandle(ref, () => inputRef.current!);

    const unmask = (val: string): string => {
      if (!config) return val;
      return val.replace(/[^0-9A-Za-z]/g, "");
    };

    const mask = (val: string): string => {
      if (!config) return val;

      const unmasked = unmask(val);
      let masked = "";
      let valueIndex = 0;

      for (let i = 0; i < config.pattern.length && valueIndex < unmasked.length; i++) {
        const patternChar = config.pattern[i];
        if (patternChar === "X" || patternChar === "9") {
          masked += unmasked[valueIndex];
          valueIndex++;
        } else {
          masked += patternChar;
        }
      }

      return masked;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let newValue = e.target.value;

      // Apply constraints
      if (config) {
        if (config.numericOnly) {
          newValue = newValue.replace(/[^0-9]/g, "");
        }
        if (config.uppercase) {
          newValue = newValue.toUpperCase();
        }
        if (config.lowercase) {
          newValue = newValue.toLowerCase();
        }
      }

      const masked = mask(newValue);
      const unmasked = unmask(newValue);

      setValue(unmasked);
      setMaskedValue(masked);

      // Update input value
      if (inputRef.current) {
        inputRef.current.value = masked;
      }

      // Callback with both values
      onValueChange?.(unmasked, masked);

      // Analytics
      if (analyticsEvent && window.__USWDS_ANALYTICS_HANDLER__) {
        window.__USWDS_ANALYTICS_HANDLER__({
          event: analyticsEvent,
          element: "masked_input",
          metadata: {
            maskType,
            valueLength: unmasked.length,
            complete: unmasked.length === unmask(config.pattern).length,
          },
        });
      }
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    const showPlaceholder = (showMaskOnFocus && isFocused) || (showMaskOnHover && isHovered);

    // Format functions for preview
    const formatPreview = (val: string): string => {
      const unmasked = unmask(val);

      switch (maskType) {
        case "ssn":
          return unmasked ? `***-**-${unmasked.slice(-4)}` : "";
        case "phone":
          if (unmasked.length === 10) {
            return `(${unmasked.slice(0, 3)}) ${unmasked.slice(3, 6)}-${unmasked.slice(6)}`;
          }
          return unmasked;
        case "date":
          if (unmasked.length === 8) {
            const month = unmasked.slice(0, 2);
            const day = unmasked.slice(2, 4);
            const year = unmasked.slice(4);
            return `${month}/${day}/${year}`;
          }
          return unmasked;
        default:
          return maskedValue;
      }
    };

    const inputId = React.useId();
    const hintId = hint ? `${inputId}-hint` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;
    const previewId = showPreview ? `${inputId}-preview` : undefined;

    return (
      <div
        className="space-y-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {label && (
          <label htmlFor={inputId} className="usa-label">
            {label}
            {props.required && (
              <abbr title="required" className="usa-hint usa-hint--required ml-1">
                *
              </abbr>
            )}
          </label>
        )}

        {hint && (
          <span id={hintId} className="usa-hint">
            {hint}
          </span>
        )}

        {error && (
          <span id={errorId} className="usa-error-message" role="alert">
            <span className="usa-sr-only">Error:</span> {error}
          </span>
        )}

        <Input
          ref={inputRef}
          id={inputId}
          type="text"
          className={cn(className)}
          placeholder={showPlaceholder ? config?.placeholder : props.placeholder}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          defaultValue={mask(String(defaultValue ?? ""))}
          aria-describedby={[hintId, errorId, previewId].filter(Boolean).join(" ") || undefined}
          aria-invalid={error ? "true" : undefined}
          state={error ? "error" : undefined}
          {...props}
        />

        {showPreview && maskedValue && (
          <div id={previewId} className="text-sm text-gray-600">
            <span className="font-medium">Formatted: </span>
            {formatPreview(maskedValue)}
          </div>
        )}
      </div>
    );
  }
);

MaskedInput.displayName = "MaskedInput";

// Convenience components for common patterns
export const SSNInput = React.forwardRef<HTMLInputElement, Omit<MaskedInputProps, "maskType">>(
  (props, ref) => (
    <MaskedInput
      ref={ref}
      maskType="ssn"
      label="Social Security Number"
      hint="Enter your 9-digit SSN"
      showPreview
      {...props}
    />
  )
);
SSNInput.displayName = "SSNInput";

export const PhoneInput = React.forwardRef<HTMLInputElement, Omit<MaskedInputProps, "maskType">>(
  (props, ref) => (
    <MaskedInput
      ref={ref}
      maskType="phone"
      label="Phone Number"
      hint="10-digit US phone number"
      {...props}
    />
  )
);
PhoneInput.displayName = "PhoneInput";

export const ZIPInput = React.forwardRef<HTMLInputElement, Omit<MaskedInputProps, "maskType">>(
  (props, ref) => (
    <MaskedInput ref={ref} maskType="zip" label="ZIP Code" hint="5-digit ZIP code" {...props} />
  )
);
ZIPInput.displayName = "ZIPInput";

export const DateInput = React.forwardRef<HTMLInputElement, Omit<MaskedInputProps, "maskType">>(
  (props, ref) => (
    <MaskedInput ref={ref} maskType="date" label="Date" hint="MM/DD/YYYY format" {...props} />
  )
);
DateInput.displayName = "DateInput";
