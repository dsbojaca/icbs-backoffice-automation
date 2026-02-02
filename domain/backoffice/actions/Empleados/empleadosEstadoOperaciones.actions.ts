import { Page } from "@playwright/test";
import { EmpleadosEstadoOperacionesPage } from "../../pages/Empleados/empleadosEstadoOperaciones.page";

export class EmpleadosEstadoOperacionesActions {
    private page: Page;
    private empleadosEstadoOperacionesPage: EmpleadosEstadoOperacionesPage;    
    constructor(page: Page) {
        this.page = page;
        this.empleadosEstadoOperacionesPage = new EmpleadosEstadoOperacionesPage(page);
    }

    checkPrimerIconoTablaVisible = async () => {
        await this.empleadosEstadoOperacionesPage.primerIconoTabla().isVisible();
    }

    clickPrimerIconoTabla = async () => {
        await this.empleadosEstadoOperacionesPage.primerIconoTabla().isEnabled();
        await this.empleadosEstadoOperacionesPage.primerIconoTabla().click();
    }

    clickCerrarModal = async () => {
        await this.empleadosEstadoOperacionesPage.cerrarModal().isEnabled();        
        await this.empleadosEstadoOperacionesPage.cerrarModal().click();
    }

    clickTabProcesosDesatendidos = async () => {
        await this.empleadosEstadoOperacionesPage.tabProcesosDesatendidos().isEnabled();        
        await this.empleadosEstadoOperacionesPage.tabProcesosDesatendidos().click();
    }
   

}