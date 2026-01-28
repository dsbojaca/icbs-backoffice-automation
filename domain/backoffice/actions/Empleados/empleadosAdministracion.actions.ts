import { Page } from "@playwright/test";
import { EmpleadosAdministracionPage } from "../../pages/Empleados/empleadosAdministracion.page";

export class EmpleadosAdministracionAction {
    private page: Page;
    private empleadosAdministracionPage:EmpleadosAdministracionPage;    

    constructor(page: Page) {
        this.page = page;
        this.empleadosAdministracionPage = new EmpleadosAdministracionPage(page);
    }
    checkDateRangeRadioButton = async () => {
        await this.empleadosAdministracionPage.radioDateRange().isEnabled();
        await this.empleadosAdministracionPage.radioDateRange().check();
    }
    clickCalendarioInicio = async () => {
        await this.empleadosAdministracionPage.calendarioInicio().isEnabled();
        await this.empleadosAdministracionPage.calendarioInicio().click();
    }

    clickCalendarioDia1 = async () => {
        await this.empleadosAdministracionPage.calendarioDia1().isEnabled();
        await this.empleadosAdministracionPage.calendarioDia1().click();
    }

    clickBuscarButton = async () => {
        await this.empleadosAdministracionPage.btnBuscar().isEnabled();
        await this.empleadosAdministracionPage.btnBuscar().click();
    }

    clickPrimerIconoDetallesTabla = async () => {
        await this.empleadosAdministracionPage.primerIconoDetallesTabla().isEnabled();
        await this.empleadosAdministracionPage.primerIconoDetallesTabla().click();
    }

    clickCerrarModalTexto = async () => {
        await this.empleadosAdministracionPage.cerrarModalTexto().isEnabled();
        await this.empleadosAdministracionPage.cerrarModalTexto().click();
    }


    // ---- CREAR EMPLEADO ----

    
    clickCrearEmpleadoTab = async () => {
        await this.empleadosAdministracionPage.crearEmpleadoTab().isEnabled();
        await this.empleadosAdministracionPage.crearEmpleadoTab().click();
    }
     llenadoImputNombreEmpleado = async (nombre: string) => {
        await this.empleadosAdministracionPage.inputNombreEmpleado().isEditable();
        await this.empleadosAdministracionPage.inputNombreEmpleado().click()
        await this.empleadosAdministracionPage.inputNombreEmpleado().fill(nombre);
    }
    llenadoImputApellidoEmpleado = async (apellido: string) => {
        await this.empleadosAdministracionPage.inputApellidoEmpleado().isEditable();
        await this.empleadosAdministracionPage.inputApellidoEmpleado().fill(apellido);
    }
    
    clickComboTipoDocumentoButton = async () => {
        await this.empleadosAdministracionPage.comboTipoDocumentoButton().isEnabled();
        await this.empleadosAdministracionPage.comboTipoDocumentoButton().click();
    }
    clickComboOptionTipoDocumentoCedula = async () => {
        await this.empleadosAdministracionPage.comboTipoDocumentoCedula().isEnabled();
        await this.empleadosAdministracionPage.comboTipoDocumentoCedula().click();
    }

    llenadoImputEmailEmpleado = async (email: string) => {
        await this.empleadosAdministracionPage.inputEmailEmpleado().isEnabled();
        await this.empleadosAdministracionPage.inputEmailEmpleado().fill(email);
    }

    llenadoImputNumeroIdentificacion = async (identNumber: string) => {
        await this.empleadosAdministracionPage.inputIdentNumber().isEnabled();
        await this.empleadosAdministracionPage.inputIdentNumber().fill(identNumber);
    }
    
    llenadoImputCodigoInterno = async (codigo: string) => {
        await this.empleadosAdministracionPage.inputCodigoInterno().isEnabled();
        await this.empleadosAdministracionPage.inputCodigoInterno().fill(codigo);
    }

    llenadoImputUsernameEmpleado = async (username: string) => {
        await this.empleadosAdministracionPage.inputUsernameEmpleado().isEnabled();
        await this.empleadosAdministracionPage.inputUsernameEmpleado().fill(username);
    }

    llenadoImputCargoEmpleado = async (cargo: string) => {
        await this.empleadosAdministracionPage.inputCargoEmpleado().isEnabled();
        await this.empleadosAdministracionPage.inputCargoEmpleado().fill(cargo);
    }

   clickComboPerfilButton = async () => {
        await this.empleadosAdministracionPage.comboPerfilButton().isEnabled();
        await this.empleadosAdministracionPage.comboPerfilButton().click();
    }

    clickComboPrimerItem = async () => {
        await this.empleadosAdministracionPage.comboPrimerItem().isEnabled();
        await this.empleadosAdministracionPage.comboPrimerItem().click();
    }

    clickBtnContinuar = async () => {
        await this.empleadosAdministracionPage.btnContinuar().isEnabled();
        await this.empleadosAdministracionPage.btnContinuar().click();
    }

    clickBtnContinueAccept = async () => {
        await this.empleadosAdministracionPage.btnContinueAccept().isEnabled();
        await this.empleadosAdministracionPage.btnContinueAccept().click();
    }
    clickBtnCancel = async () => {
        await this.empleadosAdministracionPage.btnCancel().isEnabled();
        await this.empleadosAdministracionPage.btnCancel().click();
    }
    clickBtnVolver = async () => {
        await this.empleadosAdministracionPage.btnVolver().isEnabled();
        await this.empleadosAdministracionPage.btnVolver().click();
    }


   

}