import { Page } from "@playwright/test";

export class TiposProductosPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }



  codigoPublicidadTextBox = () => this.page.locator('#code');
  nombrePublicidadTextBox = () => this.page.locator('#name');
  estadoPublicidadComboBox = () => this.page.locator('#cmbpublicityStatuses');
  estadoActivoSelector = () => this.page.locator('#ulcmbpublicityStatuses li', { hasText: 'Activa' });
  estadoInactivoSelector = () => this.page.locator('#ulcmbpublicityStatuses li', { hasText: 'Inactiva' })
  zonaPublicidadComboBox = () => this.page.locator('#cmbzoneCombo');
  loginPublicidadSelector = () => this.page.locator('#ulcmbzoneCombo li', { hasText: 'Login Publicidad 1' });
  fechaInicioButton = () => this.page.locator('#startDtVis');
  fachaFinButton = () => this.page.locator('#endDtVis');
  consultarButton = () => this.page.locator('.ui-flowbutton-text', { hasText: 'Consultar' });
  exportarExcelButton = () => this.page.locator('.ui-export-text', { hasText: 'Exportar a Excel' });


  crearPublicidadTab = () => this.page.locator('.ui-tabs-text', { hasText: 'Crear Publicidad' });
  codigoPublicidadCrearTextBox = () => this.page.locator('#fldCode');
  nombrePublicidadCrearTextBox = () => this.page.locator('#fldName');
  descripcionPublicidadTextBox = () => this.page.locator('#fldDescription');
  publicaCheckBox = () => this.page.locator('#fldIsPublic');
  porDefectoCheckBox = () => this.page.locator('#fldIsDefault');
  mostrarComboBox = () => this.page.locator('#cmbfldProbability');
  aVecesSelector = () => this.page.locator('#ulcmbfldProbability li', { hasText: 'A veces' });
  frecuentementeSelector = () => this.page.locator('#ulcmbfldProbability li', { hasText: 'Frecuentemente' });
  nuncaSelector = () => this.page.locator('#ulcmbfldProbability li', { hasText: 'Nunca' });
  ocasionalmenteSelector = () => this.page.locator('#ulcmbfldProbability li', { hasText: 'Ocasionalmente' });
  siempreSelector = () => this.page.locator('#ulcmbfldProbability li', { hasText: 'Siempre' });
  maximoVisualizacionesTextBox = () => this.page.locator('#fldMaxLimitDisplay');
  continuarButton = () => this.page.locator('.ui-flowbutton-text', { hasText: 'Continuar' });
  cancelarButton = () => this.page.locator('.ui-flowbutton-text', { hasText: 'Cancelar' });
  aceptarConfirmacionButton = () => this.page.locator('.ui-flowbutton-text', { hasText: 'Aceptar y Confirmar' });
  volverButton = () => this.page.locator('.ui-flowbutton-text', { hasText: 'Volver' });
  finalizarButton = () => this.page.locator('.ui-flowbutton-text', { hasText: 'Finalizar' });



  verPublicidadTab = () => this.page.locator('.ui-tabs-text', { hasText: 'Ver Publicidad' });
  publicidadComboBox = () => this.page.locator('#cmbpromotion');
  loginPubliciBannerSelector = () => this.page.locator('#ulcmbpromotion li', { hasText: 'Login banner 1' });
  publicidadLoginSelector = () => this.page.locator('#ulcmbpromotion li', { hasText: 'Publicidad Login 1' });

}
