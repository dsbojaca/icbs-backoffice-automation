
import { Page } from "@playwright/test";

export class SeguridadConfigControlTransaccionalPage {
    constructor(private page: Page) {}

   
    tabControlAgente = () =>
    this.page.locator("span.ui-tabs-text", { hasText: /^Control Agente$/ });

    inputNombreEmpresa = () =>
    this.page.locator("#companyName");

    comboButton2 = () =>
    this.page.locator("button.ui-combobox-button").nth(1);

    comboItemNoRequerido = () =>
    this.page.locator("li.ui-combobox-li", { hasText: /^No Requerido$/ });

    comboItemRequerido = () =>
    this.page.locator("li.ui-combobox-li", { hasText: /^Requerido$/ });

    primerIconoTabla = () =>
    this.page.locator("span.ui-recordtable-link-icon").first();

    modalCerrar = () =>
    this.page.locator("span.ui-modalbox-close-img");

    checkboxSeleccion = () =>
    this.page.locator("input.ui-recordtable-selection-input").nth(1);

    tabDobleConfirmacionPse = () =>
    this.page.locator("span.ui-tabs-text", { hasText: /^Doble Confirmación PSE$/ });

    // Botones
    botonBuscar = () =>
    this.page.locator("#btnFind");

    botonCambiarEstado = () =>
    this.page.locator("#btnChange");

     botonContinuar = () =>
    this.page.locator("#btnContinue");

    botonCancelar = () =>
    this.page.locator("#btnCancel");

    botonAceptarConfirmacion = () =>
    this.page.locator("#btnAcceptConfirm");

    botonVolver = () =>
    this.page.locator("#btnBack");

    botonFinalizar = () =>
    this.page.locator("#btnEnd");

    botonAceptarConfirmarControlAgente=() =>
    this.page.locator("#button_accept");

    botonCancelarControlAgente=() =>
    this.page.locator("#button_cancel");

    botonVolverControlAgente=() =>
    this.page.locator("#button_back");
}
