import puppeteer from 'puppeteer'
import traversal from "./traversal"
(async () => {
    const browser = await puppeteer.launch({ headless: false, defaultViewport: null});
    await traversal(browser);
    await browser.close();
})();