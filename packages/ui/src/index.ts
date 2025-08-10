// Button exports
export { Button, buttonVariants } from "./components/button";
export type { ButtonProps } from "./components/button";

// Card exports
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  cardVariants,
} from "./components/card";
export type { CardProps } from "./components/card";

// Code exports
export { Code } from "./components/code";
export type { CodeProps } from "./components/code";

// Form exports - react-hook-form integrated components
export {
  Form,
  FormField,
  FormItem,
  useFormField,
} from "./components/form/form";
export {
  FormLabel,
} from "./components/form/form-label";
export {
  FormInput,
  FormTextarea,
  FormSelect,
} from "./components/form/form-field";
export {
  FormMessage,
  FormDescription,
} from "./components/form/form-message";
export {
  FormProvider,
} from "./components/form/form-provider";

// Validation schemas and utilities (using Zod)
export {
  emailSchema,
  passwordSchema,
  phoneSchema,
  zipCodeSchema,
  ssnSchema,
  requiredString,
  optionalString,
  requiredNumber,
  minLength,
  maxLength,
  minValue,
  maxValue,
  loginFormSchema,
  signupFormSchema,
  addressFormSchema,
  profileFormSchema,
} from "./lib/validation";
export type {
  LoginFormData,
  SignupFormData,
  AddressFormData,
  ProfileFormData,
} from "./lib/validation";

// Typography exports
export {
  H1,
  H2,
  H3,
  Paragraph,
  Lead,
  Text,
} from "./components/typography";

// Utility exports
export { cn } from "./lib/utils";