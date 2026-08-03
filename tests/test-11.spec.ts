import { test, expect } from '@playwright/test';

test('test', async ({ browser }) => {
  // Recording...
  const context = await browser.newContext();
  const page1 = await context.newPage();
  const page2 = await context.newPage();

  await page1.goto("https://www.testmuai.com/selenium-playground/select-dropdown-demo/")
  await page2.goto("https://the-internet.herokuapp.com/download")

  await page1.bringToFront()

});

