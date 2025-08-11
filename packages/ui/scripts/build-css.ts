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
    <div class="container" style="padding: 2rem;">
        <h1 style="font-size: 2rem; margin-bottom: 2rem;">Form System Components</h1>

        <section style="margin-bottom: 3rem;">
            <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Buttons</h2>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <button class="btn btn-default btn-md">Default Button</button>
                <button class="btn btn-secondary btn-md">Secondary</button>
                <button class="btn btn-destructive btn-md">Destructive</button>
                <button class="btn btn-outline btn-md">Outline</button>
                <button class="btn btn-ghost btn-md">Ghost</button>
                <button class="btn btn-link btn-md">Link</button>
            </div>
        </section>

        <section style="margin-bottom: 3rem;">
            <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Card</h2>
            <div class="card" style="max-width: 400px;">
                <div class="card-header">
                    <h3 class="card-title">Card Title</h3>
                    <p class="card-description">This is a card description</p>
                </div>
                <div class="card-content">
                    <p>Card content goes here. This is a pre-compiled CSS example.</p>
                </div>
                <div class="card-footer">
                    <button class="btn btn-default btn-md">Action</button>
                </div>
            </div>
        </section>

        <section style="margin-bottom: 3rem;">
            <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Form Fields</h2>
            <div style="max-width: 400px;">
                <div class="form-field">
                    <label class="form-field-label">
                        Email Address
                        <span class="form-field-required">*</span>
                    </label>
                    <input type="email" class="form-field-input form-field-input-normal" placeholder="Enter your email">
                </div>

                <div class="form-field">
                    <label class="form-field-label form-field-label-error">
                        Password
                        <span class="form-field-required">*</span>
                    </label>
                    <input type="password" class="form-field-input form-field-input-error" placeholder="Enter password">
                    <p class="form-field-error-message">Password must be at least 8 characters</p>
                </div>
            </div>
        </section>

        <section style="margin-bottom: 3rem;">
            <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Typography</h2>
            <div class="space-y-4">
                <h1 class="text-4xl font-bold">Heading 1</h1>
                <h2 class="text-3xl font-semibold">Heading 2</h2>
                <h3 class="text-2xl font-semibold">Heading 3</h3>
                <p class="text-lg">Large paragraph text for emphasis.</p>
                <p>Regular paragraph text with normal sizing.</p>
                <p class="text-sm text-gray-600">Small muted text for descriptions.</p>
            </div>
        </section>

        <section>
            <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Code</h2>
            <p>Here is some inline <code class="code">code example</code> in text.</p>
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
    inputPath: path.join(__dirname, "..", "src", "styles", "components.css"),
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
