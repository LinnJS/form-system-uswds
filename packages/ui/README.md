# @acme/ui

A modern React component library built with TypeScript, Tailwind CSS, and Class Variance Authority (CVA).

## Components

### Button

A versatile button component with multiple variants and sizes.

```tsx
import { Button } from "@acme/ui/button";

<Button variant="default" size="md">
  Click me
</Button>;
```

**Variants:** `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
**Sizes:** `default`, `sm`, `lg`, `icon`

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
