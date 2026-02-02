import { Page, expect } from "@playwright/test";
import { LoginWorkflow } from "../login.workflow";
import { NavegacionActionsSeguridad } from "../../actions/Navegacion/navegacionSeguridad.actions";
import { SeguridadConfigControlTransaccionalActions } from "../../actions/Seguridad/seguridadCofigControlTransaccional.actions";
export class SeguridadConfigControlTransaccionalWorkflow {  
    private page: Page;
    private loguin: LoginWorkflow;
    private navegacionActionsSeguridad: NavegacionActionsSeguridad;
    private seguridadConfigControlTransaccionalActions: SeguridadConfigControlTransaccionalActions;    
        constructor(page: Page) {
            this.page = page;
            this.loguin = new LoginWorkflow(page);
            this.navegacionActionsSeguridad = new NavegacionActionsSeguridad(page);
            this.seguridadConfigControlTransaccionalActions = new SeguridadConfigControlTransaccionalActions(page);
        }

    //Confirmacion Transaccional  
    async confirmacionTransaccionalVolver(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  
        
        // Navegar a Seguridad Config Control Transaccional
        await this.navegacionActionsSeguridad.clickSeguridadControlTransaccional();

        // Interactuar con el servicio de Seguridad Config Control Transaccional
        await this.seguridadConfigControlTransaccionalActions.clikBotonContinuar();
        await this.seguridadConfigControlTransaccionalActions.clickBotonVolver();

        //Logout
        await this.loguin.logout();

    }


    async confirmacionTransaccionalCancelar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  
        
        // Navegar a Seguridad Config Control Transaccional
        await this.navegacionActionsSeguridad.clickSeguridadControlTransaccional();

