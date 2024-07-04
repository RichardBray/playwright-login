import { test, expect } from '@playwright/test';

let emailInput;
let passwordInput;
let submitButton;

const SITE_URL = 'http://localhost:5173/';

test.beforeEach(async ({ page }) => {
  await page.goto(SITE_URL);
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

  await expect(page).toHaveURL(`${SITE_URL}dashboard`);
});