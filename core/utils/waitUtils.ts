import { Page } from "@playwright/test";
import { Locator, expect  } from "@playwright/test";

export const WaitUtils = {
  async waitForLoad(page: Page, timeout: number = 10000) {
    await page.waitForLoadState("networkidle", { timeout });
  },

  async waitForSelector(page: Page, selector: string, timeout: number = 10000) {
    await page.waitForSelector(selector, { timeout });
  },
};