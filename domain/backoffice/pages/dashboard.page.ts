import { Page } from "@playwright/test";

export class DashboardPage {
  constructor(private page: Page) {}



// Ejemplo de locator típico de dashboard
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






  // CONTENEDOR PRINCIPAL DEL DASHBOARD
  userMenu = () =>  this.page.locator("div.maintop-wrap");


  // ---- MENÚ REPORTES ----
  menuReportes = () =>  this.page.getByRole("heading", { name: "Reportes" });

  reporteEmpresasSinActividad = () =>  this.page.getByRole("link", { name: "Empresas sin Actividad" });

  reporteEstadisticas = () =>  this.page.getByRole("link", { name: "Estadísticas" });

  reporteRetencionBorrado = () =>  this.page.getByRole("link", { name: "Consulta Retención y Borrado de Información" });

  reporteDescargaSolicitados = () =>  this.page.getByRole("link", { name: "Descarga Archivos Solicitados" });

  reporteTramites = () =>  this.page.getByRole("link", { name: "Trámites" });


  // ---- MENÚ SEGURIDAD ----
  menuSeguridad = () =>  this.page.getByRole("heading", { name: "Seguridad" });

  seguridadAdminIP = () =>  this.page.getByRole("link", { name: "Administración IP’s Restringidas" });

  seguridadVencimientoLlaves = () =>  this.page.getByRole("link", { name: "Consulta Vencimiento de Llaves" });

  seguridadAdminImagenes = () =>  this.page.getByRole("link", { name: "Administración de Imágenes" });

  seguridadControlTransaccional = () =>  this.page.getByRole("link", { name: "Control Transaccional" });

  seguridadPoliticaCredenciales = () =>  this.page.getByRole("link", { name: "Política de Credenciales" });

  seguridadDiccionario = () =>  this.page.getByRole("link", { name: "Diccionario de datos no Válidos" });

  seguridadBloqueoMasivoEmpresas = () =>  this.page.getByRole("link", { name: "Bloqueo Masivo de Empresas" });


  // ---- MENÚ EMPLEADOS ----
  menuEmpleados = () => this.page.getByRole("heading", { name: "Empleados" });

  empleadosEstadoOperaciones = () =>  this.page.getByRole("link", { name: "Estado Operaciones" });

  empleadosCambioClavePropia = () =>  this.page.getByRole("link", { name: "Cambio de Clave Propia Empleados" });

  empleadosAutorizaciones = () =>  this.page.getByRole("link", { name: "Autorizaciones" }).nth(1);

  empleadosConfigAutorizaciones = () =>  this.page.getByRole("link", { name: "Configuración de Autorizaciones" });

  empleadosAlertas = () =>  this.page.getByRole("link", { name: "Alertas" });

  empleadosActividad = () =>  this.page.getByRole("link", { name: "Actividad Empleados" });

  empleadosAcceso = () =>  this.page.getByRole("link", { name: "Acceso Empleados" });

  empleadosCambioClave = () =>  this.page.getByRole("link", { name: "Cambio de Clave Empleados" });

  empleadosAdministracion = () =>  this.page.getByRole("link", { name: "Administración Empleados" });

  empleadosPerfil = () =>  this.page.getByRole("link", { name: "Perfil Empleado" });
}
