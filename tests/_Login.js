import { test, expect } from '@playwright/test';


test('should navigate to dashboard after successful login', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  const email = await page.getByRole('textbox', { name: 'Email' });
  email.fill('test@test.com');
  const password = await page.getByRole('textbox', { name: 'Password' });
  password.fill('password123');

  await page.getByRole('button', { name: 'Login' }).click();

  expect(page.url()).toBe('http://localhost:5173/dashboard');
});