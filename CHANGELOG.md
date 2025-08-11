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
  - Geist font family integration (Sans and Mono variants)
  - Comprehensive typography system with H1, H2, H3, Paragraph, Lead, and Text components
  - CSS custom properties for theming (light/dark mode support)
  - HSL-based color system for better theme flexibility
  - Pre-compiled CSS distribution (styles.css and styles.min.css) for non-Tailwind environments
- **Components:**
  - Button component with 6 variants (default, destructive, outline, secondary, ghost, link) and 4 sizes
  - Card component with compound components pattern (CardHeader, CardTitle, CardDescription, CardContent, CardFooter)
  - Code component for inline code display
  - Typography components (H1, H2, H3, Paragraph, Lead, Text) with proper semantic HTML
  - Typography showcase story demonstrating font system
- **Build Configuration:**
  - Storybook build scripts (dev, dev:open, build-storybook)
  - Updated Turbo configuration for new scripts
  - Proper TypeScript and ESLint configurations for Storybook
  - TypeScript build script for CSS compilation (build-css.ts)
  - Fixed ESLint flat config issue with error.tsx files
- **Testing Infrastructure:**
  - Playwright testing integration for Storybook (@storybook/test-runner)
  - Accessibility testing addon (@storybook/addon-a11y)
  - Interaction tests using Storybook play functions on ALL stories
  - Test runner configuration for CI/CD pipelines
  - Automated accessibility checks with axe-core (33 tests passing)
  - CI test scripts for automated testing (test-simple.sh, test-storybook-ci.sh)
  - GitHub Actions workflow for continuous integration with lint, typecheck, build, and test jobs
  - Test job in CI pipeline to run Storybook tests with Playwright
  - Complete test coverage for Button (11 stories), Card (6 stories), Code (5 stories), and Typography (2 stories)
- **Application Features:**
  - Form validation demo page with react-hook-form and Zod integration
  - Comprehensive homepage showcasing available demos and features
  - Documentation site with structured navigation and resource links
  - Error boundaries, loading states, and 404 pages for both apps
  - Header and Footer components with consistent navigation

### Changed

- **Package Naming:** Renamed all packages from `@repo/*` to `@acme/*` for consistency
- **Component Architecture:**
  - Migrated from simple functional components to CVA-based variants
  - Organized components into dedicated directories with index barrel files
  - Each component now has its own directory with component, story, and index files
- **Styling System:**
  - Migrated from basic Tailwind utilities to CVA patterns
  - Implemented semantic color tokens using CSS variables
  - Updated from Inter to Geist font family for better readability
- **Project Structure:**
  - Reorganized UI package with proper component directory structure
  - Components now follow pattern: `components/[name]/[name].tsx`, `[name].stories.tsx`, `index.ts`
  - Added foundations directory for non-component stories
- **Build Process:**
  - All packages now build successfully with TypeScript strict mode
  - Zero ESLint warnings or errors across the monorepo
  - Turborepo caching properly configured
  - Updated pnpm from version 9 to 10.14.0
- **Application Updates:**
  - Complete redesign of web app homepage with card-based navigation
  - Documentation site restructured with comprehensive resource sections
  - Updated metadata for better SEO and social sharing

### Removed

- Removed test-tailwind.stories.tsx (unused test file)
- Removed empty utils directory from UI package
- Removed deprecated story files from initial Storybook setup
- Removed `appName` prop from Button component (breaking change)
- Removed Next.js boilerplate content from both web and docs apps
- Removed default Next.js SVG assets (globe.svg, window.svg, vercel.svg, etc.)

### Fixed

- Fixed import paths after component reorganization
- Fixed TypeScript configurations to include all necessary files
- Fixed ESLint configurations to properly ignore build artifacts
- Fixed Tailwind class ordering issues
- Fixed Next.js apps to use client components for interactivity
- Fixed all TypeScript type errors across the monorepo

### Security

- Nothing yet
