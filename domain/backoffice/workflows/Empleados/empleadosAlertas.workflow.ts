import { Page, expect } from "@playwright/test";
import { LoginWorkflow } from "../login.workflow";
import { NavegacionActionsEmpleados } from "../../actions/Navegacion/navegacionEmpleados.actions";
import { EmpleadosAlertasActions } from "../../actions/Empleados/empleadosAlertas.actions";

export class EmpleadosAlertasWorkflow {  
    private page: Page;
    private loguin: LoginWorkflow;
    private navegacionActionsEmpleados: NavegacionActionsEmpleados;
    private empleadosAlertasActions: EmpleadosAlertasActions;    
        constructor(page: Page) {
            this.page = page;
            this.loguin = new LoginWorkflow(page);
            this.navegacionActionsEmpleados = new NavegacionActionsEmpleados(page);
            this.empleadosAlertasActions = new EmpleadosAlertasActions(page);
        }

    

    //Consulta Alertas Modificar
    async consultaAlertasModificarVolver(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a Empleados > Alertas
        await this.navegacionActionsEmpleados.clickEmpleadosAlertas();


        //Interactuar con el servicio de Empleados Alertas
        await this.empleadosAlertasActions.clickComboTipo1();
        await this.empleadosAlertasActions.clickOpcionClientes();
        await this.empleadosAlertasActions.clickComboTipo2();
        await this.empleadosAlertasActions.clickOpcionEliminacionIP();
        await this.empleadosAlertasActions.clickBotonBuscar();

        await this.empleadosAlertasActions.clickPrimerIconoEditarTabla();
        await this.empleadosAlertasActions.clickCheckboxEnviarEmail();
        await this.empleadosAlertasActions.clickBotonConfirmar();
        await this.empleadosAlertasActions.clickBotonVolver();


        //Logout
        await this.loguin.logout();
        
    }

    async consultaAlertasModificarCancelar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a Empleados > Alertas
        await this.navegacionActionsEmpleados.clickEmpleadosAlertas();


        //Interactuar con el servicio de Empleados Alertas
        await this.empleadosAlertasActions.clickComboTipo1();
        await this.empleadosAlertasActions.clickOpcionClientes();
        await this.empleadosAlertasActions.clickComboTipo2();
        await this.empleadosAlertasActions.clickOpcionEliminacionIP();
        await this.empleadosAlertasActions.clickBotonBuscar();

        await this.empleadosAlertasActions.clickPrimerIconoEditarTabla();
        await this.empleadosAlertasActions.clickCheckboxEnviarEmail();
        await this.empleadosAlertasActions.clickBotonConfirmar();
        await this.empleadosAlertasActions.clickBotonCancelar();


