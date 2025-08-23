import { config } from "@acme/eslint-config/react-internal";

/** @type {import("eslint").Linter.Config} */
export default [
  ...config,
  {
    ignores: [
      "eslint.config.mjs",
      "tailwind.config.cjs",
      "postcss.config.cjs",
      "vite.config.mjs",
      "test-runner-jest.config.js",
      "storybook-static/**",
      ".storybook/**",
      "**/*.stories.ts",
      "**/*.stories.tsx",
      "scripts/**",
      "dist/**",
    ],
  },
  {
    files: ["src/validation/**/*.ts", "src/validation/**/*.tsx"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "off",
      "react-hooks/exhaustive-deps": "off",
    },
  },
  {
    files: ["src/components/form/**/*.tsx", "src/components/form/**/*.ts"],
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  {
    files: ["src/lib/validation.ts"],
    rules: {
      "@typescript-eslint/prefer-nullish-coalescing": "off",
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "react/prop-types": "off", // TypeScript handles prop validation
    },
  },
];
