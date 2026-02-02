import { Page } from "@playwright/test";

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators reales según grabación
  usernameInput = () => this.page.getByRole("textbox", { name: "Usuario" });
  passwordInput = () => this.page.getByRole("textbox", { name: "Clave" });
  loginButton = () => this.page.getByRole("button", { name: "Continuar" });

  async goto(url: string) {
    await this.page.goto(url);
  }
}
