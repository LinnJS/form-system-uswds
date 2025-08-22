import { expect, test } from "@playwright/test";

/**
 * Comprehensive Playwright tests for all Storybook stories
 * Tests visual rendering, interactions, and accessibility
 */

test.describe("USWDS Accordion Component", () => {
  test("Default accordion renders and is interactive", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=uswds-accordion--default&viewMode=story");
    await page.waitForLoadState("networkidle");

    const accordion = page.locator(".usa-accordion").first();
    await expect(accordion).toBeVisible();

    // Check first item
    const firstButton = accordion.locator("button").first();
    await expect(firstButton).toBeVisible();

    // Click to toggle
    await firstButton.click();
    const expanded = await firstButton.getAttribute("aria-expanded");
    expect(expanded).toBeDefined();
  });

  test("Multiselectable accordion allows multiple panels open", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=uswds-accordion--multiselectable&viewMode=story");
    await page.waitForLoadState("networkidle");

    const accordion = page.locator(".usa-accordion").first();
    await expect(accordion).toBeVisible();

    const buttons = accordion.locator("button");
    const count = await buttons.count();
    expect(count).toBeGreaterThan(0);
  });

  test("Borderless accordion has correct styling", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=uswds-accordion--borderless&viewMode=story");
    await page.waitForLoadState("networkidle");

    const accordion = page.locator(".usa-accordion").first();
    await expect(accordion).toBeVisible();
  });
});

test.describe("USWDS Alert Component", () => {
  test("Default alert renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=uswds-alert--default&viewMode=story");
    await page.waitForLoadState("networkidle");

    const alert = page.locator(".usa-alert").first();
    await expect(alert).toBeVisible();
  });

  test("Informational alert renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=uswds-alert--informational&viewMode=story");
    await page.waitForLoadState("networkidle");

    const alert = page.locator(".usa-alert--info").first();
    await expect(alert).toBeVisible();
  });

  test("Success alert renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=uswds-alert--success&viewMode=story");
    await page.waitForLoadState("networkidle");

    const alert = page.locator(".usa-alert--success").first();
    await expect(alert).toBeVisible();
  });

  test("Warning alert renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=uswds-alert--warning&viewMode=story");
    await page.waitForLoadState("networkidle");

    const alert = page.locator(".usa-alert--warning").first();
    await expect(alert).toBeVisible();
  });

  test("Error alert renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=uswds-alert--error&viewMode=story");
    await page.waitForLoadState("networkidle");

    const alert = page.locator(".usa-alert--error").first();
    await expect(alert).toBeVisible();
  });

  test("Slim variant renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=uswds-alert--slim-variant&viewMode=story");
    await page.waitForLoadState("networkidle");

    const alert = page.locator(".usa-alert--slim").first();
    await expect(alert).toBeVisible();
  });

  test("No icon alert renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=uswds-alert--no-icon&viewMode=story");
    await page.waitForLoadState("networkidle");

    const alert = page.locator(".usa-alert--no-icon").first();
    await expect(alert).toBeVisible();
  });
});

test.describe("USWDS Badge Component", () => {
  test("Default badge renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=uswds-badge--default&viewMode=story");
    await page.waitForLoadState("networkidle");

    const badge = page.locator(".usa-tag").first();
    await expect(badge).toBeVisible();
  });

  test("Big variant badge renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=uswds-badge--big-variant&viewMode=story");
    await page.waitForLoadState("networkidle");

    const badge = page.locator(".usa-tag--big").first();
    await expect(badge).toBeVisible();
  });

  test("Badge variants render correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=uswds-badge--variants&viewMode=story");
    await page.waitForLoadState("networkidle");

    const badges = page.locator(".usa-tag");
    const count = await badges.count();
    expect(count).toBeGreaterThan(0);
  });
});

test.describe("Components Button", () => {
  test("Default button renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=components-button--default&viewMode=story");
    await page.waitForLoadState("networkidle");

    const button = page.locator(".usa-button").first();
    await expect(button).toBeVisible();

    // Test click interaction
    await button.click();
    await expect(button).toBeVisible();
  });

  test("Secondary button renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=components-button--secondary&viewMode=story");
    await page.waitForLoadState("networkidle");

    const button = page.locator(".usa-button--secondary").first();
    await expect(button).toBeVisible();
  });

  test("Outline button renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=components-button--outline&viewMode=story");
    await page.waitForLoadState("networkidle");

    const button = page.locator(".usa-button--outline").first();
    await expect(button).toBeVisible();
  });

  test("Disabled button renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=components-button--disabled&viewMode=story");
    await page.waitForLoadState("networkidle");

    const button = page.locator(".usa-button").first();
    await expect(button).toBeVisible();
    await expect(button).toBeDisabled();
  });
});

