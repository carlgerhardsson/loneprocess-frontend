import { test, expect } from '@playwright/test';

test.describe('Löneportalen Login', () => {
  test('should display login page', async ({ page }) => {
    await page.goto('/loneportalen.html');
    
    await expect(page.locator('h1')).toContainText('Löneportal');
    await expect(page.locator('text=v1.5.0')).toBeVisible();
  });

  test('should show test users', async ({ page }) => {
    await page.goto('/loneportalen.html');
    
    await expect(page.locator('text=lonespecialist@loneportalen.se')).toBeVisible();
    await expect(page.locator('text=lonechef@loneportalen.se')).toBeVisible();
    await expect(page.locator('text=systemspecialist@loneportalen.se')).toBeVisible();
  });

  test('should login with quick login button', async ({ page }) => {
    await page.goto('/loneportalen.html');
    
    await page.click('text=lonespecialist@loneportalen.se');
    
    // Should redirect to main app
    await expect(page.locator('text=Överblick')).toBeVisible();
    await expect(page.locator('text=Elif Bylund')).toBeVisible();
  });

  test('should display correct user role after login', async ({ page }) => {
    await page.goto('/loneportalen.html');
    
    await page.click('text=lonechef@loneportalen.se');
    
    await expect(page.locator('text=Hassan Sundberg')).toBeVisible();
    await expect(page.locator('text=Lönechef')).toBeVisible();
  });

  test('should logout successfully', async ({ page }) => {
    await page.goto('/loneportalen.html');
    await page.click('text=lonespecialist@loneportalen.se');
    
    await page.click('text=Logga ut');
    
    // Should return to login page
    await expect(page.locator('h1')).toContainText('Löneportal');
    await expect(page.locator('input[type="email"]')).toBeVisible();
  });
});