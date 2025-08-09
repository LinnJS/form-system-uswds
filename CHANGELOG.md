# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Initial monorepo setup with Turborepo and pnpm workspaces
- Basic Next.js applications (web and docs)
- Shared ESLint and TypeScript configurations
- Placeholder UI components package
- Contributing guidelines and MIT license
- Code of Conduct and Security policy
- CLAUDE.md for AI-assisted development
- **Component Library Enhancements:**
  - Storybook integration for component development and documentation
  - Class Variance Authority (CVA) for managing component variants
  - Inter font family integration with variable weights
  - Comprehensive typography system with custom font configurations
  - CSS custom properties for theming (light/dark mode support)
  - HSL-based color system for better theme flexibility
- **Components:**
  - Button component with 6 variants (default, destructive, outline, secondary, ghost, link) and 4 sizes
  - Card component with compound components pattern (CardHeader, CardTitle, CardDescription, CardContent, CardFooter)
  - Code component for inline code display
  - Typography showcase story demonstrating font system
- **Build Configuration:**
  - Storybook build scripts (dev, dev:open, build-storybook)
  - Updated Turbo configuration for new scripts
  - Proper TypeScript and ESLint configurations for Storybook
- **Testing Infrastructure:**
  - Playwright testing integration for Storybook (@storybook/test-runner)
  - Accessibility testing addon (@storybook/addon-a11y)
  - Interaction tests using Storybook play functions on ALL stories
  - Test runner configuration for CI/CD pipelines
  - Automated accessibility checks with axe-core
  - CI test scripts for automated testing (test-simple.sh, test-storybook-ci.sh)
  - GitHub Actions workflow for continuous integration
  - Complete test coverage for Button (11 stories), Card (6 stories), Code (5 stories), and Typography (2 stories)

### Changed

- **Package Naming:** Renamed all packages from `@repo/*` to `@acme/*` for consistency
- **Component Architecture:**
  - Migrated from simple functional components to CVA-based variants
  - Organized components into dedicated directories with index barrel files
  - Each component now has its own directory with component, story, and index files
- **Styling System:**
  - Migrated from basic Tailwind utilities to CVA patterns
  - Implemented semantic color tokens using CSS variables
  - Added proper font system with Inter font family
- **Project Structure:**
  - Reorganized UI package with proper component directory structure
  - Components now follow pattern: `components/[name]/[name].tsx`, `[name].stories.tsx`, `index.ts`
  - Added foundations directory for non-component stories
- **Build Process:**
  - All packages now build successfully with TypeScript strict mode
  - Zero ESLint warnings or errors across the monorepo
  - Turborepo caching properly configured

### Removed

- Removed test-tailwind.stories.tsx (unused test file)
- Removed empty utils directory from UI package
- Removed deprecated story files from initial Storybook setup
- Removed `appName` prop from Button component (breaking change)

### Fixed

- Fixed import paths after component reorganization
- Fixed TypeScript configurations to include all necessary files
- Fixed ESLint configurations to properly ignore build artifacts
- Fixed Tailwind class ordering issues
- Fixed Next.js apps to use client components for interactivity
- Fixed all TypeScript type errors across the monorepo
- Fixed story files to use latest Storybook patterns (`satisfies Meta`)

### Security

- Nothing yet
