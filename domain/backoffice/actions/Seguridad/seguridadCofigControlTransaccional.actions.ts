import { Page } from "@playwright/test";
import { SeguridadConfigControlTransaccionalPage } from "../../pages/Seguridad/seguridadCofigControlTransaccional.page";


export class SeguridadConfigControlTransaccionalActions {
    private page: Page;
    private seguridadConfigControlTransaccionalPage: SeguridadConfigControlTransaccionalPage;    
    constructor(page: Page) {
        this.page = page;
        this.seguridadConfigControlTransaccionalPage = new SeguridadConfigControlTransaccionalPage(page);
    }

    
    clickTabControlAgente = async () => {
        await this.seguridadConfigControlTransaccionalPage.tabControlAgente().isEnabled();
        await this.seguridadConfigControlTransaccionalPage.tabControlAgente().click();
    }
    clickTabDobleConfirmacionPse = async () => {
        await this.seguridadConfigControlTransaccionalPage.tabDobleConfirmacionPse().isEnabled();
        await this.seguridadConfigControlTransaccionalPage.tabDobleConfirmacionPse().click();
    }
    imputNombreEmpresa = async (nombreEmpresa: string) => {
        await this.seguridadConfigControlTransaccionalPage.inputNombreEmpresa().isEnabled();
        await this.seguridadConfigControlTransaccionalPage.inputNombreEmpresa().fill(nombreEmpresa);
    }

    clickComboBoxUsoAgente = async () => {
        await this.seguridadConfigControlTransaccionalPage.comboButton2().isEnabled();
        await this.seguridadConfigControlTransaccionalPage.comboButton2().click();
    }

    clickItemComboNorequerido = async () => {   
        await this.seguridadConfigControlTransaccionalPage.comboItemNoRequerido().isEnabled();
        await this.seguridadConfigControlTransaccionalPage.comboItemNoRequerido().click();
    }   

    checkBoxConsultarPrimerRegistro = async () => {
        await this.seguridadConfigControlTransaccionalPage.checkboxSeleccion().isEnabled();
        await this.seguridadConfigControlTransaccionalPage.checkboxSeleccion().check();
    }


    // Botones
    clikBotonCambiar = async () => {
        await this.seguridadConfigControlTransaccionalPage.botonCambiarEstado().isEnabled();
        await this.seguridadConfigControlTransaccionalPage.botonCambiarEstado().click();
    }

    clikBotonContinuar = async () => {
        await this.seguridadConfigControlTransaccionalPage.botonContinuar().isEnabled();
        await this.seguridadConfigControlTransaccionalPage.botonContinuar().click();
    }
   clickBotonAceptarConfirmacion = async () => {
        await this.seguridadConfigControlTransaccionalPage.botonAceptarConfirmacion().isEnabled();
        await this.seguridadConfigControlTransaccionalPage.botonAceptarConfirmacion().click();
    }
    clickBotonFinalizar = async () => {
        await this.seguridadConfigControlTransaccionalPage.botonFinalizar().isEnabled();
        await this.seguridadConfigControlTransaccionalPage.botonFinalizar().click();
    }
    clickBotonVolver = async () => {
        await this.seguridadConfigControlTransaccionalPage.botonVolver().isEnabled();
        await this.seguridadConfigControlTransaccionalPage.botonVolver().click();
    }
    clickBotonCancelar = async () => {
        await this.seguridadConfigControlTransaccionalPage.botonCancelar().isEnabled();
        await this.seguridadConfigControlTransaccionalPage.botonCancelar().click();
    }
    clickBotonBuscar = async () => {
        await this.seguridadConfigControlTransaccionalPage.botonBuscar().isEnabled();
        await this.seguridadConfigControlTransaccionalPage.botonBuscar().click();
    }

    clikBotonAceptarConfirmarControlAgente = async () => {
        await this.seguridadConfigControlTransaccionalPage.botonAceptarConfirmarControlAgente().isEnabled();
        await this.seguridadConfigControlTransaccionalPage.botonAceptarConfirmarControlAgente().click();
    }
    clikBotonCancelarControlAgente = async () => {
        await this.seguridadConfigControlTransaccionalPage.botonCancelarControlAgente().isEnabled();
        await this.seguridadConfigControlTransaccionalPage.botonCancelarControlAgente().click();
    }
    clikBotonVolverControlAgente = async () => {
        await this.seguridadConfigControlTransaccionalPage.botonVolverControlAgente().isEnabled();
        await this.seguridadConfigControlTransaccionalPage.botonVolverControlAgente().click();
    }


}
