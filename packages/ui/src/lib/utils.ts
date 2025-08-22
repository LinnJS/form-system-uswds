import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class values and resolves Tailwind CSS conflicts
 * @param inputs - Class values to combine (strings, conditionals, arrays, etc.)
 * @returns Merged class string with proper Tailwind precedence
 * @example
 * cn("px-2 py-1", condition && "bg-blue-500", ["text-white", "rounded"])
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
