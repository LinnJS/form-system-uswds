# @acme/ui

A modern React component library built with TypeScript, Tailwind CSS, and Class Variance Authority (CVA).

## Components

### Button
A versatile button component with multiple variants and sizes.

```tsx
import { Button } from "@acme/ui/button";

<Button variant="default" size="md">Click me</Button>
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
  CardFooter
} from "@acme/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

**Variants:** `default`, `outline`, `elevated`

### Code
An inline code component for displaying code snippets.

```tsx
import { Code } from "@acme/ui/code";

<Code>console.log("Hello World")</Code>
```

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
pnpm build-storybook
```

### Linting & Type Checking
```bash
pnpm lint         # Run ESLint
pnpm check-types  # Run TypeScript type checking
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
- **Inter font** for typography

## License

MIT