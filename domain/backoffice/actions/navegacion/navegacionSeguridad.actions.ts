import { Page } from "@playwright/test";
import { DashboardPage } from "../../pages/dashboard.page";


export class NavegacionActions {
  private page: Page;
  private dashboard: DashboardPage;

  constructor(page: Page) {
    this.page = page;
    this.dashboard = new DashboardPage(page);
  }

  // ---- MENÚ SEGURIDAD ----
  clickMenuSeguridad = async () => {
    await this.dashboard.menuSeguridad().isEnabled();
    await this.dashboard.menuSeguridad().click();
  };

  clickSeguridadAdminIP = async () => {
    await this.dashboard.menuSeguridad().isEnabled();
    await this.dashboard.menuSeguridad().click();
    await this.dashboard.seguridadAdminIP().isEnabled();
    await this.dashboard.seguridadAdminIP().click();
  };


  clickSeguridadVencimientoLlaves = async () => {

    await this.dashboard.menuSeguridad().isEnabled();
    await this.dashboard.menuSeguridad().click();
    await this.dashboard.seguridadVencimientoLlaves().isEnabled();
    await this.dashboard.seguridadVencimientoLlaves().click();
  };


  clickSeguridadAdminImagenes = async () => {
    await this.dashboard.menuSeguridad().isEnabled();
    await this.dashboard.menuSeguridad().click();
    await this.dashboard.seguridadAdminImagenes().isEnabled();
    await this.dashboard.seguridadAdminImagenes().click();
  };


  clickSeguridadControlTransaccional = async () => {
    await this.dashboard.menuSeguridad().isEnabled();
    await this.dashboard.menuSeguridad().click();
    await this.dashboard.seguridadControlTransaccional().isEnabled();
    await this.dashboard.seguridadControlTransaccional().click();
  };


  clickSeguridadPoliticaCredenciales = async () => {
    await this.dashboard.menuSeguridad().isEnabled();
    await this.dashboard.menuSeguridad().click();
    await this.dashboard.seguridadPoliticaCredenciales().isEnabled();
    await this.dashboard.seguridadPoliticaCredenciales().click();

  };

  clickSeguridadDiccionario = async () => {
    await this.dashboard.menuSeguridad().isEnabled();
    await this.dashboard.menuSeguridad().click();
    await this.dashboard.seguridadDiccionario().isEnabled();
    await this.dashboard.seguridadDiccionario().click();
  };


  clickSeguridadBloqueoMasivoEmpresas = async () => {
    await this.dashboard.menuSeguridad().isEnabled();
    await this.dashboard.menuSeguridad().click();
    await this.dashboard.seguridadBloqueoMasivoEmpresas().isEnabled();
    await this.dashboard.seguridadBloqueoMasivoEmpresas().click();
  };



}
