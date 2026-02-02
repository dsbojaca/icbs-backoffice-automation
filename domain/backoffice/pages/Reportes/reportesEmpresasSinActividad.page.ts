import { Page } from "@playwright/test";

export class ReportesEmpresasSinActividadPage {
    constructor(private page: Page) {}
    

    inputFechaInicio = () =>
    this.page.locator("#startDtVis");

    calendarioDia1 = () =>
    this.page.getByRole("link", { name: /^1$/ }).first();

    botonBuscar = () =>
    this.page.locator("#button_search");

    primerIconoDetallesTabla = () =>
    this.page.locator("span.ui-recordtable-link-icon").first();

    modalCerrar = () =>
    this.page.locator("span.ui-modalbox-close-img");


}