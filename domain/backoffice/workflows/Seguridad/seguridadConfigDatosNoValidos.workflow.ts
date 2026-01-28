import { Page, expect } from "@playwright/test";
import { LoginWorkflow } from "../login.workflow";
import { NavegacionActionsSeguridad } from "../../actions/Navegacion/navegacionSeguridad.actions";
import { SeguridadConfigDatosNoValidosActions } from "../../actions/Seguridad/seguridadConfigDatosNoValidos.actions";

export class SeguridadConfigDatosNoValidosWorkflow {  
    private page: Page;
    private loguin: LoginWorkflow;
    private navegacionActionsSeguridad: NavegacionActionsSeguridad;
    private seguridadConfigDatosNoValidosActions: SeguridadConfigDatosNoValidosActions;    
        constructor(page: Page) {
            this.page = page;
            this.loguin = new LoginWorkflow(page);
            this.navegacionActionsSeguridad = new NavegacionActionsSeguridad(page);
            this.seguridadConfigDatosNoValidosActions = new SeguridadConfigDatosNoValidosActions(page);
        }



    async listaClavesModificarVolver(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a la sección de Seguridad - Configuración de Datos No Válidos
        await this.navegacionActionsSeguridad.clickSeguridadDiccionario();

        //interacciones con el servicio de Configuración de Datos No Válidos
        await this.seguridadConfigDatosNoValidosActions.clickPrimerIconoEditarTabla();
        await this.seguridadConfigDatosNoValidosActions.inputInvalidPwd("123456");
        await this.seguridadConfigDatosNoValidosActions.clickComboEstadoBoton();
        await this.seguridadConfigDatosNoValidosActions.clickComboItemEstadoActivo();
        await this.seguridadConfigDatosNoValidosActions.clickBotonContinuar();
        await this.seguridadConfigDatosNoValidosActions.clickBotonVolver();

        
        //Logout
        await this.loguin.logout();

    }


    async listaClavesModificarCancelar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a la sección de Seguridad - Configuración de Datos No Válidos
        await this.navegacionActionsSeguridad.clickSeguridadDiccionario();

