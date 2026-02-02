import { Page } from "@playwright/test";
import { DashboardPage } from "../../pages/dashboard.page";
import { ParametrosGeneralesPage } from "../../pages/Solucion/solucionParametrosGenerales.page";

export class ParametrosGeneralesActions {
  private page: Page;
  private dashboard: DashboardPage;
  private parametrosGeneralesPage: ParametrosGeneralesPage;

  constructor(page: Page) {
    this.page = page;
    this.dashboard = new DashboardPage(page);
    this.parametrosGeneralesPage = new ParametrosGeneralesPage(page);
  }

  // métodos aquí
}