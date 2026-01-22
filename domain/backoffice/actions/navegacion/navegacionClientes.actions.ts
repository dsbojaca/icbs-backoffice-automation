import { Page } from "@playwright/test";
import { DashboardPage } from "../../pages/dashboard.page";

export class NavegacionActionsclientes {
  private page: Page;
  private dashboard: DashboardPage;

  constructor(page: Page) {
    this.page = page;
    this.dashboard = new DashboardPage(page);
  }

  async cliAdminitracionClientes() {
    await this.dashboard.clientesMenu().isEnabled();
    await this.dashboard.clientesMenu().click();
    await this.dashboard.cliAdministracionClientesSubMenu().isEnabled();
    await this.dashboard.cliAdministracionClientesSubMenu().click();
  }

  async cliRegeneracionArchivos() {
    await this.dashboard.clientesMenu().click();
    await this.dashboard.cliRegeneracionArchivosSubMenu().click();
  } 
  
  async cliAsignacionPlanFacturas() {
    await this.dashboard.clientesMenu().click();
    await this.dashboard.cliAsignacionPlanFacturasSubMenu().click();
  }
  
  async cliActividadUsuarios() {
    await this.dashboard.clientesMenu().click();
    await this.dashboard.cliActividadUsuariosSubMenu().click();
  }

  async cliPaquetesServicios() {
    await this.dashboard.clientesMenu().click();
    await this.dashboard.cliPaquetesServiciosSubMenu().click();
  }

  async cliSegmentosMercado() {
    await this.dashboard.clientesMenu().click();
    await this.dashboard.cliSegmentosMercadoSubMenu().click();
  } 

  async cliRelacionesComerciales() {
    await this.dashboard.clientesMenu().click();
    await this.dashboard.cliRelacionesComercialesSubMenu().click();
  }

  async cliCalendarios() {          
    await this.dashboard.clientesMenu().click();
    await this.dashboard.cliCalendariosSubMenu().click();
  } 

  async cliHorariosEspeciales() {
    await this.dashboard.clientesMenu().click();
    await this.dashboard.cliHorariosEspecialesSubMenu().click();
  }

  async cliPublicidad() {
    await this.dashboard.clientesMenu().click();
    await this.dashboard.cliPublicidadSubMenu().click();
  }

  async cliAdministracionFacturacion() {
    await this.dashboard.clientesMenu().click();
    await this.dashboard.cliAdministracionFacturacionSubMenu().click();
  }

  async cliAdministracionOnboarding() {     
    await this.dashboard.clientesMenu().click();
    await this.dashboard.cliAdministracionOnboardingSubMenu().click();
  }

  async cliTokensVirtuales() {
    await this.dashboard.clientesMenu().click();
    await this.dashboard.cliTokensVirtualesSubMenu().click();
  }
}