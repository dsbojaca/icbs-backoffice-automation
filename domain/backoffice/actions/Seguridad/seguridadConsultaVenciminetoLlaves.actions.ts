import { Page } from "@playwright/test";
import { SeguridadConsultaVenciminetoLlavesPage } from "../../pages/Seguridad/seguridadConsultaVenciminetoLlaves.page";

export class SeguridadConsultaVenciminetoLlavesActions {
    private page: Page;
    private seguridadConsultaVenciminetoLlavesPage: SeguridadConsultaVenciminetoLlavesPage;    

    constructor(page: Page) {
        this.page = page;
        this.seguridadConsultaVenciminetoLlavesPage = new SeguridadConsultaVenciminetoLlavesPage(page);
    }

    clickTabParametrizacion = async () => {
        await this.seguridadConsultaVenciminetoLlavesPage.tabParametrizacion().isEnabled()
        await this.seguridadConsultaVenciminetoLlavesPage.tabParametrizacion().click();
    }
    inputEmail = async (email: string) => {
        await this.seguridadConsultaVenciminetoLlavesPage.inputEmail().fill(email);
    }
    inputDays = async (days: string) => {
        await this.seguridadConsultaVenciminetoLlavesPage.inputDays().fill(days);
    }
    clickBotonContinuar = async () => {
        await this.seguridadConsultaVenciminetoLlavesPage.botonContinuar().isEnabled()
        await this.seguridadConsultaVenciminetoLlavesPage.botonContinuar().click();
    }
    clickBotonCancelar = async () => {
        await this.seguridadConsultaVenciminetoLlavesPage.botonCancelar().isEnabled()
        await this.seguridadConsultaVenciminetoLlavesPage.botonCancelar().click();
    }
    clickBotonAceptarConfirmacion = async () => {
        await this.seguridadConsultaVenciminetoLlavesPage.botonAceptarConfirmacion().isEnabled()
        await this.seguridadConsultaVenciminetoLlavesPage.botonAceptarConfirmacion().click();
    }
    clickBotonVolver = async () => {
        await this.seguridadConsultaVenciminetoLlavesPage.botonVolver().isEnabled()
        await this.seguridadConsultaVenciminetoLlavesPage.botonVolver().click();
    }
    clickBotonFinalizar = async () => {
        await this.seguridadConsultaVenciminetoLlavesPage.botonFinalizar().isEnabled()
        await this.seguridadConsultaVenciminetoLlavesPage.botonFinalizar().click();
    }
    clickExportarPDF = async () => {
        await this.seguridadConsultaVenciminetoLlavesPage.exportarPDF().isEnabled()
        await this.seguridadConsultaVenciminetoLlavesPage.exportarPDF().click();
    }
    


   

}