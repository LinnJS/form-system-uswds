# `@acme/eslint-config`

Shared ESLint configurations for the Form System USWDS monorepo.

## Available Configurations

- `@acme/eslint-config/base` - Base ESLint flat config for JavaScript/TypeScript projects
- `@acme/eslint-config/next-js` - ESLint config for Next.js applications (extends base)
- `@acme/eslint-config/react-internal` - ESLint config for React libraries (extends base)

## Usage

### Next.js Applications

For Next.js applications, use a `.eslintrc.json` file to ensure proper Next.js plugin detection:

```json
{
  "extends": ["next/core-web-vitals"],
  "root": true
}
```

This configuration:

- Enables Next.js-specific linting rules
- Includes Core Web Vitals rules for performance
- Prevents the "Next.js plugin was not detected" warning

### React Libraries

For React component libraries, use `eslint.config.mjs`:

```javascript
import { internalReactConfig } from "@acme/eslint-config/react-internal";

export default [
  ...internalReactConfig,
  {
    ignores: ["dist/", "storybook-static/"],
  },
];
```

### Base Configuration

For general JavaScript/TypeScript projects:

```javascript
import { config } from "@acme/eslint-config/base";

export default [
  ...config,
  // Your custom rules
];
```

## Features

- TypeScript support with strict type checking
- React hooks linting
- Tailwind CSS class sorting
- Accessibility checks
- Import sorting and organization
- Prettier integration
