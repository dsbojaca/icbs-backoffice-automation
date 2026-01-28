
import { Page, expect } from "@playwright/test";
import { LoginWorkflow } from "../login.workflow";
import { NavegacionActionsSeguridad } from "../../actions/Navegacion/navegacionSeguridad.actions";
import { SeguridadConsultaVenciminetoLlavesActions } from "../../actions/Seguridad/seguridadConsultaVenciminetoLlaves.actions";

export class SeguridadConsultaVenciminetoLlavesWorkflow {  
    private page: Page;
    private loguin: LoginWorkflow;
    private navegacionActionsSeguridad: NavegacionActionsSeguridad;
    private seguridadConsultaVenciminetoLlavesActions: SeguridadConsultaVenciminetoLlavesActions;    
        constructor(page: Page) {
            this.page = page;
            this.loguin = new LoginWorkflow(page);
            this.navegacionActionsSeguridad = new NavegacionActionsSeguridad(page);
            this.seguridadConsultaVenciminetoLlavesActions = new SeguridadConsultaVenciminetoLlavesActions(page);
        }

    async viualizacionConsulta(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a Seguridad Consulta Vencimiento Llaves
        await this.navegacionActionsSeguridad.clickSeguridadVencimientoLlaves();

        //Interactuar con el servicio


        //logout
        await this.loguin.logout();

    }

    async parametrizacionVolver(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a Seguridad Consulta Vencimiento Llaves
        await this.navegacionActionsSeguridad.clickSeguridadVencimientoLlaves();

        //Interactuar con el servicio
        await this.seguridadConsultaVenciminetoLlavesActions.clickTabParametrizacion();
        await this.seguridadConsultaVenciminetoLlavesActions.inputEmail("test@example.com");
        await this.seguridadConsultaVenciminetoLlavesActions.inputDays("30");
        await this.seguridadConsultaVenciminetoLlavesActions.clickBotonContinuar();
        await this.seguridadConsultaVenciminetoLlavesActions.clickBotonVolver();

        //logout
        await this.loguin.logout();

    }

    async parametrizacionCancelar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a Seguridad Consulta Vencimiento Llaves
        await this.navegacionActionsSeguridad.clickSeguridadVencimientoLlaves();

        //Interactuar con el servicio
        await this.seguridadConsultaVenciminetoLlavesActions.clickTabParametrizacion();
        await this.seguridadConsultaVenciminetoLlavesActions.inputEmail("test@example.com");
        await this.seguridadConsultaVenciminetoLlavesActions.inputDays("30");
        await this.seguridadConsultaVenciminetoLlavesActions.clickBotonContinuar();
        await this.seguridadConsultaVenciminetoLlavesActions.clickBotonCancelar();

        //logout
        await this.loguin.logout();

    }

    async parametrizacionAceptarConfirmar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a Seguridad Consulta Vencimiento Llaves
        await this.navegacionActionsSeguridad.clickSeguridadVencimientoLlaves();

        //Interactuar con el servicio
        await this.seguridadConsultaVenciminetoLlavesActions.clickTabParametrizacion();
        await this.seguridadConsultaVenciminetoLlavesActions.inputEmail("test@example.com");
        await this.seguridadConsultaVenciminetoLlavesActions.inputDays("30");
        await this.seguridadConsultaVenciminetoLlavesActions.clickBotonContinuar();
        await this.seguridadConsultaVenciminetoLlavesActions.clickBotonAceptarConfirmacion();
        await this.seguridadConsultaVenciminetoLlavesActions.clickBotonFinalizar();

        //logout
        await this.loguin.logout();

    }
}