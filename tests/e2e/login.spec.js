// @ts-check
const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://carlgerhardsson.github.io/loneprocess-frontend';

test.describe('Löneportalen Login', () => {
  test('should display login page with correct title', async ({ page }) => {
    await page.goto(`${BASE_URL}/loneportalen.html`);
    
    await expect(page).toHaveTitle(/Löneportalen v1.5/);
    await expect(page.locator('h1')).toContainText('Löneportal');
  });

  test('should show version badge', async ({ page }) => {
    await page.goto(`${BASE_URL}/loneportalen.html`);
    
    const versionBadge = page.locator('text=v1.5.0');
    await expect(versionBadge).toBeVisible();
  });

  test('should display test user buttons', async ({ page }) => {
    await page.goto(`${BASE_URL}/loneportalen.html`);
    
    await expect(page.locator('text=lonespecialist@loneportalen.se')).toBeVisible();
    await expect(page.locator('text=lonechef@loneportalen.se')).toBeVisible();
    await expect(page.locator('text=systemspecialist@loneportalen.se')).toBeVisible();
  });

  test('should login as Lönespecialist', async ({ page }) => {
    await page.goto(`${BASE_URL}/loneportalen.html`);
    
    await page.locator('text=lonespecialist@loneportalen.se').click();
    
    await expect(page.locator('text=Elif Bylund')).toBeVisible();
    await expect(page.locator('text=Lönespecialist')).toBeVisible();
  });

  test('should login as Lönechef', async ({ page }) => {
    await page.goto(`${BASE_URL}/loneportalen.html`);
    
    await page.locator('text=lonechef@loneportalen.se').click();
    
    await expect(page.locator('text=Hassan Sundberg')).toBeVisible();
    await expect(page.locator('text=Lönechef')).toBeVisible();
  });

  test('should show logout button after login', async ({ page }) => {
    await page.goto(`${BASE_URL}/loneportalen.html`);
    
    await page.locator('text=lonespecialist@loneportalen.se').click();
    
    const logoutButton = page.locator('text=Logga ut');
    await expect(logoutButton).toBeVisible();
  });

  test('should logout successfully', async ({ page }) => {
    await page.goto(`${BASE_URL}/loneportalen.html`);
    
    await page.locator('text=lonespecialist@loneportalen.se').click();
    await expect(page.locator('text=Elif Bylund')).toBeVisible();
    
    await page.locator('text=Logga ut').click();
    
    await expect(page.locator('h1')).toContainText('Löneportal');
    await expect(page.locator('text=Testanvändare:')).toBeVisible();
  });
});
