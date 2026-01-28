import { Page, expect } from "@playwright/test";
import { LoginWorkflow } from "../login.workflow";
import { NavegacionActionsReportes } from "../../actions/Navegacion/navegacionReportes.actions";
import { ReportesDescargaArchivosSolicitadosActions } from "../../actions/Reportes/reportesDescargaArchivosSolicitados.actions";

export class ReportesDescargaArchivosSolicitadosWorkflow {  
    private page: Page;
    private loguin: LoginWorkflow;
    private navegacionActionsReportes: NavegacionActionsReportes;
    private reportesDescargaArchivosSolicitadosActions: ReportesDescargaArchivosSolicitadosActions;    
        constructor(page: Page) {
            this.page = page;
            this.loguin = new LoginWorkflow(page);
            this.navegacionActionsReportes = new NavegacionActionsReportes(page);
            this.reportesDescargaArchivosSolicitadosActions = new ReportesDescargaArchivosSolicitadosActions(page);
        }

    async visualizarTodoslosArchivos(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar al reporte de Descarga de Archivos Solicitados
        await this.navegacionActionsReportes.clickReporteDescargaArchivosSolicitados();

        //Iteracciones sobre el servicio
        await this.reportesDescargaArchivosSolicitadosActions.clickComboButton();
        await this.reportesDescargaArchivosSolicitadosActions.clickComboItemTodos();
        await this.reportesDescargaArchivosSolicitadosActions.clickRadioLastWeek();
        await this.reportesDescargaArchivosSolicitadosActions.clickBotonBuscar();
    }
}