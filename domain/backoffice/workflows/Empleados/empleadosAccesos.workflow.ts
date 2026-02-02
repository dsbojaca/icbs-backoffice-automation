import { Page, expect } from "@playwright/test";
import { LoginWorkflow } from "../login.workflow";
import { NavegacionActionsEmpleados } from "../../actions/Navegacion/navegacionEmpleados.actions";
import { EmpleadosAccesosActions } from "../../actions/Empleados/empleadosAccesos.action";

export class EmpleadosAccesosWorkflow {  
    private page: Page;
    private loguin: LoginWorkflow;
    private navegacionActionsEmpleados: NavegacionActionsEmpleados;
    private empleadosAccesosActions: EmpleadosAccesosActions;    
        constructor(page: Page) {
            this.page = page;
            this.loguin = new LoginWorkflow(page);
            this.navegacionActionsEmpleados = new NavegacionActionsEmpleados(page);
            this.empleadosAccesosActions = new EmpleadosAccesosActions(page);
        }

    async accesoEmpleadosVolver(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  
        

        // Navegar a Empleados - Accesos
        await this.navegacionActionsEmpleados.clickEmpleadosAcceso();

        //Interactuar con el servicio de Empleados - Accesos
        await this.empleadosAccesosActions.clickBotonConsultar();
        await this.empleadosAccesosActions.clickCheckboxSeleccion();
        await this.empleadosAccesosActions.clickBotonCambiarEstado();
        await this.empleadosAccesosActions.clickBotonVolver();
        
        //logout
        await this.loguin.logout();
    }

    async accesoEmpleadosCancelar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  
        

        // Navegar a Empleados - Accesos
        await this.navegacionActionsEmpleados.clickEmpleadosAcceso();

        //Interactuar con el servicio de Empleados - Accesos
        await this.empleadosAccesosActions.clickBotonConsultar();
        await this.empleadosAccesosActions.clickCheckboxSeleccion();
        await this.empleadosAccesosActions.clickBotonCambiarEstado();
        await this.empleadosAccesosActions.clickBotonCancelar();
        
        //logout
        await this.loguin.logout();
    }

    async accesoEmpleadosAceptarConfirmar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  
        

        // Navegar a Empleados - Accesos
        await this.navegacionActionsEmpleados.clickEmpleadosAcceso();

        //Interactuar con el servicio de Empleados - Accesos
        await this.empleadosAccesosActions.clickBotonConsultar();
        await this.empleadosAccesosActions.clickCheckboxSeleccion();
        await this.empleadosAccesosActions.clickBotonCambiarEstado();
        await this.empleadosAccesosActions.clickBotonAceptarConfirmar();
        
        //logout
        await this.loguin.logout();
    }
}