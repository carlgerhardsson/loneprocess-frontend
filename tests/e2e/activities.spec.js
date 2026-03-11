// @ts-check
const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://carlgerhardsson.github.io/loneprocess-frontend';

test.describe('Löneportalen Activities', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/loneportalen.html`);
    await page.locator('text=lonechef@loneportalen.se').click();
    await expect(page.locator('text=Hassan Sundberg')).toBeVisible();
  });

  test('should display all navigation tabs', async ({ page }) => {
    await expect(page.locator('text=Överblick')).toBeVisible();
    await expect(page.locator('text=Löneperioder')).toBeVisible();
    await expect(page.locator('text=Verktygslåda')).toBeVisible();
  });

  test('should show total progress bar', async ({ page }) => {
    const progressText = page.locator('text=Total framdrift');
    await expect(progressText).toBeVisible();
  });

  test('should display all 20 activities', async ({ page }) => {
    const table = page.locator('table tbody tr');
    const count = await table.count();
    expect(count).toBeGreaterThanOrEqual(20);
  });

  test('should show phase badges', async ({ page }) => {
    await expect(page.locator('text=Lön 1').first()).toBeVisible();
    await expect(page.locator('text=Kontroll').first()).toBeVisible();
    await expect(page.locator('text=Lön klar').first()).toBeVisible();
  });

  test('should expand activity to show checklist', async ({ page }) => {
    const expandButton = page.locator('button:has-text("▶")').first();
    await expandButton.click();
    
    await expect(page.locator('text=POL-referens:').first()).toBeVisible();
    await expect(page.locator('text=Checklista').first()).toBeVisible();
  });

  test('should switch to Verktygslåda tab', async ({ page }) => {
    await page.locator('text=Verktygslåda').click();
    
    await expect(page.locator('text=Redigera Aktivitet')).toBeVisible();
    await expect(page.locator('text=Verktygslåda – POL-aktiviteter')).toBeVisible();
  });

  test('should show API status indicator', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    
    const hasApiText = await footer.locator('text=/API|mockdata/').count();
    expect(hasApiText).toBeGreaterThan(0);
  });

  test('should show phase progress cards', async ({ page }) => {
    await expect(page.locator('text=Före Löneberäkning (Lön 1)')).toBeVisible();
    await expect(page.locator('text=Kontrollperiod (Mellanperiod)')).toBeVisible();
    await expect(page.locator('text=Efter Löneberäkning (Lön klar)')).toBeVisible();
  });
});
