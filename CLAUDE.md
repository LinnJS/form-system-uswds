# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a TypeScript-based monorepo for building accessible, USWDS-compliant form components. The project is in early development (POC stage) with basic scaffolding in place but most features not yet implemented.

## Core Commands

```bash
# Development
pnpm dev          # Start all dev servers (web: 3000, docs: 3001)
pnpm build        # Build all packages via Turborepo
pnpm lint         # Run ESLint across all packages
pnpm format       # Format code with Prettier
pnpm check-types  # Run TypeScript type checking

# Per-app commands (run from apps/web or apps/docs)
pnpm dev          # Start Next.js dev server
pnpm build        # Build Next.js app
pnpm start        # Start production server
```

## Architecture & Package Structure

### Monorepo Layout
- **apps/web**: Main application (Next.js 15, port 3000)
- **apps/docs**: Documentation site (Next.js 15, port 3001)
- **packages/ui**: Component library (@repo/ui) - exports React components directly from source
- **packages/eslint-config**: Shared ESLint configurations (@repo/eslint-config)
- **packages/typescript-config**: Shared TypeScript configs (@repo/typescript-config)

### Key Technical Decisions
- **Node.js 22** required (check .nvmrc)
- **pnpm 9+** for package management with workspaces
- **React 19.1.0** with Next.js 15.4.2
- **TypeScript 5.8.3** with strict mode enabled
- Components exported directly from source (no build step for packages/ui)
- Turborepo for orchestrating builds and caching

## Development Standards

### TypeScript Configuration
- Strict mode enabled with `noUncheckedIndexedAccess`
- Module resolution: bundler
- Target: ES2022
- JSX: react-jsx

### Code Style
- 2-space indentation (enforced by .editorconfig)
- Unix line endings (LF)
- UTF-8 encoding
- ESLint v9 with flat config
- Prettier for formatting
- No console.log except in scripts/tests/configs

### Component Development
When creating components in packages/ui:
- Export from packages/ui/src/index.tsx
- Use TSDoc comments for documentation
- Follow accessibility guidelines (WCAG 2.1 AA)
- Components should be functional with TypeScript types

## Current Implementation Status

### What Exists
- Basic monorepo structure with Turborepo
- Two Next.js apps with minimal scaffolding
- Placeholder Button and Card components in @repo/ui
- Shared ESLint and TypeScript configurations
- MIT License and contribution guidelines

### What's Missing (Mentioned in README but not implemented)
- USWDS form components
- @acme/form package for advanced form components
- @acme/form-renderer package for dynamic rendering
- @acme/uswds-tailwind-preset package
- Testing framework (no Jest/Vitest configured)
- Storybook for component documentation
- CSS/styling system for USWDS
- Accessibility testing automation
- GitHub Actions workflows

## Important Notes

1. **Package Name Mismatch**: README references @acme/* packages but actual packages use @repo/* naming
2. **Directory Name Mismatch**: README mentions "kitchen-sink" app but actual directory is "web"
3. **No Testing Setup**: No test framework is configured despite testing being mentioned in roadmap
4. **Early Stage**: This is a proof of concept - most features described in README are aspirational

## Commit Standards

Follow conventional commits format:
- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Code style changes
- refactor: Code refactoring
- test: Test changes
- chore: Build/config changes

## Build Pipeline (Turborepo)

The turbo.json defines these task dependencies:
- `build` depends on upstream builds
- `check-types` depends on upstream check-types
- `dev` runs without dependencies (parallel)
- `lint` depends on upstream lints

When making changes that affect multiple packages, run commands from the root to leverage Turborepo's caching and parallelization.