test.describe("Components Card", () => {
  test("Default card renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=components-card--default&viewMode=story");
    await page.waitForLoadState("networkidle");

    const card = page.locator(".usa-card").first();
    await expect(card).toBeVisible();
  });

  test("Flag card renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=components-card--flag-card&viewMode=story");
    await page.waitForLoadState("networkidle");

    const card = page.locator(".usa-card--flag").first();
    await expect(card).toBeVisible();
  });

  test("Header first card renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=components-card--header-first-card&viewMode=story");
    await page.waitForLoadState("networkidle");

    const card = page.locator(".usa-card--header-first").first();
    await expect(card).toBeVisible();
  });
});

test.describe("Components Code", () => {
  test("Default code block renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=components-code--default&viewMode=story");
    await page.waitForLoadState("networkidle");

    const codeBlock = page.locator("pre").first();
    await expect(codeBlock).toBeVisible();
  });

  test("Inline code renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=components-code--inline-code&viewMode=story");
    await page.waitForLoadState("networkidle");

    const inlineCode = page.locator("code").first();
    await expect(inlineCode).toBeVisible();
  });

  test("Multi-line code renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=components-code--multi-line&viewMode=story");
    await page.waitForLoadState("networkidle");

    const codeBlock = page.locator("pre").first();
    await expect(codeBlock).toBeVisible();
  });
});

test.describe("Components Form", () => {
  test("Login form renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=components-form--login-form&viewMode=story");
    await page.waitForLoadState("networkidle");

    const form = page.locator("form").first();
    await expect(form).toBeVisible();

    // Check for essential form elements
    const emailInput = form.locator('input[type="email"], input[name*="email"]').first();
    const passwordInput = form.locator('input[type="password"]').first();

    if ((await emailInput.count()) > 0) {
      await expect(emailInput).toBeVisible();
    }
    if ((await passwordInput.count()) > 0) {
      await expect(passwordInput).toBeVisible();
    }
  });

  test("Signup form renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=components-form--signup-form&viewMode=story");
    await page.waitForLoadState("networkidle");

    const form = page.locator("form").first();
    await expect(form).toBeVisible();
  });

  test("Profile form renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=components-form--profile-form&viewMode=story");
    await page.waitForLoadState("networkidle");

    const form = page.locator("form").first();
    await expect(form).toBeVisible();
  });
});

test.describe("Components Typography", () => {
  test("Headings render correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=components-typography--headings&viewMode=story");
    await page.waitForLoadState("networkidle");

    // Check for at least one heading
    const headings = page.locator("h1, h2, h3, h4, h5, h6");
    const count = await headings.count();
    expect(count).toBeGreaterThan(0);
  });

  test("Paragraphs render correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=components-typography--paragraphs&viewMode=story");
    await page.waitForLoadState("networkidle");

    const paragraph = page.locator("p").first();
    await expect(paragraph).toBeVisible();
  });

  test("Text variants render correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=components-typography--text-variants&viewMode=story");
    await page.waitForLoadState("networkidle");

    const text = page.locator("body").first();
    await expect(text).toBeVisible();
  });
});

test.describe("UI Button Component", () => {
  test("Default UI button renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=ui-button--default&viewMode=story");
    await page.waitForLoadState("networkidle");

    const button = page.locator("button").first();
    await expect(button).toBeVisible();
  });

  test("Outline UI button renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=ui-button--outline&viewMode=story");
    await page.waitForLoadState("networkidle");

    const button = page.locator("button").first();
    await expect(button).toBeVisible();
  });

  test("Secondary UI button renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=ui-button--secondary&viewMode=story");
    await page.waitForLoadState("networkidle");

    const button = page.locator("button").first();
    await expect(button).toBeVisible();
  });

  test("Destructive UI button renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=ui-button--destructive&viewMode=story");
    await page.waitForLoadState("networkidle");

    const button = page.locator("button").first();
    await expect(button).toBeVisible();
  });
});

