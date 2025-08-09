"use client";

import type { ReactNode } from "react";
import { cn } from "./lib/utils";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={cn(
        "bg-primary-500 hover:bg-primary-600 rounded-md px-4 py-2 text-white transition-colors",
        className
      )}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};