        // Interactuar con el servicio de Seguridad Config Control Transaccional
        await this.seguridadConfigControlTransaccionalActions.clikBotonContinuar();
        await this.seguridadConfigControlTransaccionalActions.clickBotonAceptarConfirmacion();
        await this.seguridadConfigControlTransaccionalActions.clickBotonCancelar();
       
    }

    async confirmacionTransaccionalAceptarConfirmar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  
        
        // Navegar a Seguridad Config Control Transaccional
        await this.navegacionActionsSeguridad.clickSeguridadControlTransaccional();

        // Interactuar con el servicio de Seguridad Config Control Transaccional
        await this.seguridadConfigControlTransaccionalActions.clikBotonContinuar();
        await this.seguridadConfigControlTransaccionalActions.clickBotonAceptarConfirmacion();
        await this.seguridadConfigControlTransaccionalActions.clickBotonAceptarConfirmacion();
        await this.seguridadConfigControlTransaccionalActions.clickBotonFinalizar();
       
    }

    //Control Agente

    async controlAgenteVolver(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  
        
        // Navegar a Seguridad Config Control Transaccional
        await this.navegacionActionsSeguridad.clickSeguridadControlTransaccional();

        // Interactuar con el servicio de Seguridad Config Control Transaccional
        await this.seguridadConfigControlTransaccionalActions.clickTabControlAgente();
        await this.seguridadConfigControlTransaccionalActions.imputNombreEmpresa("prueba");
        await this.seguridadConfigControlTransaccionalActions.clickComboBoxUsoAgente();
        await this.seguridadConfigControlTransaccionalActions.clickItemComboNorequerido();
        await this.seguridadConfigControlTransaccionalActions.clickBotonBuscar();
        await this.seguridadConfigControlTransaccionalActions.checkBoxConsultarPrimerRegistro();
        await this.seguridadConfigControlTransaccionalActions.clikBotonCambiar();
        await this.seguridadConfigControlTransaccionalActions.clikBotonVolverControlAgente();


        //Logout        
        await this.loguin.logout();
       
    }

    async controlAgenteCancelar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  
        
        // Navegar a Seguridad Config Control Transaccional
        await this.navegacionActionsSeguridad.clickSeguridadControlTransaccional();

        // Interactuar con el servicio de Seguridad Config Control Transaccional
        await this.seguridadConfigControlTransaccionalActions.clickTabControlAgente();
        await this.seguridadConfigControlTransaccionalActions.imputNombreEmpresa("prueba");
        await this.seguridadConfigControlTransaccionalActions.clickComboBoxUsoAgente();
        await this.seguridadConfigControlTransaccionalActions.clickItemComboNorequerido();
        await this.seguridadConfigControlTransaccionalActions.clickBotonBuscar();
        await this.seguridadConfigControlTransaccionalActions.checkBoxConsultarPrimerRegistro();
        await this.seguridadConfigControlTransaccionalActions.clikBotonCambiar();
        await this.seguridadConfigControlTransaccionalActions.clikBotonCancelarControlAgente();


        //Logout        
        await this.loguin.logout();
       
    }

    async controlAgenteAceptarConfirmar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  
        
        // Navegar a Seguridad Config Control Transaccional
        await this.navegacionActionsSeguridad.clickSeguridadControlTransaccional();

        // Interactuar con el servicio de Seguridad Config Control Transaccional
        await this.seguridadConfigControlTransaccionalActions.clickTabControlAgente();
        await this.seguridadConfigControlTransaccionalActions.imputNombreEmpresa("prueba");
        await this.seguridadConfigControlTransaccionalActions.clickComboBoxUsoAgente();
        await this.seguridadConfigControlTransaccionalActions.clickItemComboNorequerido();
        await this.seguridadConfigControlTransaccionalActions.clickBotonBuscar();
        await this.seguridadConfigControlTransaccionalActions.checkBoxConsultarPrimerRegistro();
        await this.seguridadConfigControlTransaccionalActions.clikBotonCambiar();
        await this.seguridadConfigControlTransaccionalActions.clikBotonAceptarConfirmarControlAgente();
        await this.seguridadConfigControlTransaccionalActions.clickBotonFinalizar();


        //Logout        
        await this.loguin.logout();
       
    }

    //Doble Confirmacion Pse

    async dobleConfirmacionVolver(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  
        
        // Navegar a Seguridad Config Control Transaccional
        await this.navegacionActionsSeguridad.clickSeguridadControlTransaccional();

        // Interactuar con el servicio de Seguridad Config Control Transaccional
        await this.seguridadConfigControlTransaccionalActions.clickTabDobleConfirmacionPse();
        await this.seguridadConfigControlTransaccionalActions.imputNombreEmpresa("prueba");
        await this.seguridadConfigControlTransaccionalActions.clickComboBoxUsoAgente();
        await this.seguridadConfigControlTransaccionalActions.clickItemComboNorequerido();
        await this.seguridadConfigControlTransaccionalActions.clickBotonBuscar();
        await this.seguridadConfigControlTransaccionalActions.checkBoxConsultarPrimerRegistro();
        await this.seguridadConfigControlTransaccionalActions.clikBotonCambiar();
        await this.seguridadConfigControlTransaccionalActions.clikBotonVolverControlAgente();



        //Logout        
        await this.loguin.logout();
       
    }

    async dobleConfirmacionCancelar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  
        
        // Navegar a Seguridad Config Control Transaccional
        await this.navegacionActionsSeguridad.clickSeguridadControlTransaccional();

        // Interactuar con el servicio de Seguridad Config Control Transaccional
        await this.seguridadConfigControlTransaccionalActions.clickTabDobleConfirmacionPse();
        await this.seguridadConfigControlTransaccionalActions.imputNombreEmpresa("prueba");
        await this.seguridadConfigControlTransaccionalActions.clickComboBoxUsoAgente();
        await this.seguridadConfigControlTransaccionalActions.clickItemComboNorequerido();
        await this.seguridadConfigControlTransaccionalActions.clickBotonBuscar();
        await this.seguridadConfigControlTransaccionalActions.checkBoxConsultarPrimerRegistro();
        await this.seguridadConfigControlTransaccionalActions.clikBotonCambiar();
        await this.seguridadConfigControlTransaccionalActions.clikBotonCancelarControlAgente();


        //Logout        
        await this.loguin.logout();
       
    }

    async dobleConfirmacionAceptarConfirmar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  
        
        // Navegar a Seguridad Config Control Transaccional
        await this.navegacionActionsSeguridad.clickSeguridadControlTransaccional();

        // Interactuar con el servicio de Seguridad Config Control Transaccional
        await this.seguridadConfigControlTransaccionalActions.clickTabDobleConfirmacionPse();
        await this.seguridadConfigControlTransaccionalActions.imputNombreEmpresa("prueba");
        await this.seguridadConfigControlTransaccionalActions.clickComboBoxUsoAgente();
        await this.seguridadConfigControlTransaccionalActions.clickItemComboNorequerido();
        await this.seguridadConfigControlTransaccionalActions.clickBotonBuscar();
        await this.seguridadConfigControlTransaccionalActions.checkBoxConsultarPrimerRegistro();
        await this.seguridadConfigControlTransaccionalActions.clikBotonCambiar();
        await this.seguridadConfigControlTransaccionalActions.clikBotonAceptarConfirmarControlAgente();
        await this.seguridadConfigControlTransaccionalActions.clickBotonFinalizar();


        //Logout        
        await this.loguin.logout();
       
    }



}