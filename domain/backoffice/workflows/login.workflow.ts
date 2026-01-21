import { Page, expect } from "@playwright/test";
import { LoginActions } from "../actions/login.actions";
import { LoginPage } from "../pages/login.page";
import { DashboardPage } from "../pages/dashboard.page";
import { PlaywrightSetup } from "../../../core/driver/playwrightSetup";
import { SessionCleaner } from "../../../data/dto/sessionCleaner";

export class LoginWorkflow {
  private page: Page;
  private actions: LoginActions;
  private loginPage: LoginPage;
  private dashboardPage: DashboardPage;
  private setup: PlaywrightSetup;
  private sessionCleaner: SessionCleaner;
  

  constructor(page: Page) {
    this.page = page;
    this.actions = new LoginActions(page);
    this.loginPage = new LoginPage(page);
    this.dashboardPage = new DashboardPage(page);
    this.setup = new PlaywrightSetup();
    this.sessionCleaner = new SessionCleaner();
  }

  async execute(username?: string, password?: string) {
    const { qaUser, qaPass } = this.setup.getSecrets();

    const user = username || qaUser;
    const pass = password || qaPass;

    // ✔ 3) Limpiar la sesión backend (Oracle)
    await this.sessionCleaner.clearUserSession(user);

     // Ir al login
    await this.page.goto(this.setup.getBaseUrl());

    // llenar Cambios
    await this.actions.typeUsername(username || qaUser);
    await this.actions.typePassword(password || qaPass);

    // Clic en Continuar
    await this.actions.clickLogin();

    // Validar que el login fue exitoso
    //await expect(this.dashboardPage.userMenu()).toBeVisible();
  }
}
