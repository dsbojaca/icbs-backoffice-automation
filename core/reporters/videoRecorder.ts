import { Page } from "@playwright/test";

export const VideoRecorder = {
  async recordOnFailure(page: Page, testInfo: any) {
    if (testInfo.status !== "passed") {
      await page.video()?.saveAs(`videos/${testInfo.title}.webm`);
    }
  },
};
