import { Page } from "@playwright/test";

export class SeguridadConsultaVenciminetoLlavesPage  {
    constructor(private page: Page) {}

    

    tabParametrizacion = () =>
    this.page.locator("span.ui-tabs-text", { hasText: /^Parametrización$/ });

    inputEmail = () =>
    this.page.locator("#email");

    inputDays = () =>
    this.page.locator("#days");

    botonContinuar = () =>
    this.page.locator("#btnContinue");

    botonCancelar = () =>
    this.page.locator("#btnCancel");

    botonAceptarConfirmacion = () =>
    this.page.locator("#btnAcceptConfirm");
    
    botonVolver = () =>
    this.page.locator("#btnBack");

    botonFinalizar = () =>
    this.page.locator("#btnEnd");

    exportarPDF = () =>
    this.page.getByRole("link", { name: /^Exportar a PDF$/ });

}