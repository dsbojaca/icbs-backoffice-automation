import { Page } from "@playwright/test";

export class AdministracionOnboardingPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }


// Locators de Administracion de Onboarding
  reiniciarOnboardingButton = () => this.page.locator('#restart0');
  editarOnboardingButton = () => this.page.locator('#edit0');
  eliminarOnboardingButton = () => this.page.locator('#delete0');
  exportarExcelButton = () => this.page.locator('.ui-export-text', { hasText: 'Exportar a Excel' });
  exportarPDFButton = () => this.page.locator('.ui-export-text', { hasText: 'Exportar a PDF' });

// locators reinicio onboarding
  aceptarConfirmacionButton = () => this.page.locator('.ui-flowbutton-text', { hasText: 'Aceptar y Confirmar' });
  volverButton = () => this.page.locator('.ui-flowbutton-text', { hasText: 'Volver' });
  finalizarButton = () => this.page.locator('.ui-flowbutton-text', { hasText: 'Finalizar' });

// locators editar onboarding
  nombreOnboardingTextBox = () => this.page.locator('#onboardingName');
  numeroMaximoVisualizacionesTextBox = () => this.page.locator('#views');
  estadoOnboardingComboBox = () => this.page.locator('#cmbStatusCombo');
  estadoActivoSelector = () => this.page.locator('#ulcmbStatusCombo li', { hasText: 'Activo' });
  estadoInactivoSelector = () => this.page.locator('#ulcmbStatusCombo li', { hasText: 'Inactivo' });
  cancelarButton = () => this.page.locator('.ui-flowbutton-text', { hasText: 'Cancelar' });
  continuarButton = () => this.page.locator('.ui-flowbutton-text', { hasText: 'Continuar' });





}