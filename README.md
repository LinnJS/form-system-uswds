# USWDS Form System

A modern, accessible form component library built on the U.S. Web Design System (USWDS) standards with React integration.

## Overview

This project provides a comprehensive form system that combines USWDS design principles with React components. It offers both pre-compiled CSS for immediate use and optional Tailwind CSS integration for advanced customization.

## Features

- 🎨 **USWDS-compliant components** - Follows U.S. Web Design System standards
- ♿ **Accessibility-first** - Built with WCAG 2.1 AA compliance in mind
- 📦 **Flexible distribution** - Works with or without Tailwind CSS
- 🔧 **Type-safe** - Full TypeScript support
- 🚀 **Performance optimized** - Tree-shakeable with minimal bundle impact
- 🧩 **Modular architecture** - Use only what you need

## Packages

| Package                       | Description                                    | Status         |
| ----------------------------- | ---------------------------------------------- | -------------- |
| `@acme/ui`                    | Core React component library with Tailwind CSS | ✅ Implemented |
| `@acme/eslint-config`         | Shared ESLint configuration                    | ✅ Implemented |
| `@acme/tailwind-config`       | Shared Tailwind CSS configuration              | ✅ Implemented |
| `@acme/typescript-config`     | Shared TypeScript configuration                | ✅ Implemented |
| `@acme/form`                  | Advanced form components and validation        | 🚧 Planned     |
| `@acme/form-renderer`         | Dynamic form rendering engine                  | 🚧 Planned     |
| `@acme/uswds-tailwind-preset` | USWDS Tailwind preset                          | 🚧 Planned     |

## Installation

```bash
# Using npm
npm install @acme/ui

# Using yarn
yarn add @acme/ui

# Using pnpm
pnpm add @acme/ui
```

**Note: Packages are not yet published to npm. This shows the intended installation method once published.**

## Usage

### Current Implementation

The `@acme/ui` package provides React components styled with Tailwind CSS and Class Variance Authority (CVA):

```tsx
// Import components
import { Button, Card, CardHeader, CardTitle, CardContent, Code } from "@acme/ui";

function MyApp() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Example Card</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="default" size="md">
          Click me
        </Button>
        <Code>console.log('Hello')</Code>
      </CardContent>
    </Card>
  );
}
```

#### Available Components

- **Button**: Multiple variants (default, destructive, outline, secondary, ghost, link) and sizes (sm, default, lg, icon)
- **Card**: Compound component with CardHeader, CardTitle, CardDescription, CardContent, CardFooter
- **Code**: Inline code display component

### With Tailwind CSS

This project includes Tailwind CSS integration for custom styling and rapid UI development.

#### Setting up Tailwind in your app

1. Install required dependencies:

```bash
pnpm add -D tailwindcss postcss autoprefixer
```

2. Create or update your `tailwind.config.js`:

```js
// tailwind.config.js
const sharedConfig = require("@acme/tailwind-config");

module.exports = {
  presets: [sharedConfig],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Include UI package components
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Your custom theme extensions
    },
  },
};
```

3. Add Tailwind directives to your CSS:

```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Configure PostCSS:

```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

#### Using the shared Tailwind configuration

The `@acme/tailwind-config` package provides a consistent design system across all applications with:

- Custom color palettes (primary and secondary scales)
- Geist font family configuration
- Responsive breakpoints
- Dark mode support

See the [Tailwind configuration documentation](./packages/tailwind-config/README.md) for more details on available utilities and customization options.

## Development

