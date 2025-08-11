"use client";

import { Button } from "@acme/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@acme/ui/card";
import { H1, H2, H3, Lead } from "@acme/ui/typography";
import Link from "next/link";
import {
  BeakerIcon,
  ChartIcon,
  CheckCircleIcon,
  CodeIcon,
  GridIcon,
  UsersIcon,
} from "~/components/Icons";

export default function DocsHome() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
            v1.0.0 • React 19 • TypeScript 5.8
          </div>
          <H1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
            Documentation
          </H1>
          <Lead className="mb-8 text-xl text-gray-600 dark:text-gray-300">
            Learn how to build accessible, USWDS-compliant forms with our comprehensive component
            library. Complete guides, API references, and real-world examples.
          </Lead>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/getting-started">
              <Button size="big" className="w-full sm:w-auto">
                Get Started
              </Button>
            </Link>
            <Link href="/components">
              <Button size="big" variant="outline" className="w-full sm:w-auto">
                Browse Components
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <H2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Quick Start
          </H2>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>Installation</CardTitle>
              <CardDescription>
                Get started with Form System USWDS in your React application
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <H3 className="mb-2 text-lg font-semibold">1. Install the package</H3>
                <div className="rounded-lg bg-gray-900 p-4 dark:bg-gray-950">
                  <code className="text-sm text-gray-100">
                    pnpm add @acme/ui react-hook-form zod @hookform/resolvers
                  </code>
                </div>
              </div>

              <div>
                <H3 className="mb-2 text-lg font-semibold">2. Import styles</H3>
                <div className="rounded-lg bg-gray-900 p-4 dark:bg-gray-950">
                  <code className="text-sm text-gray-100">
                    {`// In your app's root layout or CSS file\nimport '@acme/ui/dist/styles.css';`}
                  </code>
                </div>
              </div>

              <div>
                <H3 className="mb-2 text-lg font-semibold">3. Use components</H3>
                <div className="rounded-lg bg-gray-900 p-4 dark:bg-gray-950">
                  <pre className="overflow-x-auto text-sm text-gray-100">
                    {`import { Button, Card } from '@acme/ui';

function MyComponent() {
  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  );
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <H2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Documentation Sections
          </H2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/getting-started" className="group">
              <Card className="h-full border-2 transition-all hover:border-indigo-500 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
                    <ChartIcon />
                  </div>
                  <CardTitle className="group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    Getting Started
                  </CardTitle>
                  <CardDescription>
                    Installation, setup, and your first form. Everything you need to begin.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/components" className="group">
              <Card className="h-full border-2 transition-all hover:border-indigo-500 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    <GridIcon />
                  </div>
                  <CardTitle className="group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    Components
                  </CardTitle>
                  <CardDescription>
                    Explore all available components with live examples and code snippets.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/api" className="group">
              <Card className="h-full border-2 transition-all hover:border-indigo-500 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
                    <CodeIcon />
                  </div>
                  <CardTitle className="group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    API Reference
                  </CardTitle>
                  <CardDescription>
                    Complete API documentation for all components, hooks, and utilities.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/examples" className="group">
              <Card className="h-full border-2 transition-all hover:border-indigo-500 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
                    <BeakerIcon />
                  </div>
                  <CardTitle className="group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    Examples
                  </CardTitle>
                  <CardDescription>
                    Real-world examples and patterns for common use cases.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/accessibility" className="group">
              <Card className="h-full border-2 transition-all hover:border-indigo-500 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                    <CheckCircleIcon />
                  </div>
                  <CardTitle className="group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    Accessibility
                  </CardTitle>
                  <CardDescription>
                    WCAG 2.1 AA compliance guide and best practices for accessible forms.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/contributing" className="group">
              <Card className="h-full border-2 transition-all hover:border-indigo-500 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400">
                    <UsersIcon />
                  </div>
                  <CardTitle className="group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    Contributing
                  </CardTitle>
                  <CardDescription>
                    Join the community and help improve Form System USWDS.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <H2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Additional Resources
          </H2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Storybook</CardTitle>
                <CardDescription>
                  Interactive component playground with live examples
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a href="https://storybook.js.org" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full">
                    Open Storybook →
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle>GitHub Repository</CardTitle>
                <CardDescription>Source code, issues, and discussions</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full">
                    View on GitHub →
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
