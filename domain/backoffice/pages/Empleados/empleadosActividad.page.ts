import { Page } from "@playwright/test";

export class EmpleadosActividadPage {
    constructor(private page: Page) {}

    comboBusqueda = () =>
    this.page.locator("button.ui-combobox-button").first();

    primerItemLista = () =>
    this.page.locator("li.ui-combobox-li").first();

    radioBuscarTodo = () =>
    this.page.locator("#search_all");

    botonBuscar = () =>
    this.page.locator("#btnFind");


}