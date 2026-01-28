import { Page } from "@playwright/test";
import { EmpleadosConfiguracionAutorizacionesPage } from "../../pages/Empleados/empleadosConfiguracionAutorizaciones.page";

export class EmpleadosConfiguracionAutorizacionesActions {
    private page: Page;
    private empleadosConfiguracionAutorizacionesPage: EmpleadosConfiguracionAutorizacionesPage;    
    constructor(page: Page) {
        this.page = page;
        this.empleadosConfiguracionAutorizacionesPage = new EmpleadosConfiguracionAutorizacionesPage(page);
    }

    clickTabCrearRol = async () => {
        await this.empleadosConfiguracionAutorizacionesPage.tabCrearRol().isEnabled();
        await this.empleadosConfiguracionAutorizacionesPage.tabCrearRol().click();
    }

    inputNombreRol = async (nombreRol: string) => {
        await this.empleadosConfiguracionAutorizacionesPage.inputNombreRol().isEnabled();
        await this.empleadosConfiguracionAutorizacionesPage.inputNombreRol().fill(nombreRol);
    }

    inputDescripcionRol = async (descripcionRol: string) => {
        await this.empleadosConfiguracionAutorizacionesPage.inputDescripcionRol().isEnabled();
        await this.empleadosConfiguracionAutorizacionesPage.inputDescripcionRol().fill(descripcionRol);
    }

    clickComboInicial = async () => {
        await this.empleadosConfiguracionAutorizacionesPage.comboInicial().isEnabled();
        await this.empleadosConfiguracionAutorizacionesPage.comboInicial().click();
    }

    clickComboSegundo = async () => {
        await this.empleadosConfiguracionAutorizacionesPage.comboSegundo().isEnabled();
        await this.empleadosConfiguracionAutorizacionesPage.comboSegundo().click();
    }

    clickComboUltimoItemLista = async () => {
        await this.empleadosConfiguracionAutorizacionesPage.comboUltimoItemLista().isEnabled();
        await this.empleadosConfiguracionAutorizacionesPage.comboUltimoItemLista().click();
    }

    clickComboPrimerItemLista = async () => {
        await this.empleadosConfiguracionAutorizacionesPage.comboPrimerItemLista().isEnabled();
        await this.empleadosConfiguracionAutorizacionesPage.comboPrimerItemLista().click();
    }

    clickComboItemServidoresConexiones= async () => {
        await this.empleadosConfiguracionAutorizacionesPage.ComboItemServidoresConexiones().isEnabled();
        await this.empleadosConfiguracionAutorizacionesPage.ComboItemServidoresConexiones().click();
    }
    clickComboItemEstadoActivo = async () => {
        await this.empleadosConfiguracionAutorizacionesPage.ComboItemEstadoActivo().isEnabled();
        await this.empleadosConfiguracionAutorizacionesPage.ComboItemEstadoActivo().click();
    }
    clickComboItemEstadoInactivo = async () => {
        await this.empleadosConfiguracionAutorizacionesPage.ComboItemEstadoInactivo().isEnabled();
        await this.empleadosConfiguracionAutorizacionesPage.ComboItemEstadoInactivo().click();
    }

    

    clickTabRolesCreados = async () => {
        await this.empleadosConfiguracionAutorizacionesPage.tabRolesCreados().isEnabled();
        await this.empleadosConfiguracionAutorizacionesPage.tabRolesCreados().click();
    }

    clickTabAsignacionUsuarios = async () => {
        await this.empleadosConfiguracionAutorizacionesPage.tabAsignacionUsuarios().isEnabled();
        await this.empleadosConfiguracionAutorizacionesPage.tabAsignacionUsuarios().click();
    }
    
    clickTabCrearAutorizacion = async () => {
        await this.empleadosConfiguracionAutorizacionesPage.tabCrearAutorizacion().isEnabled();
        await this.empleadosConfiguracionAutorizacionesPage.tabCrearAutorizacion().click();
    }

    //Iconos
    clickPrimerIconoModificarTabla = async () => {
        await this.empleadosConfiguracionAutorizacionesPage.primerIconoModificarTabla().isEnabled();
        await this.empleadosConfiguracionAutorizacionesPage.primerIconoModificarTabla().click();
    }
    clickPrimerIconoEliminarTabla = async () => {
        await this.empleadosConfiguracionAutorizacionesPage.primerIconoEliminarTabla().isEnabled();
        await this.empleadosConfiguracionAutorizacionesPage.primerIconoEliminarTabla().click();
    }


    //Botones
    clickBotonNext = async () => {
        await this.empleadosConfiguracionAutorizacionesPage.botonNext().isEnabled();
        await this.empleadosConfiguracionAutorizacionesPage.botonNext().click();
    }
    clickBotonCancelarCrearRol = async () => {
        await this.empleadosConfiguracionAutorizacionesPage.botonCancelarCrearRol().isEnabled();
        await this.empleadosConfiguracionAutorizacionesPage.botonCancelarCrearRol().click();
    }

    clickBotonContinuar = async () => {
        await this.empleadosConfiguracionAutorizacionesPage.botonContinuar().isEnabled();
        await this.empleadosConfiguracionAutorizacionesPage.botonContinuar().click();
    }
    clickBotonCancelar = async () => {
        await this.empleadosConfiguracionAutorizacionesPage.botonCancelar().isEnabled();
        await this.empleadosConfiguracionAutorizacionesPage.botonCancelar().click();
    }
    clickBotonVolver = async () => {
        await this.empleadosConfiguracionAutorizacionesPage.botonVolver().isEnabled();
        await this.empleadosConfiguracionAutorizacionesPage.botonVolver().click();
    }
    clickBotonAceptarConfirmacion = async () => {
        await this.empleadosConfiguracionAutorizacionesPage.botonAceptarConfirmacion().isEnabled();
        await this.empleadosConfiguracionAutorizacionesPage.botonAceptarConfirmacion().click();
    }
    clickBotonFinalizar = async () => {
        await this.empleadosConfiguracionAutorizacionesPage.botonFinalizar().isEnabled();
        await this.empleadosConfiguracionAutorizacionesPage.botonFinalizar().click();
    }
    clickBotonContinuarCrearRol = async () => {
        await this.empleadosConfiguracionAutorizacionesPage.botonContinuarCrearRol().isEnabled();
        await this.empleadosConfiguracionAutorizacionesPage.botonContinuarCrearRol().click();
    }


}