import pw from 'file:///C:/Users/ADMIN/AppData/Roaming/npm/node_modules/playwright/index.js';
const { chromium } = pw;

const browser = await chromium.launch();

// Flat category (Insurance Exams) on desktop
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:5183', { waitUntil: 'networkidle' });
await page.getByRole('button', { name: 'Competitive Exams' }).hover();
await page.waitForTimeout(200);
await page.getByText('Insurance Exams', { exact: true }).hover();
await page.waitForTimeout(200);
await page.screenshot({ path: '_menu_screenshot_flat.png' });
await page.close();

// Mobile view
const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobile.goto('http://localhost:5183', { waitUntil: 'networkidle' });
const hamburger = mobile.locator('header button.lg\\:hidden');
await hamburger.click();
await mobile.waitForTimeout(200);
await mobile.getByRole('button', { name: 'Competitive Exams' }).click();
await mobile.waitForTimeout(200);
await mobile.getByRole('button', { name: 'Bank Exams' }).click();
await mobile.waitForTimeout(200);
await mobile.screenshot({ path: '_menu_screenshot_mobile.png', fullPage: false });

console.log('done');
await browser.close();