        //interacciones con el servicio de Configuración de Datos No Válidos
        await this.seguridadConfigDatosNoValidosActions.clickPrimerIconoEditarTabla();
        await this.seguridadConfigDatosNoValidosActions.inputInvalidPwd("123456");
        await this.seguridadConfigDatosNoValidosActions.clickComboEstadoBoton();
        await this.seguridadConfigDatosNoValidosActions.clickComboItemEstadoActivo();
        await this.seguridadConfigDatosNoValidosActions.clickBotonContinuar();
        await this.seguridadConfigDatosNoValidosActions.clickBotonCancelar();

        
        //Logout
        await this.loguin.logout();

    }

    async listaClavesModificarAceptarConfirmar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a la sección de Seguridad - Configuración de Datos No Válidos
        await this.navegacionActionsSeguridad.clickSeguridadDiccionario();

        //interacciones con el servicio de Configuración de Datos No Válidos
        await this.seguridadConfigDatosNoValidosActions.clickPrimerIconoEditarTabla();
        await this.seguridadConfigDatosNoValidosActions.inputInvalidPwd("123456");
        await this.seguridadConfigDatosNoValidosActions.clickComboEstadoBoton();
        await this.seguridadConfigDatosNoValidosActions.clickComboItemEstadoActivo();
        await this.seguridadConfigDatosNoValidosActions.clickBotonContinuar();
        await this.seguridadConfigDatosNoValidosActions.clickBotonAceptarConfirmacion();
        await this.seguridadConfigDatosNoValidosActions.clickBotonFinalizar();

        //Logout
        await this.loguin.logout();

    }

    //Lista Claves Borrar

    


    async listaClavesBorrarCancelar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a la sección de Seguridad - Configuración de Datos No Válidos
        await this.navegacionActionsSeguridad.clickSeguridadDiccionario();

        //interacciones con el servicio de Configuración de Datos No Válidos
        await this.seguridadConfigDatosNoValidosActions.clickPrimerIconoBorrarTabla();
        await this.seguridadConfigDatosNoValidosActions.clickBotonCancelar();

        
        //Logout
        await this.loguin.logout();

    }

    async listaClavesBorrarAceptarConfirmar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a la sección de Seguridad - Configuración de Datos No Válidos
        await this.navegacionActionsSeguridad.clickSeguridadDiccionario();

        //interacciones con el servicio de Configuración de Datos No Válidos
        await this.seguridadConfigDatosNoValidosActions.clickPrimerIconoBorrarTabla();
        await this.seguridadConfigDatosNoValidosActions.clickBotonAceptarConfirmacion();
        await this.seguridadConfigDatosNoValidosActions.clickBotonFinalizar();

        //Logout
        await this.loguin.logout();

    }

    //Crear Registro

    async crearRegistroVolver(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a la sección de Seguridad - Configuración de Datos No Válidos
        await this.navegacionActionsSeguridad.clickSeguridadDiccionario();

        //interacciones con el servicio de Configuración de Datos No Válidos
        await this.seguridadConfigDatosNoValidosActions.clickTabCrearRegistro();
        await this.seguridadConfigDatosNoValidosActions.inputInvalidPwd("123");
        await this.seguridadConfigDatosNoValidosActions.clickComboEstadoBoton();
        await this.seguridadConfigDatosNoValidosActions.clickComboItemEstadoActivo();
        await this.seguridadConfigDatosNoValidosActions.clickBotonContinuar();
        await this.seguridadConfigDatosNoValidosActions.clickBotonVolver();

        
        //Logout
        await this.loguin.logout();

    }


    async crearRegistroCancelar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a la sección de Seguridad - Configuración de Datos No Válidos
        await this.navegacionActionsSeguridad.clickSeguridadDiccionario();

        //interacciones con el servicio de Configuración de Datos No Válidos
       await this.seguridadConfigDatosNoValidosActions.clickTabCrearRegistro();
        await this.seguridadConfigDatosNoValidosActions.inputInvalidPwd("123");
        await this.seguridadConfigDatosNoValidosActions.clickComboEstadoBoton();
        await this.seguridadConfigDatosNoValidosActions.clickComboItemEstadoActivo();
        await this.seguridadConfigDatosNoValidosActions.clickBotonContinuar();
        await this.seguridadConfigDatosNoValidosActions.clickBotonCancelar();

        
        //Logout
        await this.loguin.logout();

    }

    async crearRegistroAceptarConfirmar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a la sección de Seguridad - Configuración de Datos No Válidos
        await this.navegacionActionsSeguridad.clickSeguridadDiccionario();

        //interacciones con el servicio de Configuración de Datos No Válidos
        await this.seguridadConfigDatosNoValidosActions.clickTabCrearRegistro();
        await this.seguridadConfigDatosNoValidosActions.inputInvalidPwd("123");
        await this.seguridadConfigDatosNoValidosActions.clickComboEstadoBoton();
        await this.seguridadConfigDatosNoValidosActions.clickComboItemEstadoActivo();
        await this.seguridadConfigDatosNoValidosActions.clickBotonContinuar();
        await this.seguridadConfigDatosNoValidosActions.clickBotonAceptarConfirmacion();
        await this.seguridadConfigDatosNoValidosActions.clickBotonFinalizar();

        //Logout
        await this.loguin.logout();

    }

    //Lista Destinatarios Modificar
    async listaDestinatariosModificarVolver(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a la sección de Seguridad - Configuración de Datos No Válidos
        await this.navegacionActionsSeguridad.clickSeguridadDiccionario();

        //interacciones con el servicio de Configuración de Datos No Válidos
        await this.seguridadConfigDatosNoValidosActions.clickTabListaDestinatarios();
        await this.seguridadConfigDatosNoValidosActions.clickPrimerIconoEditarTabla();
        await this.page.waitForTimeout(3000); //espera para que cargue el modal
        await this.seguridadConfigDatosNoValidosActions.clickBotonContinuar();
        await this.seguridadConfigDatosNoValidosActions.clickBotonVolver();

        
        //Logout
        await this.loguin.logout();

    }

    async listaDestinatariosModificarCancelar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a la sección de Seguridad - Configuración de Datos No Válidos
        await this.navegacionActionsSeguridad.clickSeguridadDiccionario();

        //interacciones con el servicio de Configuración de Datos No Válidos
        await this.seguridadConfigDatosNoValidosActions.clickTabListaDestinatarios();
        await this.seguridadConfigDatosNoValidosActions.clickPrimerIconoEditarTabla();
        await this.page.waitForTimeout(3000);
        await this.seguridadConfigDatosNoValidosActions.clickBotonContinuar();
        await this.seguridadConfigDatosNoValidosActions.clickBotonCancelar();

        
        //Logout
        await this.loguin.logout();

    }

    async listaDestinatariosModificarAceptarConfirmar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a la sección de Seguridad - Configuración de Datos No Válidos
        await this.navegacionActionsSeguridad.clickSeguridadDiccionario();

        //interacciones con el servicio de Configuración de Datos No Válidos
        await this.seguridadConfigDatosNoValidosActions.clickTabListaDestinatarios();
        await this.seguridadConfigDatosNoValidosActions.clickPrimerIconoEditarTabla();
        await this.page.waitForTimeout(3000);
        await this.seguridadConfigDatosNoValidosActions.clickBotonContinuar();
        await this.seguridadConfigDatosNoValidosActions.clickBotonAceptarConfirmacion();
        await this.seguridadConfigDatosNoValidosActions.clickBotonFinalizar();

        
        //Logout
        await this.loguin.logout();

    }

    //Lista Destinatarios Eliminar
    async listaDestinatariosEliminarCancelar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a la sección de Seguridad - Configuración de Datos No Válidos
        await this.navegacionActionsSeguridad.clickSeguridadDiccionario();

        //interacciones con el servicio de Configuración de Datos No Válidos
        await this.seguridadConfigDatosNoValidosActions.clickTabListaDestinatarios();
        await this.seguridadConfigDatosNoValidosActions.clickPrimerIconoBorrarTabla();
        await this.seguridadConfigDatosNoValidosActions.clickBotonCancelar();

        
        //Logout
        await this.loguin.logout();

    }

    async listaDestinatariosEliminarAceptarConfirmar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a la sección de Seguridad - Configuración de Datos No Válidos
        await this.navegacionActionsSeguridad.clickSeguridadDiccionario();

        //interacciones con el servicio de Configuración de Datos No Válidos
        await this.seguridadConfigDatosNoValidosActions.clickTabListaDestinatarios();
        await this.seguridadConfigDatosNoValidosActions.clickPrimerIconoBorrarTabla();
        await this.seguridadConfigDatosNoValidosActions.clickBotonAceptarConfirmacion();
        await this.seguridadConfigDatosNoValidosActions.clickBotonFinalizar();

        
        //Logout
        await this.loguin.logout();

    }




}
