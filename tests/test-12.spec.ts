import { test, expect } from '@playwright/test';

test('test1', async ({ page }) => {await page.goto('https://automationexercise.com/');
await page.getByRole('link', { name: ' Home' }).click();
await page.getByRole('link', { name: 'Website for automation' }).click();
await page.getByRole('link', { name: ' Signup / Login' }).click();
await page.getByRole('textbox', { name: 'Name' }).click();
await page.getByRole('textbox', { name: 'Name' }).fill('test1@gmail.com');
await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('Test1');
await page.getByRole('button', { name: 'Signup' })
await page.locator('body').click();
await page.getByRole('button', { name: 'Signup' }).click();
await page.getByRole('link', { name: ' Products' }).click();
await page.locator('.product-overlay').first().click();
await page.getByRole('link', { name: ' View Product' }).first().click();
await page.getByRole('heading', { name: 'Blue Top' }).click();
await expect(page.getByRole('heading', { name: 'Blue Top' })).toBeVisible()
await page.getByRole('link', { name: ' View Product' }).click()
  // Recording...
});


test('Duplicate', async ({ page }) => {await page.goto('https://automationexercise.com/');
await page.getByRole('link', { name: ' Home' }).click();
await page.getByRole('link', { name: 'Website for automation' }).click();
await page.getByRole('link', { name: ' Signup / Login' }).click();
await page.getByRole('textbox', { name: 'Name' }).click();
await page.getByRole('textbox', { name: 'Name' }).fill('test1@gmail.com');
await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('Test1');
await page.getByRole('button', { name: 'Signup' })
await page.locator('body').click();
await page.getByRole('button', { name: 'Signup' }).click();
await page.getByRole('link', { name: ' Products' }).click();
await page.locator('.product-overlay').first().click();
await page.getByRole('link', { name: ' View Product' }).first().click();
await page.getByRole('heading', { name: 'Blue Top' }).click();
await expect(page.getByRole('heading', { name: 'Blue Top' })).toBeVisible()
await page.getByRole('link', { name: ' View Product' }).click()
  // Recording...
});