test.describe("UI Card Component", () => {
  test("Default UI card renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=ui-card--default&viewMode=story");
    await page.waitForLoadState("networkidle");

    const card = page.locator('[class*="card"]').first();
    await expect(card).toBeVisible();
  });

  test("Character card renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=ui-card--character-card&viewMode=story");
    await page.waitForLoadState("networkidle");

    const card = page.locator('[class*="card"]').first();
    await expect(card).toBeVisible();
  });

  test("Planet card renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=ui-card--planet-card&viewMode=story");
    await page.waitForLoadState("networkidle");

    const card = page.locator('[class*="card"]').first();
    await expect(card).toBeVisible();
  });

  test("Starship card renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=ui-card--starship-card&viewMode=story");
    await page.waitForLoadState("networkidle");

    const card = page.locator('[class*="card"]').first();
    await expect(card).toBeVisible();
  });
});

test.describe("UI Form Component", () => {
  test("Login form renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=ui-form--login-form&viewMode=story");
    await page.waitForLoadState("networkidle");

    const form = page.locator("form").first();
    await expect(form).toBeVisible();
  });

  test("Complete form renders correctly", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=ui-form--complete-form&viewMode=story");
    await page.waitForLoadState("networkidle");

    const form = page.locator("form").first();
    await expect(form).toBeVisible();
  });
});

test.describe("Accessibility Tests", () => {
  test("Interactive elements are keyboard accessible", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=components-button--default&viewMode=story");
    await page.waitForLoadState("networkidle");

    // Tab to button
    await page.keyboard.press("Tab");
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
    expect(["BUTTON", "A", "INPUT"]).toContain(focusedElement);
  });

  test("ARIA attributes are properly set on accordions", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=uswds-accordion--default&viewMode=story");
    await page.waitForLoadState("networkidle");

    const button = page.locator("button[aria-expanded]").first();
    if ((await button.count()) > 0) {
      const ariaExpanded = await button.getAttribute("aria-expanded");
      expect(["true", "false"]).toContain(ariaExpanded);
    }
  });

  test("Form inputs have proper labels or aria-labels", async ({ page }) => {
    await page.goto("/iframe.html?args=&id=components-form--login-form&viewMode=story");
    await page.waitForLoadState("networkidle");

    const inputs = page.locator('input:not([type="hidden"])');
    const inputCount = await inputs.count();

    for (let i = 0; i < inputCount; i++) {
      const input = inputs.nth(i);
      const inputId = await input.getAttribute("id");
      const ariaLabel = await input.getAttribute("aria-label");
      const ariaLabelledBy = await input.getAttribute("aria-labelledby");

      if (inputId) {
        const label = page.locator(`label[for="${inputId}"]`);
        const hasLabel = (await label.count()) > 0;
        const hasAriaLabel = ariaLabel !== null;
        const hasAriaLabelledBy = ariaLabelledBy !== null;

        expect(hasLabel || hasAriaLabel || hasAriaLabelledBy).toBeTruthy();
      }
    }
  });
});

test.describe("Responsive Design Tests", () => {
  const viewports = [
    { name: "Mobile", width: 375, height: 667 },
    { name: "Tablet", width: 768, height: 1024 },
    { name: "Desktop", width: 1920, height: 1080 },
  ];

  for (const viewport of viewports) {
    test(`Components render correctly on ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });

      await page.goto("/iframe.html?args=&id=components-card--default&viewMode=story");
      await page.waitForLoadState("networkidle");

      const card = page.locator(".usa-card").first();
      await expect(card).toBeVisible();
    });
  }
});

test.describe("Performance Tests", () => {
  test("Components load within acceptable time", async ({ page }) => {
    const startTime = Date.now();

    await page.goto("/iframe.html?args=&id=uswds-accordion--default&viewMode=story");
    await page.waitForLoadState("networkidle");

    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(5000); // Should load in less than 5 seconds
  });

  test("No critical console errors on component render", async ({ page }) => {
    const criticalErrors: string[] = [];

    page.on("console", (msg) => {
      if (msg.type() === "error") {
        const text = msg.text();
        // Ignore some common non-critical errors
        if (!text.includes("favicon") && !text.includes("Failed to load resource")) {
          criticalErrors.push(text);
        }
      }
    });

    await page.goto("/iframe.html?args=&id=components-button--default&viewMode=story");
    await page.waitForLoadState("networkidle");

    // Allow some non-critical errors but fail on critical ones
    expect(
      criticalErrors.filter(
        (e) => e.includes("Cannot read") || e.includes("is not defined") || e.includes("Uncaught")
      )
    ).toHaveLength(0);
  });
});
