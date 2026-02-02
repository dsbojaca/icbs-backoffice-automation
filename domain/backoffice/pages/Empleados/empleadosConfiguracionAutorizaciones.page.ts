import { Page } from "@playwright/test";

export class EmpleadosConfiguracionAutorizacionesPage {
    constructor(private page: Page) {}

    tabCrearRol = () =>
    this.page.getByText("Crear Rol", { exact: true });

    inputNombreRol = () =>
    this.page.locator("#nombre");

    inputDescripcionRol = () =>
    this.page.locator("#descripcion");

    comboInicial = () =>
    this.page.locator("button.ui-combobox-button").first();

    comboSegundo = () =>
    this.page.locator("button.ui-combobox-button").nth(1);

    comboUltimoItemLista = () =>
    this.page.locator("li.ui-combobox-li").last();

    comboPrimerItemLista = () =>
    this.page.locator("li.ui-combobox-li").first();

    ComboItemServidoresConexiones= () =>
        this.page.locator("li.ui-combobox-li", { hasText: "Servidores y Conexiones" });


    ComboItemEstadoActivo = () =>
    this.page.getByText("Activo", { exact: true });

    ComboItemEstadoInactivo = () =>
    this.page.locator("li.ui-combobox-li", { hasText: "Inactivo" }).first();

    primerIconoTabla = () =>
    this.page.locator("span.ui-recordtable-link-icon").first();

    tabAsignacionUsuarios = () =>
    this.page.getByText("Asignación de Usuarios", { exact: true });

    tabRolesCreados = () =>
    this.page.getByText("Roles Creados", { exact: true });

    comboAsignacionUsuarios = () =>
    this.page.locator("button.ui-combobox-button").nth(1);

    primerItemLista = () =>
    this.page.locator("li.ui-combobox-li").first();

    labelTodo = () =>
    this.page.getByText("Todo", { exact: true });

    tabCrearAutorizacion = () =>
    this.page.getByText("Crear Autorización", { exact: true });

    primerItemCrearAutorizacion = () =>
    this.page.locator("li.ui-combobox-li").first();

    inputNameGroup = () =>
    this.page.locator("#nameGroup");

    labelAdicionarRol = () =>
    this.page.getByText("Adicionar Rol", { exact: true });

    labelAgregarGrupo = () =>
    this.page.getByText("Agregar grupo", { exact: true });

    //Iconos
    primerIconoModificarTabla = () =>
    this.page.locator("#edit0").first();

    primerIconoEliminarTabla = () =>
    this.page.locator("#delete0").first();


    // --- Botones ---
    botonContinuar = () => this.page.locator("#btncontinuar");
    botonCancelar = () => this.page.locator("#btnAcceptCancel");
    botonNext = () => this.page.locator("#btnNext");
    botonCancelarCrearRol = () => this.page.locator("#btnCancel");
    botonAceptarConfirmacion = () => this.page.locator("#btnAceptConf");
    botonVolver = () => this.page.locator("#btnBack");
    botonFinalizar = () => this.page.locator("#btnEnd");
    botonContinuarCrearRol = () => this.page.locator("#btnAcceptConfirm");



}