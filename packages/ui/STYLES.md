# Styles Integration Guide

## Overview

The `@acme/ui` package provides comprehensive styling through a unified CSS system that integrates:

- USWDS (U.S. Web Design System) v3
- Tailwind CSS utilities
- Custom component styles
- VA.gov-inspired patterns

## Using Styles in Your Application

### Import the Complete Style System

```tsx
// In your app's main entry point (e.g., _app.tsx or layout.tsx)
import "@acme/ui/styles"; // or
import "@acme/ui/src/styles/index.css";
```

### Import in Storybook

```tsx
// In .storybook/preview.tsx
import "../src/styles/index.css";
```

## Style Layers

The style system is organized in layers for proper cascade:

1. **USWDS Base** - Core USWDS styles and components
2. **Tailwind Base** - Reset and normalization
3. **Tailwind Components** - Component utilities
4. **Custom Components** - Project-specific component styles
5. **USWDS Overrides** - React-specific USWDS enhancements
6. **Global Styles** - Application-wide styles
7. **Tailwind Utilities** - Utility classes (must be last)

## Available Style Systems

### USWDS Classes

All standard USWDS classes are available:

```jsx
<button className="usa-button">Default</button>
<button className="usa-button usa-button--secondary">Secondary</button>
<div className="usa-alert usa-alert--info">
  <div className="usa-alert__body">
    <p className="usa-alert__text">Info message</p>
  </div>
</div>
```

### Tailwind Utilities

Tailwind utilities work alongside USWDS:

```jsx
<div className="usa-card mt-4 shadow-lg">
  <div className="usa-card__container p-6">
    <h3 className="usa-card__heading text-2xl font-bold">Title</h3>
  </div>
</div>
```

### VA.gov Patterns

Import and use VA.gov-inspired patterns:

```tsx
import { vaFormPatterns, vaAlertPatterns } from "@acme/ui";

// Use pattern classes
<div className={vaFormPatterns.fieldset}>
  <label className={vaFormPatterns.requiredIndicator}>Email *</label>
</div>;
```

## Built CSS Distribution

Pre-built CSS files are available in the `dist` folder:

- `dist/styles.css` - Full unminified styles (28KB)
- `dist/styles.min.css` - Minified production styles (18.7KB)
- `dist/test.html` - Visual test page for all components

## Custom Build

To rebuild the CSS:

```bash
pnpm build:css
```

This generates optimized CSS with:

- USWDS components
- Tailwind utilities
- PostCSS optimizations
- Autoprefixer support
- CSS minification

## Component-Specific Styles

### Buttons

```jsx
// USWDS button variants
<Button variant="default" />
<Button variant="secondary" />
<Button variant="accent-cool" />
<Button variant="outline" />
<Button variant="inverse" />

// Sizes
<Button size="sm" />
<Button size="default" />
<Button size="big" />
```

### Cards

```jsx
// USWDS card variants
<Card variant="default" />
<Card variant="flag" />
<Card variant="header-first" />
<Card variant="media-right" />
```

### Alerts

```jsx
// USWDS alert types
<Alert variant="info" />
<Alert variant="warning" />
<Alert variant="error" />
<Alert variant="success" />
<Alert variant="emergency" />
```

## Accessibility Features

Built-in accessibility support:

- Focus states with visible outline
- High contrast mode support
- Reduced motion preferences
- Screen reader utilities (`usa-sr-only`)
- ARIA attributes in VA patterns

## Performance

- CSS is tree-shaken in production builds
- Unused Tailwind utilities are purged
- USWDS fonts are optimized and subset
- Print styles included for government compliance

## Integration with Next.js

For Next.js apps:

```tsx
// app/layout.tsx
import "@acme/ui/styles";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

## Testing Styles

Open the test HTML file to see all components:

```bash
open packages/ui/dist/test.html
```

This displays:

- All button variants
- Card components
- Form fields with validation
- Typography scales
- Alert types
- Tags/badges

## Customization

To customize the style system:

1. Modify source files in `src/styles/`
2. Update Tailwind config in `tailwind.config.ts`
3. Rebuild with `pnpm build:css`

## Browser Support

Styles are autoprefixed for:

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

Government compliance requires IE11 support for some projects - use the USWDS polyfills if needed.
