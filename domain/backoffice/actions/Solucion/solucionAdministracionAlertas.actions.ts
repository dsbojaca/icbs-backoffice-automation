import { Page } from "@playwright/test";
import { DashboardPage } from "../../pages/dashboard.page";
import { AdministracionAlertasPage } from "../../pages/Solucion/solucionAdministracionAlertas.page";

export class AdministracionAlertasActions {
  private page: Page;
  private dashboard: DashboardPage;
  private administracionAlertasPage: AdministracionAlertasPage;

  constructor(page: Page) {
    this.page = page;
    this.dashboard = new DashboardPage(page);
    this.administracionAlertasPage = new AdministracionAlertasPage(page);
  }

  // métodos aquí
}