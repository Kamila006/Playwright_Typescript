import { test, expect } from '@playwright/test';

test('test', async ({ browser }) => {
  // Recording...
  const context = await browser.newContext();
  const page1 = await context.newPage();
  const page2 = await context.newPage();

  await page1.goto("")

});

