import { Page } from "@playwright/test";
import { SeguridadBloqueoMasivoEmpresasPage } from "../../pages/Seguridad/seguridadBloqueoMasivoEmpresas.page";

export class SeguridadBloqueoMasivoEmpresasActions {
    private page: Page;
    private seguridadBloqueoMasivoEmpresasPage: SeguridadBloqueoMasivoEmpresasPage;    

    constructor(page: Page) {
        this.page = page;
        this.seguridadBloqueoMasivoEmpresasPage = new SeguridadBloqueoMasivoEmpresasPage(page);
    }

    clickComboBotonPrincipal = async () => {
        await this.seguridadBloqueoMasivoEmpresasPage.comboBotonPrincipal().isEnabled();
        await this.seguridadBloqueoMasivoEmpresasPage.comboBotonPrincipal().click();
    }

    clickComboPrimerItem = async () => {
        await this.seguridadBloqueoMasivoEmpresasPage.comboPrimerItem().isEnabled();
        await this.seguridadBloqueoMasivoEmpresasPage.comboPrimerItem().click();
    }

    clickComboItemIP = async () => {
        await this.seguridadBloqueoMasivoEmpresasPage.comboItemIP().isEnabled();
        await this.seguridadBloqueoMasivoEmpresasPage.comboItemIP().click();
    }

    inputCompanyName = async (companyName: string) => {
        await this.seguridadBloqueoMasivoEmpresasPage.inputCompanyName().isEnabled();
        await this.seguridadBloqueoMasivoEmpresasPage.inputCompanyName().fill(companyName);
    }

    clickBotonConsultar = async () => {
        await this.seguridadBloqueoMasivoEmpresasPage.botonConsultar().isEnabled();
        await this.seguridadBloqueoMasivoEmpresasPage.botonConsultar().click();
    }

    clickBotonContinuar = async () => {
        await this.seguridadBloqueoMasivoEmpresasPage.botonContinuar().isEnabled();
        await this.seguridadBloqueoMasivoEmpresasPage.botonContinuar().click();
    }

    clicKcheckboxSeleccion = async () => {
        await this.seguridadBloqueoMasivoEmpresasPage.checkboxSeleccion().isEnabled();
        await this.seguridadBloqueoMasivoEmpresasPage.checkboxSeleccion().check();
    }

    clickBotonDesactivar = async () => {
        await this.seguridadBloqueoMasivoEmpresasPage.botonDesactivar().isEnabled();
        await this.seguridadBloqueoMasivoEmpresasPage.botonDesactivar().click();
    }

    clickBotonCancelar = async () => {
        await this.seguridadBloqueoMasivoEmpresasPage.botonCancelar().isEnabled();
        await this.seguridadBloqueoMasivoEmpresasPage.botonCancelar().click();
    }
    clickBotonVolver = async () => {
        await this.seguridadBloqueoMasivoEmpresasPage.botonVolver().isEnabled();
        await this.seguridadBloqueoMasivoEmpresasPage.botonVolver().click();
    }
    clickBotonAceptarConfirmacion = async () => {
        await this.seguridadBloqueoMasivoEmpresasPage.botonAceptarConfirmacion().isEnabled();
        await this.seguridadBloqueoMasivoEmpresasPage.botonAceptarConfirmacion().click();
    }
    clickBotonAceptar = async () => {
        await this.seguridadBloqueoMasivoEmpresasPage.botonAceptar().isEnabled();
        await this.seguridadBloqueoMasivoEmpresasPage.botonAceptar().click();
    }


    llenadoInputCausaInactivacion = async (causal: string) => {
        await this.seguridadBloqueoMasivoEmpresasPage.inputStatusChangeCausal().isEnabled();
        await this.seguridadBloqueoMasivoEmpresasPage.inputStatusChangeCausal().fill(causal);
    }
   

}
