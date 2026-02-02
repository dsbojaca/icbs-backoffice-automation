import { Page } from "@playwright/test";

export class reportesDescargaArchivosSolicitadosPage {
    constructor(private page: Page) {}

    comboButton = () =>
    this.page.locator("button.ui-combobox-button").nth(1);

    comboItemTodos = () =>
    this.page.locator("li.ui-combobox-li").last();

    radioLastWeek = () =>
    this.page.locator("#miRadio").nth(2);

    botonBuscar = () =>
    this.page.locator("#btnSearch");

}
