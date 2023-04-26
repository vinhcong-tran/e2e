import { expect, test } from '@playwright/test';

test('Check text', async ({ browser }) => {
    const page = await browser.newPage()
    await page.goto('/');
    await expect(page.locator('h1')).toHaveText('Home page1');
});