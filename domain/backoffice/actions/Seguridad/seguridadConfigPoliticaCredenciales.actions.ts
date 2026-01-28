import { Page } from "@playwright/test";
import { SeguridadConfigPoliticaCredencialesPage } from "../../pages/Seguridad/seguridadConfigPoliticaCredenciales.page";

export class SeguridadConfigPoliticaCredencialesActions {
    private page: Page;
    private seguridadConfigPoliticaCredencialesPage: SeguridadConfigPoliticaCredencialesPage;    

    constructor(page: Page) {
        this.page = page;
        this.seguridadConfigPoliticaCredencialesPage = new SeguridadConfigPoliticaCredencialesPage(page);
    }
    
    
    clickHeaderPoliticaImagen = async () => {
        await this.seguridadConfigPoliticaCredencialesPage.headerPoliticaImagen().isEnabled();
        await this.seguridadConfigPoliticaCredencialesPage.headerPoliticaImagen().click();
    }

    clickHeaderPoliticaBloqueos = async () => {
        await this.seguridadConfigPoliticaCredencialesPage.headerPoliticaBloqueos().isEnabled();
        await this.seguridadConfigPoliticaCredencialesPage.headerPoliticaBloqueos().click();
    }

    clickBotonContinuar = async () => {
        await this.seguridadConfigPoliticaCredencialesPage.botonContinuar().isEnabled();
        await this.seguridadConfigPoliticaCredencialesPage.botonContinuar().click();
    }

    clickBotonCancelar = async () => {
        await this.seguridadConfigPoliticaCredencialesPage.botonCancelar().isEnabled();
        await this.seguridadConfigPoliticaCredencialesPage.botonCancelar().click();
    }

    clickBotonAceptarConfirmacion = async () => {
        await this.seguridadConfigPoliticaCredencialesPage.botonAceptarConfirmacion().isEnabled();
        await this.seguridadConfigPoliticaCredencialesPage.botonAceptarConfirmacion().click();
    }

    clickBotonVolver = async () => {
        await this.seguridadConfigPoliticaCredencialesPage.botonVolver().isEnabled();
        await this.seguridadConfigPoliticaCredencialesPage.botonVolver().click();
    }

    clickBotonFinalizar = async () => {
        await this.seguridadConfigPoliticaCredencialesPage.botonFinalizar().isEnabled();
        await this.seguridadConfigPoliticaCredencialesPage.botonFinalizar().click();
    }
    
   

}