import { Page } from "@playwright/test";
import { DashboardPage } from "../../pages/dashboard.page";
import { CargaDatosSolucionPage } from "../../pages/Solucion/solucionCargaDatosSolucion.page";

export class CargaDatosSolucionActions {
  private page: Page;
  private dashboard: DashboardPage;
  private cargaDatosSolucionPage: CargaDatosSolucionPage;

  constructor(page: Page) {
    this.page = page;
    this.dashboard = new DashboardPage(page);
    this.cargaDatosSolucionPage = new CargaDatosSolucionPage(page);
  }

  // métodos aquí
}