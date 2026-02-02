import { Page, expect } from "@playwright/test";
import { LoginWorkflow } from "../login.workflow";
import { NavegacionActionsSeguridad } from "../../actions/Navegacion/navegacionSeguridad.actions";
import { SeguridadBloqueoMasivoEmpresasActions } from "../../actions/Seguridad/seguridadBloqueoMasivoEmpresas.actions";

export class SeguridadBloqueoMasivoEmpresasWorkflow {  
    private page: Page;
    private loguin: LoginWorkflow;
    private navegacionActionsSeguridad: NavegacionActionsSeguridad;
    private seguridadBloqueoMasivoEmpresasActions: SeguridadBloqueoMasivoEmpresasActions;    
        constructor(page: Page) {
            this.page = page;
            this.loguin = new LoginWorkflow(page);
            this.navegacionActionsSeguridad = new NavegacionActionsSeguridad(page);
            this.seguridadBloqueoMasivoEmpresasActions = new SeguridadBloqueoMasivoEmpresasActions(page);
        }

    async inactivarVolver(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a la sección de Seguridad - Bloqueo Masivo Empresas
        await this.navegacionActionsSeguridad.clickSeguridadBloqueoMasivoEmpresas();

        //interacciones con el servicio de Bloqueo Masivo Empresas
        await this.seguridadBloqueoMasivoEmpresasActions.clickComboBotonPrincipal();
        await this.seguridadBloqueoMasivoEmpresasActions.clickComboPrimerItem();
        await this.seguridadBloqueoMasivoEmpresasActions.inputCompanyName("david");

        await this.seguridadBloqueoMasivoEmpresasActions.clickBotonConsultar();
        await this.seguridadBloqueoMasivoEmpresasActions.clicKcheckboxSeleccion();
        await this.seguridadBloqueoMasivoEmpresasActions.clickBotonDesactivar();
        await this.seguridadBloqueoMasivoEmpresasActions.clickComboBotonPrincipal();
        await this.seguridadBloqueoMasivoEmpresasActions.clickComboPrimerItem();
        await this.seguridadBloqueoMasivoEmpresasActions.llenadoInputCausaInactivacion("Prueba automatizada");
        await this.seguridadBloqueoMasivoEmpresasActions.clickBotonAceptar();
        await this.seguridadBloqueoMasivoEmpresasActions.clickBotonVolver();

         //logout
        await this.loguin.logout();

    }

    async inactivarCancelar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a la sección de Seguridad - Bloqueo Masivo Empresas
        await this.navegacionActionsSeguridad.clickSeguridadBloqueoMasivoEmpresas();

        //interacciones con el servicio de Bloqueo Masivo Empresas
        await this.seguridadBloqueoMasivoEmpresasActions.clickComboBotonPrincipal();
        await this.seguridadBloqueoMasivoEmpresasActions.clickComboPrimerItem();
        await this.seguridadBloqueoMasivoEmpresasActions.inputCompanyName("david");

        await this.seguridadBloqueoMasivoEmpresasActions.clickBotonConsultar();
        await this.seguridadBloqueoMasivoEmpresasActions.clicKcheckboxSeleccion();
        await this.seguridadBloqueoMasivoEmpresasActions.clickBotonDesactivar();
        await this.seguridadBloqueoMasivoEmpresasActions.clickComboBotonPrincipal();
        await this.seguridadBloqueoMasivoEmpresasActions.clickComboPrimerItem();
        await this.seguridadBloqueoMasivoEmpresasActions.llenadoInputCausaInactivacion("Prueba automatizada");
        await this.seguridadBloqueoMasivoEmpresasActions.clickBotonAceptar();
        await this.seguridadBloqueoMasivoEmpresasActions.clickBotonCancelar();

        //logout
        await this.loguin.logout();

    }

    async inactivarAceptarConfirmar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a la sección de Seguridad - Bloqueo Masivo Empresas
        await this.navegacionActionsSeguridad.clickSeguridadBloqueoMasivoEmpresas();

        //interacciones con el servicio de Bloqueo Masivo Empresas
        await this.seguridadBloqueoMasivoEmpresasActions.clickComboBotonPrincipal();
        await this.seguridadBloqueoMasivoEmpresasActions.clickComboPrimerItem();
        await this.seguridadBloqueoMasivoEmpresasActions.inputCompanyName("david");

        await this.seguridadBloqueoMasivoEmpresasActions.clickBotonConsultar();
        await this.seguridadBloqueoMasivoEmpresasActions.clicKcheckboxSeleccion();
        await this.seguridadBloqueoMasivoEmpresasActions.clickBotonDesactivar();
        await this.seguridadBloqueoMasivoEmpresasActions.clickComboBotonPrincipal();
        await this.seguridadBloqueoMasivoEmpresasActions.clickComboPrimerItem();
        await this.seguridadBloqueoMasivoEmpresasActions.llenadoInputCausaInactivacion("Prueba automatizada");
        await this.seguridadBloqueoMasivoEmpresasActions.clickBotonAceptar();
        await this.seguridadBloqueoMasivoEmpresasActions.clickBotonAceptarConfirmacion();

         //logout
        await this.loguin.logout();

    }
}