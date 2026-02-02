import { Page } from "@playwright/test";
import { reportesTramitesPage } from "../../pages/Reportes/reportesTramites.page";

export class ReportesTramitesActions {
    private page: Page;
    private reportesTramitesPage: reportesTramitesPage;
    

    constructor(page: Page) {
        this.page = page;
        this.reportesTramitesPage = new reportesTramitesPage(page);
    }


    clickPrimerIconoTabla = async () => {
        await this.reportesTramitesPage.primerIconoTabla().isEnabled();
        await this.reportesTramitesPage.primerIconoTabla().click();
    }

    clickprimerSubIconoTabla = async () => {
        await this.reportesTramitesPage.segundoIconoTabla().isEnabled();
        await this.reportesTramitesPage.segundoIconoTabla().click();
    }  
    
    clickCerrarModal = async () => {
        await this.reportesTramitesPage.modalCerrar().isEnabled();
        await this.reportesTramitesPage.modalCerrar().click();
    }
    checkPrimerCheckbox = async () => {
        await this.reportesTramitesPage.primerCheckbox().isEnabled();
        await this.reportesTramitesPage.primerCheckbox().check();
    }

    clickBotonAceptar = async () => {
        await this.reportesTramitesPage.botonAceptar().isEnabled();
        await this.reportesTramitesPage.botonAceptar().click();
    }
    clickBotonRechazar = async () => {
        await this.reportesTramitesPage.botonRechazar().isEnabled();
        await this.reportesTramitesPage.botonRechazar().click();
    }   
}

