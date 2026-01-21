import { Page } from "@playwright/test";

export const WaitUtils = {
  async waitForLoad(page: Page, timeout: number = 5000) {
    await page.waitForLoadState("networkidle", { timeout });
  },

  async waitForSelector(page: Page, selector: string, timeout: number = 5000) {
    await page.waitForSelector(selector, { timeout });
  },
};
