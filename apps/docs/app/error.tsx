"use client";

import { useEffect } from "react";
import { Button } from "@acme/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center px-4">
      <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
        Something went wrong!
      </h2>
      <p className="mb-8 max-w-md text-center text-gray-600 dark:text-gray-400">
        We apologize for the inconvenience. An error occurred while loading the documentation.
      </p>
      <div className="flex gap-4">
        <Button onClick={reset} variant="default">
          Try again
        </Button>
        <Button onClick={() => window.location.href = "/"} variant="outline">
          Go to docs home
        </Button>
      </div>
    </div>
  );
}
