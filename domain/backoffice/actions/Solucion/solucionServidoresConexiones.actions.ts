import { Page } from "@playwright/test";
import { DashboardPage } from "../../pages/dashboard.page";
import { ServidoresConexionesPage } from "../../pages/Solucion/solucionServidoresConexiones.page";

export class ServidoresConexionesActions {
  private page: Page;
  private dashboard: DashboardPage;
  private servidoresConexionesPage: ServidoresConexionesPage;

  constructor(page: Page) {
    this.page = page;
    this.dashboard = new DashboardPage(page);
    this.servidoresConexionesPage = new ServidoresConexionesPage(page);
  }

  // métodos aquí
}