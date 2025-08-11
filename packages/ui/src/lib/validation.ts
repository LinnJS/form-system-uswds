import { z } from "zod";

// Common validation schemas
export const emailSchema = z
  .string()
  .min(1, "Email is required")
  .email("Please enter a valid email address");

export const passwordSchema = z
  .string()
  .min(1, "Password is required")
  .min(8, "Password must be at least 8 characters")
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
    "Password must contain uppercase, lowercase, and number"
  );

export const phoneSchema = z
  .string()
  .min(1, "Phone number is required")
  .regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number");

export const zipCodeSchema = z
  .string()
  .min(1, "ZIP code is required")
  .regex(/^\d{5}(-\d{4})?$/, "Please enter a valid ZIP code");

export const ssnSchema = z
  .string()
  .min(1, "SSN is required")
  .regex(/^\d{3}-?\d{2}-?\d{4}$/, "Please enter a valid SSN");

// Helper functions for creating common schemas
export const requiredString = (message = "This field is required") => z.string().min(1, message);

export const optionalString = () => z.string().optional();

export const requiredNumber = (message = "This field is required") =>
  z.coerce.number({ message });

export const minLength = (min: number, message?: string) =>
  z.string().min(min, message || `Must be at least ${min} characters`);

export const maxLength = (max: number, message?: string) =>
  z.string().max(max, message || `Must be no more than ${max} characters`);

export const minValue = (min: number, message?: string) =>
  z.number().min(min, message || `Must be at least ${min}`);

export const maxValue = (max: number, message?: string) =>
  z.number().max(max, message || `Must be no more than ${max}`);

// Common form schemas
export const loginFormSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  remember: z.boolean().optional(),
});

export const signupFormSchema = z
  .object({
    firstName: requiredString("First name is required"),
    lastName: requiredString("Last name is required"),
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: requiredString("Please confirm your password"),
    acceptTerms: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const addressFormSchema = z.object({
  street: requiredString("Street address is required"),
  street2: optionalString(),
  city: requiredString("City is required"),
  state: requiredString("State is required"),
  zipCode: zipCodeSchema,
  country: requiredString("Country is required").default("US"),
});

export const profileFormSchema = z.object({
  firstName: requiredString("First name is required"),
  lastName: requiredString("Last name is required"),
  email: emailSchema,
  phone: phoneSchema.optional(),
  bio: maxLength(500, "Bio must be 500 characters or less").optional(),
  dateOfBirth: z.string().or(z.date()).optional(),
});

// Export types
export type LoginFormData = z.infer<typeof loginFormSchema>;
export type SignupFormData = z.infer<typeof signupFormSchema>;
export type AddressFormData = z.infer<typeof addressFormSchema>;
export type ProfileFormData = z.infer<typeof profileFormSchema>;
