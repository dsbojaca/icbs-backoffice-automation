import { Page } from "@playwright/test";
import { ReportesEmpresasSinActividadPage } from "../../pages/Reportes/reportesEmpresasSinActividad.page";

export class ReportesEmpresasSinActividadActions {
    private page: Page;
    private reportesEmpresasSinActividadPage: ReportesEmpresasSinActividadPage;

    constructor(page: Page) {
        this.page = page;
        this.reportesEmpresasSinActividadPage = new ReportesEmpresasSinActividadPage(page);
    }

    clicInputFechaInicio() {
        return this.reportesEmpresasSinActividadPage.inputFechaInicio().click();
    }
    
    clickCalendarioDia1() {
        return this.reportesEmpresasSinActividadPage.calendarioDia1().click();
    }

    clickBotonBuscar() {
        return this.reportesEmpresasSinActividadPage.botonBuscar().click();
    }

    clickPrimerIconoDetallesTabla() {
        return this.reportesEmpresasSinActividadPage.primerIconoDetallesTabla().click();
    }   
    
    clickModalCerrar() {
        return this.reportesEmpresasSinActividadPage.modalCerrar().click();
    }

   

}