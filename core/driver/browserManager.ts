import { chromium, Browser, BrowserContext, Page } from "@playwright/test";

export class BrowserManager {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  async start() {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async stop() {
    await this.context?.close();
    await this.browser?.close();
  }

  getPage() {
    return this.page;
  }
}
