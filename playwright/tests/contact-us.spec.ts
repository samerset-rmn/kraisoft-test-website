import { test, expect } from '@playwright/test';

import { SITE_BASE_PATH } from '@/shared/constants/basePath';

test.describe('Contact us form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(SITE_BASE_PATH + '/contact');
  });

  test('Shows errors if submit a form without filled fields', async ({ page }) => {
    await page.getByTestId('contact-us-submit-button').click();

    expect(await page.getByTestId('contact-us-form-field-error').nth(0)).toHaveText('Name is required');
    expect(await page.getByTestId('contact-us-form-field-error').nth(1)).toHaveText('Email is required');
    expect(await page.getByTestId('contact-us-form-field-error').nth(2)).toHaveText('Subject is required');
    expect(await page.getByTestId('contact-us-form-field-error').nth(3)).toHaveText('Message is required');
  });

  test('Shows success message if form is submitted successfully', async ({ page }) => {
    await page.getByTestId('contact-us-form-name-field').fill('John Doe');
    await page.getByTestId('contact-us-form-email-field').fill('test@test.ts');
    await page.getByTestId('contact-us-form-subject-field').fill('Test subject');
    await page.getByTestId('contact-us-form-message-field').fill('Test message');

    await page.getByTestId('contact-us-submit-button').click();

    /* NOTE Waiting for fake request to resolve */
    await page.waitForTimeout(2500);

    expect(await page.getByTestId('contact-us-form-success-message')).toBeVisible();
  });
});
