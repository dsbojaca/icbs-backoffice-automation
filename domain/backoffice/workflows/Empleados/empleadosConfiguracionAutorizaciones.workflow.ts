import { Page, expect } from "@playwright/test";
import { LoginWorkflow } from "../login.workflow";
import { NavegacionActionsEmpleados } from "../../actions/Navegacion/navegacionEmpleados.actions";
import { EmpleadosConfiguracionAutorizacionesActions } from "../../actions/Empleados/empleadosConfiguracionAutorizaciones.actions";

export class EmpleadosConfiguracionAutorizacionesWorkflow {  
    private page: Page;
    private loguin: LoginWorkflow;
    private navegacionActionsEmpleados: NavegacionActionsEmpleados;
    private empleadosConfiguracionAutorizacionesActions: EmpleadosConfiguracionAutorizacionesActions;    
        constructor(page: Page) {
            this.page = page;
            this.loguin = new LoginWorkflow(page);
            this.navegacionActionsEmpleados = new NavegacionActionsEmpleados(page);
            this.empleadosConfiguracionAutorizacionesActions = new EmpleadosConfiguracionAutorizacionesActions(page);
        }

    async autorizacionesVisualizacion(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password); 
        
        // Navegar a Empleados > Configuración Autorizaciones
        await this.navegacionActionsEmpleados.clickEmpleadosConfigAutorizaciones();

        //Interactuar con el servicio de Empleados Configuración Autorizaciones

