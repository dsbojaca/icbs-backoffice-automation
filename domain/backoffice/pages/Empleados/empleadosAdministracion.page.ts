import { Page } from "@playwright/test";

export class  EmpleadosAdministracionPage {
    constructor(private page: Page) {}
    
    radioDateRange = () =>
    this.page.locator("#ui_rad_4");

    calendarioInicio = () =>
    this.page.locator("#startDtVis").first();

    calendarioDia1 = () =>
    this.page.getByRole("link", { name: /^1$/ }).first();

    btnBuscar = () =>
    this.page.locator("#btnSearch");

    primerIconoDetallesTabla = () =>
    this.page.locator("span.ui-recordtable-link-icon").first();

    cerrarModalTexto = () =>
    this.page.getByText("Cerrar", { exact: true });

    // ---- CREAR EMPLEADO ----

    // Tab principal
    crearEmpleadoTab = () =>
    this.page.locator("span.ui-tabs-text", { hasText: "Crear Empleado" });

    // Inputs principales
    inputNombreEmpleado = () =>
    this.page.getByRole('textbox', { name: 'Nombre(s)' });

    inputApellidoEmpleado = () =>
    this.page.locator("#txtLastName");

    // Primer botón de tipo combo
    comboTipoDocumentoButton = () =>
    this.page.locator("button.ui-combobox-button").first();

    // Opción: Cédula de Ciudadanía
    comboTipoDocumentoCedula = () =>
    this.page.locator("li.ui-combobox-li", { hasText: "Cédula de Ciudadanía" });

    // Email
    inputEmailEmpleado = () =>
    this.page.locator("#txtEmail");

    // Código interno
    inputCodigoInterno = () =>
    this.page.locator("#txtInternalCode");

    // Username
    inputUsernameEmpleado = () =>
    this.page.locator("#txtUsername");

    // Cargo o posición
    inputCargoEmpleado = () =>
    this.page.locator("#txtPosition");

    // Número de identificación
    inputIdentNumber = () =>
    this.page.locator("#identNumber");

    // Segundo combobox
    comboPerfilButton = () =>
    this.page.locator("button.ui-combobox-button").nth(1);

    // Primer ítem del segundo combo (ejemplo: BUG)
    comboPrimerItem = () =>
    this.page.getByText('BUG', { exact: true });

    // Botones de navegación
    btnContinuar = () =>
    this.page.locator("button#btnContinue.ui-button-next");

    btnContinueAccept = () =>
    this.page.locator("button#btnContinue.ui-button-accept");

    btnCancel = () =>
    this.page.locator("button#btnCancel.ui-button-cancel");

    btnVolver = () =>
    this.page.locator("button#btnBack.ui-button-back");


}