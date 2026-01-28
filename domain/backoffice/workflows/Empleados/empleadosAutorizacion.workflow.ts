import { Page, expect } from "@playwright/test";
import { LoginWorkflow } from "../login.workflow";
import { NavegacionActionsEmpleados } from "../../actions/Navegacion/navegacionEmpleados.actions";
import { EmpleadosAutorizacionActions } from "../../actions/Empleados/empleadosAutorizacion.actions";

export class EmpleadosAutorizacionWorkflow {  
    private page: Page;
    private loguin: LoginWorkflow;
    private navegacionActionsEmpleados: NavegacionActionsEmpleados;
    private empleadosAutorizacionActions: EmpleadosAutorizacionActions;    
        constructor(page: Page) {
            this.page = page;
            this.loguin = new LoginWorkflow(page);
            this.navegacionActionsEmpleados = new NavegacionActionsEmpleados(page);
            this.empleadosAutorizacionActions = new EmpleadosAutorizacionActions(page);
        }

    async autorizarTransaccion(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);
    
        // Navegar a Empleados -> Autorizaciones Pendientes
        await this.navegacionActionsEmpleados.clickEmpleadosAutorizaciones();

        //interactuar con la página de autorizaciones
        await this.empleadosAutorizacionActions.clickLinkAutorizacionesPendientes();
        if (Boolean(await this.empleadosAutorizacionActions.validarPresenciaBotonesAutorizacion())) {
            await this.empleadosAutorizacionActions.clickBotonAceptarAutorizacion();
        }
    }

    async rechazarTransaccion(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);
    
        // Navegar a Empleados -> Autorizaciones Pendientes
        await this.navegacionActionsEmpleados.clickEmpleadosAutorizaciones();

        //interactuar con la página de autorizaciones
        await this.empleadosAutorizacionActions.clickLinkAutorizacionesPendientes();
        if (Boolean(await this.empleadosAutorizacionActions.validarPresenciaBotonesAutorizacion())) {
            await this.empleadosAutorizacionActions.clickBotonRechazarAutorizacion();
        }
    }
}