import { Page } from "@playwright/test";
import { SeguridadConfigDatosNoValidosPage } from "../../pages/Seguridad/seguridadConfigDatosNoValidos.page";

export class SeguridadConfigDatosNoValidosActions {
    private page: Page;
    private seguridadConfigDatosNoValidosPage: SeguridadConfigDatosNoValidosPage;
    constructor(page: Page) {
        this.page = page;
        this.seguridadConfigDatosNoValidosPage = new SeguridadConfigDatosNoValidosPage(page);
    }

    clickPrimerIconoEditarTabla = async () => {
        await this.seguridadConfigDatosNoValidosPage.primerIconoEditarTabla().isEnabled();
        await this.seguridadConfigDatosNoValidosPage.primerIconoEditarTabla().click();
    }
    clickPrimerIconoBorrarTabla = async () => {
        await this.seguridadConfigDatosNoValidosPage.primerIconoBorrarTabla().isEnabled();
        await this.seguridadConfigDatosNoValidosPage.primerIconoBorrarTabla().click();
    }

    inputInvalidPwd = async (value: string) => {
        await this.seguridadConfigDatosNoValidosPage.inputInvalidPwd().isEnabled();
        await this.seguridadConfigDatosNoValidosPage.inputInvalidPwd().fill(value);
    }
    
    clickComboEstadoBoton = async () => {
        await this.seguridadConfigDatosNoValidosPage.comboEstadoBoton().isEnabled();
        await this.seguridadConfigDatosNoValidosPage.comboEstadoBoton().click();
    }
    clickComboItemEstadoActivo = async () => {
        await this.seguridadConfigDatosNoValidosPage.comboItemEstadoActivo().isEnabled();
        await this.seguridadConfigDatosNoValidosPage.comboItemEstadoActivo().click();
    }

    clickTabCrearRegistro = async () => {
        await this.seguridadConfigDatosNoValidosPage.tabCrearRegistro().isEnabled();
        await this.seguridadConfigDatosNoValidosPage.tabCrearRegistro().click();
    }

    clickTabCargarArchivos = async () => {
        await this.seguridadConfigDatosNoValidosPage.tabCargarArchivos().isEnabled();
        await this.seguridadConfigDatosNoValidosPage.tabCargarArchivos().click();
    }
    clickTabListaDestinatarios = async () => {
        await this.seguridadConfigDatosNoValidosPage.tabListaDestinatarios().isEnabled();
        await this.seguridadConfigDatosNoValidosPage.tabListaDestinatarios().click();
    }

   

    // botones 
     clickBotonContinuar = async () => {
        await this.seguridadConfigDatosNoValidosPage.botonContinuar().isEnabled();
        await this.seguridadConfigDatosNoValidosPage.botonContinuar().click();
    }

    clickBotonAceptarConfirmacion = async () => {
        await this.seguridadConfigDatosNoValidosPage.botonAceptarConfirmacion().isEnabled();
        await this.seguridadConfigDatosNoValidosPage.botonAceptarConfirmacion().click();
    }

    clickBotonFinalizar = async () => {
        await this.seguridadConfigDatosNoValidosPage.botonFinalizar().isEnabled();
        await this.seguridadConfigDatosNoValidosPage.botonFinalizar().click();
    }

    clickBotonVolver = async () => {
        await this.seguridadConfigDatosNoValidosPage.botonVolver().isEnabled();
        await this.seguridadConfigDatosNoValidosPage.botonVolver().click();
    }

    clickBotonCancelar = async () => {
        await this.seguridadConfigDatosNoValidosPage.botonCancelar().isEnabled();
        await this.seguridadConfigDatosNoValidosPage.botonCancelar().click();
    }

}

