import { Page } from "@playwright/test";
import { ReportesConsultaRetencionBorradoPage  } from "../../pages/Reportes/reportesConsultaRetencionBorrado.page";

export class ReportesConsultaRetencionBorradoActions {
    private page: Page;
    private reportesConsultaRetencionBorradoPage: ReportesConsultaRetencionBorradoPage;    

    constructor(page: Page) {
        this.page = page;
        this.reportesConsultaRetencionBorradoPage = new ReportesConsultaRetencionBorradoPage(page);
    }

    clickComboButtonTipo = async () => {
        await this.reportesConsultaRetencionBorradoPage.comboButtonTipo().isEnabled();
        await this.reportesConsultaRetencionBorradoPage.comboButtonTipo().click();
    }

    clickComboItemRegistrosUsuario = async () => {
        await this.reportesConsultaRetencionBorradoPage.comboItemRegistrosUsuario().isEnabled();
        await this.reportesConsultaRetencionBorradoPage.comboItemRegistrosUsuario().click();
    }

    clickComboItemRegistrosBitacora = async () => {
        await this.reportesConsultaRetencionBorradoPage.comboItemRegistrosBitacora().isEnabled();
        await this.reportesConsultaRetencionBorradoPage.comboItemRegistrosBitacora().click();
    }

    clickInputFechaInicio = async () => {
        await this.reportesConsultaRetencionBorradoPage.inputFechaInicio().isEnabled();
        await this.reportesConsultaRetencionBorradoPage.inputFechaInicio().click();
    }

    clickCalendarioDia1 = async () => {
        await this.reportesConsultaRetencionBorradoPage.calendarioDia1().isEnabled();
        await this.reportesConsultaRetencionBorradoPage.calendarioDia1().click();
    }

    clickBotonConsultar = async () => {
        await this.reportesConsultaRetencionBorradoPage.botonConsultar().isEnabled();
        await this.reportesConsultaRetencionBorradoPage.botonConsultar().click();
    }

    validarTablaInformacion = async () => {
        await this.reportesConsultaRetencionBorradoPage.tablaInformacion().isVisible();
    }
}