import { Page } from "@playwright/test";

export class EmpleadosAccesosPage {
    constructor(private page: Page) {}

    botonConsultar = () =>
    this.page.locator("#btnConsult");

    checkboxSeleccion = () =>
    this.page.locator("input.ui-recordtable-selection-input").first();

    botonCambiarEstado = () =>
    this.page.locator("#btnChange");

    botonCancelar = () =>
    this.page.locator("#button_cancel");

    botonAceptarConfirmar = () =>
    this.page.locator("#button_accept");

    botonVolver = () =>
    this.page.locator("#button_back");

}