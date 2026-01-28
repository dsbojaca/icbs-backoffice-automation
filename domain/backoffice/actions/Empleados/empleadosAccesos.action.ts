import { Page } from "@playwright/test";
import { EmpleadosAccesosPage } from "../../pages/Empleados/empleadosAccesos.page";

export class EmpleadosAccesosActions {
    private page: Page;
    private empleadosAccesosPage: EmpleadosAccesosPage;    

    constructor(page: Page) {
        this.page = page;
        this.empleadosAccesosPage = new EmpleadosAccesosPage(page);
    }
    clickCheckboxSeleccion = async () => {
        await this.empleadosAccesosPage.checkboxSeleccion().isEnabled();
        await this.empleadosAccesosPage.checkboxSeleccion().click();
    }

    clickBotonConsultar = async () => {
        await this.empleadosAccesosPage.botonConsultar().isEnabled();
        await this.empleadosAccesosPage.botonConsultar().click();
    }


    clickBotonCambiarEstado = async () => {
        await this.empleadosAccesosPage.botonCambiarEstado().isEnabled();
        await this.empleadosAccesosPage.botonCambiarEstado().click();
    }
    
    clickBotonCancelar = async () => {
        await this.empleadosAccesosPage.botonCancelar().isEnabled();
        await this.empleadosAccesosPage.botonCancelar().click();
    }

    clickBotonAceptarConfirmar = async () => {
        await this.empleadosAccesosPage.botonAceptarConfirmar().isEnabled();
        await this.empleadosAccesosPage.botonAceptarConfirmar().click();
    }
    clickBotonVolver = async () => {
        await this.empleadosAccesosPage.botonVolver().isEnabled();
        await this.empleadosAccesosPage.botonVolver().click();
    }
}