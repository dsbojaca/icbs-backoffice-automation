import { test as base, Page } from "@playwright/test";
import { BrowserManager } from "./browserManager";

export const test = base.extend<{
  boPage: Page;
}>({
  boPage: async ({}, use: (page: Page) => Promise<void>) => {
    const bm = new BrowserManager();
    await bm.start();
    const page = bm.getPage();

    await use(page);

    await bm.stop();
  },
});

export const expect = base.expect;

