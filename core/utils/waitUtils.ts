import { Locator, expect  } from "@playwright/test";

export class WaitUtils {
  static async waitAndClick(locator: Locator) {
    await expect(locator).toBeVisible({ timeout: 5000 });
    await locator.click();
  }
}

