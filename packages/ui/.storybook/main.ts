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
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  core: {
    builder: "@storybook/builder-vite",
  },
  viteFinal: async (config) => {
    // Fix storybook/test import issue
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'storybook/test': '@storybook/test',
      };
    }
    
    return config;
  },
};

export default config;