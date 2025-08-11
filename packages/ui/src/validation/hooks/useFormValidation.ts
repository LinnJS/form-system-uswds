import { useCallback, useMemo, useState } from "react";
import type { FieldValidation, FormValidationState } from "../types";
import { validateField, validateForm } from "../validators";

export interface UseFormValidationOptions<T> {
  initialValues: T;
  validations: Partial<Record<keyof T, FieldValidation>>;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
}

export function useFormValidation<T extends Record<string, any>>({
  initialValues,
  validations,
  validateOnChange = false,
  validateOnBlur = true,
}: UseFormValidationOptions<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const isValid = useMemo(() => {
    return Object.keys(errors).length === 0;
  }, [errors]);

  const validateSingleField = useCallback(
    (field: keyof T, value: any) => {
      const validation = validations[field];
      if (!validation) return undefined;

      const error = validateField(value, validation);
      return error ? [error] : undefined;
    },
    [validations]
  );

  const updateFieldErrors = useCallback((field: keyof T, fieldErrors: string[] | undefined) => {
    setErrors((prev) => {
      const newErrors = { ...prev };
      if (fieldErrors) {
        newErrors[field as string] = fieldErrors;
      } else {
        delete newErrors[field as string];
      }
      return newErrors;
    });
  }, []);

  const handleChange = useCallback(
    (field: keyof T) => (value: any) => {
      setValues((prev) => ({ ...prev, [field]: value }));

      if (validateOnChange && touched[field as string]) {
        const fieldErrors = validateSingleField(field, value);
        updateFieldErrors(field, fieldErrors);
      }
    },
    [validateOnChange, touched, validateSingleField, updateFieldErrors]
  );

  const handleBlur = useCallback(
    (field: keyof T) => () => {
      setTouched((prev) => ({ ...prev, [field]: true }));

      if (validateOnBlur) {
        const fieldErrors = validateSingleField(field, values[field]);
        updateFieldErrors(field, fieldErrors);
      }
    },
    [validateOnBlur, values, validateSingleField, updateFieldErrors]
  );

  const validateAllFields = useCallback(() => {
    const allErrors = validateForm(values, validations as Record<keyof T, FieldValidation>);
    setErrors(allErrors);

    const allTouched: Record<string, boolean> = {};
    Object.keys(values).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    return Object.keys(allErrors).length === 0;
  }, [values, validations]);

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  }, [initialValues]);

  const setFieldValue = useCallback(
    (field: keyof T, value: any) => {
      handleChange(field)(value);
    },
    [handleChange]
  );

  const setFieldError = useCallback((field: keyof T, error: string | string[]) => {
    setErrors((prev) => ({
      ...prev,
      [field]: Array.isArray(error) ? error : [error],
    }));
  }, []);

  const clearFieldError = useCallback((field: keyof T) => {
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[field as string];
      return newErrors;
    });
  }, []);

  const getFieldProps = useCallback(
    (field: keyof T) => ({
      value: values[field],
      onChange: handleChange(field),
      onBlur: handleBlur(field),
      error: errors[field as string]?.[0],
      touched: touched[field as string] || false,
    }),
    [values, errors, touched, handleChange, handleBlur]
  );

  const formState: FormValidationState = {
    errors,
    touched,
    isValid,
  };

  return {
    values,
    errors,
    touched,
    isValid,
    formState,
    handleChange,
    handleBlur,
    validateAllFields,
    resetForm,
    setFieldValue,
    setFieldError,
    clearFieldError,
    getFieldProps,
  };
}
