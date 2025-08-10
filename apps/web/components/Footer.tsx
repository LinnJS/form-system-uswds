"use client";

import Link from "next/link";
import { H3, Text } from "@acme/ui/typography";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <H3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Resources
            </H3>
            <ul className="space-y-2">
              <li>
                <Link href="/validation-demo" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Form Validation Demo
                </Link>
              </li>
              <li>
                <a href="https://github.com" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <H3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Technology
            </H3>
            <ul className="space-y-2">
              <li>
                <a href="https://react.dev" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  React 19
                </a>
              </li>
              <li>
                <a href="https://nextjs.org" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Next.js 15
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Tailwind CSS
                </a>
              </li>
              <li>
                <a href="https://www.typescriptlang.org" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  TypeScript
                </a>
              </li>
            </ul>
          </div>

          <div>
            <H3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Compliance
            </H3>
            <ul className="space-y-2">
              <li>
                <a href="https://designsystem.digital.gov" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  USWDS Standards
                </a>
              </li>
              <li>
                <a href="https://www.w3.org/WAI/WCAG21/quickref/" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  WCAG 2.1 Guidelines
                </a>
              </li>
              <li>
                <a href="https://www.section508.gov" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Section 508
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center dark:border-gray-800">
          <Text className="text-sm text-gray-600 dark:text-gray-400">
            © 2024 Form System USWDS. Built with React, TypeScript, and Tailwind CSS.
          </Text>
        </div>
      </div>
    </footer>
  );
}