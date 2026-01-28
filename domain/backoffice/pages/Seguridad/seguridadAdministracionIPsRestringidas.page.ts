import { Page } from "@playwright/test";

export class SeguridadAdministracionIPsRestringidasPage {
    constructor(private page: Page) {}

    primerIconoModificar = () =>
    this.page.locator("span.ui-recordtable-link-icon").first();

    primerIconoEliminar = () =>
    this.page.locator("span.ui-recordtable-link-icon-delete").first();

    botonContinuar = () =>
    this.page.locator("#btnContinue");

    botonCancelar = () =>
    this.page.locator("#btnCancel");

    botonAceptarConfirmacion = () =>
    this.page.locator("#btnAceptConf");

    botonVolver = () =>
    this.page.locator("#btnVolver");

    botonFinalizar = () =>
    this.page.locator("#btnFinalize");

    mensajeResultado = () =>
    this.page.locator("#result-message");

    tabCrearIP = () =>
    this.page.locator("span.ui-tabs-text", { hasText: /^Crear IP$/ });

    inputLeadIp = () =>
    this.page.locator("#txtLeadIp");

    inputLastIp = () =>
    this.page.locator("#txtLastIp");

    botonAdicionar = () =>
    this.page.locator("#btnAdicionar");

    tabCargaArchivoIps = () =>
    this.page.locator("span.ui-tabs-text", { hasText: /^Carga de Archivo IP´s$/ });

    
}

