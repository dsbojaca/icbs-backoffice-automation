import { Page } from "@playwright/test";
import { EmpleadosAutorizacionPage } from "../../pages/Empleados/empleadosAutorizacion.page";

export class EmpleadosAutorizacionActions {
    private page: Page;
    private empleadosAutorizacionPage: EmpleadosAutorizacionPage;    
    constructor(page: Page) {
        this.page = page;
        this.empleadosAutorizacionPage = new EmpleadosAutorizacionPage(page);
    }

    clickLinkAutorizacionesPendientes = async () => {
        await this.empleadosAutorizacionPage.linkAutorizacionesPendientes().isEnabled();
        await this.empleadosAutorizacionPage.linkAutorizacionesPendientes().click();
    }

    validarPresenciaBotonesAutorizacion = async () => {
        await this.empleadosAutorizacionPage.btnAceptarAutorizacion().isVisible();
        await this.empleadosAutorizacionPage.btnRechazarAutorizacion().isVisible();
    }

    clickBotonAceptarAutorizacion = async () => {
        await this.empleadosAutorizacionPage.btnAceptarAutorizacion().isEnabled();
        await this.empleadosAutorizacionPage.btnAceptarAutorizacion().click();
    }


    clickBotonRechazarAutorizacion = async () => {
        await this.empleadosAutorizacionPage.btnRechazarAutorizacion().isEnabled();
        await this.empleadosAutorizacionPage.btnRechazarAutorizacion().click();
    }
    

   

}