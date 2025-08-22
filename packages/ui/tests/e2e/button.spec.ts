import { test, expect } from '@playwright/test';

test.describe('Button Component Stories', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/iframe.html?viewMode=story&id=components-button--default');
  });

  test('Default button renders correctly', async ({ page }) => {
    const button = page.locator('button.usa-button').first();
    await expect(button).toBeVisible();
    await expect(button).toHaveText('Default Button');
    await expect(button).toHaveClass(/usa-button/);
  });

  test('Button variants display correctly', async ({ page }) => {
    await page.goto('/iframe.html?viewMode=story&id=components-button--variants');
    
    // Check all variants are present
    await expect(page.locator('button:has-text("Primary")')).toBeVisible();
    await expect(page.locator('button:has-text("Secondary")')).toHaveClass(/usa-button--secondary/);
    await expect(page.locator('button:has-text("Accent Cool")')).toHaveClass(/usa-button--accent-cool/);
    await expect(page.locator('button:has-text("Accent Warm")')).toHaveClass(/usa-button--accent-warm/);
    await expect(page.locator('button:has-text("Base")')).toHaveClass(/usa-button--base/);
    await expect(page.locator('button:has-text("Outline")')).toHaveClass(/usa-button--outline/);
    await expect(page.locator('button:has-text("Inverse")')).toHaveClass(/usa-button--inverse/);
  });

  test('Button sizes work correctly', async ({ page }) => {
    await page.goto('/iframe.html?viewMode=story&id=components-button--sizes');
    
    const smallButton = page.locator('button:has-text("Small")');
    const defaultButton = page.locator('button:has-text("Default")');
    const largeButton = page.locator('button:has-text("Large")');
    
    await expect(largeButton).toHaveClass(/usa-button--big/);
    
    // Check relative sizes
    const smallBox = await smallButton.boundingBox();
    const defaultBox = await defaultButton.boundingBox();
    const largeBox = await largeButton.boundingBox();
    
    if (smallBox && defaultBox && largeBox) {
      expect(largeBox.height).toBeGreaterThan(defaultBox.height);
    }
  });

  test('Disabled button state', async ({ page }) => {
    await page.goto('/iframe.html?viewMode=story&id=components-button--disabled');
    
    const button = page.locator('button.usa-button');
    await expect(button).toBeDisabled();
    await expect(button).toHaveAttribute('aria-disabled', 'true');
    
    // Try to click disabled button
    await button.click({ force: true });
    // Should not trigger any action
  });

  test('Loading button state', async ({ page }) => {
    await page.goto('/iframe.html?viewMode=story&id=components-button--loading');
    
    const button = page.locator('button.usa-button');
    await expect(button).toBeDisabled();
    await expect(button).toHaveAttribute('aria-busy', 'true');
    
    // Check for spinner
    const spinner = button.locator('svg.animate-spin');
    await expect(spinner).toBeVisible();
  });

  test('Button with icons', async ({ page }) => {
    await page.goto('/iframe.html?viewMode=story&id=components-button--with-icons');
    
    const button = page.locator('button.usa-button').first();
    const icon = button.locator('svg').first();
    await expect(icon).toBeVisible();
  });

  test('Full width button', async ({ page }) => {
    await page.goto('/iframe.html?viewMode=story&id=components-button--full-width');
    
    const button = page.locator('button.usa-button');
    await expect(button).toHaveClass(/width-full/);
    
    const box = await button.boundingBox();
    const viewport = page.viewportSize();
    
    if (box && viewport) {
      // Button should be nearly as wide as viewport (minus padding)
      expect(box.width).toBeGreaterThan(viewport.width * 0.8);
    }
  });

  test('Button keyboard navigation', async ({ page }) => {
    const button = page.locator('button.usa-button').first();
    
    // Focus button with Tab
    await page.keyboard.press('Tab');
    await expect(button).toBeFocused();
    
    // Activate with Enter
    await page.keyboard.press('Enter');
    
    // Activate with Space
    await page.keyboard.press('Space');
  });

  test('Button hover states', async ({ page }) => {
    const button = page.locator('button.usa-button').first();
    
    // Get initial styles
    const initialBg = await button.evaluate(el => 
      window.getComputedStyle(el).backgroundColor
    );
    
    // Hover over button
    await button.hover();
    
    // Get hover styles
    const hoverBg = await button.evaluate(el => 
      window.getComputedStyle(el).backgroundColor
    );
    
    // Background should change on hover (for non-unstyled variants)
    expect(initialBg).not.toBe(hoverBg);
  });

  test('Button focus states', async ({ page }) => {
    const button = page.locator('button.usa-button').first();
    
    // Focus the button
    await button.focus();
    
    // Check for focus ring
    const outline = await button.evaluate(el => 
      window.getComputedStyle(el).outline
    );
    
    expect(outline).toContain('solid');
  });

  test('Button group alignment', async ({ page }) => {
    await page.goto('/iframe.html?viewMode=story&id=components-button--button-group');
    
    const group = page.locator('[role="group"]').first();
    const buttons = group.locator('button');
    
    // Should have multiple buttons
    const count = await buttons.count();
    expect(count).toBeGreaterThan(1);
    
    // Check they're horizontally aligned
    const firstBox = await buttons.first().boundingBox();
    const secondBox = await buttons.nth(1).boundingBox();
    
    if (firstBox && secondBox) {
      // Y position should be similar (horizontally aligned)
      expect(Math.abs(firstBox.y - secondBox.y)).toBeLessThan(5);
    }
  });

  test('Button accessibility attributes', async ({ page }) => {
    const button = page.locator('button.usa-button').first();
    
    // Should have proper role
    await expect(button).toHaveRole('button');
    
    // Should have accessible name
    const accessibleName = await button.getAttribute('aria-label') ?? 
                          await button.textContent();
    expect(accessibleName).toBeTruthy();
    
    // Should be keyboard accessible
    const tabindex = await button.getAttribute('tabindex');
    expect(tabindex === null || parseInt(tabindex) >= 0).toBeTruthy();
  });

  test('Button click interactions', async ({ page }) => {
    await page.goto('/iframe.html?viewMode=story&id=components-button--playground');
    
    const button = page.locator('button.usa-button').first();
    
    // Set up click listener
    await page.evaluate(() => {
      // Use a data attribute instead of extending window
      const button = document.querySelector('button');
      if (button) {
        button.dataset.clickCount = '0';
        button.addEventListener('click', () => {
          const current = parseInt(button.dataset.clickCount ?? '0');
          button.dataset.clickCount = String(current + 1);
        });
      }
    });
    
    // Click button
    await button.click();
    
    // Check click was registered
    const clickCount = await page.evaluate(() => {
      const button = document.querySelector('button');
      return button ? parseInt(button.dataset.clickCount ?? '0') : 0;
    });
    expect(clickCount).toBe(1);
  });
});