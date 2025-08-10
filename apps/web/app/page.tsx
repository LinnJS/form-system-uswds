"use client";

import { Button } from "@acme/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@acme/ui/card";
import { H1, H2, H3, Paragraph, Lead, Text } from "@acme/ui/typography";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
            USWDS Compliant • TypeScript • React 19
          </div>
          <H1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
            Form System USWDS
          </H1>
          <Lead className="mb-8 text-xl text-gray-600 dark:text-gray-300">
            A modern, accessible form component library built on U.S. Web Design System standards.
            Production-ready components with built-in validation, TypeScript support, and comprehensive accessibility.
          </Lead>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/validation-demo">
              <Button size="lg" className="w-full sm:w-auto">
                View Demo
              </Button>
            </Link>
            <Link href="#getting-started">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <H2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Built for Modern Government Applications
            </H2>
            <Paragraph className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Everything you need to build accessible, compliant web forms
            </Paragraph>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle>WCAG 2.1 AA Compliant</CardTitle>
                <CardDescription>
                  Full accessibility support with ARIA labels, keyboard navigation, and screen reader optimization
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <CardTitle>React Hook Form + Zod</CardTitle>
                <CardDescription>
                  Powerful form validation with TypeScript-first schema validation and optimized re-renders
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <CardTitle>TypeScript Native</CardTitle>
                <CardDescription>
                  Built from the ground up with TypeScript for complete type safety and excellent IDE support
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <CardTitle>Tailwind CSS + CVA</CardTitle>
                <CardDescription>
                  Utility-first styling with Class Variance Authority for consistent, maintainable component variants
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400">
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <CardTitle>Pre-compiled CSS</CardTitle>
                <CardDescription>
                  Use with or without Tailwind - includes minified CSS distribution for non-JS environments
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <CardTitle>Storybook Integration</CardTitle>
                <CardDescription>
                  Interactive component documentation with built-in accessibility testing and visual regression
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section id="getting-started" className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <H2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Get Started in Minutes
          </H2>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>Installation</CardTitle>
              <CardDescription>
                Add Form System USWDS to your project with your preferred package manager
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-gray-900 p-4 dark:bg-gray-950">
                <code className="text-sm text-gray-100">
                  <span className="text-gray-500"># Install with pnpm</span><br />
                  <span className="text-green-400">pnpm</span> add @acme/ui react-hook-form zod @hookform/resolvers
                </code>
              </div>

              <div className="space-y-2">
                <H3 className="text-lg font-semibold">Quick Example</H3>
                <div className="rounded-lg bg-gray-900 p-4 dark:bg-gray-950">
                  <pre className="overflow-x-auto text-sm text-gray-100">
{`import { Form, FormField, Button } from '@acme/ui';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(2)
});

function MyForm() {
  const form = useForm({
    resolver: zodResolver(schema)
  });
  
  return (
    <Form {...form} onSubmit={handleSubmit}>
      <FormField name="email" label="Email" type="email" />
      <FormField name="name" label="Name" />
      <Button type="submit">Submit</Button>
    </Form>
  );
}`}</pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Demo Components */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <H2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Explore Components
          </H2>

          <div className="grid gap-6 md:grid-cols-2">
            <Link href="/validation-demo" className="group">
              <Card className="h-full border-2 transition-all hover:border-blue-500 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex items-center gap-2">
                    <div className="rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      READY
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    Form Validation Demo
                  </CardTitle>
                  <CardDescription>
                    Complete example with React Hook Form, Zod validation, error handling, and accessibility features
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Text className="text-sm text-blue-600 group-hover:underline dark:text-blue-400">
                    View interactive demo →
                  </Text>
                </CardContent>
              </Card>
            </Link>

            <div className="opacity-60">
              <Card className="h-full cursor-not-allowed border-2">
                <CardHeader>
                  <div className="mb-2 flex items-center gap-2">
                    <div className="rounded bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
                      COMING SOON
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-500">
                    Typography System
                  </CardTitle>
                  <CardDescription>
                    Complete typography components with heading hierarchy, text utilities, and semantic HTML
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="opacity-60">
              <Card className="h-full cursor-not-allowed border-2">
                <CardHeader>
                  <div className="mb-2 flex items-center gap-2">
                    <div className="rounded bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
                      COMING SOON
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-500">
                    USWDS Components
                  </CardTitle>
                  <CardDescription>
                    Full implementation of U.S. Web Design System components with federal compliance
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="opacity-60">
              <Card className="h-full cursor-not-allowed border-2">
                <CardHeader>
                  <div className="mb-2 flex items-center gap-2">
                    <div className="rounded bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
                      COMING SOON
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-500">
                    Dynamic Form Builder
                  </CardTitle>
                  <CardDescription>
                    Build complex forms dynamically with JSON schema and conditional logic
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

