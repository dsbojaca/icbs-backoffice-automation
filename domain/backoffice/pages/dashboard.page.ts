import { Page } from "@playwright/test";

export class DashboardPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Ejemplo de locator típico de dashboard
  userMenu = () => this.page.locator("#userMenu");
  logoutButton = () => this.page.locator("#logout");

}
