import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import onlyWarn from "eslint-plugin-only-warn";
import tailwindcss from "eslint-plugin-tailwindcss";
import tsdoc from "eslint-plugin-tsdoc";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    plugins: {
      turbo: turboPlugin,
      tsdoc,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",

      // TypeScript rules
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: { attributes: false } },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/explicit-function-return-type": [
        "off",
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
          allowDirectConstAssertionInArrowFunctions: true,
        },
      ],

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
      onlyWarn,
    },
  },
  // Tailwind CSS configuration
  {
    plugins: {
      tailwindcss,
    },
    rules: {
      ...tailwindcss.configs.recommended.rules,
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "off", // Allow custom classes
      "tailwindcss/no-contradicting-classname": "error",
    },
    settings: {
      tailwindcss: {
        callees: ["cn", "clsx", "cva"],
        // Auto-detect config file with various extensions
        config: "tailwind.config.{js,cjs,mjs,ts}",
      },
    },
  },
  {
    ignores: ["dist/**", ".next", "node_modules", "build", ".turbo"],
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  // Override for scripts directory - allow console.log
  {
    files: ["scripts/**/*.ts", "scripts/**/*.js"],
    rules: {
      "no-console": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
  // Override for test files
  {
    files: ["**/*.test.ts", "**/*.test.tsx", "**/*.spec.ts", "**/*.spec.tsx"],
    rules: {
      "no-console": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
  // Override for config files
  {
    files: ["*.config.js", "*.config.ts", "*.config.mjs"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
  // Stricter rules for components
  {
    files: ["**/components/**/*.tsx", "**/src/components/**/*.tsx"],
    rules: {
      // Enforce TSDoc comments for exported components
      "tsdoc/syntax": "warn",
      // Ensure all exports have proper types - off for React components as JSX.Element is implicit
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  },
];
