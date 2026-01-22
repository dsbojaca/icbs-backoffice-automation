import { Page } from "@playwright/test";

export class DashboardPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

// Ejemplo de locator típico de dashboard
  userMenu = () => this.page.locator("#userMenu");
  logoutButton = () => this.page.locator(".logout-button");
  LogoutExitosoMessage = () => this.page.locator('.ui-flowbutton-text', { hasText: 'Login' });




// Locators del menú de navegación clientes
clientesMenu = () => this.page.locator('.ui-menu-h3-text',{ hasText: 'Clientes' });
cliAdministracionClientesSubMenu = () => this.page.locator('a', { hasText: 'Administración de Clientes' });
cliAsignacionPlanFacturasSubMenu = () => this.page.locator('a', { hasText: 'Asignación Plan Facturación' });
cliActividadUsuariosSubMenu = () => this.page.locator('a', { hasText: 'Actividad de Usuarios' });
cliPaquetesServiciosSubMenu = () => this.page.locator('a', { hasText: 'Paquetes de Servicios' });
cliSegmentosMercadoSubMenu = () => this.page.locator('a', { hasText: 'Segmentos de Mercado' });
cliRelacionesComercialesSubMenu = () => this.page.locator('a', { hasText: 'Relaciones Comerciales' });
cliCalendariosSubMenu = () => this.page.locator('a', { hasText: 'Calendarios' });
cliHorariosEspecialesSubMenu = () => this.page.locator('a', { hasText: 'Horarios Especiales' });
cliPublicidadSubMenu = () => this.page.locator('a', { hasText: 'Publicidad' });
cliAdministracionFacturacionSubMenu = () => this.page.locator('a', { hasText: 'Administración Facturación' });
cliAdministracionOnboardingSubMenu = () => this.page.locator('a', { hasText: 'Administración de Onboarding' });
cliTokensVirtualesSubMenu = () => this.page.locator('a', { hasText: 'Tokens Virtuales' });
cliRegeneracionArchivosSubMenu = () => this.page.locator('a', { hasText: 'Regeneración de Archivos' });






}
