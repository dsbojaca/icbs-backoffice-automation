import { Page } from "@playwright/test";

export class AdministracionFacturacionPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }


// Locators de definicion de planes

    editarButton = () => this.page.locator('#edit0');
    eliminarButton = () => this.page.locator('#delete0');
    crerarNuevoButton = () => this.page.locator('.ui-flowbutton-text', { hasText: 'Crear Nuevo' });
    codigoPlanTextBox = () => this.page.locator('#planIdTxt');
    nombrePlanFacturacionTextBox = () => this.page.locator('#planNameTxt');
    cantidadTransaccionesTextBox = () => this.page.locator('#noTransactionsTxt');
    costoPlanTextBox = () => this.page.locator('#planCostTxt');
    costoTransaccionAdicionalTextBox = () => this.page.locator('#additionalTransCostTxt');
    cancelarButton = () => this.page.locator('.ui-flowbutton-text', { hasText: 'Cancelar' });
    continuarButton = () => this.page.locator('.ui-flowbutton-text', { hasText: 'Continuar' });
    aceptarConfirmacionButton = () => this.page.locator('.ui-flowbutton-text', { hasText: 'Aceptar y Confirmar' });
    volverButton = () => this.page.locator('.ui-flowbutton-text', { hasText: 'Volver' });

// Locators de transacciones Facturables
    trasaccionesFacturablesTab = () => this.page.locator('.ui-tabs-text', { hasText: 'Transacciones Facturables' });


// Locators Archivo de Facturacion
    archivoFacturacionTab = () => this.page.locator('.ui-tabs-text', { hasText: 'Archivo de Facturación' });  
    diaMesArchivoFacturacionTextBox = () => this.page.locator('#invoicingDay');
    ubicacionArchivoResultadoTextBox = () => this.page.locator('#fileResult');
    horaInicioTextBox = () => this.page.locator('#initTime');
    reglasFacturacionVer = () => this.page.locator('.ui-recordtable-link-icon', { hasText: 'Reglas de Facturación' });
    finalizarButton = () => this.page.locator('.ui-flowbutton-text', { hasText: 'Finalizar' });

//locators Clientes Sin Asignacion de plan
    clientesSinAsignacionPlanTab = () => this.page.locator('.ui-tabs-text', { hasText: 'Clientes sin Asignación de Plan' });    
    exportarExcelButton = () => this.page.locator('.ui-export-text', { hasText: 'Exportar a Excel' });

//locators de ultimo proceso de facturacion
    ultimoProcesoFacturacionTab = () => this.page.locator('.ui-tabs-text', { hasText: 'Último Proceso de Facturación' });

}





