import { Page, expect } from "@playwright/test";
import { LoginWorkflow } from "../login.workflow";
import { NavegacionActionsEmpleados } from "../../actions/Navegacion/navegacionEmpleados.actions";
import { EmpleadosActividadActions } from "../../actions/Empleados/empleadosActividad.actions";

export class EmpleadosActividadWorkflow {  
    private page: Page;
    private loguin: LoginWorkflow;
    private navegacionActionsEmpleados: NavegacionActionsEmpleados;
    private empleadosActividadActions: EmpleadosActividadActions;    
        constructor(page: Page) {
            this.page = page;
            this.loguin = new LoginWorkflow(page);
            this.navegacionActionsEmpleados = new NavegacionActionsEmpleados(page);
            this.empleadosActividadActions = new EmpleadosActividadActions(page);
        }

    async consultaEmpleadosActivos(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password); 
        
        // Navegar a Empleados - Actividad
        await this.navegacionActionsEmpleados.clickEmpleadosActividad();

        //Interactuar con la página de Actividad de Empleados
        await this.empleadosActividadActions.clickComboBusqueda();
        await this.empleadosActividadActions.clickPrimerItemLista();
        await this.empleadosActividadActions.checkRadioBuscarTodo();
        await this.empleadosActividadActions.clickBotonBuscar();
        
    }
}