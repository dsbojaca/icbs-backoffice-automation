import { Page } from "@playwright/test";

export class TokensVirtualesPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

//locators de regeneracion de archivos

// Locators de ultimas Cargas
  asiganarEmpresasButton = () => this.page.locator('.ui-tabs-text', { hasText: 'Asignar Empresas' });
  buscarNombreRadioButton = () => this.page.locator('#search_company');
  buscarIdentificacionRadioButton = () => this.page.locator('#search_id');
  nombreCompaniaTextBox = () => this.page.locator('#companyName');
  tipoIdentificacionComboBox = () => this.page.locator('#cmbidentificationType');
  cedulaSelector = () => this.page.locator('#ulcmbidentificationType li', { hasText: 'Cédula de Ciudadanía' });
  cedulaExtranjeriaSelector = () => this.page.locator('#ulcmbidentificationType li', { hasText: 'Cédula Extranjería' });
  nitSelector = () => this.page.locator('#ulcmbidentificationType li', { hasText: 'NIT Persona Jurídica' });
  pasaporteSelector = () => this.page.locator('#ulcmbidentificationType li', { hasText: 'Pasaporte' });
  registroCivilSelector = () => this.page.locator('#ulcmbidentificationType li', { hasText: 'Registro Civil Nacimiento' });
  tarjetaIdentidadSelector = () => this.page.locator('#ulcmbidentificationType li', { hasText: 'Tarjeta de Identidad' });
  numeroIdentificacionTextBox = () => this.page.locator('#numberId');
  identificadorInternoTextBox = () => this.page.locator('#idInt');
  consultarButton = () => this.page.locator('.ui-flowbutton-text', { hasText: 'Consultar' });
  seleccionarTodosCheckBox = () => this.page.locator('#checkAllcompanyTable');
  verDetallesButton = () => this.page.locator('#detail0');
  adicionarListaButton = () => this.page.locator('.ui-flowbutton-text', { hasText: 'Adicionar a Lista' });



// Locators de Carga de Archivos
  activarEnrolamientosButton = () => this.page.locator('.ui-tabs-text', { hasText: 'Activar Enrolamientos' });
  seleccionarTodosEnrolamientosCheckBox = () => this.page.locator('#checkAllenrollmentPendingUsersTable');
  rechazarButton = () => this.page.locator('.ui-flowbutton-text', { hasText: 'Rechazar' });
  aprobarButton = () => this.page.locator('.ui-flowbutton-text', { hasText: 'Aprobar' });
  filtrarResultadoPanel = () => this.page.locator('.collapsible-panel-tab-text', { hasText: 'Filtrar Resultado' });
  seleccionarFiltrosComboBox = () => this.page.locator('#cmbfilter');
  empresaSelector = () => this.page.locator('#ulcmbfilter li', { hasText: 'Empresa' });
  idendificadorInternoSelector = () => this.page.locator('#ulcmbfilter li', { hasText: 'Identificador Interno' });
  numeroSerieSelector = () => this.page.locator('#ulcmbfilter li', { hasText: 'Número de Serie' });
  fechaEnrolamientoSelector = () => this.page.locator('#ulcmbfilter li', { hasText: 'Fecha Enrolamiento' });
  eliminarFiltrosButton = () => this.page.locator('.ui-flowbutton-text', { hasText: 'Eliminar Filtros' });
  filtarButton = () => this.page.locator('.ui-flowbutton-text', { hasText: 'Filtrar' });





}