#!/usr/bin/env node

import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import { promises as fs } from "fs";
import path from "path";
import postcss, { type AcceptedPlugin, type ProcessOptions } from "postcss";
import type { Config as TailwindConfig } from "tailwindcss";
import tailwindcss from "tailwindcss";
import { fileURLToPath } from "url";

import sharedConfig from "@acme/tailwind-config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface BuildOptions {
  inputPath: string;
  outputDir: string;
  outputPath: string;
  outputMinPath: string;
  testPath: string;
}

interface BuildResult {
  normalSize: number;
  minifiedSize: number;
  outputPath: string;
  outputMinPath: string;
  testPath: string;
}

async function ensureDirectory(dir: string): Promise<void> {
  await fs.mkdir(dir, { recursive: true });
}

async function readFile(filePath: string): Promise<string> {
  return fs.readFile(filePath, "utf8");
}

async function writeFile(filePath: string, content: string): Promise<void> {
  await fs.writeFile(filePath, content);
}

async function getFileSize(filePath: string): Promise<number> {
  const stats = await fs.stat(filePath);
  return stats.size;
}

function formatFileSize(bytes: number): string {
  return `${(bytes / 1024).toFixed(2)} KB`;
}

function createTailwindConfig(): TailwindConfig {
  return {
    ...sharedConfig,
    content: [path.join(__dirname, "..", "src", "**", "*.{ts,tsx}")],
    theme: {
      ...sharedConfig.theme,
      extend: {
        ...sharedConfig.theme?.extend,
      },
    },
  } as TailwindConfig;
}

function createPostCSSPlugins(): AcceptedPlugin[] {
  return [tailwindcss(createTailwindConfig()), autoprefixer()];
}

function createMinifyPlugins(): AcceptedPlugin[] {
  return [
    cssnano({
      preset: "default",
    }),
  ];
}

function generateTestHTML(cssFileName: string = "styles.css"): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form System USWDS - CSS Test</title>
    <link rel="stylesheet" href="${cssFileName}">
</head>
<body>
    <div class="grid-container" style="padding: 2rem;">
        <h1 class="usa-display">USWDS Form System Components</h1>

        <section class="margin-bottom-4">
            <h2 class="usa-heading">USWDS Buttons</h2>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <button class="usa-button">Default Button</button>
                <button class="usa-button usa-button--secondary">Secondary</button>
                <button class="usa-button usa-button--accent-cool">Accent Cool</button>
                <button class="usa-button usa-button--outline">Outline</button>
                <button class="usa-button usa-button--inverse">Inverse</button>
                <button class="usa-button usa-button--unstyled">Unstyled</button>
            </div>
        </section>

        <section class="margin-bottom-4">
            <h2 class="usa-heading">USWDS Card</h2>
            <div class="usa-card" style="max-width: 400px;">
                <div class="usa-card__container">
                    <div class="usa-card__header">
                        <h3 class="usa-card__heading">Card Title</h3>
                    </div>
                    <div class="usa-card__body">
                        <p>Card content goes here. This is a USWDS card example.</p>
                    </div>
                    <div class="usa-card__footer">
                        <button class="usa-button">Action</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="margin-bottom-4">
            <h2 class="usa-heading">USWDS Form Fields</h2>
            <div style="max-width: 400px;">
                <div class="usa-form-group">
                    <label class="usa-label" for="email">
                        Email Address
                        <abbr title="required" class="usa-hint usa-hint--required">*</abbr>
                    </label>
                    <input type="email" class="usa-input" id="email" name="email" placeholder="Enter your email">
                </div>

                <div class="usa-form-group usa-form-group--error">
                    <label class="usa-label usa-label--error" for="password">
                        Password
                        <abbr title="required" class="usa-hint usa-hint--required">*</abbr>
                    </label>
                    <span class="usa-error-message" role="alert">Password must be at least 8 characters</span>
                    <input type="password" class="usa-input usa-input--error" id="password" name="password">
                </div>
            </div>
        </section>

        <section class="margin-bottom-4">
            <h2 class="usa-heading">USWDS Typography</h2>
            <div>
                <h1 class="usa-display">Display Heading</h1>
                <h2 class="usa-heading usa-heading--xl">Extra Large Heading</h2>
                <h3 class="usa-heading usa-heading--lg">Large Heading</h3>
                <p class="usa-intro">This is intro text that is larger than body text.</p>
                <p>Regular body text with USWDS styling.</p>
                <p class="usa-prose">This is prose text optimized for reading.</p>
            </div>
        </section>

        <section class="margin-bottom-4">
            <h2 class="usa-heading">USWDS Alerts</h2>
            <div class="usa-alert usa-alert--info margin-bottom-2">
                <div class="usa-alert__body">
                    <p class="usa-alert__text">This is an informational alert.</p>
                </div>
            </div>
            <div class="usa-alert usa-alert--warning margin-bottom-2">
                <div class="usa-alert__body">
                    <p class="usa-alert__text">This is a warning alert.</p>
                </div>
            </div>
            <div class="usa-alert usa-alert--success">
                <div class="usa-alert__body">
                    <p class="usa-alert__text">This is a success alert.</p>
                </div>
            </div>
        </section>

        <section>
            <h2 class="usa-heading">USWDS Tags</h2>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <span class="usa-tag">Default Tag</span>
                <span class="usa-tag usa-tag--big">Big Tag</span>
            </div>
        </section>
    </div>
