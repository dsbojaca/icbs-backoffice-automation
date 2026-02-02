import { Page, expect } from "@playwright/test";
import { LoginWorkflow } from "../login.workflow";
import { NavegacionActionsSeguridad } from "../../actions/Navegacion/navegacionSeguridad.actions";
import { SeguridadAdministracionIPsRestringidasActions } from "../../actions/Seguridad/seguridadAdministracionIPsRestringidas.actions";

export class SeguridadAdministracionIPsRestringidasWorkflow {  
    private page: Page;
    private loguin: LoginWorkflow;
    private navegacionActionsSeguridad: NavegacionActionsSeguridad;
    private seguridadAdministracionIPsRestringidasActions: SeguridadAdministracionIPsRestringidasActions;    
        constructor(page: Page) {
            this.page = page;
            this.loguin = new LoginWorkflow(page);
            this.navegacionActionsSeguridad = new NavegacionActionsSeguridad(page);
            this.seguridadAdministracionIPsRestringidasActions = new SeguridadAdministracionIPsRestringidasActions(page);
        }

    async listaIpModificacionVolver(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a Seguridad > Administración IPs Restringidas
        await this.navegacionActionsSeguridad.clickSeguridadAdminIP();
        
        //Interactuar con el servicio
        await this.seguridadAdministracionIPsRestringidasActions.clickPrimerIconoModificar();
        await this.seguridadAdministracionIPsRestringidasActions.clickBotonContinuar();
        await this.seguridadAdministracionIPsRestringidasActions.clickBotonVolver();
        
        //logout
        await this.loguin.logout();
    }

    async listaIpModificacionCancelar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a Seguridad > Administración IPs Restringidas
        await this.navegacionActionsSeguridad.clickSeguridadAdminIP();
        
        //Interactuar con el servicio
        await this.seguridadAdministracionIPsRestringidasActions.clickPrimerIconoModificar();
        await this.seguridadAdministracionIPsRestringidasActions.clickBotonContinuar();
        await this.seguridadAdministracionIPsRestringidasActions.clickBotonCancelar();
        
        //logout
        await this.loguin.logout();
    }

    async listaIpModificacionAceptarConfirmar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a Seguridad > Administración IPs Restringidas
        await this.navegacionActionsSeguridad.clickSeguridadAdminIP();
        
        //Interactuar con el servicio
        await this.seguridadAdministracionIPsRestringidasActions.clickPrimerIconoModificar();
        await this.seguridadAdministracionIPsRestringidasActions.clickBotonContinuar();
        await this.seguridadAdministracionIPsRestringidasActions.clickBotonAceptarConfirmacion();
        
        //logout
        await this.loguin.logout();
    }

    async listaIpEliminacionCancelar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a Seguridad > Administración IPs Restringidas
        await this.navegacionActionsSeguridad.clickSeguridadAdminIP();
        
        //Interactuar con el servicio
        await this.seguridadAdministracionIPsRestringidasActions.clickPrimerIconoEliminar();
        await this.seguridadAdministracionIPsRestringidasActions.clickBotonCancelar();
        
        //logout
        await this.loguin.logout(); 
    }

    async listaIpEliminacionAceptarConfirmar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a Seguridad > Administración IPs Restringidas
        await this.navegacionActionsSeguridad.clickSeguridadAdminIP();
        
        //Interactuar con el servicio
        await this.seguridadAdministracionIPsRestringidasActions.clickPrimerIconoEliminar();
        await this.seguridadAdministracionIPsRestringidasActions.clickBotonAceptarConfirmacion();
        
        //logout
        await this.loguin.logout(); 
    }

    async crearIpVolver(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a Seguridad > Administración IPs Restringidas
        await this.navegacionActionsSeguridad.clickSeguridadAdminIP();
        
        //Interactuar con el servicio
        await this.seguridadAdministracionIPsRestringidasActions.clickTabCrearIP();
        await this.seguridadAdministracionIPsRestringidasActions.llenarInputDireccionIP("1.1.1.1");
        await this.seguridadAdministracionIPsRestringidasActions.clickAdicionar();
        await this.seguridadAdministracionIPsRestringidasActions.clickBotonContinuar();
        await this.seguridadAdministracionIPsRestringidasActions.clickBotonVolver();
    
        //logout
        await this.loguin.logout();
    }

    async crearIpCancelar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a Seguridad > Administración IPs Restringidas
        await this.navegacionActionsSeguridad.clickSeguridadAdminIP();
        
        //Interactuar con el servicio
        await this.seguridadAdministracionIPsRestringidasActions.clickTabCrearIP();
        await this.seguridadAdministracionIPsRestringidasActions.llenarInputDireccionIP("1.1.1.1");
        await this.seguridadAdministracionIPsRestringidasActions.clickAdicionar();
        await this.seguridadAdministracionIPsRestringidasActions.clickBotonContinuar();
        await this.seguridadAdministracionIPsRestringidasActions.clickBotonCancelar();
    
        //logout
        await this.loguin.logout();
    }

    async crearIpAceptarConfirmar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a Seguridad > Administración IPs Restringidas
        await this.navegacionActionsSeguridad.clickSeguridadAdminIP();
        
        //Interactuar con el servicio
        await this.seguridadAdministracionIPsRestringidasActions.clickTabCrearIP();
        await this.seguridadAdministracionIPsRestringidasActions.llenarInputDireccionIP("1.1.1.1");
        await this.seguridadAdministracionIPsRestringidasActions.clickAdicionar();
        await this.seguridadAdministracionIPsRestringidasActions.clickBotonContinuar();
        await this.seguridadAdministracionIPsRestringidasActions.clickBotonAceptarConfirmacion();
    
        //logout
        await this.loguin.logout();
    }

}
