import { Page, expect } from "@playwright/test";
import { LoginWorkflow } from "../login.workflow";
import { NavegacionActionsEmpleados } from "../../actions/Navegacion/navegacionEmpleados.actions";
import { EmpleadosEstadoOperacionesActions } from "../../actions/Empleados/empleadosEstadoOperaciones.actions";

export class EmpleadosEstadoOperacionesWorkflow {  
    private page: Page;
    private loguin: LoginWorkflow;
    private navegacionActionsEmpleados: NavegacionActionsEmpleados;
    private empleadosEstadoOperacionesActions: EmpleadosEstadoOperacionesActions;    
        constructor(page: Page) {
            this.page = page;
            this.loguin = new LoginWorkflow(page);
            this.navegacionActionsEmpleados = new NavegacionActionsEmpleados(page);
            this.empleadosEstadoOperacionesActions = new EmpleadosEstadoOperacionesActions(page);
        }
        
    async visualizacionAutorizaciones(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password); 
        
        // Navegar a Empleados > Estado de Operaciones
        await this.navegacionActionsEmpleados.clickEmpleadosEstadoOperaciones();

        // Interactuar Con el servicio
        if (Boolean(await this.empleadosEstadoOperacionesActions.checkPrimerIconoTablaVisible())) {
            await this.empleadosEstadoOperacionesActions.clickPrimerIconoTabla();
            await this.empleadosEstadoOperacionesActions.clickCerrarModal();
        }
        
        
        //logout
        await this.loguin.logout();

    }

    async visualizacionProcesosDesatendidos(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password); 
        
        // Navegar a Empleados > Estado de Operaciones
        await this.navegacionActionsEmpleados.clickEmpleadosEstadoOperaciones();

        // Interactuar Con el servicio
        await this.empleadosEstadoOperacionesActions.clickTabProcesosDesatendidos();
        
        if (Boolean(await this.empleadosEstadoOperacionesActions.checkPrimerIconoTablaVisible())) {
            await this.empleadosEstadoOperacionesActions.clickPrimerIconoTabla();
            await this.empleadosEstadoOperacionesActions.clickCerrarModal();
        }
        //logout
        await this.loguin.logout();
        
    }
}