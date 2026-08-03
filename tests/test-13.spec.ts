import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.testmuai.com/selenium-playground/drag-and-drop-demo/');
  await page.getByRole('heading', { name: 'Drag and Drop Demo' }).click();
  await page.getByText('Draggable 1').click();
  await page.getByText('Draggable 1').click();
  await page.getByText('Draggable 2').click();
  await page.getByText('Draggable 1').click();
  await page.getByText('Draggable 2').click();
  await page.getByText('Draggable 1').click();
  await page.locator('#draggable').click();
  await page.getByText('Draggable 1').click();
  await page.getByText('Draggable 2').click();
});