import { Page } from "@playwright/test";
import { DashboardPage } from "../../pages/dashboard.page";
import { PublicacionesPage } from "../../pages/Solucion/solucionPublicaciones.page";

export class PublicacionesActions {
  private page: Page;
  private dashboard: DashboardPage;
  private publicacionesPage: PublicacionesPage;

  constructor(page: Page) {
    this.page = page;
    this.dashboard = new DashboardPage(page);
    this.publicacionesPage = new PublicacionesPage(page);
  }

  // métodos aquí
}