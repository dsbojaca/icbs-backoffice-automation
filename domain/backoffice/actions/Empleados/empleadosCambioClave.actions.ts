import { Page } from "@playwright/test";
import { EmpleadosCambioClavePage } from "../../pages/Empleados/empleadosCambioClave.page";

export class EmpleadosCambioClaveActions {
    private page: Page;
    private empleadosCambioClavePage: EmpleadosCambioClavePage;    
    constructor(page: Page) {
        this.page = page;
        this.empleadosCambioClavePage = new EmpleadosCambioClavePage(page);
    }

    llenadoinputNombre=async(nombre: string) => {
        await this.empleadosCambioClavePage.inputNombre().isEnabled();
        await this.empleadosCambioClavePage.inputNombre().fill(nombre);
    }

    clickBotonConsultar=async() => {
        await this.empleadosCambioClavePage.botonConsultar().isEnabled();
        await this.empleadosCambioClavePage.botonConsultar().click();
    }

    clickPrimerIconoTabla=async() => {
        await this.empleadosCambioClavePage.primerIconoTabla().isEnabled();
        await this.empleadosCambioClavePage.primerIconoTabla().click();
    }

    clickBotonCancelar=async() => {
        await this.empleadosCambioClavePage.botonCancelar().isEnabled();
        await this.empleadosCambioClavePage.botonCancelar().click();
    }

    clickBotonAceptarConfirmacion=async() => {
        await this.empleadosCambioClavePage.botonAceptarConfirmacion().isEnabled();
        await this.empleadosCambioClavePage.botonAceptarConfirmacion().click();
    }
    clickBotonVolver=async() => {
        await this.empleadosCambioClavePage.botonVolver().isEnabled();
        await this.empleadosCambioClavePage.botonVolver().click();
    }

}  
