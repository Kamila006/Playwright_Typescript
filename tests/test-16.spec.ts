import { test, expect } from '@playwright/test';

test('GET Products', async ({ request }) => {

  const response = await request.get('/products');
//  get  https://fakestoreapi.com/products

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.length).toBeGreaterThan(0);

  console.log(body);

});

test('GET Single Product', async ({ request }) => {

  const response = await request.get('/products/1');

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.id).toBe(1);

});

test('POST Product', async ({ request }) => {

  const response = await request.post('/products', {
    data: {
      title: 'Playwright',
      price: 100,
      description: 'API Testing',
      image: 'https://i.pravatar.cc',
      category: 'electronics'
    }
  });

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.title).toBe('Playwright');

});

test('DELETE Product', async ({ request }) => {

  const response = await request.delete('/products/1');

  expect(response.status()).toBe(200);

});
