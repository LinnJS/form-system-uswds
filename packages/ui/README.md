# @acme/ui

A modern React component library built with TypeScript, Tailwind CSS, and Class Variance Authority (CVA), featuring USWDS (U.S. Web Design System) compliant components.

## USWDS Integration

This library now includes components that follow the U.S. Web Design System standards, making it suitable for government and accessibility-focused applications. Components are built with:

- **USWDS Design Tokens** for consistent theming
- **Section 508 compliance** and WCAG 2.1 AA accessibility standards
- **VA.gov inspired patterns** for proven user experience
- **Full keyboard navigation** and screen reader support

## Components

### USWDS Components

#### Alert

USWDS-compliant alert component for displaying important messages.

```tsx
import { Alert } from "@acme/ui";

<Alert variant="info" heading="Information">
  This is an informational alert message.
</Alert>
```

**Variants:** `info`, `success`, `warning`, `error`, `emergency`
**Props:** `heading`, `headingLevel`, `slim`, `noIcon`, `validation`

#### Accordion

Collapsible content sections following USWDS patterns.

```tsx
import { Accordion, AccordionItem, AccordionButton, AccordionContent } from "@acme/ui";

<Accordion multiselectable>
  <AccordionItem>
    <AccordionButton>Section Title</AccordionButton>
    <AccordionContent>Section content goes here</AccordionContent>
  </AccordionItem>
</Accordion>
```

**Props:** `multiselectable`, `bordered`, `defaultExpanded`

#### Badge & Tag

Status indicators and labels following USWDS patterns.

```tsx
import { Badge, Tag } from "@acme/ui";

<Badge variant="success">Approved</Badge>
<Tag variant="primary">Category</Tag>
```

**Badge Variants:** `default`, `primary`, `secondary`, `success`, `warning`, `error`, `info`, `outline`, `new`, `big-round`
**Tag Variants:** `default`, `primary`, `success`, `warning`, `error`, `info`

### Button

A versatile button component with USWDS-compliant styling.

```tsx
import { Button } from "@acme/ui";

<Button variant="primary" size="default">
  Click me
</Button>
```

**USWDS Variants:** `primary`, `secondary`, `accent-cool`, `accent-warm`, `base`, `outline`, `outline-inverse`, `unstyled`
**Sizes:** `default`, `sm`, `lg`, `big`, `icon`
**Props:** `fullWidth` for full-width buttons

### Card

A flexible card component with compound components for complex layouts.

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@acme/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>;
```

**Variants:** `default`, `outline`, `elevated`

### Code

An inline code component for displaying code snippets.

```tsx
import { Code } from "@acme/ui/code";

<Code>console.log("Hello World")</Code>;
```

### Form Validation

Complete form system with react-hook-form and Zod integration.

```tsx
import { Form, FormField, FormItem, FormLabel, FormInput, FormMessage } from "@acme/ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Minimum 8 characters"),
});

function LoginForm() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormInput type="email" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
```

**Features:**

- Schema-based validation with Zod
- Built-in validation patterns (email, phone, SSN, ZIP code)
- Accessible form components with ARIA attributes
- TypeScript support with full type inference

### Typography

Semantic typography components with multiple variants.

```tsx
import { Heading, Text, List } from "@acme/ui";

<Heading level={1}>Main Title</Heading>
<Text size="lg" weight="medium">Body text</Text>
<List type="unordered">
  <li>Item 1</li>
  <li>Item 2</li>
</List>
```

**Components:** `Typography`, `Heading`, `Text`, `List`
**Variants:** h1-h6, p, lead, small, muted, blockquote, code, pre

## Pre-compiled CSS

For non-Tailwind projects, use our pre-compiled CSS distribution:

```html
<!-- Production (minified ~16KB) -->
<link rel="stylesheet" href="node_modules/@acme/ui/dist/styles.min.css" />

<!-- Development -->
<link rel="stylesheet" href="node_modules/@acme/ui/dist/styles.css" />
```

**Available Classes:**

- `.btn`, `.btn-default`, `.btn-secondary`, etc.
- `.card`, `.card-header`, `.card-content`, etc.
- `.form-field`, `.form-field-input`, `.form-field-label`, etc.

Build CSS: `pnpm build:css`

## USWDS Design Tokens

The library includes a complete set of USWDS design tokens for consistent theming:

```tsx
import { uswdsTokens, colors, spacing, typography } from "@acme/ui";

// Use design tokens in your components
const customStyles = {
  color: colors.primary.base,
  padding: spacing[4],
  fontSize: typography.fontSize.lg,
};
```

**Available Tokens:**
- **Colors:** Primary, Secondary, Accent (cool/warm), Base, System (info/success/warning/error)
- **Spacing:** Based on 8px grid system (0.5 through 15 units)
- **Typography:** Font families, sizes, line heights, weights
- **Radius:** Border radius tokens (sm, md, lg, pill)
- **Shadows:** Elevation shadows (1 through 5)
- **Breakpoints:** Responsive breakpoints (mobile-lg, tablet, desktop, desktop-lg, widescreen)

## Development

### Storybook

Run Storybook to develop and test components:

```bash
pnpm dev       # Run without opening browser
pnpm dev:open  # Run and open browser
```

### Build

Build Storybook for production:

```bash
pnpm build  # Build Storybook static files
```

### Testing

Run Storybook tests with Playwright:

```bash
pnpm test        # Run tests in CI mode
pnpm test:watch  # Run tests in watch mode
```

### Linting & Type Checking

```bash
pnpm lint         # Run ESLint
pnpm typecheck    # Run TypeScript type checking
```

## Architecture

Each component follows a consistent structure:

- `components/[name]/[name].tsx` - Component implementation
- `components/[name]/[name].stories.tsx` - Storybook stories
- `components/[name]/index.ts` - Barrel export file

## Styling

Components are styled using:

- **Tailwind CSS** for utility classes
- **Class Variance Authority (CVA)** for variant management
- **CSS Variables** for theming support
- **System fonts** for optimal performance and no external dependencies

## License

MIT
