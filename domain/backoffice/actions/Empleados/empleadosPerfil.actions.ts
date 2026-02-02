import { Page } from "@playwright/test";
import { EmpleadosPerfilPage } from "../../pages/Empleados/empleadosPerfil.page";
;

export class  EmpleadosPerfilActions{
    private page: Page;
    private empleadosPerfilPage: EmpleadosPerfilPage;    

    constructor(page: Page) {
        this.page = page;
        this.empleadosPerfilPage = new EmpleadosPerfilPage(page);
    }

    // Servicio Consultar Perfil
    clickDetailFirst = async () => {
        await this.empleadosPerfilPage.detailFirst().isEnabled();
        await this.empleadosPerfilPage.detailFirst().click();
    }

    clickEditFirst = async () => {
        await this.empleadosPerfilPage.editFirst().isEnabled();
        await this.empleadosPerfilPage.editFirst().click();
    }
    clickDeleteFirst = async () => {
        await this.empleadosPerfilPage.deleteFirst().isEnabled();
        await this.empleadosPerfilPage.deleteFirst().click();
    }

    clickTabConsultarPerfiles = async () => {
        await this.empleadosPerfilPage.tabConsultarPerfiles().isEnabled();
        await this.empleadosPerfilPage.tabConsultarPerfiles().click();
    }

    //Servicio Crear Perfil

    clickTabCrearPerfil = async () => {
        await this.empleadosPerfilPage.tabCrearPerfil().isEnabled();
        await this.empleadosPerfilPage.tabCrearPerfil().click();
    }
    clickComboButtonEstado = async () => {
        await this.empleadosPerfilPage.comboButtonEstado().isEnabled();
        await this.empleadosPerfilPage.comboButtonEstado().click();
    }
    selectComboOptionActivo = async () => {
        await this.empleadosPerfilPage.comboOptionActivo().isVisible();
        await this.empleadosPerfilPage.comboOptionActivo().click();
    }
    checkCheckboxAccesoFuncional = async () => {
        await this.empleadosPerfilPage.checkboxAccesoFuncional().isChecked(); 
        await this.empleadosPerfilPage.checkboxAccesoFuncional().check();
    }

    llenarInputProfileName = async (profileName: string) => {
        await this.empleadosPerfilPage.profileNameInput().isEnabled();
        await this.empleadosPerfilPage.profileNameInput().fill(profileName);
    }
    // Acciones Botones

    clickBotonContinuar = async () => {
        await this.empleadosPerfilPage.botonContinuar().isEnabled();
        await this.empleadosPerfilPage.botonContinuar().click();
    }
    clickBotonCancelar = async () => {
        await this.empleadosPerfilPage.botonCancelar().isEnabled();
        await this.empleadosPerfilPage.botonCancelar().click();
    }
    clickBotonAceptarConfirmacion = async () => {
        await this.empleadosPerfilPage.botonAceptarConfirmacion().isEnabled();
        await this.empleadosPerfilPage.botonAceptarConfirmacion().click();
    }
    clickBotonVolver = async () => {
        await this.empleadosPerfilPage.botonVolver().isEnabled();
        await this.empleadosPerfilPage.botonVolver().click();
    }
    clickBotonFinalizar = async () => {
        await this.empleadosPerfilPage.botonFinalizar().isEnabled();
        await this.empleadosPerfilPage.botonFinalizar().click();
    }


   

}