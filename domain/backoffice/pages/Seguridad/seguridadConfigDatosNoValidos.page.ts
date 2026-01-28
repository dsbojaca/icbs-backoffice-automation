import { Page } from "@playwright/test";

export class SeguridadConfigDatosNoValidosPage {
    constructor(private page: Page) {}

    // --- Ícono tabla ---
    primerIconoEditarTabla = () =>
    this.page.locator("span.ui-recordtable-link-icon").first();

    primerIconoBorrarTabla = () =>
    this.page.locator("#delete0").nth(0);

    // --- Modal ---
    cerrarModal = () =>
    this.page.locator("span.ui-modalbox-close-img");

    // --- Tabs ---
    tabCrearRegistro = () =>
    this.page.locator("span.ui-tabs-text", { hasText: "Crear Registro" });

    tabCargarArchivos = () =>
    this.page.locator("span.ui-tabs-text", { hasText: "Cargar Archivos" });

    tabListaDestinatarios = () =>
    this.page.locator("span.ui-tabs-text", { hasText: "Lista de Destinatarios" });

    // --- Inputs ---
    inputInvalidPwd = () =>
    this.page.locator("#invalidPwd");

    // --- Combo Estado ---
    comboEstadoBoton = () =>
    this.page.locator("button.ui-combobox-button").first();

    comboItemEstadoActivo = () =>
    this.page.locator("li.ui-combobox-li").nth(0);

    comboItemEstadoInactivo = () =>
    this.page.locator("li.ui-combobox-li").nth(1);

    // --- Radios ---
    radioInvalidPassword = () =>
    this.page.locator("input#invalidPassword");

    radioRecipient = () =>
    this.page.locator("input#recipient");

    // --- Botones ---
    botonContinuar = () => this.page.locator("#btnContinue");
    botonCancelar = () => this.page.locator("#btnCancel");
    botonAceptarConfirmacion = () => this.page.locator("#btnAcceptConfirm");
    botonVolver = () => this.page.locator("#btnBack");
    botonFinalizar = () => this.page.locator("#btnEnd");



}