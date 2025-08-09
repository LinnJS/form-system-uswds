import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import pluginNext from "@next/eslint-plugin-next";
import turboPlugin from "eslint-plugin-turbo";
import onlyWarn from "eslint-plugin-only-warn";
import tsdoc from "eslint-plugin-tsdoc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

/**
 * A custom ESLint configuration for libraries that use Next.js.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const nextJsConfig = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  ...compat.extends("next/core-web-vitals"),
  {
    ...pluginReact.configs.flat.recommended,
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  {
    plugins: {
      "@next/next": pluginNext,
      turbo: turboPlugin,
      tsdoc,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules,
      "turbo/no-undeclared-env-vars": "warn",
      
      // TypeScript rules (without type checking)
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "error",
      
      // Code quality rules
      "no-console": [
        "error",
        {
          allow: ["warn", "error", "info", "debug"],
        },
      ],
      "no-debugger": "error",
      "no-trailing-spaces": "error",
      "eol-last": ["error", "always"],
      "linebreak-style": ["error", "unix"],
      "prefer-const": "error",
      "no-var": "error",
      
      // Documentation rules
      "tsdoc/syntax": "error",
    },
  },
  {
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      // React scope no longer necessary with new JSX transform.
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ["dist/**", ".next", "node_modules", "build", ".turbo"],
  },
  // Override for Next.js specific files
  {
    files: ["next.config.js", "tailwind.config.js", "postcss.config.js", "*.config.cjs"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
];