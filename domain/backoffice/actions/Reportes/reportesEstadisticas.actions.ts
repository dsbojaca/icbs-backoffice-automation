import { Page } from "@playwright/test";
import { ReportesEstadisticasPage } from "../../pages/Reportes/reportesEstadisticas.page";

export class ReportesEstadisticasActions {
    private page: Page;
    private reportesEstadisticasPage: ReportesEstadisticasPage;    

    constructor(page: Page) {
        this.page = page;
        this.reportesEstadisticasPage = new ReportesEstadisticasPage(page);
    }
    
    clickComboButton = async () => {
        await this.reportesEstadisticasPage.comboButton().click();
    }

    clickComboEventosServicio = async () => {
        await this.reportesEstadisticasPage.comboEventosServicio().click();
    }

    clickComboEventosPerfil = async () => {
        await this.reportesEstadisticasPage.comboEventosPerfil().click();
    } 

    clickPrimerIconoDetalles = async () => {
        await this.reportesEstadisticasPage.primerIconoDetalles().click();
    }

    clickModalCerrar = async () => {
        await this.reportesEstadisticasPage.modalCerrar().click();
    }

    clickTabEstadisticasCliente = async () => {
        await this.reportesEstadisticasPage.tabEstadisticasCliente().click();
    }
    clickComboItemfinal = async () => {
        await this.reportesEstadisticasPage.comboItemfinal().click();
    }
    

   

}