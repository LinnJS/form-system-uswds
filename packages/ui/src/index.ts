/**
 * \@acme/ui - Standalone React Component Library
 *
 * A comprehensive component library implementing USWDS design patterns
 * with VA.gov enhancements as the primary design system.
 */

// ============================================================================
// Core Components
// ============================================================================

// Button
export { Button, ButtonGroup, buttonVariants } from "./components/button";
export type { ButtonProps } from "./components/button";

// Card
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

// Typography
export { Code } from "./components/code";
export type { CodeProps } from "./components/code";
export { H1, H2, H3, Lead, Paragraph, Text } from "./components/typography";

// ============================================================================
// Form Components
// ============================================================================

// Core Form Controls
export { Fieldset, Input, Label, MaskedInput, Select, Textarea } from "./components/form";
export type {
  InputProps,
  LabelProps,
  MaskedInputProps,
  SelectProps,
  TextareaProps,
} from "./components/form";

// React Hook Form Integration
export {
  Form,
  FormDescription,
  FormField,
  FormInput,
  FormItem,
  FormLabel,
  FormMessage,
  FormProvider,
  FormSelect,
  FormTextarea,
  useFormField,
} from "./components/form";

// ============================================================================
// UI Components
// ============================================================================

// Alert
export { Alert, SiteAlert } from "./components/alert";
export type { AlertProps } from "./components/alert";

// Accordion
export { Accordion, AccordionItem } from "./components/accordion";
export type { AccordionItemProps, AccordionProps } from "./components/accordion";

// Badge
export { Badge, Identifier, Tag } from "./components/badge";
export type { IdentifierProps, TagProps } from "./components/badge";

// Interactive Components
export * from "./components/checkbox";
export * from "./components/dialog";
export * from "./components/radio-group";
export * from "./components/switch";
export * from "./components/tabs";

// ============================================================================
// Validation & Utilities
// ============================================================================

// Validation Schemas (Zod)
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

// Utility Functions
export { cn } from "./lib/utils";

// ============================================================================
// Design System Configuration
// ============================================================================

// Design Tokens & Configuration
export { designClasses, designTokens, getDesignClass, govUtils } from "./lib/design-tokens";

// Component Styling Utilities
export {
  accordionStyles,
  applyComponent,
  baseStyles,
  buttonStyles,
  cardStyles,
  createVariant,
  dialogStyles,
  disabledStyles,
  errorStyles,
  focusStyles,
  headingStyles,
  helperTextStyles,
  inputStyles,
  labelStyles,
  monoStyles,
  overlayStyles,
  successStyles,
  tabStyles,
} from "./lib/component-utils";

// Government Design Patterns
export {
  actionLinkStyles,
  additionalInfoStyles,
  alertBoxStyles,
  breadcrumbStyles,
  formProgressStyles,
  govCardStyles,
  govHelpers,
  loadingStyles,
  notificationStyles,
  processListStyles,
  tableStyles,
  tagStyles,
} from "./lib/gov-utilities";

// Tailwind Preset
export { default as tailwindPreset } from "./lib/tailwind-preset";

// ============================================================================
// Style Exports
// ============================================================================

// CSS for consumers
// Usage: import "@acme/ui/styles" or import "@acme/ui/styles/index.css"
export const styles = "./styles/index.css";
