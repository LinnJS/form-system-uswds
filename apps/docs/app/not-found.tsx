import Link from "next/link";
import { Button } from "@acme/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <h1 className="mb-2 text-6xl font-bold text-gray-900 dark:text-white">404</h1>
      <h2 className="mb-4 text-2xl font-semibold text-gray-700 dark:text-gray-300">
        Documentation Not Found
      </h2>
      <p className="mb-8 max-w-md text-center text-gray-600 dark:text-gray-400">
        The documentation page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex gap-4">
        <Link href="/">
          <Button>Go to Docs Home</Button>
        </Link>
        <Link href="/getting-started">
          <Button variant="outline">Getting Started</Button>
        </Link>
      </div>
    </div>
  );
}
