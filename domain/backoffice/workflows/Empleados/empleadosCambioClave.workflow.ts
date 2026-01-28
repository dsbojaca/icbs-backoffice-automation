import { Page, expect } from "@playwright/test";
import { LoginWorkflow } from "../login.workflow";
import { NavegacionActionsEmpleados } from "../../actions/Navegacion/navegacionEmpleados.actions";
import { EmpleadosCambioClaveActions } from "../../actions/Empleados/empleadosCambioClave.actions";

export class EmpleadosCambioClaveWorkflow {  
    private page: Page;
    private loguin: LoginWorkflow;
    private navegacionActionsEmpleados: NavegacionActionsEmpleados;
    private empleadosCambioClaveActions: EmpleadosCambioClaveActions;    
        constructor(page: Page) {
            this.page = page;
            this.loguin = new LoginWorkflow(page);
            this.navegacionActionsEmpleados = new NavegacionActionsEmpleados(page);
            this.empleadosCambioClaveActions = new EmpleadosCambioClaveActions(page);
        }

    async cambioClaveEmpleadoVolver(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a la sección de Cambio de Clave de Empleados
        await this.navegacionActionsEmpleados.clickEmpleadosCambioClave();

        //Interaccion Con el servicio de Cambio de Clave de Empleados
        await this.empleadosCambioClaveActions.llenadoinputNombre("David");
        await this.empleadosCambioClaveActions.clickBotonConsultar();
        await this.empleadosCambioClaveActions.clickPrimerIconoTabla();
        await this.empleadosCambioClaveActions.clickBotonVolver();
        
        //logout
        await this.loguin.logout();
    }

    async cambioClaveEmpleadoCancelar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a la sección de Cambio de Clave de Empleados
        await this.navegacionActionsEmpleados.clickEmpleadosCambioClave();

        //Interaccion Con el servicio de Cambio de Clave de Empleados
        await this.empleadosCambioClaveActions.llenadoinputNombre("David");
        await this.empleadosCambioClaveActions.clickBotonConsultar();
        await this.empleadosCambioClaveActions.clickPrimerIconoTabla();
        await this.empleadosCambioClaveActions.clickBotonCancelar();
        
        //logout
        await this.loguin.logout();
    }

    async cambioClaveEmpleadoAceptarConfirmar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a la sección de Cambio de Clave de Empleados
        await this.navegacionActionsEmpleados.clickEmpleadosCambioClave();

        //Interaccion Con el servicio de Cambio de Clave de Empleados
        await this.empleadosCambioClaveActions.llenadoinputNombre("David");
        await this.empleadosCambioClaveActions.clickBotonConsultar();
        await this.empleadosCambioClaveActions.clickPrimerIconoTabla();
        await this.empleadosCambioClaveActions.clickBotonAceptarConfirmacion();
        
        //logout
        await this.loguin.logout();
    }
    
}