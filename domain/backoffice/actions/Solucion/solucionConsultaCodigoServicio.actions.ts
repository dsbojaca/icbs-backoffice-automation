import { Page } from "@playwright/test";
import { DashboardPage } from "../../pages/dashboard.page";
import { ConsultaCodigoServicioPage } from "../../pages/Solucion/solucionConsultaCodigoServicio.page";

export class ConsultaCodigoServicioActions {
  private page: Page;
  private dashboard: DashboardPage;
  private consultaCodigoServicioPage: ConsultaCodigoServicioPage;

  constructor(page: Page) {
    this.page = page;
    this.dashboard = new DashboardPage(page);
    this.consultaCodigoServicioPage = new ConsultaCodigoServicioPage(page);
  }

  // métodos aquí
}