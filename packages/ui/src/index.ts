// Button exports
export { Button, buttonVariants } from "./components/button";
export type { ButtonProps } from "./components/button";

// Card exports
export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  cardVariants,
} from "./components/card";
export type { CardProps } from "./components/card";

// Code exports
export { Code } from "./components/code";
export type { CodeProps } from "./components/code";

// Form exports - react-hook-form integrated components
export { Form, FormField, FormItem, useFormField } from "./components/form/form";
export { FormInput, FormSelect, FormTextarea } from "./components/form/form-field";
export { FormLabel } from "./components/form/form-label";
export { FormDescription, FormMessage } from "./components/form/form-message";
export { FormProvider } from "./components/form/form-provider";

// Validation schemas and utilities (using Zod)
export {
  addressFormSchema,
  emailSchema,
  loginFormSchema,
  maxLength,
  maxValue,
  minLength,
  minValue,
  optionalString,
  passwordSchema,
  phoneSchema,
  profileFormSchema,
  requiredNumber,
  requiredString,
  signupFormSchema,
  ssnSchema,
  zipCodeSchema,
} from "./lib/validation";
export type {
  AddressFormData,
  LoginFormData,
  ProfileFormData,
  SignupFormData,
} from "./lib/validation";

// Typography exports
export { H1, H2, H3, Lead, Paragraph, Text } from "./components/typography";

// Utility exports
export { cn } from "./lib/utils";
