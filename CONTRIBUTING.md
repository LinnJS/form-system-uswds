# Contributing to USWDS Form System

Thank you for your interest in contributing to the USWDS Form System! We welcome contributions from the community and are grateful for your support.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing.

## How to Contribute

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

- A clear and descriptive title
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Your environment (OS, Node version, browser, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- A clear and descriptive title
- A detailed description of the proposed enhancement
- Use cases and examples
- Any potential drawbacks or considerations

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Install dependencies**: Run `pnpm install`
3. **Make your changes**: Follow our coding standards
4. **Write/update tests**: Ensure your changes are covered by tests
5. **Run tests**: Execute `pnpm test` to ensure all tests pass
6. **Run linting**: Execute `pnpm lint` to ensure code quality
7. **Update documentation**: If needed, update the README or other docs
8. **Create a Pull Request**: Use our PR template

## Development Setup

### Prerequisites

- Node.js >= 22
- pnpm >= 9

### Getting Started

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/form-system-uswds.git
cd form-system-uswds

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run tests
pnpm test

# Run linting
pnpm lint

# Build all packages
pnpm build
```

### Project Structure

```
├── apps/           # Example applications
├── packages/       # Core packages
│   ├── ui/        # Component library
│   ├── form/      # Form components
│   └── ...
└── turbo.json     # Turborepo configuration
```

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Avoid `any` types - use proper typing
- Prefer type imports: `import type { ... }`
- Document complex types with TSDoc comments

### React Components

- Use functional components with hooks
- Include TSDoc comments for exported components
- Ensure accessibility (WCAG 2.1 AA compliance)
- Write unit tests for all components

### Commits

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Test additions or changes
- `chore:` Maintenance tasks

Examples:

```
feat: add date picker component
fix: resolve focus trap in modal
docs: update installation instructions
```

### Code Review Process

1. All code must be reviewed before merging
2. Address all feedback constructively
3. Keep discussions focused and professional
4. Approve PRs only when all criteria are met

## Testing

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

### Writing Tests

- Write tests for all new features
- Maintain or improve code coverage
- Test accessibility with automated tools
- Include edge cases and error scenarios

## Documentation

- Update README for significant changes
- Add TSDoc comments for public APIs
- Include examples for new features
- Keep documentation concise and clear

## Release Process

We use [Changesets](https://github.com/changesets/changesets) for versioning:

1. Create a changeset: `pnpm changeset`
2. Describe your changes
3. Commit the changeset file
4. Maintainers will handle releases

## Getting Help

- **Discord**: Join our community server (link coming soon)
- **Discussions**: Use GitHub Discussions for questions
- **Issues**: Report bugs or request features

## Recognition

Contributors will be recognized in our README and release notes. Thank you for helping make this project better!

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
