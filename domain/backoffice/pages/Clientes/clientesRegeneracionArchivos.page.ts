import { Page } from "@playwright/test";

export class RegeneracionArchivosPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

//locators de regeneracion de archivos

// Locators de ultimas Cargas
  ultimasCargasButton = () => this.page.locator('.ui-tabs-text', { hasText: 'Últimas Cargas' });
  exportarExcelButton = () => this.page.locator('.ui-export-text', { hasText: 'Exportar a Excel' });
  exportarPDFButton = () => this.page.locator('.ui-export-text', { hasText: 'Exportar a PDF' });
  verRegistrosComboBox = () => this.page.locator('#pagesfileRegenerationInquiry');

// Locators de Carga de Archivos
  cargaArchivosButton = () => this.page.locator('.ui-tabs-text', { hasText: 'Carga de Archivos' });
  subirArchivos = () => this.page.locator('#fileToUpload');
  cargarArhcivo = () => this.page.locator('#btnContinue');



}