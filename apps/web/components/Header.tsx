"use client";

import { Button } from "@acme/ui/button";
import Link from "next/link";
import { DocumentIcon, GitHubIcon } from "~/components/Icons";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <DocumentIcon />
            </div>
            <span className="text-xl font-semibold text-gray-900 dark:text-white">
              Form System <span className="text-blue-600">USWDS</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/validation-demo"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              Demo
            </Link>
            <a
              href="#getting-started"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              Documentation
            </a>
            <a
              href="https://storybook.js.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              Storybook
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              GitHub
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/validation-demo">
            <Button variant="outline" className="hidden sm:inline-flex">
              Try Demo
            </Button>
          </Link>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Button className="inline-flex items-center gap-2">
              <GitHubIcon />
              <span className="hidden sm:inline">Star on GitHub</span>
              <span className="sm:hidden">Star</span>
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
