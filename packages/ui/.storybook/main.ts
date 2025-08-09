import type { StorybookConfig } from '@storybook/react-vite';
import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/**/*.mdx"
  ],
  addons: [
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-a11y"),
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  core: {
    builder: "@storybook/builder-vite",
    disableTelemetry: true,
  },
  typescript: {
    check: false,
    reactDocgen: "react-docgen-typescript"
  },
  viteFinal: async (config) => {
    // Fix storybook/test import issue
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'storybook/test': '@storybook/test',
      };
    }
    
    // Auto-inject React import to avoid needing it in every story file
    config.esbuild = {
      ...config.esbuild,
      jsxInject: `import React from 'react'`,
    };
    
    return config;
  },
};

export default config;