        //logout
        await this.loguin.logout();
    }

    //Crear Rol
    async crearRolVolver(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password); 
        
        // Navegar a Empleados > Configuración Autorizaciones
        await this.navegacionActionsEmpleados.clickEmpleadosConfigAutorizaciones();

        //Interactuar con el servicio de Empleados Configuración Autorizaciones
        await this.empleadosConfiguracionAutorizacionesActions.clickTabCrearRol();
        await this.empleadosConfiguracionAutorizacionesActions.inputNombreRol("Automatizado prueba");
        await this.empleadosConfiguracionAutorizacionesActions.inputDescripcionRol("Descripción del Rol Automatizado");
        await this.empleadosConfiguracionAutorizacionesActions.clickComboInicial();
        await this.empleadosConfiguracionAutorizacionesActions.clickComboItemEstadoActivo();
        await this.empleadosConfiguracionAutorizacionesActions.clickBotonNext();
        await this.empleadosConfiguracionAutorizacionesActions.clickBotonVolver();

        //logout
        await this.loguin.logout();
    }

    async crearRolCancelar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password); 
        
        // Navegar a Empleados > Configuración Autorizaciones
        await this.navegacionActionsEmpleados.clickEmpleadosConfigAutorizaciones();

        //Interactuar con el servicio de Empleados Configuración Autorizaciones
        await this.empleadosConfiguracionAutorizacionesActions.clickTabCrearRol();
        await this.empleadosConfiguracionAutorizacionesActions.inputNombreRol("Automatizado prueba");
        await this.empleadosConfiguracionAutorizacionesActions.inputDescripcionRol("Descripción del Rol Automatizado");
        await this.empleadosConfiguracionAutorizacionesActions.clickComboInicial();
        await this.empleadosConfiguracionAutorizacionesActions.clickComboItemEstadoActivo();
        await this.empleadosConfiguracionAutorizacionesActions.clickBotonNext();
        await this.empleadosConfiguracionAutorizacionesActions.clickBotonCancelarCrearRol();

        //logout
        await this.loguin.logout();
    }

    async crearRolAceptarConfirmar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password); 
        
        // Navegar a Empleados > Configuración Autorizaciones
        await this.navegacionActionsEmpleados.clickEmpleadosConfigAutorizaciones();

        //Interactuar con el servicio de Empleados Configuración Autorizaciones
        await this.empleadosConfiguracionAutorizacionesActions.clickTabCrearRol();
        await this.empleadosConfiguracionAutorizacionesActions.inputNombreRol("Automatizado prueba");
        await this.empleadosConfiguracionAutorizacionesActions.inputDescripcionRol("Descripción del Rol Automatizado");
        await this.empleadosConfiguracionAutorizacionesActions.clickComboInicial();
        await this.empleadosConfiguracionAutorizacionesActions.clickComboItemEstadoActivo();
        await this.empleadosConfiguracionAutorizacionesActions.clickBotonNext();
        await this.empleadosConfiguracionAutorizacionesActions.clickBotonContinuarCrearRol();
        await this.empleadosConfiguracionAutorizacionesActions.clickBotonFinalizar();

        //logout
        await this.loguin.logout();
    }

    //Roles Creados Modificar

    async rolesCreadosModificarVolver(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password); 
        
        // Navegar a Empleados > Configuración Autorizaciones
        await this.navegacionActionsEmpleados.clickEmpleadosConfigAutorizaciones();

        //Interactuar con el servicio de Empleados Configuración Autorizaciones
        await this.empleadosConfiguracionAutorizacionesActions.clickTabRolesCreados();
        await this.empleadosConfiguracionAutorizacionesActions.clickPrimerIconoModificarTabla();
        await this.empleadosConfiguracionAutorizacionesActions.clickBotonContinuarCrearRol();
        await this.empleadosConfiguracionAutorizacionesActions.clickBotonVolver();

        //logout
        await this.loguin.logout();
    }

    async rolesCreadosModificarCancelar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password); 
        
        // Navegar a Empleados > Configuración Autorizaciones
        await this.navegacionActionsEmpleados.clickEmpleadosConfigAutorizaciones();

        //Interactuar con el servicio de Empleados Configuración Autorizaciones
        await this.empleadosConfiguracionAutorizacionesActions.clickTabRolesCreados();
        await this.empleadosConfiguracionAutorizacionesActions.clickPrimerIconoModificarTabla();
        await this.empleadosConfiguracionAutorizacionesActions.clickBotonContinuarCrearRol();
        await this.empleadosConfiguracionAutorizacionesActions.clickBotonCancelarCrearRol();

        //logout
        await this.loguin.logout();
    }

    async rolesCreadosModificarAceptarConfirmar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password); 
        
        // Navegar a Empleados > Configuración Autorizaciones
        await this.navegacionActionsEmpleados.clickEmpleadosConfigAutorizaciones();

        //Interactuar con el servicio de Empleados Configuración Autorizaciones
        await this.empleadosConfiguracionAutorizacionesActions.clickTabRolesCreados();
        await this.empleadosConfiguracionAutorizacionesActions.clickPrimerIconoModificarTabla();
        await this.empleadosConfiguracionAutorizacionesActions.clickBotonContinuarCrearRol();
        await this.empleadosConfiguracionAutorizacionesActions.clickBotonContinuarCrearRol();
        await this.empleadosConfiguracionAutorizacionesActions.clickBotonFinalizar();

        //logout
        await this.loguin.logout();
    }

    //Roles Creados Eliminar

    async rolesCreadosEliminarCancelar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password); 
        
        // Navegar a Empleados > Configuración Autorizaciones
        await this.navegacionActionsEmpleados.clickEmpleadosConfigAutorizaciones();

        //Interactuar con el servicio de Empleados Configuración Autorizaciones
        await this.empleadosConfiguracionAutorizacionesActions.clickTabRolesCreados();
        await this.empleadosConfiguracionAutorizacionesActions.clickPrimerIconoEliminarTabla();
        await this.empleadosConfiguracionAutorizacionesActions.clickBotonCancelarCrearRol();

        //logout
        await this.loguin.logout();
    }

    async rolesCreadosEliminarAceptarConfirmar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password); 
        
        // Navegar a Empleados > Configuración Autorizaciones
        await this.navegacionActionsEmpleados.clickEmpleadosConfigAutorizaciones();

        //Interactuar con el servicio de Empleados Configuración Autorizaciones
        await this.empleadosConfiguracionAutorizacionesActions.clickTabRolesCreados();
        await this.empleadosConfiguracionAutorizacionesActions.clickPrimerIconoEliminarTabla();
        await this.empleadosConfiguracionAutorizacionesActions.clickBotonContinuarCrearRol();

        //logout
        await this.loguin.logout();
    }

    //Asignacion de Usuarios
    async asignacionUsuariosVolver(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password); 
        
        // Navegar a Empleados > Configuración Autorizaciones
        await this.navegacionActionsEmpleados.clickEmpleadosConfigAutorizaciones();

        //Interactuar con el servicio de Empleados Configuración Autorizaciones
        await this.empleadosConfiguracionAutorizacionesActions.clickTabAsignacionUsuarios();
        await this.empleadosConfiguracionAutorizacionesActions.clickComboInicial();
        await this.empleadosConfiguracionAutorizacionesActions.clickComboPrimerItemLista();
        await this.empleadosConfiguracionAutorizacionesActions.clickComboSegundo();
        await this.empleadosConfiguracionAutorizacionesActions.clickComboUltimoItemLista();
        await this.empleadosConfiguracionAutorizacionesActions.clickBotonContinuar();
        await this.empleadosConfiguracionAutorizacionesActions.clickBotonVolver();

        //logout
        await this.loguin.logout();
    }

    async asignacionUsuariosCancelar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password); 
        
        // Navegar a Empleados > Configuración Autorizaciones
        await this.navegacionActionsEmpleados.clickEmpleadosConfigAutorizaciones();

        //Interactuar con el servicio de Empleados Configuración Autorizaciones
        await this.empleadosConfiguracionAutorizacionesActions.clickTabAsignacionUsuarios();
        await this.empleadosConfiguracionAutorizacionesActions.clickComboInicial();
        await this.empleadosConfiguracionAutorizacionesActions.clickComboPrimerItemLista();
        await this.empleadosConfiguracionAutorizacionesActions.clickComboSegundo();
        await this.empleadosConfiguracionAutorizacionesActions.clickComboUltimoItemLista();
        await this.empleadosConfiguracionAutorizacionesActions.clickBotonContinuar();
        await this.empleadosConfiguracionAutorizacionesActions.clickBotonCancelarCrearRol();

        //logout
        await this.loguin.logout();
    }

    async asignacionUsuariosAceptarConfirmar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password); 
        
        // Navegar a Empleados > Configuración Autorizaciones
        await this.navegacionActionsEmpleados.clickEmpleadosConfigAutorizaciones();

        //Interactuar con el servicio de Empleados Configuración Autorizaciones
        await this.empleadosConfiguracionAutorizacionesActions.clickTabAsignacionUsuarios();
        await this.empleadosConfiguracionAutorizacionesActions.clickComboInicial();
        await this.empleadosConfiguracionAutorizacionesActions.clickComboPrimerItemLista();
        await this.empleadosConfiguracionAutorizacionesActions.clickComboSegundo();
        await this.empleadosConfiguracionAutorizacionesActions.clickComboUltimoItemLista();
        await this.empleadosConfiguracionAutorizacionesActions.clickBotonContinuar();
        await this.empleadosConfiguracionAutorizacionesActions.clickBotonContinuarCrearRol();
    
        //logout
        await this.loguin.logout();
    }

    //Crear Autorizacion
    async crearAutorizacionVolver(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);

        // Navegar a Empleados > Configuración Autorizaciones
        await this.navegacionActionsEmpleados.clickEmpleadosConfigAutorizaciones();
        
        //Interactuar con el servicio de Empleados Configuración Autorizaciones
        await this.empleadosConfiguracionAutorizacionesActions.clickTabCrearAutorizacion();
        await this.empleadosConfiguracionAutorizacionesActions.clickComboInicial();
        await this.empleadosConfiguracionAutorizacionesActions.clickComboPrimerItemLista();
        await this.empleadosConfiguracionAutorizacionesActions.clickComboSegundo();
        await this.empleadosConfiguracionAutorizacionesActions.clickComboItemServidoresConexiones();
        await this.empleadosConfiguracionAutorizacionesActions.clickBotonContinuar();
        await this.empleadosConfiguracionAutorizacionesActions.clickBotonCancelar();

        //logout
        await this.loguin.logout();
    }


}