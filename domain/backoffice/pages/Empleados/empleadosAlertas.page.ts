import { Page } from "@playwright/test";

export class EmpleadosAlertasPage {
    constructor(private page: Page) {}

    comboTipo1 = () =>
    this.page.locator("button.ui-combobox-button").first();

    comboTipo2 = () =>
    this.page.locator("button.ui-combobox-button").nth(1);

    comboTipo3 = () =>
    this.page.locator("button.ui-combobox-button").nth(2);
    
    opcionClientes = () =>
    this.page.locator("li.ui-combobox-li", { hasText: "Clientes" });

    opcionEmpleados = () =>
    this.page.locator("li.ui-combobox-li", { hasText: "Empleados" });

    opcionOtros = () =>
    this.page.locator("li.ui-combobox-li", { hasText: "Otros" });

    opcionEliminacionIP = () =>
    this.page.locator('li.ui-combobox-li:has-text("Eliminación de IP o rango de IP empresa")');


    primerItemLista = () =>
    this.page.locator("li.ui-combobox-li").first(); 
    
    ultimoItemLista = () =>
    this.page.locator("li.ui-combobox-li").nth(-1);

    primerIconoEditarTabla = () =>
    this.page.locator("span.ui-recordtable-link-icon").first();

    primerIconoEliminarTabla = () =>
    this.page.locator("#delete0").first();

    tabInscribirAlerta = () =>
    this.page.getByText("Inscribir Alerta", { exact: true });

    primerItemListaHover = () =>
    this.page.locator("li.ui-combobox-li").first();

    checkboxEnviarEmail = () =>
    this.page.locator("#checkEmail");

    


     // --- Botones ---
    botonBuscar = () => this.page.locator("#btnSearch");
    botonContinuar = () => this.page.locator("#btnContinue");
    botonCancelar = () => this.page.locator("#btnCancel");
    botonAceptarConfirmacion = () => this.page.locator("#btnAcceptConfirm");
    botonVolver = () => this.page.locator("#btnBack");
    botonFinalizar = () => this.page.locator("#btnEnd");
    botonConfirmar = () => this.page.locator("#btnConfirm");
    


}