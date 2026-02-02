import { Page } from "@playwright/test";
import { reportesDescargaArchivosSolicitadosPage } from "../../pages/Reportes/reportesDescargaArchivosSolicitados.page";

export class ReportesDescargaArchivosSolicitadosActions {
    private page: Page;
    private reportesDescargaArchivosSolicitadosPage: reportesDescargaArchivosSolicitadosPage;    

    constructor(page: Page) {
        this.page = page;
        this.reportesDescargaArchivosSolicitadosPage = new reportesDescargaArchivosSolicitadosPage(page);
    }

    clickComboButton = async () => {
        await this.reportesDescargaArchivosSolicitadosPage.comboButton().isEnabled();
        await this.reportesDescargaArchivosSolicitadosPage.comboButton().click();
    }

    clickComboItemTodos = async () => {
        await this.reportesDescargaArchivosSolicitadosPage.comboItemTodos().isEnabled();
        await this.reportesDescargaArchivosSolicitadosPage.comboItemTodos().click();
    }

    clickRadioLastWeek = async () => {
        await this.reportesDescargaArchivosSolicitadosPage.radioLastWeek().isEnabled();
        await this.reportesDescargaArchivosSolicitadosPage.radioLastWeek().check();
    }

    clickBotonBuscar = async () => {
        await this.reportesDescargaArchivosSolicitadosPage.botonBuscar().isEnabled();
        await this.reportesDescargaArchivosSolicitadosPage.botonBuscar().click();
    }



}