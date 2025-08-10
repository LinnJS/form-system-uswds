import { FlatCompat } from "@eslint/eslintrc";
import { config as baseConfig } from "./base.js";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import pluginNext from "@next/eslint-plugin-next";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

/**
 * A custom ESLint configuration for libraries that use Next.js.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
// Filter out type-checking configs from base that conflict with Next.js
const baseConfigWithoutTypeChecking = baseConfig.map(config => {
  // Skip arrays and undefined
  if (Array.isArray(config) || config === undefined) return null;
  
  // Check for TypeScript type-checking configs to exclude
  const isTypeCheckConfig = 
    config.name?.includes('typescript-eslint/recommended-type-checked') ||
    config.name?.includes('typescript-eslint/stylistic-type-checked');
  
  // Check for projectService in languageOptions
  const hasProjectService = config.languageOptions?.parserOptions?.projectService;
  
  if (isTypeCheckConfig || hasProjectService) {
    return null;
  }
  
  // For configs with rules, filter out type-checking rules
  if (config.rules) {
    const filteredRules = Object.entries(config.rules).reduce((acc, [key, value]) => {
      // Skip type-checking rules
      const typeCheckRules = [
        '@typescript-eslint/await-thenable',
        '@typescript-eslint/no-floating-promises',
        '@typescript-eslint/no-for-in-array',
        '@typescript-eslint/no-implied-eval',
        '@typescript-eslint/no-misused-promises',
        '@typescript-eslint/no-unnecessary-type-assertion',
        '@typescript-eslint/no-unsafe-argument',
        '@typescript-eslint/no-unsafe-assignment',
        '@typescript-eslint/no-unsafe-call',
        '@typescript-eslint/no-unsafe-member-access',
        '@typescript-eslint/no-unsafe-return',
        '@typescript-eslint/require-await',
        '@typescript-eslint/restrict-plus-operands',
        '@typescript-eslint/restrict-template-expressions',
        '@typescript-eslint/unbound-method'
      ];
      
      if (!typeCheckRules.includes(key)) {
        acc[key] = value;
      }
      return acc;
    }, {});
    
    return { ...config, rules: filteredRules };
  }
  
  return config;
}).filter(Boolean);

export const nextJsConfig = [
  ...baseConfigWithoutTypeChecking,
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
  // Next.js specific plugin and rules
  {
    plugins: {
      "@next/next": pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules,
      // Override consistent-type-imports since it requires type checking
      "@typescript-eslint/consistent-type-imports": "off",
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
  // Special handling for Next.js error boundary files
  {
    files: ["**/error.tsx", "**/error.ts", "**/error.jsx", "**/error.js"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "no-unused-vars": "off",
    },
  },
  // Note: All other configurations (onlyWarn, tailwindcss, ignores, overrides) 
  // are inherited from baseConfig
];