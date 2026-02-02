import { Page } from "@playwright/test";
import { EmpleadosAlertasPage } from "../../pages/Empleados/empleadosAlertas.page";

export class EmpleadosAlertasActions {
    private page: Page;
    private empleadosAlertasPage: EmpleadosAlertasPage;    

    constructor(page: Page) {
        this.page = page;
        this.empleadosAlertasPage = new EmpleadosAlertasPage(page);
    }

    clickComboTipo1 = async () => {
        await this.empleadosAlertasPage.comboTipo1().isEnabled();
        await this.empleadosAlertasPage.comboTipo1().click();
    }
    clickComboTipo2 = async () => {
        await this.empleadosAlertasPage.comboTipo2().isEnabled();
        await this.empleadosAlertasPage.comboTipo2().click();
    }
    clickComboTipo3 = async () => {
        await this.empleadosAlertasPage.comboTipo3().isEnabled();
        await this.empleadosAlertasPage.comboTipo3().click();
    }

    clickOpcionClientes = async () => {
        await this.empleadosAlertasPage.opcionClientes().isEnabled();
        await this.empleadosAlertasPage.opcionClientes().click();
    }
    clickOpcionEmpleados = async () => {
        await this.empleadosAlertasPage.opcionEmpleados().isEnabled();
        await this.empleadosAlertasPage.opcionEmpleados().click();
    }

    clickOpcionOtros = async () => {
        await this.empleadosAlertasPage.opcionOtros().isEnabled();
        await this.empleadosAlertasPage.opcionOtros().click();
    }

    clickOpcionEliminacionIP = async () => {
        await this.empleadosAlertasPage.opcionEliminacionIP().isEnabled();
        await this.empleadosAlertasPage.opcionEliminacionIP().click();
    }

    clickPrimerItemLista = async () => {
        await this.empleadosAlertasPage.primerItemLista().isEnabled();
        await this.empleadosAlertasPage.primerItemLista().click();
    }

    clickUltimoItemLista = async () => {
        await this.empleadosAlertasPage.ultimoItemLista().isEnabled();
        await this.empleadosAlertasPage.ultimoItemLista().click();
    }

    clickBotonBuscar = async () => {
        await this.empleadosAlertasPage.botonBuscar().isEnabled();
        await this.empleadosAlertasPage.botonBuscar().click();
    }
    clickBotonCancelar = async () => {
        await this.empleadosAlertasPage.botonCancelar().isEnabled();
        await this.empleadosAlertasPage.botonCancelar().click();
    }

    clickPrimerIconoEditarTabla = async () => {
        await this.empleadosAlertasPage.primerIconoEditarTabla().isEnabled();
        await this.empleadosAlertasPage.primerIconoEditarTabla().click();
    }
    clickPrimerIconoEliminarTabla = async () => {
        await this.empleadosAlertasPage.primerIconoEliminarTabla().isEnabled();
        await this.empleadosAlertasPage.primerIconoEliminarTabla().click();
    }

    clickCheckboxEnviarEmail = async () => {
        await this.empleadosAlertasPage.checkboxEnviarEmail().isEnabled();
        await this.empleadosAlertasPage.checkboxEnviarEmail().check();
    }

    clickTabInscribirAlerta = async () => {
        await this.empleadosAlertasPage.tabInscribirAlerta().isEnabled();
        await this.empleadosAlertasPage.tabInscribirAlerta().click();
    }


    

    // --- Botones ---
    clickBotonContinuar = async () => {
        await this.empleadosAlertasPage.botonContinuar().isEnabled();
        await this.empleadosAlertasPage.botonContinuar().click();
    }
    clickBotonConfirmar = async () => {
        await this.empleadosAlertasPage.botonConfirmar().isEnabled();
        await this.empleadosAlertasPage.botonConfirmar().click();

    }
    clickBotonVolver = async () => {
        await this.empleadosAlertasPage.botonVolver().isEnabled();
        await this.empleadosAlertasPage.botonVolver().click();
    }
    clickBotonAceptarConfirmacion = async () => {
        await this.empleadosAlertasPage.botonAceptarConfirmacion().isEnabled();
        await this.empleadosAlertasPage.botonAceptarConfirmacion().click();
    }
    clickBotonFinalizar = async () => {
        await this.empleadosAlertasPage.botonFinalizar().isEnabled();
        await this.empleadosAlertasPage.botonFinalizar().click();
    }

   

}