        //Logout
        await this.loguin.logout();
        
    }
    async consultaAlertasModificarAceptarConfirmar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a Empleados > Alertas
        await this.navegacionActionsEmpleados.clickEmpleadosAlertas();


        //Interactuar con el servicio de Empleados Alertas
        await this.empleadosAlertasActions.clickComboTipo1();
        await this.empleadosAlertasActions.clickOpcionClientes();
        await this.empleadosAlertasActions.clickComboTipo2();
        await this.empleadosAlertasActions.clickOpcionEliminacionIP();
        await this.empleadosAlertasActions.clickBotonBuscar();

        await this.empleadosAlertasActions.clickPrimerIconoEditarTabla();
        await this.empleadosAlertasActions.clickCheckboxEnviarEmail();
        await this.empleadosAlertasActions.clickBotonConfirmar();
        await this.empleadosAlertasActions.clickBotonAceptarConfirmacion();
        await this.empleadosAlertasActions.clickBotonFinalizar();

        //Logout
        await this.loguin.logout();
        
    }

    //Consulta Alertas Eliminar
    
    async consultaAlertasEliminarCancelar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a Empleados > Alertas
        await this.navegacionActionsEmpleados.clickEmpleadosAlertas();


        //Interactuar con el servicio de Empleados Alertas
        await this.empleadosAlertasActions.clickComboTipo1();
        await this.empleadosAlertasActions.clickOpcionClientes();
        await this.empleadosAlertasActions.clickComboTipo2();
        await this.empleadosAlertasActions.clickOpcionEliminacionIP();
        await this.empleadosAlertasActions.clickBotonBuscar();

        await this.empleadosAlertasActions.clickPrimerIconoEliminarTabla();
        await this.empleadosAlertasActions.clickBotonCancelar();
        

        //Logout
        await this.loguin.logout();
        
    }

    async consultaAlertasEliminarAceptarConfirmar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a Empleados > Alertas
        await this.navegacionActionsEmpleados.clickEmpleadosAlertas();


        //Interactuar con el servicio de Empleados Alertas
        await this.empleadosAlertasActions.clickComboTipo1();
        await this.empleadosAlertasActions.clickOpcionClientes();
        await this.empleadosAlertasActions.clickComboTipo2();
        await this.empleadosAlertasActions.clickOpcionEliminacionIP();
        await this.empleadosAlertasActions.clickBotonBuscar();

        await this.empleadosAlertasActions.clickPrimerIconoEliminarTabla();
        await this.empleadosAlertasActions.clickBotonAceptarConfirmacion();

        //Logout
        await this.loguin.logout();
        
    }

    //inscribir Alerta
    async inscribirAlertaVolver(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a Empleados > Alertas
        await this.navegacionActionsEmpleados.clickEmpleadosAlertas();


        //Interactuar con el servicio de Empleados Alertas
        await this.empleadosAlertasActions.clickTabInscribirAlerta();
        await this.empleadosAlertasActions.clickComboTipo1();
        await this.empleadosAlertasActions.clickOpcionClientes();
        await this.empleadosAlertasActions.clickComboTipo2();
        await this.empleadosAlertasActions.clickOpcionEliminacionIP();
        await this.empleadosAlertasActions.clickComboTipo3();
        await this.empleadosAlertasActions.clickUltimoItemLista();

        await this.empleadosAlertasActions.clickCheckboxEnviarEmail();
        await this.empleadosAlertasActions.clickBotonContinuar();
        await this.empleadosAlertasActions.clickBotonVolver();

        //Logout
        await this.loguin.logout();
        
    }

    async inscribirAlertaCancelar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a Empleados > Alertas
        await this.navegacionActionsEmpleados.clickEmpleadosAlertas();


        //Interactuar con el servicio de Empleados Alertas
        await this.empleadosAlertasActions.clickTabInscribirAlerta();
        await this.empleadosAlertasActions.clickComboTipo1();
        await this.empleadosAlertasActions.clickOpcionClientes();
        await this.empleadosAlertasActions.clickComboTipo2();
        await this.empleadosAlertasActions.clickOpcionEliminacionIP();
        await this.empleadosAlertasActions.clickComboTipo3();
        await this.empleadosAlertasActions.clickUltimoItemLista();

        await this.empleadosAlertasActions.clickCheckboxEnviarEmail();
        await this.empleadosAlertasActions.clickBotonContinuar();
        await this.empleadosAlertasActions.clickBotonCancelar();

        //Logout
        await this.loguin.logout();
        
    }

    async inscribirAlertaAceptarConfirmar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a Empleados > Alertas
        await this.navegacionActionsEmpleados.clickEmpleadosAlertas();


        //Interactuar con el servicio de Empleados Alertas
        await this.empleadosAlertasActions.clickTabInscribirAlerta();
        await this.empleadosAlertasActions.clickComboTipo1();
        await this.empleadosAlertasActions.clickOpcionClientes();
        await this.empleadosAlertasActions.clickComboTipo2();
        await this.empleadosAlertasActions.clickOpcionEliminacionIP();
        await this.empleadosAlertasActions.clickComboTipo3();
        await this.empleadosAlertasActions.clickUltimoItemLista();

        await this.empleadosAlertasActions.clickCheckboxEnviarEmail();
        await this.empleadosAlertasActions.clickBotonContinuar();
        await this.empleadosAlertasActions.clickBotonAceptarConfirmacion();

        //Logout
        await this.loguin.logout();
        
    }


}
