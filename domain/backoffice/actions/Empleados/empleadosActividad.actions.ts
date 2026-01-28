import { Page } from "@playwright/test";
import { EmpleadosActividadPage } from "../../pages/Empleados/empleadosActividad.page";

export class EmpleadosActividadActions {
    private page: Page;
    private empleadosActividadPage: EmpleadosActividadPage;    

    constructor(page: Page) {
        this.page = page;
        this.empleadosActividadPage = new EmpleadosActividadPage(page);
    }

    clickComboBusqueda = async () => {
        await this.empleadosActividadPage.comboBusqueda().isEnabled();
        await this.empleadosActividadPage.comboBusqueda().click();
    }
    clickPrimerItemLista = async () => {
        await this.empleadosActividadPage.primerItemLista().isEnabled();
        await this.empleadosActividadPage.primerItemLista().click();
    }
    checkRadioBuscarTodo = async () => {
        await this.empleadosActividadPage.radioBuscarTodo().isEnabled();
        await this.empleadosActividadPage.radioBuscarTodo().check();
    }

    clickBotonBuscar = async () => {
        await this.empleadosActividadPage.botonBuscar().isEnabled();
        await this.empleadosActividadPage.botonBuscar().click();
    }
    
   

}