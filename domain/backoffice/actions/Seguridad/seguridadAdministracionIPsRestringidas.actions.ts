import { Page } from "@playwright/test";
import { SeguridadAdministracionIPsRestringidasPage } from "../../pages/Seguridad/seguridadAdministracionIPsRestringidas.page";

export class SeguridadAdministracionIPsRestringidasActions {
    private page: Page;
    private seguridadAdministracionIPsRestringidasPage: SeguridadAdministracionIPsRestringidasPage;    

    constructor(page: Page) {
        this.page = page;
        this.seguridadAdministracionIPsRestringidasPage = new SeguridadAdministracionIPsRestringidasPage(page);
    }
    
    clickPrimerIconoModificar = async () => {
        await this.seguridadAdministracionIPsRestringidasPage.primerIconoModificar().isEnabled();
        await this.seguridadAdministracionIPsRestringidasPage.primerIconoModificar().click();
    }
    clickPrimerIconoEliminar = async () => {
        await this.seguridadAdministracionIPsRestringidasPage.primerIconoEliminar().isEnabled();
        await this.seguridadAdministracionIPsRestringidasPage.primerIconoEliminar().click();
    }

    clickBotonContinuar = async () => {
        await this.seguridadAdministracionIPsRestringidasPage.botonContinuar().isEnabled();
        await this.seguridadAdministracionIPsRestringidasPage.botonContinuar().click();
    }
    clickBotonCancelar = async () => {
        await this.seguridadAdministracionIPsRestringidasPage.botonCancelar().isEnabled();
        await this.seguridadAdministracionIPsRestringidasPage.botonCancelar().click();
    }
    clickBotonAceptarConfirmacion = async () => {
        await this.seguridadAdministracionIPsRestringidasPage.botonAceptarConfirmacion().isEnabled();
        await this.seguridadAdministracionIPsRestringidasPage.botonAceptarConfirmacion().click();
    }
    clickBotonVolver = async () => {
        await this.seguridadAdministracionIPsRestringidasPage.botonVolver().isEnabled();
        await this.seguridadAdministracionIPsRestringidasPage.botonVolver().click();
    }
    clickBotonFinalizar = async () => {
        await this.seguridadAdministracionIPsRestringidasPage.botonFinalizar().isEnabled();
        await this.seguridadAdministracionIPsRestringidasPage.botonFinalizar().click();
    }
    getMensajeResultado = async () => {
        await this.seguridadAdministracionIPsRestringidasPage.mensajeResultado().isVisible();
        return await this.seguridadAdministracionIPsRestringidasPage.mensajeResultado().innerText();
    }

    clickTabCrearIP = async () => {
        await this.seguridadAdministracionIPsRestringidasPage.tabCrearIP().isEnabled();
        await this.seguridadAdministracionIPsRestringidasPage.tabCrearIP().click();
    }

    clickTabCargaArchivoIps = async () => {
        await this.seguridadAdministracionIPsRestringidasPage.tabCargaArchivoIps().isEnabled();
        await this.seguridadAdministracionIPsRestringidasPage.tabCargaArchivoIps().click();
    }

    llenarInputDireccionIP = async (ip: string) => {
        await this.seguridadAdministracionIPsRestringidasPage.inputLeadIp().isEnabled();
        await this.seguridadAdministracionIPsRestringidasPage.inputLeadIp().fill(ip);
    }

    clickAdicionar = async () => {
        await this.seguridadAdministracionIPsRestringidasPage.botonAdicionar().isEnabled();
        await this.seguridadAdministracionIPsRestringidasPage.botonAdicionar().click();
    }

    



   

}