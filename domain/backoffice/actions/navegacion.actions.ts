import { Page } from "@playwright/test";
import { DashboardPage } from "../pages/dashboard.page";
import { WaitUtils } from "../../../core/utils/waitUtils";

export class NavegacionActions {
  private page: Page;
  private dashboard: DashboardPage;

  constructor(page: Page) {
    this.page = page;
    this.dashboard = new DashboardPage(page);
  }

  // ---- LOGOUT ----
  async logout() {
    await this.dashboard.userMenu().click();
    await this.dashboard.logoutButton().click();
  }
}

