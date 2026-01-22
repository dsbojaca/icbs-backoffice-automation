import { Page } from "@playwright/test";
import { DashboardPage } from "../../pages/dashboard.page";
import { WaitUtils } from "../../../../core/utils/waitUtils";

export class NavegacionActions {
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
    
  // ---- MENÚ SEGURIDAD ----
  clickMenuSeguridad = async () => {
    await WaitUtils.waitAndClick(this.dashboard.menuSeguridad());
  };

  clickSeguridadAdminIP = async () => {
    await this.clickMenuSeguridad();
    await WaitUtils.waitAndClick(this.dashboard.seguridadAdminIP());
  };

  clickSeguridadVencimientoLlaves = async () => {
    await this.clickMenuSeguridad();
    await WaitUtils.waitAndClick(this.dashboard.seguridadVencimientoLlaves());
  };

  clickSeguridadAdminImagenes = async () => {
    await this.clickMenuSeguridad();
    await WaitUtils.waitAndClick(this.dashboard.seguridadAdminImagenes());
  };

  clickSeguridadControlTransaccional = async () => {
    await this.clickMenuSeguridad();
    await WaitUtils.waitAndClick(this.dashboard.seguridadControlTransaccional());
  };

  clickSeguridadPoliticaCredenciales = async () => {
    await this.clickMenuSeguridad();
    await WaitUtils.waitAndClick(this.dashboard.seguridadPoliticaCredenciales());
  };

  clickSeguridadDiccionario = async () => {
    await this.clickMenuSeguridad();
    await WaitUtils.waitAndClick(this.dashboard.seguridadDiccionario());
  };

  clickSeguridadBloqueoMasivoEmpresas = async () => {
    await this.clickMenuSeguridad();
    await WaitUtils.waitAndClick(this.dashboard.seguridadBloqueoMasivoEmpresas());
  };


}
