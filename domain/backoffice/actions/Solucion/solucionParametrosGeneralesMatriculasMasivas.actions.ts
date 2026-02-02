import { Page } from "@playwright/test";
import { DashboardPage } from "../../pages/dashboard.page";
import { ParametrosGeneralesMatriculasMasivasPage } from "../../pages/Solucion/solucionParametrosGeneralesMatriculasMasivas.page";

export class ParametrosGeneralesMatriculasMasivasActions {
  private page: Page;
  private dashboard: DashboardPage;
  private parametrosGeneralesMatriculasMasivasPage: ParametrosGeneralesMatriculasMasivasPage;

  constructor(page: Page) {
    this.page = page;
    this.dashboard = new DashboardPage(page);
    this.parametrosGeneralesMatriculasMasivasPage = new ParametrosGeneralesMatriculasMasivasPage(page);
  }

  // métodos aquí
}