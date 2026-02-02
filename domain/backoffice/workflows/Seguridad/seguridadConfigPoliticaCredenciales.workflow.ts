import { Page, expect } from "@playwright/test";
import { LoginWorkflow } from "../login.workflow";
import { NavegacionActionsSeguridad } from "../../actions/Navegacion/navegacionSeguridad.actions";
import { SeguridadConfigPoliticaCredencialesActions } from "../../actions/Seguridad/seguridadConfigPoliticaCredenciales.actions";

export class SeguridadConfigPoliticaCredencialesWorkflow {  
    private page: Page;
    private loguin: LoginWorkflow;
    private navegacionActionsSeguridad: NavegacionActionsSeguridad;
    private seguridadConfigPoliticaCredencialesActions: SeguridadConfigPoliticaCredencialesActions;    
        constructor(page: Page) {
            this.page = page;
            this.loguin = new LoginWorkflow(page);
            this.navegacionActionsSeguridad = new NavegacionActionsSeguridad(page);
            this.seguridadConfigPoliticaCredencialesActions = new SeguridadConfigPoliticaCredencialesActions(page);
        }

    async editarVolver(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a la sección de Configuración de Política de Credenciales
        await this.navegacionActionsSeguridad.clickSeguridadPoliticaCredenciales();

        //Interaccion con el servicio de Configuración de Política de Credenciales
        await this.seguridadConfigPoliticaCredencialesActions.clickHeaderPoliticaImagen();
        await this.seguridadConfigPoliticaCredencialesActions.clickHeaderPoliticaBloqueos();
        await this.seguridadConfigPoliticaCredencialesActions.clickBotonContinuar();
        await this.seguridadConfigPoliticaCredencialesActions.clickBotonVolver();
        //Logout
        await this.loguin.logout();
        
    }

    async editarCancelar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a la sección de Configuración de Política de Credenciales
        await this.navegacionActionsSeguridad.clickSeguridadPoliticaCredenciales();

        //Interaccion con el servicio de Configuración de Política de Credenciales
        await this.seguridadConfigPoliticaCredencialesActions.clickHeaderPoliticaImagen();
        await this.seguridadConfigPoliticaCredencialesActions.clickHeaderPoliticaBloqueos();
        await this.seguridadConfigPoliticaCredencialesActions.clickBotonContinuar();
        await this.seguridadConfigPoliticaCredencialesActions.clickBotonCancelar();
        
        //Logout
        await this.loguin.logout();
        
    }

    async editarAceptarConfirmar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a la sección de Configuración de Política de Credenciales
        await this.navegacionActionsSeguridad.clickSeguridadPoliticaCredenciales();

        //Interaccion con el servicio de Configuración de Política de Credenciales
        await this.seguridadConfigPoliticaCredencialesActions.clickHeaderPoliticaImagen();
        await this.seguridadConfigPoliticaCredencialesActions.clickHeaderPoliticaBloqueos();
        await this.seguridadConfigPoliticaCredencialesActions.clickBotonContinuar();
        await this.seguridadConfigPoliticaCredencialesActions.clickBotonAceptarConfirmacion();
        await this.seguridadConfigPoliticaCredencialesActions.clickBotonFinalizar();
        
        //Logout
        await this.loguin.logout();
    }
}
