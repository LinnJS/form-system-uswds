# Form System USWDS - Documentation

Comprehensive documentation site for the Form System USWDS component library.

## Overview

This Next.js application provides complete documentation for the Form System USWDS project, including:
- Getting started guides
- Component API references
- Interactive examples
- Accessibility guidelines
- Contributing instructions

## Features

- **Complete API Documentation**: Detailed documentation for every component and hook
- **Interactive Examples**: Live code examples with editable playgrounds
- **Search Functionality**: Quick search across all documentation
- **Dark Mode**: Full theme support matching the main application
- **Mobile Responsive**: Optimized for all device sizes
- **Fast Navigation**: Client-side routing with Next.js App Router

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

The documentation site will be available at [http://localhost:3001](http://localhost:3001)

### Available Scripts

```bash
# Development
pnpm dev          # Start development server on port 3001
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm typecheck    # Run TypeScript type checking
```

## Project Structure

```
apps/docs/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Documentation homepage
│   ├── error.tsx          # Error boundary
│   ├── loading.tsx        # Loading state
│   └── not-found.tsx      # 404 page
├── components/            # Documentation components
│   ├── Header.tsx         # Site header with navigation
│   └── Footer.tsx         # Site footer with resources
└── public/               # Static assets
```

## Documentation Sections

### Getting Started
- Installation instructions
- Quick start guide
- Project setup
- Basic usage examples

### Components
- Complete component catalog
- Props documentation
- Usage examples
- Best practices

### API Reference
- Component APIs
- Hook documentation
- Utility functions
- TypeScript types

### Examples
- Real-world use cases
- Complex form patterns
- Validation strategies
- Accessibility patterns

### Accessibility
- WCAG 2.1 AA guidelines
- Screen reader support
- Keyboard navigation
- ARIA attributes

### Contributing
- Development setup
- Contribution guidelines
- Code standards
- Pull request process

## Content Management

Documentation content is managed through:
- MDX files for rich content (planned)
- TypeScript for type-safe examples
- React components for interactive demos

## Styling

- Tailwind CSS with shared configuration
- Consistent with main application theme
- Syntax highlighting for code blocks
- Responsive typography scale

## Search Implementation

Currently displaying navigation links. Full-text search planned for Phase 2:
- Algolia DocSearch integration (planned)
- Local search with FlexSearch (alternative)

## Building Documentation

```bash
# Build the documentation site
pnpm build

# Preview production build
pnpm start
```

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set the root directory to `apps/docs`
3. Set the port to 3001 for local development
4. Deploy

### Static Export

```bash
# Generate static documentation
pnpm build
# Output will be in .next directory
```

## Future Enhancements

### Phase 2
- MDX support for content
- Full-text search
- API playground
- Version selector

### Phase 3
- Internationalization
- PDF export
- Offline support
- Video tutorials

## Environment Variables

No environment variables required for basic development. For production:

```bash
# .env.local (optional)
NEXT_PUBLIC_SITE_URL=https://docs.your-domain.com
NEXT_PUBLIC_ALGOLIA_APP_ID=your_app_id
NEXT_PUBLIC_ALGOLIA_API_KEY=your_search_key
```

## Contributing

Documentation improvements are always welcome! Please see [CONTRIBUTING.md](../../CONTRIBUTING.md).

## Related

- [Web Application](../web/README.md) - Main demonstration app
- [UI Package](../../packages/ui/README.md) - Component library
- [Root README](../../README.md) - Project overview

## License

MIT - See [LICENSE](../../LICENSE) for details