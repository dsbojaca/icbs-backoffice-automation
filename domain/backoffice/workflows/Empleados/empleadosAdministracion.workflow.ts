import { Page, expect } from "@playwright/test";
import { LoginWorkflow } from "../login.workflow";
import { NavegacionActionsEmpleados } from "../../actions/Navegacion/navegacionEmpleados.actions";
import { EmpleadosAdministracionAction } from "../../actions/Empleados/empleadosAdministracion.actions";

export class EmpleadosAdministracionWorkflow {  
    private page: Page;
    private loguin: LoginWorkflow;
    private navegacionActionsEmpleados: NavegacionActionsEmpleados;
    private empleadosAdministracionAction: EmpleadosAdministracionAction;    
        constructor(page: Page) {
            this.page = page;
            this.loguin = new LoginWorkflow(page);
            this.navegacionActionsEmpleados = new NavegacionActionsEmpleados(page);
            this. empleadosAdministracionAction= new EmpleadosAdministracionAction(page);
        }

    async servicioConsultarEmpleados(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a la sección de Empleados - Administración de Empleados
        await this.navegacionActionsEmpleados.clickEmpleadosAdministracion();

        //Iteractuar con el Servicio
        await this.empleadosAdministracionAction.checkDateRangeRadioButton();
        await this.empleadosAdministracionAction.clickCalendarioInicio();
        await this.empleadosAdministracionAction.clickCalendarioDia1();
        await this.empleadosAdministracionAction.clickBuscarButton();

        await this.empleadosAdministracionAction.clickPrimerIconoDetallesTabla();
        await this.empleadosAdministracionAction.clickCerrarModalTexto();

        //Logout
        await this.loguin.logout();

    }

     async servicioCrearEmpleados(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a la sección de Empleados - Administración de Empleados
        await this.navegacionActionsEmpleados.clickEmpleadosAdministracion();

        //Iteractuar con el Servicio
        await this.empleadosAdministracionAction.clickCrearEmpleadoTab();
        await this.empleadosAdministracionAction.llenadoImputApellidoEmpleado("prueba");
        await this.empleadosAdministracionAction.clickComboTipoDocumentoButton();
        await this.empleadosAdministracionAction.clickComboOptionTipoDocumentoCedula();
        await this.empleadosAdministracionAction.llenadoImputNumeroIdentificacion("12345678");
        await this.empleadosAdministracionAction.llenadoImputEmailEmpleado("prueba@prueba.com");
        await this.empleadosAdministracionAction.llenadoImputCodigoInterno("1234");
        await this.empleadosAdministracionAction.llenadoImputUsernameEmpleado("pruebauser");
        await this.empleadosAdministracionAction.llenadoImputCargoEmpleado("Tester");
        await this.empleadosAdministracionAction.clickComboPerfilButton();
        await this.empleadosAdministracionAction.clickComboPrimerItem();
        await this.empleadosAdministracionAction.llenadoImputNombreEmpleado("prueba");
        await this.empleadosAdministracionAction.clickBtnContinuar();
        await this.empleadosAdministracionAction.clickBtnVolver();

        //Logout
        await this.loguin.logout();


     }

 }