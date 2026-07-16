import { test, expect } from '@playwright/test';

import { faker } from '@faker-js/faker';

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = faker.internet.email();
const Password ='Test@${faker.number.int({min: 1000, max: 9999})}${faker.string.alpha(3)}'

// console.log(firstName);
// console.log(lastName);
// console.log(email);

test('URL Page', async ({ page }) => {
await page.goto('https://www.automationexercise.com/');
await page.getByRole('link', { name: 'Website for automation' }).click();
await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
});


test('Account Creation_Sign_Up', async ({ page }) => {
await page.goto('https://www.automationexercise.com/');
await page.getByRole('link', { name: ' Signup / Login' }).click();
await page.getByRole('textbox', { name: 'Name' }).click();
await page.getByRole('textbox', { name: 'Name' }).fill(firstName);
await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(email);
await page.getByRole('button', { name: 'Signup' }).click();
await page.getByRole('radio', { name: 'Mr.' }).check();
await page.getByRole('textbox', { name: 'Password *' }).click();
await page.getByRole('textbox', { name: 'Password *' }).fill(Password);
await page.locator('#days').selectOption('26');
await page.locator('#months').selectOption('11');
await page.locator('#years').selectOption('2019');
await page.getByRole('textbox', { name: 'First name *' }).click();
await page.getByRole('textbox', { name: 'First name *' }).fill('Tabish');
await page.getByRole('textbox', { name: 'Last name *' }).click();
await page.getByRole('textbox', { name: 'Last name *' }).fill('Mohammed');
await page.getByRole('textbox', { name: 'Company', exact: true }).click();
await page.getByRole('textbox', { name: 'Company', exact: true }).fill('Chennai');
await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).click();
await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('Chennai Iyyapanthangal');
await page.getByRole('textbox', { name: 'Address 2' }).click();
await page.getByRole('textbox', { name: 'Address 2' }).fill('Porur,chennai');
await page.getByRole('textbox', { name: 'State *' }).click();
await page.getByRole('textbox', { name: 'State *' }).fill('Tamil Nadu');
await page.getByRole('textbox', { name: 'City * Zipcode *' }).click();
await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('chennai');
await page.locator('#zipcode').click();
await page.locator('#zipcode').fill('600056');
await page.getByRole('textbox', { name: 'Mobile Number *' }).click();
await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('9964565656');
await page.getByRole('button', { name: 'Create Account' }).click();
await expect(page.getByText('Account Created!')).toBeVisible();
await page.getByRole('link', { name: 'Continue' }).click();
});


test('Login', async ({ page }) => {
await page.goto('https://www.automationexercise.com/');
await page.getByRole('link', { name: ' Signup / Login' }).click();
await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(email);
await page.getByRole('textbox', { name: 'Password' }).click();
await page.getByRole('textbox', { name: 'Password' }).fill(Password);
await page.getByRole('button', { name: 'Login' }).click();
});

