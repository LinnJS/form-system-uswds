// Button exports
export { Button } from "./components/button";
export type { ButtonProps } from "./components/button";

// Card exports
export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardGroup,
  CardHeader,
  CardImage,
  CardMedia,
  CardTitle,
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

// USWDS Components exports
// Alert exports
export { Alert } from "./components/alert";
export type { AlertProps } from "./components/alert";

// Accordion exports
export { 
  Accordion, 
  AccordionItem, 
  AccordionButton, 
  AccordionContent
} from "./components/accordion";
export type { 
  AccordionProps,
  AccordionItemProps,
  AccordionButtonProps,
  AccordionContentProps
} from "./components/accordion";

// Badge exports
export { Badge, Tag, Identifier } from "./components/badge";
export type { TagProps, IdentifierProps } from "./components/badge";

// USWDS Configuration and Utilities
export { uswdsConfig, uswdsClasses, getUSWDSClass } from "./lib/uswds-config";
export { default as uswdsTailwindPreset } from "./lib/uswds-tailwind-preset";

// USWDS Tokens and Utilities
export { uswdsTokens, colors, spacing, typography, radius, shadow, zIndex, breakpoints, opacity } from "./lib/uswds-tokens";
export { formatUSWDSClass } from "./lib/uswds-utils";

// VA.gov Design Patterns
export {
  vaFormPatterns,
  vaAlertPatterns,
  vaProcessList,
  vaSummaryBox,
  vaStepIndicator,
  vaCollection,
  vaSiteAlert,
  vaPagination,
  vaSearch,
  vaTag,
  vaIdentifier,
  vaInPageNav,
  vaTimePicker,
  vaFileInput,
  vaCharacterCount,
  vaComboBox,
  applyVAPattern,
  vaA11y,
  vaValidation,
  vaLayout,
} from "./lib/va-patterns";

// Utility exports
export { cn } from "./lib/utils";

// Style imports for consumers
// Consumers can import these styles in their apps:
// import "@acme/ui/styles" or import "@acme/ui/styles/index.css"
export const styles = "./styles/index.css";
