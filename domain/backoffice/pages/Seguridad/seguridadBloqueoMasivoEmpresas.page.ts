import { Page } from "@playwright/test";

export class SeguridadBloqueoMasivoEmpresasPage {
    constructor(private page: Page) {}

    comboBotonPrincipal= () =>
    this.page.locator("button.ui-combobox-button").first();

    comboPrimerItem = () =>
    this.page.locator("li.ui-combobox-li").nth(0);

    comboItemIP = () =>
    this.page.locator("li.ui-combobox-li").nth(1);

    labelEmpresa = () =>
    this.page.getByText("Empresa", { exact: true });

    labelPropiedadIntelectual = () =>
    this.page.getByText("Propiedad intelectual", { exact: true });

    inputCompanyName = () =>
    this.page.locator("#companyName");

    primerIconoTabla = () =>
    this.page.locator("span.ui-recordtable-link-icon").first();

    cerrarModal = () =>
    this.page.locator("span.ui-modalbox-close-img");

    checkboxSeleccion = () =>
    this.page.locator("input.ui-recordtable-selection-input").nth(0);

    comboImplementacion = () =>
    this.page.locator("li.ui-combobox-li", { hasText: "Implementación" }).first();

    inputStatusChangeCausal = () =>
    this.page.locator("#StatusChangeCausal");

    
    // --- Botones ---
    botonDesactivar = () =>this.page.locator("#btnChange");
    botonConsultar = () => this.page.locator("#btnConsult");
    botonContinuar = () => this.page.locator("#btnContinue");
    botonCancelar = () => this.page.locator("#button_cancel");
    botonAceptarConfirmacion = () => this.page.locator("#button_accept");
    botonVolver = () => this.page.locator("#button_back");
    botonFinalizar = () => this.page.locator("#btnEnd");
    botonAceptar = () => this.page.locator("#button_accept");


}