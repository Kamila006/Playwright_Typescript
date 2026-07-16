import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {
  await page.goto(process.env.BASE_URL!);

  await page.fill('#username', process.env.USERNAME!);
  await page.fill('#password', process.env.PASSWORD!);

  console.log(process.env.USERNAME);
});