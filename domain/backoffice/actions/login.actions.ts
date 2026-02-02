import { Page } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { WaitUtils } from "../../../core/utils/waitUtils";
import { DashboardPage } from "../pages/dashboard.page";

export class LoginActions {
  private page: Page;
  private loginPage: LoginPage;
  private dashboardPage: DashboardPage;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.dashboardPage = new DashboardPage(page);
  }

  async typeUsername(username: string) {
    await this.loginPage.usernameInput().fill(username);
  }

  async typePassword(password: string) {
    await this.loginPage.passwordInput().fill(password);
  }

  async clickLogin() {
    await this.loginPage.loginButton().click();
    //await WaitUtils.waitForLoad(this.page);
  }

  async logout() {
    await this.dashboardPage.logoutButton().click();
    //WaitUtils.waitForLoad(this.page);
    await this.dashboardPage.LogoutExitosoMessage().isEnabled() ;
    //await WaitUtils.waitForLoad(this.page);
  }
}
