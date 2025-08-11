# Form System USWDS - Web Application

The main web application showcasing Form System USWDS components and capabilities.

## Overview

This Next.js application serves as the primary demonstration platform for the Form System USWDS component library. It showcases real-world implementations, form validation patterns, and accessibility features.

## Features

- **Component Showcase**: Interactive demos of all USWDS-compliant form components
- **Form Validation Demo**: Complete form validation using React Hook Form and Zod
- **Accessibility First**: WCAG 2.1 AA compliant with automated testing
- **Dark Mode Support**: Full theme switching with Tailwind CSS
- **TypeScript**: Fully typed with strict mode enabled
- **Modern Stack**: React 19, Next.js 15, TypeScript 5.8

## Development

### Prerequisites

- Node.js 22+ (check `.nvmrc`)
- pnpm 10.14.0+

### Getting Started

```bash
# From the monorepo root
pnpm install
pnpm dev

# Or from this directory
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm typecheck    # Run TypeScript type checking

# Testing (from monorepo root)
pnpm test         # Run all tests including accessibility
```

## Project Structure

```
apps/web/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage with component demos
│   ├── validation-demo/   # Form validation demonstration
│   ├── error.tsx          # Error boundary
│   ├── loading.tsx        # Loading state
│   └── not-found.tsx      # 404 page
├── components/            # Application components
│   ├── Header.tsx         # Site header with navigation
│   └── Footer.tsx         # Site footer with links
└── public/               # Static assets
```

## Key Features

### Form Validation Demo

Located at `/validation-demo`, this page demonstrates:

- Email, password, and age field validation
- Real-time validation with Zod schemas
- Accessible error messages
- Form submission handling
- Field-level and form-level validation

### Component Integration

All components from `@acme/ui` are available:

- Typography (H1, H2, H3, Paragraph, Lead, Text)
- Button with multiple variants
- Card with compound components
- Form components (coming soon)

### Styling

- Tailwind CSS with shared configuration
- CSS custom properties for theming
- Responsive design with mobile-first approach
- Dark mode support via CSS classes

## Environment Variables

No environment variables are required for basic development. For production deployments:

```bash
# .env.local (optional)
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set the root directory to `apps/web`
3. Vercel will auto-detect Next.js settings
4. Deploy

### Docker

```dockerfile
# Coming soon - Docker support planned for Phase 3
```

### Static Export

```bash
pnpm build
# Output will be in .next directory
```

## Contributing

Please see the [root CONTRIBUTING.md](../../CONTRIBUTING.md) for contribution guidelines.

## Related

- [Documentation Site](../docs/README.md) - Complete API documentation
- [UI Package](../../packages/ui/README.md) - Component library source
- [Root README](../../README.md) - Project overview

## License

MIT - See [LICENSE](../../LICENSE) for details
