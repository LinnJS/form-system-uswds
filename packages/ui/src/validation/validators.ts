import type { FieldValidation, ValidatorFunction } from './types';

export const validators = {
  required: (message = 'This field is required'): ValidatorFunction => 
    (value: any) => {
      if (value === null || value === undefined || value === '' || 
          (Array.isArray(value) && value.length === 0)) {
        return message;
      }
      return undefined;
    },

  minLength: (min: number, message?: string): ValidatorFunction => 
    (value: any) => {
      const msg = message || `Must be at least ${min} characters`;
      if (value && value.length < min) {
        return msg;
      }
      return undefined;
    },

  maxLength: (max: number, message?: string): ValidatorFunction => 
    (value: any) => {
      const msg = message || `Must be no more than ${max} characters`;
      if (value && value.length > max) {
        return msg;
      }
      return undefined;
    },

  email: (message = 'Please enter a valid email address'): ValidatorFunction => 
    (value: any) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value && !emailRegex.test(value)) {
        return message;
      }
      return undefined;
    },

  pattern: (pattern: RegExp, message = 'Invalid format'): ValidatorFunction => 
    (value: any) => {
      if (value && !pattern.test(value)) {
        return message;
      }
      return undefined;
    },

  min: (min: number, message?: string): ValidatorFunction => 
    (value: any) => {
      const msg = message || `Must be at least ${min}`;
      const numValue = Number(value);
      if (!isNaN(numValue) && numValue < min) {
        return msg;
      }
      return undefined;
    },

  max: (max: number, message?: string): ValidatorFunction => 
    (value: any) => {
      const msg = message || `Must be no more than ${max}`;
      const numValue = Number(value);
      if (!isNaN(numValue) && numValue > max) {
        return msg;
      }
      return undefined;
    },

  compose: (...validators: ValidatorFunction[]): ValidatorFunction => 
    (value: any) => {
      for (const validator of validators) {
        const error = validator(value);
        if (error) {
          return error;
        }
      }
      return undefined;
    },
};

export function createValidator(validation: FieldValidation): ValidatorFunction {
  const validatorFunctions: ValidatorFunction[] = [];

  if (validation.required) {
    validatorFunctions.push(
      validators.required(validation.messages?.required)
    );
  }

  if (validation.minLength !== undefined) {
    validatorFunctions.push(
      validators.minLength(validation.minLength, validation.messages?.minLength)
    );
  }

  if (validation.maxLength !== undefined) {
    validatorFunctions.push(
      validators.maxLength(validation.maxLength, validation.messages?.maxLength)
    );
  }

  if (validation.email) {
    validatorFunctions.push(
      validators.email(validation.messages?.email)
    );
  }

  if (validation.pattern) {
    validatorFunctions.push(
      validators.pattern(validation.pattern, validation.messages?.pattern)
    );
  }

  if (validation.min !== undefined) {
    validatorFunctions.push(
      validators.min(validation.min, validation.messages?.min)
    );
  }

  if (validation.max !== undefined) {
    validatorFunctions.push(
      validators.max(validation.max, validation.messages?.max)
    );
  }

  if (validation.custom) {
    validatorFunctions.push(validation.custom);
  }

  return validators.compose(...validatorFunctions);
}

export function validateField(value: any, validation: FieldValidation): string | undefined {
  const validator = createValidator(validation);
  return validator(value);
}

export function validateForm<T extends Record<string, any>>(
  values: T,
  validations: Record<keyof T, FieldValidation>
): Record<string, string[]> {
  const errors: Record<string, string[]> = {};

  for (const [field, validation] of Object.entries(validations)) {
    const error = validateField(values[field], validation);
    if (error) {
      errors[field] = [error];
    }
  }

  return errors;
}