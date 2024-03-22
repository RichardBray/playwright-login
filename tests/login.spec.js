import { test, expect } from '@playwright/test';

let emailInput;
let passwordInput;
let submitButton;

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
  emailInput = await page.getByRole('textbox', { name: 'Email' });
  passwordInput = await page.getByRole('textbox', { name: 'Password' });
  submitButton = await page.getByRole('button', { name: 'Login' });
});

test('Login form renders correctly', async ({ page }) => {
  const login = await page.getByRole('heading', { name: 'Login' });
  const elements = [login, emailInput, passwordInput, submitButton];
  for (const element of elements) {
    await expect(element).toBeVisible();
  }
});

test('Login form submission works', async ({ page }) => {
  emailInput.fill('test@test.com');
  passwordInput.fill('password123');
  submitButton.click();

  await expect(page).toHaveURL('http://localhost:5173/dashboard');
});