import { Page } from "@playwright/test";
import { DashboardPage } from "../../pages/dashboard.page";
import { ControlMontosHorarioServicioPage } from "../../pages/Solucion/solucionControlMontosHorarioServicio.page";

export class ControlMontosHorarioServicioActions {
  private page: Page;
  private dashboard: DashboardPage;
  private controlMontosHorarioServicioPage: ControlMontosHorarioServicioPage;

  constructor(page: Page) {
    this.page = page;
    this.dashboard = new DashboardPage(page);
    this.controlMontosHorarioServicioPage = new ControlMontosHorarioServicioPage(page);
  }

  // métodos aquí
}