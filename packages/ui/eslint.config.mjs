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
      "**/*.stories.tsx"
    ],
  }
];