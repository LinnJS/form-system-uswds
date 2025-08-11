import { useCallback, useEffect, useState } from "react";
import type { FieldValidation } from "../types";
import { validateField } from "../validators";

export interface UseFieldValidationOptions {
  validation?: FieldValidation;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  initialValue?: any;
}

export function useFieldValidation({
  validation,
  validateOnChange = false,
  validateOnBlur = true,
  initialValue = "",
}: UseFieldValidationOptions = {}) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | undefined>();
  const [touched, setTouched] = useState(false);

  const validate = useCallback(() => {
    if (!validation) {
      setError(undefined);
      return true;
    }

    const validationError = validateField(value, validation);
    setError(validationError);
    return !validationError;
  }, [value, validation]);

  const handleChange = useCallback(
    (newValue: any) => {
      setValue(newValue);

      if (validateOnChange && touched) {
        if (validation) {
          const validationError = validateField(newValue, validation);
          setError(validationError);
        }
      }
    },
    [validateOnChange, touched, validation]
  );

  const handleBlur = useCallback(() => {
    setTouched(true);

    if (validateOnBlur) {
      validate();
    }
  }, [validateOnBlur, validate]);

  const reset = useCallback(() => {
    setValue(initialValue);
    setError(undefined);
    setTouched(false);
  }, [initialValue]);

  useEffect(() => {
    if (touched && (validateOnChange || validateOnBlur)) {
      validate();
    }
  }, [validation, validate, touched, validateOnChange, validateOnBlur]);

  return {
    value,
    error,
    touched,
    isValid: !error,
    setValue: handleChange,
    setError,
    setTouched,
    handleChange,
    handleBlur,
    validate,
    reset,
  };
}
