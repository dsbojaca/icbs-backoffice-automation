import { Page } from "@playwright/test";

export class EmpleadosCambioClavePropiaPage {
    constructor(private page: Page) {}

    inputPasswordActual = () =>
    this.page.getByRole("textbox", { name: "ssecurID" });

    inputPasswordNueva = () =>
    this.page.getByRole("textbox", { name: "nnewPassword" });

    inputPasswordConfirmar = () =>
    this.page.getByRole("textbox", { name: "cconfirmPassword" });

    botonActualizar = () =>
    this.page.locator("#btnUpdate");

    botonCancelar = () =>
    this.page.locator("#btnCancel");


}