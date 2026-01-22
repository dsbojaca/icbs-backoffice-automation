import { Page } from "@playwright/test";
import { DashboardPage } from "../../pages/dashboard.page";
import { WaitUtils } from "../../../../core/utils/waitUtils";

export class NavegacionActionsReportes {
  private page: Page;
  private dashboard: DashboardPage;

  constructor(page: Page) {
    this.page = page;
    this.dashboard = new DashboardPage(page);
  }

  // ---- LOGOUT ----
  async logout() {
    await WaitUtils.waitAndClick(this.dashboard.logoutButton());
  }

  // ---- MENÚ REPORTES ----
  clickMenuReportes = async () => {
    await WaitUtils.waitAndClick(this.dashboard.menuReportes());
  };

  clickReporteEmpresasSinActividad = async () => {
    await this.clickMenuReportes();
    await WaitUtils.waitAndClick(this.dashboard.reporteEmpresasSinActividad());
  };

  clickReporteEstadisticas = async () => {
    await this.clickMenuReportes();
    await WaitUtils.waitAndClick(this.dashboard.reporteEstadisticas());
  };

  clickReporteRetencionBorrado = async () => {
    await this.clickMenuReportes();
    await WaitUtils.waitAndClick(this.dashboard.reporteRetencionBorrado());
  };

  clickReporteDescargaSolicitados = async () => {
    await this.clickMenuReportes();
    await WaitUtils.waitAndClick(this.dashboard.reporteDescargaSolicitados());
  };

  clickReporteTramites = async () => {
    await this.clickMenuReportes();
    await WaitUtils.waitAndClick(this.dashboard.reporteTramites());
  };

}