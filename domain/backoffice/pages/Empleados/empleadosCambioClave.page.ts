import { Page } from "@playwright/test";

export class  EmpleadosCambioClavePage {
    constructor(private page: Page) {}

    inputNombre = () =>
    this.page.locator('input[name="txtName"]')

    botonConsultar = () =>
    this.page.locator("#btnSearch");

    primerIconoTabla = () =>
    this.page.locator("span.ui-recordtable-link-icon").first();

    botonCancelar = () => this.page.locator("#btnCancel");

    botonAceptarConfirmacion = () => this.page.locator("#btnAcceptConfirm");

    botonVolver = () => this.page.locator("#btnBack");

}