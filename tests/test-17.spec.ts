import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
 await page.goto('https://automationexercise.com/');

 await page.getByRole('link', { name: 'Website for automation' }).click();
 await page.getByRole('link', { name: 'Website for automation' }).screenshot({path:'screenshots/element.png'});
 await page.screenshot({path:'screenshots/path.png',fullPage:true})

});