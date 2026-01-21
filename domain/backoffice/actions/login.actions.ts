import { Page } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { WaitUtils } from "../../../core/utils/waitUtils";

export class LoginActions {
  private page: Page;
  private loginPage: LoginPage;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
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
}
