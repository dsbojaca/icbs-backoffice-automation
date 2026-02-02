import { Page } from "@playwright/test";
import { DashboardPage } from "../../pages/dashboard.page";
import { TiposProductosPage } from "../../pages/Solucion/solucionTiposProductos.page";

export class TiposProductosActions {
  private page: Page;
  private dashboard: DashboardPage;
  private tiposProductosPage: TiposProductosPage;

  constructor(page: Page) {
    this.page = page;
    this.dashboard = new DashboardPage(page);
    this.tiposProductosPage = new TiposProductosPage(page);
  }

  // métodos aquí
}