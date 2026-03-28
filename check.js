import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log(`PAGE ERROR: ${msg.text()}`);
    } else {
      console.log(`PAGE LOG: ${msg.text()}`);
    }
  });

  page.on('pageerror', error => {
    console.log(`PAGE EXCEPTION: ${error.message}\n${error.stack}`);
  });

  console.log('Navigating to http://localhost:5173');
  try {
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
    console.log('Navigation complete');
  } catch (err) {
    console.log('Navigation error:', err);
  }
  
  await browser.close();
})();
