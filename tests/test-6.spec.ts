import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');
  await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
});

test('test1', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');
  await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
  
});