import { Page } from "@playwright/test";
import { DashboardPage } from "../../pages/dashboard.page";

export class NavegacionActionsReportes {
  private page: Page;
  private dashboard: DashboardPage;

  constructor(page: Page) {
    this.page = page;
    this.dashboard = new DashboardPage(page);
  }


  // ---- MENÚ REPORTES ----
  clickMenuReportes = async () => {
    await this.dashboard.menuReportes().isEnabled();
    await this.dashboard.menuReportes().click();
  };

  clickReporteEmpresasSinActividad = async () => {
    await this.dashboard.menuReportes().isEnabled();
    await this.dashboard.menuReportes().click();
    await this.dashboard.reporteEmpresasSinActividad().isEnabled();
    await this.dashboard.reporteEmpresasSinActividad().click()
  };

  clickReporteEstadisticas = async () => {
    await this.dashboard.menuReportes().isEnabled();
    await this.dashboard.menuReportes().click();
    await this.dashboard.reporteEstadisticas().isEnabled();
    await this.dashboard.reporteEstadisticas().click()
  };

  clickReporteRetencionBorrado = async () => {
    await this.dashboard.menuReportes().isEnabled();
    await this.dashboard.menuReportes().click();
    await this.dashboard.reporteRetencionBorrado().isEnabled();
    await this.dashboard.reporteRetencionBorrado().click()
  };

  clickReporteDescargaArchivosSolicitados = async () => {
    await this.dashboard.menuReportes().isEnabled();
    await this.dashboard.menuReportes().click();
    await this.dashboard.reporteDescargaSolicitados().isEnabled();
    await this.dashboard.reporteDescargaSolicitados().click()
  };

  clickReporteTramites = async () => {
    await this.dashboard.menuReportes().isEnabled();
    await this.dashboard.menuReportes().click();
    await this.dashboard.reporteTramites().isEnabled();
    await this.dashboard.reporteTramites().click()
  };

}