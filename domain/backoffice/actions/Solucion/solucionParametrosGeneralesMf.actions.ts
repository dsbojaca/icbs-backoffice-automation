import { Page } from "@playwright/test";
import { DashboardPage } from "../../pages/dashboard.page";
import { ParametrosGeneralesMfPage } from "../../pages/Solucion/solucionParametrosGeneralesMf.page";

export class ParametrosGeneralesMfActions {
  private page: Page;
  private dashboard: DashboardPage;
  private parametrosGeneralesMfPage: ParametrosGeneralesMfPage;

  constructor(page: Page) {
    this.page = page;
    this.dashboard = new DashboardPage(page);
    this.parametrosGeneralesMfPage = new ParametrosGeneralesMfPage(page);
  }

  // métodos aquí
}