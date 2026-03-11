import { test, expect } from '@playwright/test';

test.describe('Activities Management', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/loneportalen.html');
    await page.click('text=lonechef@loneportalen.se');
  });

  test('should display all 20 activities', async ({ page }) => {
    const activityRows = page.locator('tbody tr').filter({ hasNot: page.locator('.bg-gray-50') });
    const count = await activityRows.count();
    
    expect(count).toBeGreaterThanOrEqual(20);
  });

  test('should toggle activity expansion', async ({ page }) => {
    const firstExpandButton = page.locator('tbody tr button').first();
    
    await firstExpandButton.click();
    
    // Should show POL reference
    await expect(page.locator('text=POL-referens')).toBeVisible();
  });

  test('should show activity details when expanded', async ({ page }) => {
    await page.locator('tbody tr button').first().click();
    
    // Should show checklist
    await expect(page.locator('text=Checklista')).toBeVisible();
    
    // Should show comment section
    await expect(page.locator('text=Kommentar')).toBeVisible();
  });

  test('should navigate to Verktygslåda tab', async ({ page }) => {
    await page.click('text=Verktygslåda');
    
    await expect(page.locator('text=Redigera Aktivitet')).toBeVisible();
    await expect(page.locator('text=Verktygslåda – POL-aktiviteter')).toBeVisible();
  });

  test('should display correct activity count in overview', async ({ page }) => {
    await expect(page.locator('text=av 20')).toBeVisible();
  });
});