import { Page, expect } from "@playwright/test";
import { LoginWorkflow } from "../login.workflow";
import { NavegacionActionsEmpleados } from "../../actions/Navegacion/navegacionEmpleados.actions";
import { EmpleadosCambioClavePropiaActions } from "../../actions/Empleados/empleadosCambioClavePropia.actions";

export class EmpleadosCambioClavePropiaWorkflow {  
    private page: Page;
    private loguin: LoginWorkflow;
    private navegacionActionsEmpleados: NavegacionActionsEmpleados;
    private empleadosCambioClavePropiaActions: EmpleadosCambioClavePropiaActions;    
        constructor(page: Page) {
            this.page = page;
            this.loguin = new LoginWorkflow(page);
            this.navegacionActionsEmpleados = new NavegacionActionsEmpleados(page);
            this.empleadosCambioClavePropiaActions = new EmpleadosCambioClavePropiaActions(page);
        }

    async cambioClaveCancelar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password); 
        
        // Navegar a Empleados > Cambio Clave Propia
        await this.navegacionActionsEmpleados.clickEmpleadosCambioClavePropia();

        //Interactuar con el formulario de cambio de clave propia
        await this.empleadosCambioClavePropiaActions.inputPasswordActual("123abcD");
        await this.empleadosCambioClavePropiaActions.inputPasswordNueva("Nuev@Clave");
        await this.empleadosCambioClavePropiaActions.inputPasswordConfirmar("Nuev@Clave");
        await this.empleadosCambioClavePropiaActions.clickBotonCancelar();
        
        //Logout
        await this.loguin.logout();
    }

    async cambioClaveActualizar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password); 
        
        // Navegar a Empleados > Cambio Clave Propia
        await this.navegacionActionsEmpleados.clickEmpleadosCambioClavePropia();

        //Interactuar con el formulario de cambio de clave propia
        await this.empleadosCambioClavePropiaActions.inputPasswordActual("123abcD");
        await this.empleadosCambioClavePropiaActions.inputPasswordNueva("Nuev@Clave");
        await this.empleadosCambioClavePropiaActions.inputPasswordConfirmar("Nuev@Clave");
        await this.empleadosCambioClavePropiaActions.clickBotonActualizar();
        
        //Logout
        await this.loguin.logout();
    }



    
}