import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');
  await page.getByRole('link', { name: 'Website for automation' }).click();
});

test('test1', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');
  await page.getByRole('link', { name: 'Website for automation' }).click();
});