</body>
</html>`;
}

async function processCSSWithPostCSS(
  css: string,
  plugins: AcceptedPlugin[],
  options: ProcessOptions
): Promise<string> {
  const result = await postcss(plugins).process(css, options);
  return result.css;
}

async function buildCSS(): Promise<BuildResult> {
  console.log("Building standalone CSS distribution...");

  const options: BuildOptions = {
    inputPath: path.join(__dirname, "..", "src", "styles", "index.css"),
    outputDir: path.join(__dirname, "..", "dist"),
    outputPath: path.join(__dirname, "..", "dist", "styles.css"),
    outputMinPath: path.join(__dirname, "..", "dist", "styles.min.css"),
    testPath: path.join(__dirname, "..", "dist", "test.html"),
  };

  try {
    // Ensure output directory exists
    await ensureDirectory(options.outputDir);

    // Read the input CSS
    const inputCSS = await readFile(options.inputPath);

    // Process with PostCSS and Tailwind
    const processedCSS = await processCSSWithPostCSS(inputCSS, createPostCSSPlugins(), {
      from: options.inputPath,
      to: options.outputPath,
    });

    // Write the unminified version
    await writeFile(options.outputPath, processedCSS);
    console.log(`✓ Created ${options.outputPath}`);

    // Create minified version
    const minifiedCSS = await processCSSWithPostCSS(processedCSS, createMinifyPlugins(), {
      from: options.outputPath,
      to: options.outputMinPath,
    });

    await writeFile(options.outputMinPath, minifiedCSS);
    console.log(`✓ Created ${options.outputMinPath}`);

    // Create test HTML file
    const testHTML = generateTestHTML();
    await writeFile(options.testPath, testHTML);
    console.log(`✓ Created ${options.testPath}`);

    // Get file sizes
    const normalSize = await getFileSize(options.outputPath);
    const minifiedSize = await getFileSize(options.outputMinPath);

    const result: BuildResult = {
      normalSize,
      minifiedSize,
      outputPath: options.outputPath,
      outputMinPath: options.outputMinPath,
      testPath: options.testPath,
    };

    // Display results
    console.log("\n📦 Build complete!");
    console.log(`   Normal: ${formatFileSize(normalSize)}`);
    console.log(`   Minified: ${formatFileSize(minifiedSize)}`);
    console.log(`   Compression: ${((1 - minifiedSize / normalSize) * 100).toFixed(1)}% reduction`);
    console.log(`\n   Test the output by opening: ${options.testPath}`);

    return result;
  } catch (error) {
    console.error("Error building CSS:", error);
    if (error instanceof Error) {
      console.error("Stack trace:", error.stack);
    }
    process.exit(1);
  }
}

// Self-executing async function for top-level await support
(async () => {
  try {
    await buildCSS();
  } catch (error) {
    console.error("Fatal error:", error);
    process.exit(1);
  }
})();
