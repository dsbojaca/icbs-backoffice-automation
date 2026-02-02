import { Page } from "@playwright/test";
import { DashboardPage } from "../../pages/dashboard.page";
import { ParametrizacionServiciosPage } from "../../pages/Solucion/solucionParametrizacionServicios.page";

export class ParametrizacionServiciosActions {
  private page: Page;
  private dashboard: DashboardPage;
  private parametrizacionServiciosPage: ParametrizacionServiciosPage;

  constructor(page: Page) {
    this.page = page;
    this.dashboard = new DashboardPage(page);
    this.parametrizacionServiciosPage = new ParametrizacionServiciosPage(page);
  }

  // métodos aquí
}