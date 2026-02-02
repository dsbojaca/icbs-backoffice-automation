import { Page } from "@playwright/test";

export class EmpleadosPerfilPage {
    constructor(private page: Page) {}

    detailFirst = () =>
    this.page.locator("a.ui-link-detail").first();
    

    editFirst = () =>
        this.page.locator("a.ui-link-edit").first();
    
    deleteFirst = () =>
        this.page.locator("a.ui-link-delete").first();
    
    tabConsultarPerfiles = () =>
    this.page.locator("span.ui-tabs-text", { hasText: "Consultar Perfiles" });

    tabCrearPerfil = () =>
    this.page.locator("span.ui-tabs-text", { hasText: "Crear Perfil" });

    profileNameInput = () =>
    this.page.locator("#profileName");

    comboButtonEstado = () =>
    this.page.locator("button.ui-combobox-button").nth(0);

    comboOptionActivo = () =>
    this.page.locator("li.ui-combobox-li").nth(0);

    checkboxAccesoFuncional = () =>
    this.page.locator("input[id='101_1019901']");



     // --- Botones ---
    botonContinuar = () => this.page.locator("#btnContinue");
    botonCancelar = () => this.page.locator("#btnCancel");
    botonAceptarConfirmacion = () => this.page.locator("#btnAceptConf");
    botonVolver = () => this.page.locator("#btnBack");
    botonFinalizar = () => this.page.locator("#btnEnd");

}