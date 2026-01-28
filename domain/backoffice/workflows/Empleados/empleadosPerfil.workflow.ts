import { Page, expect } from "@playwright/test";
import { LoginWorkflow } from "../login.workflow";
import { NavegacionActionsEmpleados } from "../../actions/Navegacion/navegacionEmpleados.actions";
import { EmpleadosPerfilActions } from "../../actions/Empleados/empleadosPerfil.actions";

export class EmpleadosPerfilWorkflow {  
    private page: Page;
    private loguin: LoginWorkflow;
    private navegacionActionsEmpleados: NavegacionActionsEmpleados;
    private empleadosPerfilActions: EmpleadosPerfilActions;    
        constructor(page: Page) {
            this.page = page;
            this.loguin = new LoginWorkflow(page);
            this.navegacionActionsEmpleados = new NavegacionActionsEmpleados(page);
            this.empleadosPerfilActions = new EmpleadosPerfilActions(page);
        }

    async consultarPerfilesDetalles(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password); 
        
        // Navegar a Empleados Perfil
        await this.navegacionActionsEmpleados.clickEmpleadosPerfil();


        //Iteraccion con el Servicio 
        await this.empleadosPerfilActions.clickDetailFirst();
        await this.empleadosPerfilActions.clickBotonVolver();

        //Cerrar sesión
        await this.loguin.logout();

    }

    // Editar perfil
    async consultarPerfilesEditarVolver(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password); 
        
        // Navegar a Empleados Perfil
        await this.navegacionActionsEmpleados.clickEmpleadosPerfil();
        
        //Iteraccion con el Servicio 
        await this.empleadosPerfilActions.clickEditFirst();
        await this.empleadosPerfilActions.clickBotonContinuar();
        await this.empleadosPerfilActions.clickBotonVolver();

        //Cerrar sesión
        await this.loguin.logout();

    }

    async consultarPerfilesEditarCancelar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password); 
        
        // Navegar a Empleados Perfil
        await this.navegacionActionsEmpleados.clickEmpleadosPerfil();
        
        //Iteraccion con el Servicio 
        await this.empleadosPerfilActions.clickEditFirst();
        await this.empleadosPerfilActions.clickBotonContinuar();
        await this.empleadosPerfilActions.clickBotonCancelar();

        //Cerrar sesión
        await this.loguin.logout();

    }
    async consultarPerfilesEditarAceptarConfirmar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password); 
        
        // Navegar a Empleados Perfil
        await this.navegacionActionsEmpleados.clickEmpleadosPerfil();

        //Iteraccion con el Servicio 
        await this.empleadosPerfilActions.clickEditFirst();
        await this.empleadosPerfilActions.clickBotonContinuar();
        await this.empleadosPerfilActions.clickBotonContinuar();
        await this.empleadosPerfilActions.clickBotonAceptarConfirmacion();


        //Cerrar sesión
        await this.loguin.logout();
        
    }

    //Eliminar perfil
    

    async consultarPerfilesEliminarCancelar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password); 
        
        // Navegar a Empleados Perfil
        await this.navegacionActionsEmpleados.clickEmpleadosPerfil();
        
        //Iteraccion con el Servicio 
        await this.empleadosPerfilActions.clickDeleteFirst();
        await this.empleadosPerfilActions.clickBotonCancelar();

        //Cerrar sesión
        await this.loguin.logout();


    }
    async consultarPerfilesEliminarAceptarConfirmar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password); 
        
        // Navegar a Empleados Perfil
        await this.navegacionActionsEmpleados.clickEmpleadosPerfil();
        
        //Iteraccion con el Servicio 
        await this.empleadosPerfilActions.clickDeleteFirst();
        await this.empleadosPerfilActions.clickBotonAceptarConfirmacion();

        //Cerrar sesión
        await this.loguin.logout();
    }


    //Crear perfil

    async crearPerfilVolver(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password); 
        
        // Navegar a Empleados Perfil
        await this.navegacionActionsEmpleados.clickEmpleadosPerfil();
        
        //Iteraccion con el Servicio
        await this.empleadosPerfilActions.clickTabCrearPerfil();
        await this.empleadosPerfilActions.llenarInputProfileName("Prueba");
        await this.empleadosPerfilActions.clickComboButtonEstado();
        await this.empleadosPerfilActions.selectComboOptionActivo();
        await this.empleadosPerfilActions.checkCheckboxAccesoFuncional();
        await this.empleadosPerfilActions.clickBotonContinuar();
        await this.empleadosPerfilActions.clickBotonVolver();

        //Cerrar sesión
        await this.loguin.logout();

    }

    async crearPerfilCancelar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password); 
        
        // Navegar a Empleados Perfil
        await this.navegacionActionsEmpleados.clickEmpleadosPerfil();
        
        ////Iteraccion con el Servicio
        await this.empleadosPerfilActions.clickTabCrearPerfil();
        await this.empleadosPerfilActions.llenarInputProfileName("Prueba");
        await this.empleadosPerfilActions.clickComboButtonEstado();
        await this.empleadosPerfilActions.selectComboOptionActivo();
        await this.empleadosPerfilActions.checkCheckboxAccesoFuncional();
        await this.empleadosPerfilActions.clickBotonContinuar();
        await this.empleadosPerfilActions.clickBotonCancelar();

        //Cerrar sesión
        await this.loguin.logout();

    }
    async crearPerfilAceptarConfirmar(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password); 
        
        // Navegar a Empleados Perfil
        await this.navegacionActionsEmpleados.clickEmpleadosPerfil();
        
        //////Iteraccion con el Servicio
        await this.empleadosPerfilActions.clickTabCrearPerfil();
        await this.empleadosPerfilActions.llenarInputProfileName("Prueba");
        await this.empleadosPerfilActions.clickComboButtonEstado();
        await this.empleadosPerfilActions.selectComboOptionActivo();
        await this.empleadosPerfilActions.checkCheckboxAccesoFuncional();
        await this.empleadosPerfilActions.clickBotonContinuar();
        await this.empleadosPerfilActions.clickBotonContinuar();
        await this.empleadosPerfilActions.clickBotonAceptarConfirmacion();

        //Cerrar sesión
        await this.loguin.logout();
    }
    



    


    
}