import pw from 'file:///C:/Users/ADMIN/AppData/Roaming/npm/node_modules/playwright/index.js';
const { chromium } = pw;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:5183', { waitUntil: 'networkidle' });

const navItem = page.getByRole('button', { name: 'Competitive Exams' });
await navItem.hover();
await page.waitForTimeout(300);

const bankExamsBtn = page.getByText('Bank Exams', { exact: true }).first();
await bankExamsBtn.hover();
await page.waitForTimeout(300);

await page.screenshot({ path: '_menu_screenshot.png' });

const errors = [];
page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });

console.log('done, console errors so far:', errors);
await browser.close();
