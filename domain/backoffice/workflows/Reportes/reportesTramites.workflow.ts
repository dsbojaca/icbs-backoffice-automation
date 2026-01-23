import { Page, expect } from "@playwright/test";
import { LoginWorkflow } from "../login.workflow";
import { NavegacionActionsReportes } from "../../actions/Navegacion/navegacionReportes.actions";
import { ReportesTramitesActions } from "../../actions/Reportes/reportestramites.actions";

export class ReportesTramitesWorkflow {
    private page: Page;
    private loguin: LoginWorkflow;
    private reportesTramitesActions: ReportesTramitesActions;
    private navegacionActionsReportes: NavegacionActionsReportes;

    constructor(page: Page) {
        this.page = page;
        this.loguin = new LoginWorkflow(page);
        this.reportesTramitesActions = new ReportesTramitesActions(page);
        this.navegacionActionsReportes = new NavegacionActionsReportes(page);
    }

    async execute(username?: string, password?: string) {

       // Realizar login
       await this.loguin.execute(username, password);

       // Navegar al reporte de trámites
       await this.navegacionActionsReportes.clickReporteTramites();

       //Iteracciones sobre el servicio
        await this.reportesTramitesActions.clickPrimerIconoTabla();
        await this.reportesTramitesActions.clickprimerSubIconoTabla();
        await this.reportesTramitesActions.clickCerrarModal();


    }


}


