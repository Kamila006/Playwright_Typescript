import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Products' }).click();
  await expect(page.getByRole('img', { name: 'Website for practice' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Category' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();
  await page.getByRole('link', { name: ' Home' }).click();
});