This monorepo uses [Turborepo](https://turbo.build/) for efficient builds and [pnpm](https://pnpm.io/) for package management.

### Prerequisites

- Node.js >= 22
- pnpm >= 9

### Getting Started

```bash
# Clone the repository
git clone https://github.com/acme/form-system-uswds.git
cd form-system-uswds

# Install dependencies
pnpm install

# Build all packages
pnpm build

# Start development server
pnpm dev

# Run tests
pnpm test

# Run linting
pnpm lint

# Run type checking
pnpm check-types

# Start Storybook for component development
cd packages/ui
pnpm dev          # Without auto-opening browser
pnpm dev:open     # With auto-opening browser

# Build Storybook static site
pnpm build-storybook

# Run tests
pnpm test                # Run all tests (lint, type-check, build, storybook tests)

# Run Storybook tests specifically
pnpm test:storybook      # Run tests with running Storybook
pnpm test:storybook:ci   # Run tests in CI mode (builds and serves Storybook)
```

### Project Structure

```text
.
├── apps/
│   ├── docs/                    # Documentation site (Next.js)
│   └── web/                     # Component showcase (Next.js)
├── packages/
│   ├── ui/                      # Core component library
│   │   ├── src/
│   │   │   ├── components/      # React components
│   │   │   │   ├── button/
│   │   │   │   ├── card/
│   │   │   │   └── code/
│   │   │   ├── foundations/     # Typography stories
│   │   │   ├── lib/            # Utilities
│   │   │   └── styles/         # Global CSS
│   │   └── .storybook/         # Storybook configuration
│   ├── eslint-config/          # Shared ESLint rules
│   ├── tailwind-config/        # Shared Tailwind configuration
│   └── typescript-config/      # Shared TypeScript configs
└── turbo.json                  # Turborepo configuration
```

## Accessibility

We take accessibility seriously. All components are tested against:

- **Screen readers**: NVDA, JAWS, and VoiceOver
- **Keyboard navigation**: Full keyboard support with proper focus management
- **Color contrast**: WCAG 2.1 AA compliant
- **ARIA attributes**: Semantic HTML with appropriate ARIA labels

### Testing Standards

- axe-core: Zero critical violations on all components
- Lighthouse: Accessibility score ≥ 95
- Keyboard testing: Full form submission without mouse
- Focus management: Error summary with proper focus sequencing

### Component Testing

All components include:

- **Interaction tests**: Using Storybook play functions with Testing Library
- **Accessibility tests**: Automated axe-core checks via @storybook/addon-a11y
- **Visual testing**: Storybook stories for all component variants
- **Test runner**: Playwright-based test runner for CI/CD integration

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Versioning

We use [Semantic Versioning](http://semver.org/). For the versions available, see the [releases](https://github.com/acme/form-system-uswds/releases).

The `@acme/ui` and `@acme/form` packages are released in lockstep to ensure compatibility.

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built on [U.S. Web Design System (USWDS)](https://designsystem.digital.gov/)
- Inspired by modern form libraries and accessibility best practices
- Thanks to all contributors who have helped shape this project

## Status

This is a proof of concept (POC) implementation. While functional, it's under active development.

## Roadmap

### Phase 1: Foundation ✅

- [x] Core component architecture
- [x] Monorepo setup with Turborepo
- [x] Component library with TypeScript
- [x] Tailwind CSS integration with shared config
- [x] Storybook for component development
- [x] Class Variance Authority (CVA) for component variants
- [x] ESLint and TypeScript configurations
- [x] Button, Card, and Code components
- [x] Pre-compiled CSS distribution
- [x] Basic form validation
- [x] Initial accessibility testing

### Phase 2: Enhanced Components (current)

- [ ] Complete USWDS form components
  - [ ] Radio buttons and checkboxes
  - [ ] Date picker
  - [ ] File upload
  - [ ] Range slider
- [ ] Advanced validation rules
- [ ] Form state management
- [ ] Error boundary handling
- [ ] Internationalization (i18n) support

### Phase 3: Developer Experience

- [ ] Comprehensive documentation site
- [ ] Interactive component playground
- [ ] Form builder UI
- [ ] VS Code extension for snippets
- [ ] CLI tool for scaffolding
- [ ] Storybook integration

### Phase 4: Production Ready

- [ ] Performance optimizations
- [ ] 100% test coverage
- [ ] Security audit
- [ ] Bundle size optimization
- [ ] SSR/SSG support verification
- [ ] Migration guides from other form libraries

### Future Considerations

- [ ] Mobile-specific optimizations
- [ ] Advanced theming system
- [ ] Plugin architecture
- [ ] GraphQL/REST API integration helpers

## Support

- 📖 [Documentation](https://linnjs.github.io/form-system-uswds)
- 🐛 [Issue Tracker](https://github.com/linnjs/form-system-uswds/issues)
- 💬 [Discussions](https://github.com/linnjs/form-system-uswds/discussions)
