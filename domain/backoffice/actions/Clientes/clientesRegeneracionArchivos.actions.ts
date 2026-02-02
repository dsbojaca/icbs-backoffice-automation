import { Page } from "@playwright/test";
import { DashboardPage } from "../../pages/dashboard.page";
import { RegeneracionArchivosPage } from "../../pages/Clientes/clientesRegeneracionArchivos.page";

export class RegeneracionArchivosActions {
  private page: Page;
  private dashboard: DashboardPage;
  private regeneracionArchivosPage: RegeneracionArchivosPage;

  constructor(page: Page) {
    this.page = page;
    this.dashboard = new DashboardPage(page);
    this.regeneracionArchivosPage = new RegeneracionArchivosPage(page);
  }

  async clickCargaArchivos() {
    await this.regeneracionArchivosPage.cargaArchivosButton().isEnabled();
    await this.regeneracionArchivosPage.cargaArchivosButton().click();
  } 

  async clickExportarExcel() {
    await this.regeneracionArchivosPage.exportarExcelButton().isEnabled();
    await this.regeneracionArchivosPage.exportarExcelButton().click();
  }
  
}