import { Page } from "@playwright/test";
import { DashboardPage } from "../../pages/dashboard.page";
import { AdministracionContenidoDemoPage } from "../../pages/Solucion/solucionAdministracionContenidoDemo.page";

export class AdministracionContenidoDemoActions {
  private page: Page;
  private dashboard: DashboardPage;
  private administracionContenidoDemoPage: AdministracionContenidoDemoPage;

  constructor(page: Page) {
    this.page = page;
    this.dashboard = new DashboardPage(page);
    this.administracionContenidoDemoPage = new AdministracionContenidoDemoPage(page);
  }

  // métodos aquí
}