test('test3', async ({ page }) => {
   await page.goto('https://automationexercise.com/');
   await page.getByRole('link', { name: ' Signup / Login' }).click({ force: true });
   await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
   await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('TabishPinky006@gmail.com');
   await page.getByRole('textbox', { name: 'Password' }).click();
   await page.getByRole('textbox', { name: 'Password' }).fill('TabishPinky006');
   await page.getByRole('button', { name: 'Login' }).click();
   await expect(page.getByText('Logged in as')).toBeVisible();
   await page.pause()
   await page.getByRole('link', { name: ' Women' }).click();
   await page.getByRole('link', { name: 'Saree' }).click();
   await page.getByRole('link', { name: ' View Product' }).nth(1).click();
   await page.getByRole('button', { name: ' Add to cart' }).click();
   await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();
   await page.getByRole('button', { name: 'Continue Shopping' }).click();
   await page.getByRole('link', { name: ' Cart' }).click({force:true});
   await expect(page.getByText('Proceed To Checkout')).toBeVisible();
   await expect(page.getByRole('link', { name: 'Rust Red Linen Saree' })).toBeVisible();
   await page.getByText('Proceed To Checkout').click({ force: true });
   await page.getByRole('link', { name: 'Place Order' }).click();
   await page.locator('input[name="name_on_card"]').click();
   await page.locator('input[name="name_on_card"]').fill('Tabish');
   await page.locator('input[name="card_number"]').click();
   await page.locator('input[name="card_number"]').fill('456723341216');
   await page.getByRole('textbox', { name: 'ex.' }).click();
   await page.getByRole('textbox', { name: 'ex.' }).fill('766');
   await page.getByRole('textbox', { name: 'MM' }).click();
   await page.getByRole('textbox', { name: 'MM' }).fill('11');
   await page.getByRole('textbox', { name: 'YYYY' }).click();
   await page.getByRole('textbox', { name: 'YYYY' }).fill('2030');
   await expect(page.getByRole('button', { name: 'Pay and Confirm Order' })).toBeVisible();
   await page.getByRole('button', { name: 'Pay and Confirm Order' }).click({ force: true });
   await expect(page.getByText('Order Placed!')).toBeVisible();
   await expect(page.getByText('Congratulations! Your order')).toBeVisible();
   await expect(page.getByRole('link', { name: 'Download Invoice' })).toBeVisible();
   const downloadPromise = page.waitForEvent('download');
   await page.getByRole('link', { name: 'Download Invoice' }).click({ force: true });
   const download = await downloadPromise;
   await page.getByRole('link', { name: 'Continue' }).click({ force: true });
// await page.goto('https://www.automationexercise.com/');
// await page.locator('.panel-heading').first().click();
// await page.getByRole('link', { name: ' Women' }).click();
// await page.getByRole('link', { name: 'Saree' }).click();
// //await page.locator('div:nth-child(4) > .product-image-wrapper > .single-products > .product-overlay').click();
// await page.getByText('Rust Red Linen Saree').nth(1).click();
// await page.getByRole('link', { name: ' View Product' }).nth(1).click();
// await expect(page.getByRole('heading', { name: 'Rust Red Linen Saree' })).toBeVisible();
// await expect(page.getByRole('img', { name: 'ecommerce website products' }).first()).toBeVisible();
// await page.getByRole('button', { name: ' Add to cart' }).click();
// await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();
// await page.getByRole('button', { name: 'Continue Shopping' }).click();
// await page.getByRole('link', { name: ' Cart' }).click();
// await expect(page.getByRole('link', { name: 'Rust Red Linen Saree' })).toBeVisible();
// await page.getByText('Proceed To Checkout').click();
// await expect(page.getByRole('heading', { name: 'Your delivery address' })).toBeVisible();
// await expect(page.locator('#address_delivery').getByText('Mr. Tabish Mohammed')).toBeVisible();
// await expect(page.locator('#address_delivery').getByText('Chennai', { exact: true })).toBeVisible();
// await expect(page.locator('#address_delivery').getByText('Chennai Iyyapanthangal')).toBeVisible();
// await expect(page.locator('#address_delivery').getByText('Porur,chennai')).toBeVisible();
// await expect(page.locator('#address_delivery').getByText('chennai Tamil Nadu')).toBeVisible();
// await expect(page.locator('#address_delivery').getByText('India')).toBeVisible();
// await expect(page.locator('#address_delivery').getByText('9964565656')).toBeVisible();
// await page.getByRole('link', { name: 'Place Order' }).click();
});

// test('test5', async ({ page }) => {
// await page.goto('https://www.automationexercise.com/');
// //await expect(page.getByRole('heading', { name: 'Payment' })).toBeVisible();
// await page.locator('input[name="name_on_card"]').click();
// await page.locator('input[name="name_on_card"]').fill('4561567882345');
// await page.locator('input[name="name_on_card"]').click();
// await page.locator('input[name="card_number"]').click();
// await page.locator('input[name="card_number"]').fill('4561567882345');
// await page.locator('input[name="name_on_card"]').click();
// await page.locator('input[name="name_on_card"]').fill('Tabish Pinky');
// await page.getByRole('textbox', { name: 'ex.' }).click();
// await page.getByRole('textbox', { name: 'ex.' }).fill('456');
// await page.getByRole('textbox', { name: 'MM' }).click();
// await page.getByRole('textbox', { name: 'MM' }).fill('11');
// await page.getByRole('textbox', { name: 'YYYY' }).click();
// await page.getByRole('textbox', { name: 'YYYY' }).fill('2030');
// await expect(page.getByRole('button', { name: 'Pay and Confirm Order' })).toBeVisible();
// await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
// await expect(page.getByText('Order Placed!')).toBeVisible();
// await expect(page.getByRole('link', { name: 'Download Invoice' })).toBeVisible();
// const downloadPromise = page.waitForEvent('download');
//   await page.getByRole('link', { name: 'Download Invoice' }).click();
//   const download = await downloadPromise;
//   });