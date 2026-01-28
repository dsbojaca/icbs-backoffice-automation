import { Page } from "@playwright/test";

export class EmpleadosEstadoOperacionesPage {
    constructor(private page: Page) {}

    primerIconoTabla = () =>
    this.page.locator("span.ui-recordtable-link-icon").first();

    cerrarModal = () =>
    this.page.locator("span.ui-modalbox-close-img");

    tabProcesosDesatendidos = () =>
    this.page.getByText("Procesos Desatendidos", { exact: true });



}