export interface ValidationRule {
  validate: (value: any) => boolean;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

export type ValidatorFunction = (value: any) => string | undefined;

export interface FieldValidation {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  email?: boolean;
  min?: number;
  max?: number;
  custom?: ValidatorFunction;
  messages?: {
    required?: string;
    minLength?: string;
    maxLength?: string;
    pattern?: string;
    email?: string;
    min?: string;
    max?: string;
  };
}

export interface FormFieldError {
  field: string;
  message: string;
}

export interface FormValidationState {
  errors: Record<string, string[]>;
  touched: Record<string, boolean>;
  isValid: boolean;
}